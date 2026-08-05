type ArchitectureDiagramProps = {
  steps: string[];
};

export function ArchitectureDiagram({ steps }: ArchitectureDiagramProps) {
  return (
    <ol className="mx-auto flex max-w-md flex-col items-stretch gap-0">
      {steps.map((step, index) => (
        <li key={`${step}-${index}`} className="flex flex-col items-center">
          <div className="w-full rounded-lg border border-border bg-white px-4 py-3 text-center text-sm font-medium text-foreground shadow-sm">
            {step}
          </div>
          {index < steps.length - 1 ? (
            <div
              className="flex h-8 items-center justify-center text-foreground-muted"
              aria-hidden
            >
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                <path
                  d="M8 2v16M8 18l-4-4M8 18l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
