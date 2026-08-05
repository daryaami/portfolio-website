type BadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "accent" | "success";
};

const tones = {
  default: "bg-background-secondary text-foreground-muted border-border",
  accent: "bg-accent/10 text-accent border-accent/20",
  success: "bg-success/10 text-success border-success/20",
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
