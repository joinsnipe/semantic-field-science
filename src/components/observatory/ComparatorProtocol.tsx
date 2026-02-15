'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { comparatorMetrics } from '@/lib/observatory-data';

export default function ComparatorProtocol() {
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
            Protocolo de actualización
            <span className="text-obs-text-secondary font-normal text-lg ml-3">
              · Comparator
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-obs-text-secondary/60 text-sm mb-10"
        >
          Tres números. Mismos pesos. Actualización mensual.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Terminal block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-obs-card border border-obs-border rounded-xl overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-obs-bg-secondary border-b border-obs-border">
              <div className="w-2.5 h-2.5 rounded-full bg-obs-red/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#f4a261]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#2a9d8f]/60" />
              <span className="ml-2 text-[10px] font-mono text-obs-text-secondary/40">
                comparator.sh — feb 2026
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-6 space-y-3 font-mono text-sm">
              {comparatorMetrics.map((metric, index) => (
                <motion.div
                  key={metric.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                  className="flex items-baseline gap-2"
                >
                  <span className="text-obs-blue">{'>'}</span>
                  <span className="text-obs-text">{metric.name}</span>
                  <span className="text-obs-text-secondary/30">=</span>
                  <span className="text-obs-text font-bold">{metric.value}</span>
                  <span className="text-obs-text-secondary/40 text-xs">
                    [{metric.change}]
                  </span>
                </motion.div>
              ))}

              {/* Separator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 }}
                className="pt-3 border-t border-obs-border"
              >
                <p className="text-obs-red font-bold text-xs tracking-wide">
                  Diagnóstico: ACELERACIÓN CONFIRMADA
                </p>
                <p className="text-obs-text-secondary/40 text-xs mt-2">
                  Próxima actualización: 7 marzo 2026
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Interpretation rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4"
          >
            <div className="bg-obs-card border border-obs-border rounded-xl p-6">
              <h3 className="text-sm font-semibold text-obs-text mb-4">
                Reglas de interpretación
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-obs-red/10 border border-obs-red/20 flex items-center justify-center">
                    <span className="text-obs-red text-xs font-mono font-bold">↑↓</span>
                  </div>
                  <div>
                    <p className="font-mono text-sm text-obs-text mb-1">
                      Si α↑ y T_med↓
                    </p>
                    <p className="text-xs text-obs-text-secondary/60">
                      → Aceleración real. El sistema acumula fragilidad más rápido de lo que se disipa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-[#2a9d8f]/10 border border-[#2a9d8f]/20 flex items-center justify-center">
                    <span className="text-[#2a9d8f] text-xs font-mono font-bold">↓↑</span>
                  </div>
                  <div>
                    <p className="font-mono text-sm text-obs-text mb-1">
                      Si α↓ y T_med↑
                    </p>
                    <p className="text-xs text-obs-text-secondary/60">
                      → Descompresión. El sistema está liberando tensión gradualmente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-[#f4a261]/10 border border-[#f4a261]/20 flex items-center justify-center">
                    <span className="text-[#f4a261] text-xs font-mono font-bold">→→</span>
                  </div>
                  <div>
                    <p className="font-mono text-sm text-obs-text mb-1">
                      Si ambos estables
                    </p>
                    <p className="text-xs text-obs-text-secondary/60">
                      → Saturación. El sistema se mantiene en régimen S1′ sin avance ni retroceso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current diagnosis highlight */}
            <div className="bg-obs-red/5 border border-obs-red/20 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-obs-red animate-pulse-live" />
                <span className="font-mono text-xs text-obs-red font-bold tracking-wider">
                  DIAGNÓSTICO ACTUAL
                </span>
              </div>
              <p className="text-sm text-obs-text-secondary leading-relaxed">
                α↑ (0.75 → 0.776) y T_med↓ (3.5m → 3.1m). El sistema está en{' '}
                <span className="text-obs-red font-semibold">aceleración confirmada</span>.
                Fragilidad acumulándose más rápido de lo que se disipa.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
