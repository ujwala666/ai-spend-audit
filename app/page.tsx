import AuditForm from "@/components/AuditForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center mb-4">
        AI Spend Audit
      </h1>

      <p className="text-zinc-400 text-lg text-center max-w-2xl mb-12">
        Discover where your startup is overspending on AI tools and find smarter, cheaper alternatives instantly.
      </p>

      <AuditForm />
    </main>
  );
}