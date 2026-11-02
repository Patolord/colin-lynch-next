import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { releases } from "@/data/site";

export default function Music() {
  return (
    <section id="music" className="section">
      <div className="music-bg">
        <SectionHeading title="music" />
        <div className="grid">
          {releases.map((r) => (
            <div key={r.title} className="music-block music-block--static">
              <Image
                src={r.cover}
                alt={`${r.title} cover art`}
                width={r.width}
                height={r.height}
                sizes="(max-width: 767px) 90vw, 300px"
                className="cover"
              />
              <p className="b1">{r.title}</p>
              <a href={r.href} target="_blank" rel="noopener noreferrer" className="link">
                <p className="subtitle">Listen</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
