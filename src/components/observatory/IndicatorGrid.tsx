'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { indicators, getIndicatorColor } from '@/lib/observatory-data';

function IndicatorRow({
  indicator,
  index,
  isInView,
}: {
  indicator: (typeof indicators)[0];
  index: number;
  isInView: boolean;
}) {
  const color = getIndicatorColor(indicator.probability);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      className="flex items-center gap-4 px-4 py-3 hover:bg-white/[0.02] transition-colors rounded-md group"
    >
      {/* Number */}
      <span className="w-5 text-[10px] font-mono text-obs-text-secondary/25 flex-shrink-0">
        {(index + 1).toString().padStart(2, '0')}
      </span>

      {/* Name */}
      <span className="text-xs text-obs-text-secondary/80 group-hover:text-white transition-colors flex-1 min-w-0 truncate">
        {indicator.name}
      </span>

      {/* Bar */}
      <div className="w-20 h-1.5 rounded-full overflow-hidden bg-white/[0.04] flex-shrink-0">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${indicator.probability}%` } : {}}
          transition={{ duration: 0.8, delay: 0.1 + 0.05 * index }}
          className="h-full rounded-full"
          style={{ backgroundColor: color, opacity: 0.7 }}
        />
      </div>

      {/* Value */}
      <span className="font-mono text-xs font-semibold text-white w-10 text-right flex-shrink-0">
        {indicator.probability}%
      </span>
    </motion.div>
  );
}

export default function IndicatorGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-8 px-6 border-t border-obs-border">
      <div className="max-w-full">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-5">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-semibold text-white">Indicadores no convencionales</h2>
            <span className="text-[10px] font-mono text-obs-text-secondary/30">
              avg. <span className="text-white/70">74.8%</span>
            </span>
          </div>
        </div>

        {/* Two-column compact list */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-0">
          {/* Left column: 1-5 */}
          <div className="border-r-0 xl:border-r border-obs-border/50 pr-0 xl:pr-4">
            {indicators.slice(0, 5).map((indicator, index) => (
              <IndicatorRow
                key={indicator.id}
                indicator={indicator}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Right column: 6-10 */}
          <div className="pl-0 xl:pl-4">
            {indicators.slice(5).map((indicator, index) => (
              <IndicatorRow
                key={indicator.id}
                indicator={indicator}
                index={index + 5}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        <p className="text-[10px] text-obs-text-secondary/25 font-mono mt-4 px-4">
          Ninguno aparece en dashboards institucionales. Todos señalan en la misma dirección.
        </p>
      </div>
    </section>
  );
}
