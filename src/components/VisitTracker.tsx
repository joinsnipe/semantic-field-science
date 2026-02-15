'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const SCRIPT_URL = process.env.NEXT_PUBLIC_GSHEET_URL || '';
const GEO_API = 'https://ipapi.co/json/';

export function VisitTracker() {
  const pathname = usePathname();
  const tracked = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!SCRIPT_URL || tracked.current.has(pathname)) return;
    tracked.current.add(pathname);

    async function track() {
      // Get country from free geo API
      let country = '';
      let countryCode = '';
      let city = '';

      try {
        const geo = await fetch(GEO_API);
        if (geo.ok) {
          const geoData = await geo.json();
          country = geoData.country_name || '';
          countryCode = geoData.country_code || '';
          city = geoData.city || '';
        }
      } catch {
        // Silently fail — geo is optional
      }

      const data = {
        type: 'visit',
        page: pathname,
        country,
        countryCode,
        city,
        language: navigator.language || '',
        referrer: document.referrer || '',
        screen: `${screen.width}x${screen.height}`,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      };

      fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => {});
    }

    // Small delay to not block page render
    const timer = setTimeout(track, 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null; // Invisible component
}
