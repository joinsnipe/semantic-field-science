'use client';

import { useState } from 'react';

// Google Apps Script Web App URL — user must deploy the script and paste URL here
const SCRIPT_URL = process.env.NEXT_PUBLIC_GSHEET_URL || '';

export function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [accepted, setAccepted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!accepted) return;

    const form = e.currentTarget;
    const data = {
      type: 'newsletter',
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      country: (form.elements.namedItem('country') as HTMLInputElement).value,
      interest: (form.elements.namedItem('interest') as HTMLSelectElement).value,
      timestamp: new Date().toISOString(),
    };

    setStatus('sending');
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus('done');
      form.reset();
      setAccepted(false);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-lg font-semibold text-[#1a1a2e] mb-2">Registrado</p>
        <p className="text-sm text-gray-400">Recibirás las próximas publicaciones del MCSH.</p>
      </div>
    );
  }

  return (
    <form className="space-y-3 text-left" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        required
        placeholder="Nombre"
        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#1a1a2e] placeholder-gray-400 focus:border-[#6d4aff] focus:outline-none focus:ring-1 focus:ring-[#6d4aff]/20 transition-colors bg-white"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Correo electrónico"
        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#1a1a2e] placeholder-gray-400 focus:border-[#6d4aff] focus:outline-none focus:ring-1 focus:ring-[#6d4aff]/20 transition-colors bg-white"
      />
      <input
        name="country"
        type="text"
        placeholder="País"
        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#1a1a2e] placeholder-gray-400 focus:border-[#6d4aff] focus:outline-none focus:ring-1 focus:ring-[#6d4aff]/20 transition-colors bg-white"
      />
      <select
        name="interest"
        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-400 focus:border-[#6d4aff] focus:outline-none focus:ring-1 focus:ring-[#6d4aff]/20 transition-colors bg-white"
      >
        <option value="">Área de interés</option>
        <option value="mcsh">MCSH – Marco teórico</option>
        <option value="observatory">Observatory – Fragilidad sistémica</option>
        <option value="spe">SPE – Auditoría y trazabilidad IA</option>
        <option value="all">Todo</option>
      </select>
      <label className="flex items-start gap-2 pt-1">
        <input
          type="checkbox"
          className="mt-1 accent-[#6d4aff]"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        <span className="text-[10px] text-gray-400">
          Acepto la{' '}
          <a href="/privacy" className="text-[#6d4aff] hover:underline">Política de Privacidad</a>
        </span>
      </label>
      <button
        type="submit"
        disabled={!accepted || status === 'sending'}
        className="w-full py-2.5 bg-[#1a1a2e] text-white text-sm font-medium rounded-lg hover:bg-[#2a2a4e] transition-colors mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Enviando...' : 'Registro'}
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-500 text-center">Error al enviar. Inténtalo de nuevo.</p>
      )}
    </form>
  );
}

export function DownloadCard({
  href,
  icon,
  title,
  subtitle,
  variant = 'default',
}: {
  href: string;
  icon: string;
  title: string;
  subtitle: string;
  variant?: 'default' | 'red';
}) {
  function trackDownload() {
    if (!SCRIPT_URL) return;
    const data = {
      type: 'download',
      document: title,
      href,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    };
    // Fire-and-forget — don't block the download
    fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(() => {});
  }

  const borderClass = variant === 'red'
    ? 'border-[#e63946]/10 bg-[#e63946]/[0.02] hover:border-[#e63946]/30 hover:shadow-lg hover:shadow-[#e63946]/5'
    : 'border-gray-100 hover:border-[#6d4aff]/30 hover:shadow-lg hover:shadow-[#6d4aff]/5';
  const hoverColor = variant === 'red' ? 'group-hover:text-[#e63946]' : 'group-hover:text-[#6d4aff]';

  return (
    <a
      href={href}
      download
      onClick={trackDownload}
      className={`group flex flex-col items-center gap-3 p-6 rounded-xl border transition-all duration-300 ${borderClass}`}
    >
      <span className="text-3xl">{icon}</span>
      <span className={`text-base font-semibold text-[#1a1a2e] transition-colors ${hoverColor}`}>{title}</span>
      <span className="text-xs text-gray-400">{subtitle}</span>
    </a>
  );
}
