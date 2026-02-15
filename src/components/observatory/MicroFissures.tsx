'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { microFissures, getSeverityColor, getSeverityLabel } from '@/lib/observatory-data';

export default function MicroFissures() {
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
            Micro-fisuras activas
            <span className="text-obs-text-secondary font-normal text-lg ml-3">
              · Fallos ya materializados
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {microFissures.map((fissure, index) => {
            const color = getSeverityColor(fissure.severity);

            return (
              <motion.div
                key={fissure.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="bg-obs-card border border-obs-border rounded-xl p-5 hover:border-[rgba(168,218,220,0.2)] hover:bg-obs-card-hover transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-semibold text-obs-text group-hover:text-white transition-colors leading-tight">
                    {fissure.name}
                  </h3>
                  <span
                    className="flex-shrink-0 ml-2 px-2 py-0.5 text-[10px] font-mono font-bold rounded tracking-wider"
                    style={{
                      backgroundColor: `${color}18`,
                      color,
                      border: `1px solid ${color}33`,
                    }}
                  >
                    {getSeverityLabel(fissure.severity)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-obs-text-secondary/60 leading-relaxed mb-4">
                  {fissure.description}
                </p>

                {/* Contagion probability */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-obs-text-secondary/40 font-mono uppercase tracking-wider">
                    P(contagio)
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 rounded-full overflow-hidden bg-obs-text-secondary/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${fissure.contagionProbability}%` } : {}}
                        transition={{ duration: 1, delay: 0.4 + index * 0.08 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                    <span className="font-mono text-xs font-bold" style={{ color }}>
                      {fissure.contagionProbability}%
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
