'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  microFissures,
  getSeverityColor,
  comparatorMetrics,
} from '@/lib/observatory-data';

export default function BottomRow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-8 px-6 border-t border-obs-border">
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        {/* MicroFissures — 3 columns wide */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="xl:col-span-3 bg-obs-card/40 border border-obs-border rounded-lg p-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs font-semibold text-white">Micro-fisuras activas</h2>
            <span className="text-[9px] font-mono text-obs-text-secondary/30">
              {microFissures.length} detectadas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
            {microFissures.map((fissure, idx) => {
              const color = getSeverityColor(fissure.severity);
              return (
                <motion.div
                  key={fissure.name}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/[0.02] transition-colors"
                >
                  {/* Severity dot */}
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color, opacity: 0.7 }} />

                  {/* Name */}
                  <span className="text-xs text-obs-text-secondary/70 flex-1 min-w-0 truncate">
                    {fissure.name}
                  </span>

                  {/* Contagion */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="w-12 h-1 rounded-full overflow-hidden bg-white/[0.04]">
                      <div className="h-full rounded-full" style={{
                        width: `${fissure.contagionProbability}%`,
                        backgroundColor: color,
                        opacity: 0.5,
                      }} />
                    </div>
                    <span className="font-mono text-[10px] text-obs-text-secondary/40 w-7 text-right">
                      {fissure.contagionProbability}%
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Comparator Protocol — 2 columns wide */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="xl:col-span-2 bg-obs-card/40 border border-obs-border rounded-lg p-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs font-semibold text-white">Comparator</h2>
            <span className="text-[9px] font-mono text-obs-text-secondary/30">Protocolo diagnóstico</span>
          </div>

          {/* Metrics */}
          <div className="space-y-2 mb-5">
            {comparatorMetrics.map((metric) => (
              <div key={metric.name} className="flex items-center justify-between py-1.5">
                <span className="font-mono text-xs text-obs-text-secondary/50">{metric.name}</span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-white">{metric.value}</span>
                  <span className={`text-[9px] font-mono ${
                    metric.direction === 'up' ? 'text-obs-red/60'
                      : metric.direction === 'down' ? 'text-obs-blue/60'
                        : 'text-obs-text-secondary/30'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Diagnosis box */}
          <div className="bg-obs-bg rounded-md p-3 border border-obs-border/50">
            <p className="text-[9px] font-mono text-obs-text-secondary/30 uppercase tracking-wider mb-2">
              Diagnóstico
            </p>
            <div className="space-y-1.5 text-[10px] font-mono text-obs-text-secondary/50 leading-relaxed">
              <p><span className="text-white/80">α {'>'} 0.7</span> → sistema en zona de fragilidad alta</p>
              <p><span className="text-white/80">T_med {'<'} T_mean</span> → distribución asimétrica a la izquierda</p>
              <p><span className="text-white/80">Conclusión:</span> el colapso no es improbable, es el <span className="text-white">escenario modal</span></p>
            </div>
          </div>

          {/* Rules */}
          <div className="mt-4 pt-3 border-t border-obs-border/30">
            <div className="grid grid-cols-1 gap-1 text-[9px] font-mono text-obs-text-secondary/30">
              <div className="flex items-center gap-2">
                <span className="text-[#2a9d8f]">■</span>
                <span>α &lt; 0.3 → transición hacia S0 dominante</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f4a261]">■</span>
                <span>0.3 ≤ α &lt; 0.7 → S1 o S1&apos; según contención</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-obs-red/60">■</span>
                <span>α ≥ 0.7 → trayectorias S2+..S5 dominantes</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
