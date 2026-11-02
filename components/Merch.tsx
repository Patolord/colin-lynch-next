import SectionHeading from "./SectionHeading";
import ShopifyProduct from "./ShopifyProduct";
import { shopify } from "@/data/site";

export default function Merch() {
  return (
    <section id="merch" className="merch">
      <SectionHeading title="merch" tone="white" />
      <div className="merch-grid">
        {shopify.products.map((p) => (
          <ShopifyProduct key={p.id} productId={p.id} layout={p.layout} name={p.name} />
        ))}
      </div>
    </section>
  );
}
