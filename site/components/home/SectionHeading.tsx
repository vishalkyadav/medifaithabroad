type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="type-eyebrow text-brand-gold">{eyebrow}</p>
      )}
      <h2 id={id} className="type-display-2 mt-2 text-brand-heading">
        {title}
      </h2>
      {description && (
        <p className="type-body-lg mt-4 text-brand-text-muted">{description}</p>
      )}
    </div>
  );
}
