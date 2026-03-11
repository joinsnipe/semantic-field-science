'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { heroMetrics, latestUpdate } from '@/lib/observatory-data';

function AnimatedNumber({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const startTime = Date.now();
    const decimals = value.includes('.') ? value.split('.')[1].length : 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * eased;
      setDisplayValue(current.toFixed(decimals));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function HeroMetrics() {
  return (
    <section className="relative pt-8 pb-10 px-6">
      <div className="max-w-full">
        {/* ━━━ PROTOCOL UPDATE BANNER (11 MAR 2026) ━━━ */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 bg-obs-red/[0.06] border border-obs-red/20 rounded-lg px-4 py-3"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-obs-red animate-pulse-dot" />
                <span className="text-[9px] font-mono font-bold tracking-wider text-obs-red uppercase">
                  Actualización
                </span>
              </div>
              <span className="text-xs font-mono text-obs-text-secondary/60">
                {latestUpdate.date} · +{latestUpdate.daysSinceT0}d desde t₀
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono">
              <span className="text-obs-text-secondary/40">
                α: <span className="text-obs-text-secondary/60">{latestUpdate.previous.alpha}</span>
                <span className="text-obs-red mx-1">→</span>
                <span className="text-white font-bold">{latestUpdate.current.alpha}</span>
              </span>
              <span className="text-obs-text-secondary/20 hidden sm:inline">|</span>
              <span className="text-obs-text-secondary/40">
                T_med: <span className="text-obs-text-secondary/60">{latestUpdate.previous.tMed}</span>
                <span className="text-obs-red mx-1">→</span>
                <span className="text-white font-bold">{latestUpdate.current.tMed}</span>
              </span>
              <span className="text-obs-text-secondary/20 hidden sm:inline">|</span>
              <span className="text-obs-text-secondary/40">
                P(crisis): <span className="text-obs-text-secondary/60">{latestUpdate.previous.pCrisis}</span>
                <span className="text-obs-red mx-1">→</span>
                <span className="text-white font-bold">{latestUpdate.current.pCrisis}</span>
              </span>
            </div>
          </div>
          <p className="text-[10px] text-obs-text-secondary/50 mt-2 leading-relaxed">
            {latestUpdate.triggerEvent}
          </p>
        </motion.div>

        {/* Compact header row */}
        <div className="flex items-baseline justify-between mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              El sistema no está estable.
            </h1>
            <p className="text-sm text-obs-text-secondary/60 mt-1">
              Está contenido artificialmente. La diferencia importa.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden md:block text-[11px] text-obs-text-secondary/40 font-mono"
          >
            P(crisis 12m) = 81% · 11 mar 2026
          </motion.p>
        </div>

        {/* Three metrics in a tight row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {heroMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-obs-card/60 border border-obs-border rounded-lg px-5 py-4 hover:border-obs-text-secondary/20 transition-all duration-300 group"
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-mono text-3xl font-bold text-white tracking-tight">
                  <AnimatedNumber value={metric.value} />
                </span>
                {metric.badge && (
                  <span
                    className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: metric.badge === 'TRANSICIÓN'
                        ? 'rgba(230, 57, 70, 0.15)'
                        : metric.badge === 'CRÍTICO'
                          ? 'rgba(230, 57, 70, 0.12)'
                          : 'rgba(168, 218, 220, 0.08)',
                      color: metric.badge === 'CRÍTICO' || metric.badge === 'TRANSICIÓN'
                        ? '#e63946'
                        : '#a8dadc',
                      border: `1px solid ${metric.badge === 'CRÍTICO' || metric.badge === 'TRANSICIÓN' ? 'rgba(230, 57, 70, 0.25)' : 'rgba(168, 218, 220, 0.15)'}`,
                    }}
                  >
                    {metric.badge}
                  </span>
                )}
              </div>
              <p className="font-mono text-xs text-obs-text-secondary/50">
                {metric.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
