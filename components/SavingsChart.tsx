"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  monthly: number;
  annual: number;
}

export default function SavingsChart({
  monthly,
  annual,
}: Props) {

  const data = [
    {
      name: "Monthly",
      savings: monthly,
    },
    {
      name: "Annual",
      savings: annual,
    },
  ];

  return (
    <div className="bg-black border border-zinc-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Savings Analytics
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="savings"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}