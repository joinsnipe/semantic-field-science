'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { systemStates } from '@/lib/observatory-data';

export default function SystemStateBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const activeState = systemStates.find((s) => s.isActive);

  return (
    <section ref={ref} className="py-6 px-6 border-t border-obs-border">
      <div className="max-w-full">
        {/* Compact inline title */}
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-sm font-semibold text-white">Estado del sistema</h2>
          <span className="text-[10px] font-mono text-obs-text-secondary/40">
            Markov · 7 estados
          </span>
        </div>

        {/* Horizontal pipeline — compact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-1"
        >
          {systemStates.map((state, index) => (
            <div key={state.id} className="flex items-center">
              <div
                className={`
                  flex-shrink-0 rounded-md px-3 py-2 text-center transition-all duration-300 min-w-[60px]
                  ${state.isActive
                    ? 'bg-white/10 border border-white/30'
                    : state.isPast
                      ? 'bg-obs-card/30 border border-transparent'
                      : 'bg-obs-card/50 border border-obs-border/50'
                  }
                `}
              >
                <div
                  className={`font-mono font-bold text-xs ${
                    state.isActive
                      ? 'text-white'
                      : state.isPast
                        ? 'text-obs-text-secondary/30'
                        : 'text-obs-text-secondary/50'
                  }`}
                >
                  {state.shortName}
                </div>
                {state.isActive && (
                  <div className="flex justify-center mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-obs-red animate-pulse-dot" />
                  </div>
                )}
              </div>

              {index < systemStates.length - 1 && (
                <span className={`mx-0.5 text-[10px] ${
                  state.isPast && !systemStates[index + 1]?.isActive
                    ? 'text-obs-text-secondary/15'
                    : state.isActive
                      ? 'text-white/30'
                      : 'text-obs-text-secondary/20'
                }`}>
                  →
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Active state description — compact */}
        {activeState && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs text-obs-text-secondary/60 leading-relaxed max-w-2xl"
          >
            <span className="text-white font-mono font-semibold mr-1.5">{activeState.shortName}</span>
            {activeState.description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
