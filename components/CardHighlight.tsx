type CardHighlightProps = {
  text: string;
  className?: string;
};

export function CardHighlight({ text, className = "" }: CardHighlightProps) {
  const parts = text.split(" → ");
  const hasSplit = parts.length >= 2;
  const action = parts[0];
  const result = parts.slice(1).join(" → ");
  const hasExplicitSize = /\btext-(xs|sm|base|lg|xl|2xl)\b/.test(className);

  return (
    <p
      className={`rounded-r-lg border-l-2 border-accent bg-accent/5 py-2.5 pr-3 pl-3.5 leading-snug ${hasExplicitSize ? "" : "text-sm"} ${className}`.trim()}
    >
      {hasSplit ? (
        <>
          <span className="font-medium text-foreground">{action}</span>
          <span className="text-foreground-muted"> → {result}</span>
        </>
      ) : (
        <span className="font-medium text-foreground">{text}</span>
      )}
    </p>
  );
}
