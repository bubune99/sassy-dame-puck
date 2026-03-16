export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-lg px-4">
        <div className="h-16 w-16 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl mx-auto">
          P
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Puck Page Builder</h1>
        <p className="text-muted-foreground text-lg">
          Visual page builder with drag-and-drop components and media management.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/admin"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Go to Admin
          </a>
        </div>
      </div>
    </div>
  );
}
