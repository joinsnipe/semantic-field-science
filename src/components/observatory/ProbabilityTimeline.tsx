'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip as RechartsTooltip,
  Legend,
} from 'recharts';
import { probabilityTimeline } from '@/lib/observatory-data';

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1c1c28] border border-obs-border rounded-lg px-4 py-3 text-xs font-mono">
        <p className="text-obs-text-secondary mb-2 font-bold">Horizonte: {label}</p>
        {payload.map((entry, idx) => (
          <p key={idx} style={{ color: entry.color }} className="mb-0.5">
            {entry.name}: {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export default function ProbabilityTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 px-4 section-divider">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Distribución temporal de riesgo
            <span className="text-obs-text-secondary font-normal text-lg ml-3">
              · Monte Carlo n=10.000
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-obs-text-secondary/60 text-sm mb-10"
        >
          Probabilidad acumulada de alcanzar crisis (S2+) y colapso visible (S3+) por horizonte temporal.
        </motion.p>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-obs-card border border-obs-border rounded-xl p-4 md:p-6"
        >
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={probabilityTimeline}
              margin={{ top: 20, right: 20, bottom: 20, left: 10 }}
            >
              <defs>
                <linearGradient id="gradientS2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e63946" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#e63946" stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="gradientS3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#457b9d" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#457b9d" stopOpacity={0.02} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(168, 218, 220, 0.06)"
              />
              <XAxis
                dataKey="label"
                tick={{ fill: '#a8dadc', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                label={{
                  value: 'Horizonte temporal',
                  position: 'bottom',
                  offset: 5,
                  fill: '#a8dadc',
                  fontSize: 12,
                  fontFamily: 'JetBrains Mono',
                }}
              />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                tick={{ fill: '#a8dadc', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                tickFormatter={(v) => `${v}%`}
              />

              {/* Median line at 3m */}
              <ReferenceLine
                x="3m"
                stroke="#e63946"
                strokeWidth={2}
                strokeDasharray="8 4"
                label={{
                  value: 'MEDIANA T_med',
                  position: 'top',
                  fill: '#e63946',
                  fontSize: 10,
                  fontFamily: 'JetBrains Mono',
                  fontWeight: 700,
                }}
              />

              {/* 50% threshold */}
              <ReferenceLine
                y={50}
                stroke="rgba(168, 218, 220, 0.15)"
                strokeDasharray="4 4"
                label={{
                  value: '50%',
                  position: 'right',
                  fill: 'rgba(168, 218, 220, 0.3)',
                  fontSize: 10,
                  fontFamily: 'JetBrains Mono',
                }}
              />

              <RechartsTooltip content={<CustomTooltip />} />

              <Legend
                verticalAlign="top"
                height={36}
                iconType="line"
                formatter={(value) => (
                  <span className="text-xs font-mono text-obs-text-secondary">{value}</span>
                )}
              />

              <Area
                type="monotone"
                dataKey="pS2Plus"
                name="P(S2+) Crisis"
                stroke="#e63946"
                strokeWidth={2}
                fill="url(#gradientS2)"
                dot={{ fill: '#e63946', r: 4, stroke: '#e63946' }}
                activeDot={{ r: 6, stroke: '#e63946', strokeWidth: 2, fill: '#0a0a0f' }}
              />
              <Area
                type="monotone"
                dataKey="pS3Plus"
                name="P(S3+) Colapso"
                stroke="#457b9d"
                strokeWidth={2}
                fill="url(#gradientS3)"
                dot={{ fill: '#457b9d', r: 4, stroke: '#457b9d' }}
                activeDot={{ r: 6, stroke: '#457b9d', strokeWidth: 2, fill: '#0a0a0f' }}
              />
            </AreaChart>
          </ResponsiveContainer>

          {/* Bottom stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-4 border-t border-obs-border">
            <div className="text-center">
              <div className="font-mono text-lg font-bold text-obs-red">73.9%</div>
              <div className="text-[10px] text-obs-text-secondary/50 font-mono">P(S2+) a 3m</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-lg font-bold text-obs-blue">52.8%</div>
              <div className="text-[10px] text-obs-text-secondary/50 font-mono">P(S3+) a 3m</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-lg font-bold text-obs-red">62.7%</div>
              <div className="text-[10px] text-obs-text-secondary/50 font-mono">P(S2+) a 12m</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-lg font-bold text-obs-blue">50.1%</div>
              <div className="text-[10px] text-obs-text-secondary/50 font-mono">P(S3+) a 12m</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
