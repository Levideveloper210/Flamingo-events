
type Props = { eyebrow?: string; title: string; description?: string; centered?: boolean; light?: boolean; };
export default function SectionHeading({ eyebrow, title, description, centered = true, light = false }: Props) {
  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-3xl mb-12 lg:mb-16`}>
      {eyebrow && <div className={`text-[11px] tracking-[0.3em] uppercase font-semibold mb-4 ${light ? "text-flamingo-blushDeep" : "text-flamingo-royal"}`}>{eyebrow}</div>}
      <h2 className={`font-serif text-3xl lg:text-5xl font-medium leading-tight ${light ? "text-white" : "text-flamingo-deep"}`}>{title}</h2>
      {description && <p className={`mt-5 text-[15px] leading-relaxed ${light ? "text-white/70" : "text-zinc-600"}`}>{description}</p>}
    </div>
  );
}
