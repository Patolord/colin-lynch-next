type Props = { title: string; tone?: "white" | "brown" };

export default function SectionHeading({ title, tone = "brown" }: Props) {
  const line = `heading-line${tone === "white" ? " heading-line--white" : ""}`;
  return (
    <div className="heading-row">
      <span className={line} aria-hidden="true" />
      <h2 className={`h1${tone === "brown" ? " h1--brown" : ""}`}>{title}</h2>
      <span className={line} aria-hidden="true" />
    </div>
  );
}
