import SectionHeading from "./SectionHeading";
import { videos } from "@/data/site";

export default function Video() {
  return (
    <section id="video" className="section section--video">
      <SectionHeading title="video" tone="white" />
      <div className="grid">
        {videos.map((v) => (
          <div key={v.youtubeId} className="music-block">
            <div className="youtube-embed">
              <iframe
                src={`https://www.youtube.com/embed/${v.youtubeId}?rel=0&controls=0&autoplay=0&mute=0&start=0`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={v.iframeTitle}
                loading="lazy"
              />
            </div>
            <a href={v.href} target="_blank" rel="noopener noreferrer" className="link">
              <p className="b1">{v.title}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
