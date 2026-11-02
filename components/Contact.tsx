import { contacts } from "@/data/site";

type Props = { asSection?: boolean };

export default function Contact({ asSection = true }: Props) {
  const card = (
    <div className="grid grid--left">
      <div className="contact-card">
        <div className="contact-heading">
          <span className="heading-line heading-line--short" aria-hidden="true" />
          <h2 className="contact-title">contact</h2>
          <span className="heading-line heading-line--short" aria-hidden="true" />
        </div>
        <div className="contact-rows">
          {contacts.map((c) => (
            <div key={c.label} className="contact-row">
              <div className="contact-label">
                <p className="h3">{c.label}</p>
              </div>
              <div className="contact-emails">
                {c.emails.map((e) => (
                  <a
                    key={e.address}
                    href={`mailto:${e.address}?subject=${encodeURIComponent(e.subject)}`}
                    className="link"
                  >
                    <p className="h3">{e.address}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (!asSection) return card;
  return (
    <section id="contact" className="section section--contact">
      {card}
    </section>
  );
}
