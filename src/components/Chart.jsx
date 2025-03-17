import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Chart Component
const Chart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip
        contentStyle={{ backgroundColor: "#333", color: "#fff", borderRadius: "8px" }}
        labelStyle={{ color: "#fff" }}
      />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        strokeWidth={3}
        dot={{ stroke: "#8884d8", strokeWidth: 2, r: 5 }}
        activeDot={{ r: 8 }}
        animationDuration={800}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
