"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import { siteName } from "@/data/site";

type Props = {
  /** When true the nav stays hidden until the user scrolls past the hero. */
  revealOnScroll?: boolean;
};

export default function SiteNav({ revealOnScroll = false }: Props) {
  const [visible, setVisible] = useState(!revealOnScroll);

  useEffect(() => {
    if (!revealOnScroll) return;
    const update = () => setVisible(window.scrollY > 120);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [revealOnScroll]);

  return (
    <nav className={`site-nav${visible ? "" : " site-nav--hidden"}`} aria-label="Primary">
      <NavLinks className="nav-links--desktop" />
      <Link href="/" className="link">
        <p className="site-nav-logo">{siteName}</p>
      </Link>
      <NavLinks className="nav-links--mobile" />
      <SocialLinks variant="nav" />
    </nav>
  );
}
