'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  convergenceEvents,
  historicalComparisons,
  pnrConditions,
  pnrProgress,
} from '@/lib/observatory-data';

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; text: string; label: string }> = {
    CONFIRMED: { bg: 'rgba(230, 57, 70, 0.08)', text: '#e63946', label: '●' },
    EXCEEDED: { bg: 'rgba(230, 57, 70, 0.08)', text: '#e63946', label: '●' },
    THRESHOLD: { bg: 'rgba(244, 162, 97, 0.08)', text: '#f4a261', label: '◐' },
    APPROACHING: { bg: 'rgba(168, 218, 220, 0.06)', text: '#a8dadc', label: '○' },
  };
  const s = styles[status] || styles.APPROACHING;

  return (
    <span className="text-[10px]" style={{ color: s.text }}>
      {s.label}
    </span>
  );
}

export default function MiddleRow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-8 px-6 border-t border-obs-border">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Critical Window */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-obs-card/40 border border-obs-border rounded-lg p-4"
        >
          <div className="flex items-baseline gap-3 mb-4">
            <h2 className="text-xs font-semibold text-white">Ventana de convergencia</h2>
            <span className="text-[9px] font-mono text-obs-text-secondary/30">→ Mayo 2026</span>
          </div>

          {/* Events */}
          <div className="space-y-2 mb-5">
            {convergenceEvents.map((event, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex flex-col items-center pt-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    idx === convergenceEvents.length - 1 ? 'bg-white' : 'bg-obs-text-secondary/20'
                  }`} />
                  {idx < convergenceEvents.length - 1 && (
                    <div className="w-px h-4 bg-obs-border mt-0.5" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono text-obs-text-secondary/40">{event.date}</p>
                  <p className="text-xs text-obs-text-secondary/70">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Historical */}
          <div className="border-t border-obs-border/50 pt-3">
            <p className="text-[9px] font-mono text-obs-text-secondary/25 uppercase tracking-wider mb-2">
              Precedentes históricos
            </p>
            <div className="grid grid-cols-2 gap-2">
              {historicalComparisons.map((comp) => (
                <div key={comp.year} className="text-[10px] font-mono">
                  <span className="text-white/60">{comp.label}</span>
                  <span className="text-obs-text-secondary/30 ml-1">→ {comp.days}d</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* PNR Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-obs-card/40 border border-obs-border rounded-lg p-4"
        >
          <div className="flex items-baseline justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xs font-semibold text-white">PNR</h2>
              <span className="text-[9px] font-mono text-obs-text-secondary/30">Point of No Return</span>
            </div>
            <span className="font-mono text-sm font-bold text-white">{pnrProgress}%</span>
          </div>

          {/* Progress bar */}
          <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden mb-5">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${pnrProgress}%` } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, rgba(69, 123, 157, 0.6) 0%, rgba(244, 162, 97, 0.6) 50%, rgba(230, 57, 70, 0.6) 100%)',
              }}
            />
          </div>

          {/* Conditions */}
          <div className="space-y-2">
            {pnrConditions.map((cond, idx) => (
              <div key={idx} className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <StatusBadge status={cond.status} />
                  <span className="text-xs text-obs-text-secondary/60 truncate">{cond.label}</span>
                </div>
                <span className="text-[10px] font-mono text-obs-text-secondary/40 flex-shrink-0 ml-3">
                  {cond.current}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
