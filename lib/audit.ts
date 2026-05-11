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

  const spend = Number(data.monthlySpend);

  let savings = 0;

  if (spend > 100) {
    savings = spend * 0.25;
  }

  return {

    recommendation:
      savings > 0
        ? "Reduce unused seats and downgrade plans."
        : "Your setup looks optimized",

    savings: Math.round(savings),

    annualSavings: Math.round(savings * 12),

    reason:
      savings > 0
        ? "Your spending is high compared to your team usage."
        : "Your current plan fits your usage.",

    score:
      savings > 0
        ? 72
        : 92,

    risk:
      savings > 0
        ? "Medium"
        : "Low",
  };
}