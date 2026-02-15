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
import { phaseTrajectory, currentPhasePoint } from '@/lib/observatory-data';

// Custom tooltip
function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: { d: number; v: number; month?: string; label?: string } }> }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#1c1c28] border border-obs-border rounded-lg px-3 py-2 text-xs font-mono">
        {data.month && <p className="text-obs-text-secondary mb-1">{data.month}</p>}
        <p className="text-obs-text">D(t) = {data.d.toFixed(2)}</p>
        <p className="text-obs-text">V(t) = {data.v.toFixed(2)}</p>
        {data.label && <p className="text-obs-red font-bold mt-1">{data.label}</p>}
      </div>
    );
  }
  return null;
}

export default function PhaseSpaceChart() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Build line data from trajectory
  const trajectoryLine = phaseTrajectory.map((p) => ({
    d: p.d,
    v: p.v,
    month: p.month,
    label: p.label,
  }));

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
            Espacio de fase
            <span className="text-obs-text-secondary font-normal text-lg ml-3">
              · D(t) vs V(t)
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-obs-text-secondary/60 text-sm mb-10"
        >
          Divergencia semántica vs velocidad de divergencia. El sistema está en cuadrante de aceleración.
        </motion.p>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-obs-card border border-obs-border rounded-xl p-4 md:p-6"
        >
          <ResponsiveContainer width="100%" height={450}>
            <ScatterChart
              margin={{ top: 30, right: 30, bottom: 30, left: 10 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(168, 218, 220, 0.06)"
              />
              <XAxis
                type="number"
                dataKey="d"
                name="D(t)"
                domain={[0, 1]}
                ticks={[0, 0.25, 0.5, 0.75, 1]}
                tick={{ fill: '#a8dadc', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                label={{
                  value: 'D(t) — Divergencia',
                  position: 'bottom',
                  offset: 10,
                  fill: '#a8dadc',
                  fontSize: 12,
                  fontFamily: 'JetBrains Mono',
                }}
              />
              <YAxis
                type="number"
                dataKey="v"
                name="V(t)"
                domain={[0, 0.5]}
                ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5]}
                tick={{ fill: '#a8dadc', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                label={{
                  value: 'V(t) — Velocidad',
                  angle: -90,
                  position: 'insideLeft',
                  offset: 0,
                  fill: '#a8dadc',
                  fontSize: 12,
                  fontFamily: 'JetBrains Mono',
                }}
              />

              {/* Quadrant labels */}
              {/* Bottom-left: COMPRESIÓN */}
              <ReferenceArea
                x1={0}
                x2={0.5}
                y1={0}
                y2={0.25}
                fill="rgba(42, 157, 143, 0.04)"
                stroke="none"
                label={{
                  value: 'COMPRESIÓN',
                  position: 'center',
                  fill: 'rgba(42, 157, 143, 0.35)',
                  fontSize: 11,
                  fontFamily: 'JetBrains Mono',
                }}
              />
              {/* Top-left: ALERTA */}
              <ReferenceArea
                x1={0}
                x2={0.5}
                y1={0.25}
                y2={0.5}
                fill="rgba(244, 162, 97, 0.04)"
                stroke="none"
                label={{
                  value: 'ALERTA',
                  position: 'center',
                  fill: 'rgba(244, 162, 97, 0.35)',
                  fontSize: 11,
                  fontFamily: 'JetBrains Mono',
                }}
              />
              {/* Bottom-right: SATURACIÓN */}
              <ReferenceArea
                x1={0.5}
                x2={1}
                y1={0}
                y2={0.25}
                fill="rgba(69, 123, 157, 0.04)"
                stroke="none"
                label={{
                  value: 'SATURACIÓN',
                  position: 'center',
                  fill: 'rgba(69, 123, 157, 0.35)',
                  fontSize: 11,
                  fontFamily: 'JetBrains Mono',
                }}
              />
              {/* Top-right: RUPTURA — highlighted */}
              <ReferenceArea
                x1={0.5}
                x2={1}
                y1={0.25}
                y2={0.5}
                fill="rgba(230, 57, 70, 0.08)"
                stroke="rgba(230, 57, 70, 0.2)"
                strokeDasharray="4 4"
                label={{
                  value: '⚠ RUPTURA',
                  position: 'center',
                  fill: 'rgba(230, 57, 70, 0.5)',
                  fontSize: 12,
                  fontFamily: 'JetBrains Mono',
                  fontWeight: 700,
                }}
              />

              {/* Center lines */}
              <ReferenceLine x={0.5} stroke="rgba(168, 218, 220, 0.1)" />
              <ReferenceLine y={0.25} stroke="rgba(168, 218, 220, 0.1)" />

              <RechartsTooltip content={<CustomTooltip />} />

              {/* Trajectory path */}
              <Scatter
                data={trajectoryLine}
                line={{ stroke: '#457b9d', strokeWidth: 2 }}
                lineType="joint"
                shape="circle"
              >
                {trajectoryLine.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={idx === trajectoryLine.length - 1 ? '#e63946' : '#457b9d'}
                    r={idx === trajectoryLine.length - 1 ? 8 : 4}
                    stroke={idx === trajectoryLine.length - 1 ? '#e63946' : 'none'}
                    strokeWidth={idx === trajectoryLine.length - 1 ? 2 : 0}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-6 mt-4 px-2 text-xs font-mono text-obs-text-secondary/60">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-obs-blue" />
              <span>Trayectoria 6 meses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-obs-red animate-pulse-dot" />
              <span>Posición actual (D={currentPhasePoint.d}, V={currentPhasePoint.v})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-obs-red/20 border border-obs-red/30 rounded-sm" />
              <span>Zona crítica</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
