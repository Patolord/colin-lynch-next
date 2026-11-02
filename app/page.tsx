import Hero from "@/components/Hero";
import SiteNav from "@/components/SiteNav";
import Merch from "@/components/Merch";
import Tour from "@/components/Tour";
import Music from "@/components/Music";
import Video from "@/components/Video";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SiteNav revealOnScroll />
      <main>
        <div className="sections">
          <Merch />
          <Tour />
          <Music />
        </div>
        <Video />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
