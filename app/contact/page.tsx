import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import Contact from "@/components/Contact";

export const metadata: Metadata = { title: "Contact — Colin Lynch" };

export default function ContactPage() {
  return (
    <div className="contact-page">
      <main className="section section--contact">
        <SiteNav />
        <Contact asSection={false} />
      </main>
    </div>
  );
}
