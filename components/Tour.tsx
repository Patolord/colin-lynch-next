import Script from "next/script";
import SectionHeading from "./SectionHeading";
import { bandsintown } from "@/data/site";

export default function Tour() {
  return (
    <section id="tour" className="section section--tour">
      <SectionHeading title="tour" />
      <div>
        <a
          className="bit-widget-initializer"
          data-artist-name={bandsintown.artistName}
          data-app-id={bandsintown.appId}
        />
        <Script src="https://widgetv3.bandsintown.com/main.min.js" strategy="afterInteractive" />
      </div>
    </section>
  );
}
