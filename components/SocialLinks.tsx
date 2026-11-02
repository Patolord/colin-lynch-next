import { socialLinks, heroSocialOrder } from "@/data/site";

type Props = { variant: "hero" | "nav" };

export default function SocialLinks({ variant }: Props) {
  const links =
    variant === "hero"
      ? heroSocialOrder.map((name) => socialLinks.find((s) => s.name === name)!)
      : socialLinks;

  return (
    <div className={`social social--${variant}`}>
      {links.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          aria-label={s.name}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="social-icon"
            src={variant === "hero" ? s.heroIcon : s.navIcon}
            alt=""
            width={20}
            height={20}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}
