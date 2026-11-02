import Link from "next/link";
import { navItems } from "@/data/site";

type Props = { className?: string; items?: typeof navItems };

export default function NavLinks({ className = "", items = navItems }: Props) {
  return (
    <div className={`nav-links ${className}`.trim()}>
      {items.map((item) => (
        <Link key={item.label} href={item.href} className="nav-link">
          <div className="nav-item">
            <p className="nav-text">{item.label}</p>
            <div className="nav-line" />
          </div>
        </Link>
      ))}
    </div>
  );
}
