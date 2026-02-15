'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { pnrConditions, pnrProgress } from '@/lib/observatory-data';

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    CONFIRMED: { bg: 'rgba(230, 57, 70, 0.15)', text: '#e63946', label: 'CONFIRMADO' },
    EXCEEDED: { bg: 'rgba(230, 57, 70, 0.15)', text: '#e63946', label: 'SUPERADO' },
    THRESHOLD: { bg: 'rgba(244, 162, 97, 0.15)', text: '#f4a261', label: 'EN UMBRAL' },
    APPROACHING: { bg: 'rgba(244, 162, 97, 0.15)', text: '#f4a261', label: 'PRÓXIMO' },
  };

  const c = config[status] || config.APPROACHING;

  return (
    <span
      className="px-2.5 py-1 text-[10px] font-mono font-bold rounded tracking-wider"
      style={{ backgroundColor: c.bg, color: c.text, border: `1px solid ${c.text}33` }}
    >
      {c.label}
    </span>
  );
}

export default function PNRStatus() {
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
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Umbral de no-retorno
            <span className="text-obs-text-secondary font-normal text-lg ml-3">
              · Estado actual
            </span>
          </h2>
        </motion.div>

        {/* Conditions table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-obs-card border border-obs-border rounded-xl overflow-hidden mb-8"
        >
          <div className="divide-y divide-obs-border">
            {pnrConditions.map((condition, index) => (
              <motion.div
                key={condition.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 hover:bg-obs-card-hover transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{condition.icon}</span>
                  <div>
                    <span className="font-mono text-sm text-obs-text">
                      {condition.label}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 pl-9 sm:pl-0">
                  <span className="font-mono text-xs text-obs-text-secondary/60">
                    {condition.current}
                  </span>
                  <StatusBadge status={condition.status} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PNR Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-obs-card border border-obs-border rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-obs-text-secondary">
              Progreso hacia punto de no-retorno
            </span>
            <span className="font-mono text-lg font-bold text-obs-red">
              {pnrProgress}%
            </span>
          </div>

          <div className="progress-track h-3 rounded-full overflow-hidden relative">
            {/* Track markers */}
            <div className="absolute inset-0 flex">
              {[25, 50, 75].map((mark) => (
                <div
                  key={mark}
                  className="absolute top-0 bottom-0 w-px bg-obs-text-secondary/10"
                  style={{ left: `${mark}%` }}
                />
              ))}
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${pnrProgress}%` } : {}}
              transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full relative"
              style={{
                background: `linear-gradient(90deg, #457b9d 0%, #f4a261 40%, #e63946 75%, #e63946 100%)`,
              }}
            >
              {/* Glow effect at the end */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-obs-red animate-pulse-dot" />
            </motion.div>
          </div>

          {/* Scale labels */}
          <div className="flex justify-between mt-2 text-[10px] font-mono text-obs-text-secondary/30">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100% PNR</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
