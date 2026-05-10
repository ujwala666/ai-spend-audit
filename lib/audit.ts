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
  reason: string;
}

export function generateAudit(data: AuditInput): AuditResult {
  let recommendation = "Your setup looks optimized";
  let savings = 0;
  let reason = "Your current plan fits your usage.";

  if (
    data.tool === "ChatGPT" &&
    data.plan.toLowerCase() === "enterprise" &&
    data.teamSize <= 5
  ) {
    recommendation = "Downgrade to ChatGPT Team";
    savings = data.monthlySpend - 60;
    reason =
      "Enterprise pricing is usually unnecessary for teams under 5 users.";
  }

  else if (
    data.tool === "Claude" &&
    data.monthlySpend > 100
  ) {
    recommendation = "Switch to Claude Team";
    savings = 40;
    reason =
      "Claude Team provides similar collaboration features at lower cost.";
  }

  else if (
    data.tool === "Cursor" &&
    data.teamSize <= 3
  ) {
    recommendation = "Use Cursor Pro instead of Business";
    savings = 20;
    reason =
      "Business plans are generally better suited for larger engineering teams.";
  }

  else if (
    data.tool === "GitHub Copilot" &&
    data.useCase === "Writing"
  ) {
    recommendation = "Consider ChatGPT Plus";
    savings = 10;
    reason =
      "Copilot is optimized for coding rather than writing workflows.";
  }

  return {
    recommendation,
    savings,
    reason,
  };
}