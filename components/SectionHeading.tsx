type Props = { title: string; tone?: "white" | "brown" };

export default function SectionHeading({ title, tone = "brown" }: Props) {
  const line = `heading-line${tone === "white" ? " heading-line--white" : ""}`;
  return (
    <div className="heading-row">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={line} src={`/icons/line-${tone}.svg`} alt="" width={200} height={2} />
      <h2 className={`h1${tone === "brown" ? " h1--brown" : ""}`}>{title}</h2>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={line} src={`/icons/line-${tone}.svg`} alt="" width={200} height={2} />
    </div>
  );
}
