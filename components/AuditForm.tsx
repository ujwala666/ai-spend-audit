"use client";

import { useState, useEffect } from "react";
import { generateAudit } from "@/lib/audit";
import SavingsChart from "@/components/SavingsChart";

export default function AuditForm() {

  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [seats, setSeats] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [useCase, setUseCase] = useState("");

  const [result, setResult] = useState<any>(null);

  useEffect(() => {

    const savedData = localStorage.getItem("audit-form");

    if (savedData) {

      const data = JSON.parse(savedData);

      setTool(data.tool || "");
      setPlan(data.plan || "");
      setMonthlySpend(data.monthlySpend || "");
      setSeats(data.seats || "");
      setTeamSize(data.teamSize || "");
      setUseCase(data.useCase || "");
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "audit-form",

      JSON.stringify({
        tool,
        plan,
        monthlySpend,
        seats,
        teamSize,
        useCase,
      })
    );

  }, [tool, plan, monthlySpend, seats, teamSize, useCase]);

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    const auditResult = generateAudit({
      tool,
      plan,
      monthlySpend: Number(monthlySpend),
      seats: Number(seats),
      teamSize: Number(teamSize),
      useCase,
    });

    setResult(auditResult);
  };

  return (

    <div className="w-full max-w-4xl">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-2xl w-full space-y-6"
      >

        <div>
          <label className="block mb-2 font-semibold">
            AI Tool
          </label>

          <select
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="w-full p-3 rounded-xl bg-black border border-zinc-700"
            required
          >
            <option value="">Select Tool</option>

            <option>ChatGPT</option>

            <option>Claude</option>

            <option>Cursor</option>

            <option>GitHub Copilot</option>

            <option>Gemini</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Plan
          </label>

          <input
            type="text"
            placeholder="Pro / Team / Enterprise"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full p-3 rounded-xl bg-black border border-zinc-700"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Monthly Spend ($)
          </label>

          <input
            type="number"
            placeholder="100"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(e.target.value)}
            className="w-full p-3 rounded-xl bg-black border border-zinc-700"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Number of Seats
          </label>

          <input
            type="number"
            placeholder="5"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            className="w-full p-3 rounded-xl bg-black border border-zinc-700"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Team Size
          </label>

          <input
            type="number"
            placeholder="10"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="w-full p-3 rounded-xl bg-black border border-zinc-700"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Primary Use Case
          </label>

          <select
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="w-full p-3 rounded-xl bg-black border border-zinc-700"
            required
          >
            <option value="">Select Use Case</option>

            <option>Coding</option>

            <option>Writing</option>

            <option>Research</option>

            <option>Data Analysis</option>

            <option>Mixed</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-xl font-bold hover:scale-[1.02] transition"
        >
          Generate Audit
        </button>

      </form>

      {result && (

        <div className="mt-10 space-y-6">

          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-black border border-zinc-700 rounded-2xl p-6">

              <p className="text-zinc-400 text-sm mb-2">
                Monthly Savings
              </p>

              <h2 className="text-3xl font-bold text-green-400">
                ${result.savings}
              </h2>

            </div>

            <div className="bg-black border border-zinc-700 rounded-2xl p-6">

              <p className="text-zinc-400 text-sm mb-2">
                Annual Savings
              </p>

              <h2 className="text-3xl font-bold text-blue-400">
                ${result.annualSavings}
              </h2>

            </div>

            <div className="bg-black border border-zinc-700 rounded-2xl p-6">

              <p className="text-zinc-400 text-sm mb-2">
                Optimization Score
              </p>

              <h2 className="text-3xl font-bold text-yellow-400">
                {result.score}/100
              </h2>

            </div>

          </div>

          <div className="bg-black border border-zinc-700 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Audit Recommendation
            </h2>

            <div className="space-y-4">

              <div>

                <p className="text-zinc-400 text-sm mb-1">
                  Recommendation
                </p>

                <p className="text-xl font-semibold">
                  {result.recommendation}
                </p>

              </div>

              <div>

                <p className="text-zinc-400 text-sm mb-1">
                  Risk Level
                </p>

                <p className="text-lg">
                  {result.risk}
                </p>

              </div>

              <div>

                <p className="text-zinc-400 text-sm mb-1">
                  Analysis
                </p>

                <p className="text-zinc-300">
                  {result.reason}
                </p>

              </div>

              <button
                className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                onClick={() => window.print()}
              >
                Download Report
              </button>

            </div>

          </div>

          <SavingsChart
            monthly={result.savings}
            annual={result.annualSavings}
          />

        </div>

      )}

    </div>
  );
}