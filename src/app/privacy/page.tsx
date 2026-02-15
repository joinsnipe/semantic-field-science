import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad · Semantic Field Science',
  description: 'Cómo tratamos tus datos personales: finalidad, base legal, retención, derechos y seguridad (RGPD / LOPDGDD).',
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    num: '01',
    title: 'Responsable del Tratamiento',
    content: (
      <div className="space-y-3">
        <p><strong className="text-[#1a1a2e]">Capriciousecret S.L.</strong> (en adelante, &ldquo;SFS&rdquo;). NIF: <strong className="text-[#1a1a2e]">B70921879</strong>.</p>
        <ul className="space-y-2 border-l-2 border-gray-200 pl-5">
          <li><span className="text-xs text-gray-400 uppercase tracking-wider block">Domicilio Social</span>Calle Guanarame 105, 35550, San Bartolomé (Las Palmas), España.</li>
          <li><span className="text-xs text-gray-400 uppercase tracking-wider block">Contacto</span><a href="mailto:contact@semanticfieldscience.org" className="text-[#6d4aff] hover:underline">contact@semanticfieldscience.org</a></li>
        </ul>
      </div>
    ),
  },
  {
    num: '02',
    title: 'Datos que Procesamos',
    content: (
      <div className="space-y-4">
        <ul className="space-y-3">
          <li className="flex gap-3"><span className="text-[#6d4aff] font-bold">/</span><p><strong className="text-[#1a1a2e]">Email (suscripción):</strong> Utilizado únicamente para enviar actualizaciones sobre nuevas publicaciones del MCSH y del Observatory. Tu email actúa como identificador de suscripción.</p></li>
          <li className="flex gap-3"><span className="text-[#6d4aff] font-bold">/</span><p><strong className="text-[#1a1a2e]">Datos técnicos:</strong> Metadatos técnicos mínimos (dirección IP, tipo de navegador) necesarios para la seguridad y el correcto funcionamiento del sitio.</p></li>
        </ul>
        <div className="p-4 bg-[#f8f6ff] border-l-2 border-[#6d4aff] text-sm text-[#1a1a2e]">
          <strong>FILOSOFÍA DE IDENTIDAD:</strong> No construimos perfiles de actividad ni vinculamos tu navegación a tu identidad. Este es un sitio de publicación abierta.
        </div>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Finalidad y Base Legal',
    content: (
      <ul className="space-y-2">
        <li className="flex gap-3"><span className="text-[#6d4aff]">—</span><p><strong className="text-[#1a1a2e]">Envío de publicaciones:</strong> consentimiento del interesado.</p></li>
        <li className="flex gap-3"><span className="text-[#6d4aff]">—</span><p><strong className="text-[#1a1a2e]">Seguridad y operación del sitio:</strong> interés legítimo.</p></li>
        <li className="flex gap-3"><span className="text-[#6d4aff]">—</span><p><strong className="text-[#1a1a2e]">Cumplimiento legal:</strong> obligación legal cuando proceda.</p></li>
      </ul>
    ),
  },
  {
    num: '04',
    title: 'Conservación de Datos',
    content: (
      <ul className="space-y-2">
        <li className="flex gap-3"><span className="text-[#6d4aff]">—</span><p><strong className="text-[#1a1a2e]">Suscripciones:</strong> mientras mantengas tu suscripción activa. Puedes darte de baja en cualquier momento.</p></li>
        <li className="flex gap-3"><span className="text-[#6d4aff]">—</span><p><strong className="text-[#1a1a2e]">Logs técnicos:</strong> tiempo mínimo razonable para seguridad.</p></li>
      </ul>
    ),
  },
  {
    num: '05',
    title: 'Destinatarios',
    content: (
      <p>Los datos pueden compartirse con proveedores necesarios para operar el servicio e infraestructura (hosting, email). En ningún caso se venden datos a terceros.</p>
    ),
  },
  {
    num: '06',
    title: 'Transferencias Internacionales',
    content: (
      <p>Si algún proveedor se encuentra fuera del EEE, se aplicarán las garantías adecuadas (cláusulas contractuales tipo u otros mecanismos reconocidos por el RGPD).</p>
    ),
  },
  {
    num: '07',
    title: 'Tus Derechos',
    content: (
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a <a href="mailto:contact@semanticfieldscience.org" className="text-[#6d4aff] hover:underline">contact@semanticfieldscience.org</a>. Si consideras que tus derechos no han sido atendidos, puedes presentar una reclamación ante la autoridad de protección de datos competente (AEPD en España).</p>
    ),
  },
  {
    num: '08',
    title: 'Seguridad',
    content: (
      <p>Aplicamos medidas técnicas para proteger la información y reducir riesgos de acceso no autorizado. Internet no es infalible; ningún sistema puede garantizar seguridad absoluta.</p>
    ),
  },
  {
    num: '09',
    title: 'Menores',
    content: (
      <p>El servicio no está dirigido a menores. Si detectamos tratamiento indebido, podremos solicitar medidas de verificación o proceder a la eliminación de datos.</p>
    ),
  },
  {
    num: '10',
    title: 'Cookies',
    content: (
      <p>Semantic Field Science no utiliza cookies de perfilado comercial. Solo empleamos mecanismos técnicos y operativos necesarios para la seguridad y el rendimiento del sitio.</p>
    ),
  },
  {
    num: '11',
    title: 'Cambios en esta Política',
    content: (
      <p>Podremos actualizar esta política por motivos legales o técnicos. La versión vigente estará siempre publicada en esta página.</p>
    ),
  },
  {
    num: '12',
    title: 'Contacto',
    content: (
      <div className="space-y-4">
        <p>Para consultas sobre privacidad y protección de datos:</p>
        <a href="mailto:contact@semanticfieldscience.org" className="inline-flex items-center px-6 py-3 bg-[#1a1a2e] text-white text-xs font-semibold rounded-lg hover:bg-[#2a2a4e] transition-colors tracking-wider uppercase">
          Contactar
        </a>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 group">
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> Volver a inicio
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-white font-mono font-bold text-lg">SFS</span>
            <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">Semantic Field Science</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight mt-4">Política de Privacidad</h1>
          <p className="text-gray-400 mt-3 text-sm max-w-xl leading-relaxed">
            Cómo tratamos los datos personales: finalidad, base legal, retención, destinatarios, seguridad y derechos (RGPD / LOPDGDD).
          </p>
          <div className="text-[11px] text-gray-600 font-mono mt-6 uppercase tracking-widest">Última actualización: 15.02.2026</div>
        </div>
      </div>

      {/* TOC */}
      <div className="max-w-4xl mx-auto px-8 -mt-6">
        <nav className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4">Índice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm">
            {SECTIONS.map((s, i) => (
              <a key={s.num} href={`#section-${s.num}`} className="flex justify-between items-center py-2 border-b border-gray-100 hover:text-[#6d4aff] transition-colors text-gray-600 group">
                <span>{i + 1}. {s.title}</span>
                <span className="text-[10px] text-gray-300 group-hover:text-[#6d4aff]">→</span>
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-6">
        {SECTIONS.map((s) => (
          <article key={s.num} id={`section-${s.num}`} className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-5 flex items-center gap-3">
              <span className="text-[#6d4aff] text-sm font-mono">{s.num}.</span> {s.title}
            </h2>
            <div className="text-sm text-gray-600 leading-relaxed">
              {s.content}
            </div>
          </article>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 py-8 text-center text-xs text-gray-400">
        © 2026 Semantic Field Science · Capriciousecret S.L. · CIF B70921879
      </div>
    </div>
  );
}
