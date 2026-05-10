export interface AuditInput {
  tool: string;
  plan: string;
  monthlySpend: number;
  seats: number;
  teamSize: number;
  useCase: string;
}

export interface AuditResult {
  recommendation: string;
  savings: number;
  annualSavings: number;
  reason: string;
  score: number;
  risk: string;
}

export function generateAudit(data: AuditInput): AuditResult {
  let recommendation = "Your setup looks optimized";
  let savings = 0;
  let reason = "Your current plan fits your usage.";
  let score = 92;
  let risk = "Low";

  if (
    data.tool === "ChatGPT" &&
    data.plan.toLowerCase().includes("enterprise") &&
    data.teamSize <= 5
  ) {
    recommendation = "Downgrade to ChatGPT Team";

    savings = Math.max(data.monthlySpend - 60, 0);

    reason =
      "Enterprise pricing is unnecessary for smaller teams.";

    score = 45;
    risk = "High";
  }

  else if (
    data.tool === "Claude" &&
    data.monthlySpend > 100
  ) {
    recommendation = "Switch to Claude Team";

    savings = 40;

    reason =
      "Claude Team offers similar collaboration features at lower cost.";

    score = 60;
    risk = "Medium";
  }

  else if (
    data.tool === "Cursor" &&
    data.teamSize <= 3
  ) {
    recommendation = "Use Cursor Pro instead of Business";

    savings = 20;

    reason =
      "Business plans are usually better for larger engineering teams.";

    score = 70;
    risk = "Medium";
  }

  else if (
    data.tool === "GitHub Copilot" &&
    data.useCase === "Writing"
  ) {
    recommendation = "Consider ChatGPT Plus";

    savings = 10;

    reason =
      "Copilot is optimized for coding rather than writing workflows.";

    score = 75;
    risk = "Low";
  }

  return {
    recommendation,
    savings,
    annualSavings: savings * 12,
    reason,
    score,
    risk,
  };
}