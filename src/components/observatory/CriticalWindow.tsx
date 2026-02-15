'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { convergenceEvents, historicalComparisons } from '@/lib/observatory-data';

export default function CriticalWindow() {
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
            Convergencia de señales
            <span className="text-obs-text-secondary font-normal text-lg ml-3">
              · Mayo 2026
            </span>
          </h2>
        </motion.div>

        {/* Convergence timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-obs-card border border-obs-red/20 rounded-xl p-6 md:p-8 mb-8"
        >
          {/* Vertical timeline */}
          <div className="relative pl-8 space-y-6">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-obs-red via-obs-red to-obs-red/20" />

            {convergenceEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-5 top-1.5 w-2.5 h-2.5 rounded-full bg-obs-red border-2 border-obs-bg" />

                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-mono text-sm font-bold text-obs-red whitespace-nowrap">
                    {event.date}
                  </span>
                  <span className="text-obs-text-secondary/30 hidden md:inline">→</span>
                  <span className="text-sm text-obs-text-secondary">
                    {event.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 pt-6 border-t border-obs-border"
          >
            <div className="inline-block bg-obs-red/10 border border-obs-red/30 rounded-lg px-4 py-2">
              <span className="font-mono text-sm font-bold text-obs-red tracking-wide">
                ÚNICA VENTANA DE CONVERGENCIA EN 2026
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Historical comparisons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-sm font-mono text-obs-text-secondary/50 uppercase tracking-wider mb-4">
            Comparación histórica · RCE-C3 → Evento
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {historicalComparisons.map((comp, index) => (
              <motion.div
                key={comp.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-obs-card border border-obs-border rounded-lg p-4 hover:border-obs-red/20 transition-all duration-300"
              >
                <div className="font-mono text-2xl font-bold text-obs-text mb-1">
                  {comp.year}
                </div>
                <p className="text-xs text-obs-text-secondary/70 mb-2 leading-relaxed">
                  {comp.event}
                </p>
                <div className="font-mono text-sm">
                  <span className={`font-bold ${comp.days <= 10 ? 'text-obs-red' : comp.days <= 55 ? 'text-obs-text-secondary' : 'text-obs-blue'}`}>
                    {comp.days} días
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
