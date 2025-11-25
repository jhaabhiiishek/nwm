"use client";

import React, { FC } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ChevronDown } from "lucide-react";

// safe data type that satisfies Recharts
type PieDatum = {
  name: string;
  value: number;
  [key: string]: unknown;
};

interface TooltipItem {
  name: string;
  value: number;
}

const data: PieDatum[] = [
  { name: "Clara Jensen", value: 30 },
  { name: "Sophie Langley", value: 45 },
  { name: "Ethan", value: 25 },
  { name: "Luca Moretti", value: 20 },
  { name: "Ayra Voss", value: 35 },
];

const COLORS = ["#FFA63A", "#FF7A2E", "#FF5C00", "#FFD2A0", "#FFE6CC"];

const TopArtists: FC = () => {
  return (
    <div className="my-4 w-[97%] mx-auto">
      {/* BAR */}
      <div className="w-full bg-white p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Top Artists</h2>
          <button className="flex items-center gap-1 px-3 py-2 border border-[#E7E7E7] rounded-xl text-md font-semibold leading-[120%]">
            December <ChevronDown size={16} />
          </button>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
            >
              <defs>
                <linearGradient id="orangeBar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFA63A" />
                  <stop offset="100%" stopColor="#FF5C00" />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="#F3F3F3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (!active || !payload||payload.length) return null;
				  const item: TooltipItem = {
					name: payload[0].name ?? "",
					value: typeof payload[0].value === "number" ? payload[0].value : 0,
				 };
                  return (
                    <div className="bg-black text-white text-xs px-2 py-1 rounded-md">
                      <div className="font-medium">Appointments</div>
                      <div className="text-center">{item.value}</div>
                    </div>
                  );
                }}
              />
              <Bar dataKey="value" fill="url(#orangeBar)" radius={[20, 20, 20, 20]} maxBarSize={60} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* PIE */}
      <div className="mx-auto my-4 bg-white p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Top Artists</h2>
          <button className="flex items-center gap-1 px-3 py-2 border border-[#E7E7E7] rounded-xl text-md font-semibold leading-[120%]">
            December <ChevronDown size={16} />
          </button>
        </div>

        <div className="h-72 w-full flex justify-center">
          <ResponsiveContainer width="80%" height="100%">
            <PieChart>
              <Tooltip
                content={({ active, payload }) =>
                  active && payload ? (
                    <div className="bg-black text-white text-xs px-2 py-1 rounded-md">
                      {payload[0].name}: {payload[0].value}
                    </div>
                  ) : null
                }
              />

              <Pie data={data} dataKey="value" nameKey="name" outerRadius="90%" innerRadius="45%" paddingAngle={1}>
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
          {data.map((a) => (
            <span key={a.name}>
              {a.name} ({a.value})
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
