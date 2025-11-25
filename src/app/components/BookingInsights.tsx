"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";

// ---------------------------
// 1. Type Definitions
// ---------------------------
interface DataPoint {
  date: string;   // e.g. "Dec 02"
  value: number;  // y-value
}

// Recharts Tooltip Payload Structure
interface RechartsPayload {
  value: number; // The 'value' from the data point
  dataKey: string;
  payload: DataPoint; // The original data object
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: RechartsPayload[];
  label?: string; // Tooltip label (the date)
}

// Custom interface for the state object passed by Recharts onMouseMove
interface ChartState {
  isTooltipActive?: boolean;
  activeLabel?: string; // The dataKey (date) of the hovered point
  // Correctly typing activePayload as an array of RechartsPayload objects
  activePayload?: RechartsPayload[]; 
  activeCoordinate?: { x: number; y: number };
}

// ---------------------------
// 2. Sample Data
// ---------------------------
const weeklyData: DataPoint[] = [
  { date: "Dec 01", value: 10 },
  { date: "Dec 02", value: 5 },
  { date: "Dec 03", value: 17 },
  { date: "Dec 04", value: 15 },
  { date: "Dec 05", value: 18 },
  { date: "Dec 06", value: 8 },
  { date: "Dec 07", value: 22 },
];

// ---------------------------
// 3. Custom Tooltip Component
// ---------------------------
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="bg-gray-800 text-white text-xs rounded-lg p-2 shadow-xl border border-gray-700">
      <p className="font-semibold text-gray-400 mb-0.5">{label}</p>
      {/* Accessing the value from the payload array */}
      <p className="font-medium">Bookings: {payload[0].value}</p>
    </div>
  );
};

// ---------------------------
// 4. Main Component
// ---------------------------
const BookingInsights: React.FC = () => {
  // State to hold the date of the currently hovered data point
  const [activeDate, setActiveDate] = useState<string | null>(null);

  /**
   * Updates the activeDate state when the mouse hovers over a data point in the chart.
   * Uses the strictly typed ChartState interface.
   */
  const handleMouseMove = (state: ChartState) => {
    // We only update the date if the tooltip is active and a label (date) is present
    if (state.isTooltipActive && state.activeLabel) {
      setActiveDate(state.activeLabel);
    } else {
      setActiveDate(null); 
    }
  };

  return (
    <div className="w-full mx-auto mt-4 max-w-4xl bg-background p-3 rounded-2xl ">
      {/* Header */}
      <div className="flex justify-between items-center m-3 mx-2">
        <h2 className="text-xl font-semibold text-gray-800">Booking Insights </h2>

        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
          December <ChevronDown size={16} />
        </button>
      </div>

      {/* Chart Container */}
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={weeklyData} 
            margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
            onMouseMove={handleMouseMove} 
            onMouseLeave={() => setActiveDate(null)} 
          >
            {/* Horizontal Grid Lines */}
            <CartesianGrid stroke="#E0E0E0" vertical={false} strokeDasharray="3 3" />

            <XAxis
              dataKey="date"
              tick={{ fill: "#666", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              padding={{ left: 20, right: 20 }}
            />

            <YAxis
              tick={{ fill: "#666", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 30]}
            />

            {/* Dynamic Vertical Line (ReferenceLine) */}
            {activeDate && (
              <ReferenceLine
                x={activeDate} // Dynamically set to the hovered date
                stroke="#F46425" 
                strokeDasharray="5 5"
                strokeWidth={1.5}
              />
            )}
            
            {/* Custom tooltip */}
            <Tooltip 
                content={<CustomTooltip />} 
                cursor={false} 
            />

            {/* Main Curve Line */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#F46425"
              strokeWidth={3}
              dot={false}
              // Active dot styling, which appears when the mouse is over a data point
              activeDot={{
                r: 7,
                strokeWidth: 4,
                stroke: "#F46425",
                fill: "white",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BookingInsights;