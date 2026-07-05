export default function SectionTitle({ number, title }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="font-mono text-xs font-bold text-accent/60 tracking-wider">{number}</span>
      <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white leading-none">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
    </div>
  );
}
