export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-border px-2 py-1 font-mono text-xs text-foreground-muted">
      {children}
    </span>
  );
}
