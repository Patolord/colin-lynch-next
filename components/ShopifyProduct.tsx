"use client";

import { useEffect, useRef } from "react";
import { shopify } from "@/data/site";

declare global {
  interface Window {
    ShopifyBuy?: any;
  }
}

const SDK_URL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

let uiPromise: Promise<any> | null = null;

/** Loads the Buy Button SDK once and returns a shared UI instance (one cart for the page). */
function getUI(): Promise<any> {
  if (uiPromise) return uiPromise;
  uiPromise = new Promise<void>((resolve, reject) => {
    if (window.ShopifyBuy?.UI) return resolve();
    const script = document.createElement("script");
    script.async = true;
    script.src = SDK_URL;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Shopify Buy Button SDK"));
    document.head.appendChild(script);
  }).then(() => {
    const client = window.ShopifyBuy.buildClient({
      domain: shopify.domain,
      storefrontAccessToken: shopify.storefrontAccessToken,
    });
    return window.ShopifyBuy.UI.onReady(client);
  });
  return uiPromise;
}

const buttonStyles = {
  color: "#1f3447",
  ":hover": { color: "#1f3447", "background-color": "#d3e0ea" },
  "background-color": "#eaf0f5",
  ":focus": { "background-color": "#d3e0ea" },
};

const modalProduct = {
  contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true },
  styles: {
    product: {
      "@media (min-width: 601px)": { "max-width": "100%", "margin-left": "0px", "margin-bottom": "0px" },
    },
    button: buttonStyles,
    title: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "bold", "font-size": "26px", color: "#27405a" },
    price: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "normal", "font-size": "18px", color: "#27405a" },
    compareAt: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "normal", "font-size": "15.3px", color: "#27405a" },
    unitPrice: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "normal", "font-size": "15.3px", color: "#27405a" },
    description: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "normal", "font-size": "14px", color: "#27405a" },
  },
  text: { button: "Add to cart" },
};

const cart = {
  styles: { button: buttonStyles },
  text: { total: "Subtotal", button: "Checkout" },
};

const toggle = {
  styles: {
    toggle: {
      "background-color": "#eaf0f5",
      ":hover": { "background-color": "#d3e0ea" },
      ":focus": { "background-color": "#d3e0ea" },
    },
    count: { color: "#1f3447", ":hover": { color: "#1f3447" } },
    iconPath: { fill: "#1f3447" },
  },
};

/** Custom layout: rendered inline (no iframe) and styled by globals.css (.shopify-custom). */
function customOptions(node: HTMLElement) {
  return {
    product: {
      iframe: false,
      layout: "vertical",
      contents: {
        img: false,
        imgWithCarousel: true,
        title: true,
        price: true,
        options: true,
        quantity: true,
        quantityDecrement: true,
        quantityIncrement: true,
        button: true,
        description: true,
      },
      width: "100%",
      text: { button: "Add to cart" },
      events: {
        afterRender: () => {
          // Fallback for browsers without :has(): strip the size guide from the description.
          const desc = node.querySelector(".shopify-buy__product-description");
          if (!desc) return;
          desc.querySelectorAll(".size-guide-title, .table-responsive, table").forEach((bit) => {
            const el = bit.classList.contains("size-guide-title") ? bit.closest("p") || bit : bit;
            el.parentNode?.removeChild(el);
          });
        },
      },
    },
    modalProduct,
    option: {},
    cart,
    toggle,
  };
}

/** Default Shopify layout (iframe) with the site's colours applied. */
const defaultOptions = {
  product: {
    styles: {
      product: {
        "max-width": "380px",
        "margin-left": "auto",
        "margin-right": "auto",
        "margin-bottom": "50px",
        "text-align": "center",
      },
      title: { "font-size": "26px", color: "#eaf0f5" },
      button: buttonStyles,
      price: { "font-size": "18px", color: "#eaf0f5" },
      compareAt: { "font-size": "15.3px", color: "#eaf0f5" },
      unitPrice: { "font-size": "15.3px", color: "#eaf0f5" },
      description: { color: "#eaf0f5" },
    },
    contents: { img: false, imgWithCarousel: true, description: true, quantity: true, button: true },
    text: { button: "Add to cart" },
  },
  productSet: { styles: { products: { "text-align": "center" } } },
  modalProduct,
  option: {},
  cart,
  toggle,
};

type Props = { productId: string; layout: "custom" | "default"; name: string };

export default function ShopifyProduct({ productId, layout, name }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let cancelled = false;
    let component: any;

    getUI()
      .then((ui) =>
        ui.createComponent("product", {
          id: productId,
          node,
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: layout === "custom" ? customOptions(node) : defaultOptions,
        }),
      )
      .then((c) => {
        component = c;
        if (cancelled) c?.destroy?.();
      })
      .catch((err) => console.error(err));

    return () => {
      cancelled = true;
      component?.destroy?.();
      node.innerHTML = "";
    };
  }, [productId, layout]);

  return (
    <div className={`merch-embed${layout === "custom" ? " shopify-custom" : ""}`}>
      <div ref={ref} aria-label={name} />
    </div>
  );
}
