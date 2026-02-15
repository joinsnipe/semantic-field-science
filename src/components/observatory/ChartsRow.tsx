'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceArea,
  ReferenceLine,
  Cell,
  Tooltip as RechartsTooltip,
} from 'recharts';
import {
  AreaChart,
  Area,
  Legend,
} from 'recharts';
import { phaseTrajectory, currentPhasePoint, probabilityTimeline } from '@/lib/observatory-data';

// Phase space tooltip
function PhaseTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: { d: number; v: number; month?: string } }> }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#1c1c28] border border-obs-border rounded px-2 py-1.5 text-[10px] font-mono">
        {data.month && <p className="text-obs-text-secondary/60 mb-0.5">{data.month}</p>}
        <p className="text-white">D={data.d.toFixed(2)} · V={data.v.toFixed(2)}</p>
      </div>
    );
  }
  return null;
}

// Probability tooltip
function ProbTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1c1c28] border border-obs-border rounded px-2 py-1.5 text-[10px] font-mono">
        <p className="text-obs-text-secondary/60 mb-0.5">{label}</p>
        {payload.map((entry, idx) => (
          <p key={idx} style={{ color: entry.color }}>{entry.name}: {entry.value}%</p>
        ))}
      </div>
    );
  }
  return null;
}

const trajectoryLine = phaseTrajectory.map((p) => ({
  d: p.d, v: p.v, month: p.month, label: p.label,
}));

export default function ChartsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-8 px-6 border-t border-obs-border">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Phase Space Chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-obs-card/40 border border-obs-border rounded-lg p-4"
        >
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-xs font-semibold text-white">Espacio de fase</h2>
            <span className="text-[9px] font-mono text-obs-text-secondary/30">D(t) vs V(t)</span>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <ScatterChart margin={{ top: 10, right: 10, bottom: 25, left: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(168, 218, 220, 0.04)" />
              <XAxis
                type="number" dataKey="d" domain={[0, 1]}
                ticks={[0, 0.25, 0.5, 0.75, 1]}
                tick={{ fill: '#a8dadc', fontSize: 9, fontFamily: 'JetBrains Mono' }}
                label={{ value: 'D(t)', position: 'bottom', offset: 8, fill: '#a8dadc', fontSize: 9, fontFamily: 'JetBrains Mono' }}
              />
              <YAxis
                type="number" dataKey="v" domain={[0, 0.5]}
                ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5]}
                tick={{ fill: '#a8dadc', fontSize: 9, fontFamily: 'JetBrains Mono' }}
              />

              {/* Quadrants */}
              <ReferenceArea x1={0.5} x2={1} y1={0.25} y2={0.5}
                fill="rgba(230, 57, 70, 0.05)" stroke="rgba(230, 57, 70, 0.12)" strokeDasharray="3 3"
                label={{ value: 'RUPTURA', position: 'center', fill: 'rgba(230, 57, 70, 0.3)', fontSize: 9, fontFamily: 'JetBrains Mono' }}
              />
              <ReferenceArea x1={0} x2={0.5} y1={0} y2={0.25}
                fill="rgba(42, 157, 143, 0.03)" stroke="none"
                label={{ value: 'COMPRESIÓN', position: 'center', fill: 'rgba(42, 157, 143, 0.25)', fontSize: 8, fontFamily: 'JetBrains Mono' }}
              />

              <ReferenceLine x={0.5} stroke="rgba(168, 218, 220, 0.06)" />
              <ReferenceLine y={0.25} stroke="rgba(168, 218, 220, 0.06)" />

              <RechartsTooltip content={<PhaseTooltip />} />

              <Scatter data={trajectoryLine} line={{ stroke: 'rgba(168, 218, 220, 0.4)', strokeWidth: 1.5 }} lineType="joint" shape="circle">
                {trajectoryLine.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={idx === trajectoryLine.length - 1 ? '#ffffff' : 'rgba(168, 218, 220, 0.5)'}
                    r={idx === trajectoryLine.length - 1 ? 6 : 3}
                    stroke={idx === trajectoryLine.length - 1 ? '#e63946' : 'none'}
                    strokeWidth={idx === trajectoryLine.length - 1 ? 2 : 0}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>

          <div className="flex items-center gap-4 mt-2 px-1 text-[9px] font-mono text-obs-text-secondary/30">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-white border border-obs-red" />
              <span>Actual (D={currentPhasePoint.d}, V={currentPhasePoint.v})</span>
            </div>
          </div>
        </motion.div>

        {/* Probability Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-obs-card/40 border border-obs-border rounded-lg p-4"
        >
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-xs font-semibold text-white">Distribución temporal</h2>
            <span className="text-[9px] font-mono text-obs-text-secondary/30">MC n=10k</span>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={probabilityTimeline} margin={{ top: 10, right: 10, bottom: 25, left: 5 }}>
              <defs>
                <linearGradient id="gradS2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e63946" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#e63946" stopOpacity={0.01} />
                </linearGradient>
                <linearGradient id="gradS3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#457b9d" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#457b9d" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(168, 218, 220, 0.04)" />
              <XAxis
                dataKey="label"
                tick={{ fill: '#a8dadc', fontSize: 9, fontFamily: 'JetBrains Mono' }}
                label={{ value: 'Horizonte', position: 'bottom', offset: 8, fill: '#a8dadc', fontSize: 9, fontFamily: 'JetBrains Mono' }}
              />
              <YAxis
                domain={[0, 100]} ticks={[0, 25, 50, 75, 100]}
                tick={{ fill: '#a8dadc', fontSize: 9, fontFamily: 'JetBrains Mono' }}
                tickFormatter={(v) => `${v}%`}
              />
              <ReferenceLine x="3m" stroke="rgba(230, 57, 70, 0.4)" strokeWidth={1} strokeDasharray="6 3"
                label={{ value: 'T_med', position: 'top', fill: 'rgba(230, 57, 70, 0.5)', fontSize: 8, fontFamily: 'JetBrains Mono' }}
              />
              <ReferenceLine y={50} stroke="rgba(168, 218, 220, 0.08)" strokeDasharray="3 3" />
              <RechartsTooltip content={<ProbTooltip />} />
              <Legend verticalAlign="top" height={24} iconType="line"
                formatter={(value: string) => <span className="text-[9px] font-mono text-obs-text-secondary/50">{value}</span>}
              />
              <Area type="monotone" dataKey="pS2Plus" name="P(S2+)" stroke="#e63946" strokeWidth={1.5} fill="url(#gradS2)"
                dot={{ fill: '#e63946', r: 2.5, stroke: '#e63946' }}
                activeDot={{ r: 4, stroke: '#e63946', strokeWidth: 1, fill: '#0a0a0f' }}
              />
              <Area type="monotone" dataKey="pS3Plus" name="P(S3+)" stroke="#457b9d" strokeWidth={1.5} fill="url(#gradS3)"
                dot={{ fill: '#457b9d', r: 2.5, stroke: '#457b9d' }}
                activeDot={{ r: 4, stroke: '#457b9d', strokeWidth: 1, fill: '#0a0a0f' }}
              />
            </AreaChart>
          </ResponsiveContainer>

          {/* Summary stats */}
          <div className="grid grid-cols-4 gap-2 mt-3 pt-3 border-t border-obs-border/50">
            {[
              { v: '73.9%', l: 'S2+ 3m', c: 'text-obs-red/70' },
              { v: '52.8%', l: 'S3+ 3m', c: 'text-obs-blue/70' },
              { v: '62.7%', l: 'S2+ 12m', c: 'text-obs-red/70' },
              { v: '50.1%', l: 'S3+ 12m', c: 'text-obs-blue/70' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className={`font-mono text-xs font-semibold ${s.c}`}>{s.v}</div>
                <div className="text-[8px] text-obs-text-secondary/25 font-mono">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
