export function SectionNumber({ current, total }: { current: number; total: number }) {
  return (
    <span className="font-mono text-sm text-accent" aria-hidden="true">
      {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
  );
}
