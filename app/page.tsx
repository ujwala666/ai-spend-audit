export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-center">
        AI Spend Audit
      </h1>

      <p className="text-gray-400 text-lg text-center max-w-2xl">
        Discover where your startup is overspending on AI tools and reduce unnecessary costs instantly.
      </p>

      <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
        Start Free Audit
      </button>
    </main>
  );
}