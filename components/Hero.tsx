import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import { siteName, heroNavItems } from "@/data/site";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">{siteName}</h1>
      </div>
      <div className="hero-bottom">
        <NavLinks items={heroNavItems} />
        <SocialLinks variant="hero" />
      </div>
    </header>
  );
}
