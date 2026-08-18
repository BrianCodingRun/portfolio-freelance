export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-primary">Test thème</h1>
      <p className="text-muted-foreground">
        Si tu vois un fond sombre et ce titre en gold, tout fonctionne.
      </p>
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
        Bouton primary
      </button>
    </main>
  );
}
