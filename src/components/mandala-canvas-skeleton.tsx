export function MandalaCanvasSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-border border-t-accent" />
        <p className="text-sm text-muted-foreground">Generating mandala...</p>
      </div>
    </div>
  )
}
