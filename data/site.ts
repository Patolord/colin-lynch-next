export const siteName = "Colin Lynch";

export const navItems = [
  { label: "Merch", href: "/#merch" },
  { label: "Tour", href: "/#tour" },
  { label: "Music", href: "/#music" },
  { label: "Video", href: "/#video" },
  { label: "Contact", href: "/#contact" },
];

/** The hero lists Video before Music, as on the original site. */
export const heroNavItems = [navItems[0], navItems[1], navItems[3], navItems[2], navItems[4]];

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/colinlynchmusic/",
    heroIcon: "/icons/instagram.svg",
    navIcon: "/icons/nav-instagram.svg",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@colinlynchmusic",
    heroIcon: "/icons/tiktok.svg",
    navIcon: "/icons/nav-tiktok.svg",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@colinlynchyt",
    heroIcon: "/icons/youtube.svg",
    navIcon: "/icons/nav-youtube.svg",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/05SVbHynbrctQGdx22K45Z",
    heroIcon: "/icons/spotify.svg",
    navIcon: "/icons/nav-spotify.svg",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/us/artist/colin-lynch/1867829727",
    heroIcon: "/icons/apple.svg",
    navIcon: "/icons/nav-apple.svg",
  },
];

/** Order used in the hero (matches the original site). */
export const heroSocialOrder = ["Instagram", "YouTube", "Spotify", "Apple Music", "TikTok"];

/**
 * Shopify Buy Button config. The storefront access token is a public,
 * read-only token that Shopify intends to be embedded in the browser.
 */
export const shopify = {
  domain: "psagdk-jf.myshopify.com",
  storefrontAccessToken: "d0f8837c621858751eac7499f1b21faa",
  products: [
    { id: "8762589249709", layout: "custom" as const, name: "Colin Lynch T-Shirt" },
    { id: "8762680508589", layout: "custom" as const, name: "Colin Lynch Hoodie" },
    { id: "8653413810349", layout: "default" as const, name: "Miracles Off Exit 17 CD" },
  ],
};

export const bandsintown = {
  artistName: "id_15642488",
  appId: "43c73e497b9361d4e68d97b023cc5a19",
};

export const releases = [
  {
    title: "(new!) IN DUE TIME",
    href: "https://ffm.to/cl-induetime",
    cover: "/images/cover-in-due-time.webp",
    width: 800,
    height: 800,
  },
  {
    title: "Miracles off exit 17 (ep)",
    href: "https://ffm.to/miraclesoffexit17",
    cover: "/images/cover-miracles-off-exit-17.webp",
    width: 800,
    height: 804,
  },
  {
    title: "Beach fire embers",
    href: "https://ffm.to/beachfireembers",
    cover: "/images/cover-beach-fire-embers.webp",
    width: 800,
    height: 801,
  },
  {
    title: "MARY JANE",
    href: "https://ffm.to/colinmaryjane",
    cover: "/images/cover-mary-jane.webp",
    width: 800,
    height: 800,
  },
  {
    title: "4th of July Darlin",
    href: "https://ffm.to/4th-of-july-darlin",
    cover: "/images/cover-4th-of-july-darlin.webp",
    width: 800,
    height: 800,
  },
  {
    title: "aida's smile",
    href: "https://ffm.to/aidas-smile",
    cover: "/images/cover-aidas-smile.webp",
    width: 800,
    height: 800,
  },
];

export const videos = [
  {
    title: "Beach fire embers",
    youtubeId: "-ZR8yYdzmKc",
    iframeTitle: "Colin Lynch - Beach Fire Embers (Official Visualizer)",
    href: "https://youtu.be/oijR8SXez7Y",
  },
  {
    title: "Mary jane",
    youtubeId: "k5TuPezS3Ag",
    iframeTitle: "Colin Lynch - Mary Jane (Official Visualizer)",
    href: "https://youtu.be/oijR8SXez7Y",
  },
  {
    title: "4th of july darlin'",
    youtubeId: "oijR8SXez7Y",
    iframeTitle: "Colin Lynch - 4th of July Darlin' (Official Visualizer)",
    href: "https://www.youtube.com/watch?v=WIBFmrWl0Gg",
  },
  {
    title: "Aida's Smile (Live from Aida's)",
    youtubeId: "WIBFmrWl0Gg",
    iframeTitle: "Aida's Smile (Live from Aida's)",
    href: "https://www.youtube.com/watch?v=WIBFmrWl0Gg",
  },
];

export const contacts = [
  {
    label: "management",
    emails: [
      { address: "broadhighwaymgmt@gmail.com", subject: "Inquiry - Colin Lynch" },
    ],
  },
  {
    label: "bookings",
    emails: [
      { address: "taylor.krebs@unitedtalent.com", subject: "Booking - Colin Lynch" },
      { address: "elisa.vazzana@unitedtalent.com", subject: "Booking - Colin Lynch" },
    ],
  },
];

export const copyright = "© 2026 safelight records llc";
