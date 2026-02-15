'use client';

import Link from 'next/link';
import { useLang, LangToggle } from '@/components/LanguageProvider';

type Section = { num: string; title: string; content: React.ReactNode };

function useSections(): Section[] {
  const { locale } = useLang();
  const en = locale === 'en';

  return [
    {
      num: '01',
      title: en ? 'Data Controller' : 'Responsable del Tratamiento',
      content: (
        <div className="space-y-3">
          <p><strong className="text-[#1a1a2e]">Capriciousecret S.L.</strong> {en ? '(hereinafter, "SFS")' : '(en adelante, "SFS")'}. NIF: <strong className="text-[#1a1a2e]">B70921879</strong>.</p>
          <ul className="space-y-2 border-l-2 border-gray-200 pl-5">
            <li><span className="text-xs text-gray-400 uppercase tracking-wider block">{en ? 'Registered Office' : 'Domicilio Social'}</span>Calle Guanarame 105, 35550, San Bartolomé (Las Palmas), España.</li>
            <li><span className="text-xs text-gray-400 uppercase tracking-wider block">{en ? 'Contact' : 'Contacto'}</span><a href="mailto:contact@semanticfieldscience.org" className="text-[#6d4aff] hover:underline">contact@semanticfieldscience.org</a></li>
          </ul>
        </div>
      ),
    },
    {
      num: '02',
      title: en ? 'Data We Process' : 'Datos que Procesamos',
      content: (
        <div className="space-y-4">
          <ul className="space-y-3">
            <li className="flex gap-3"><span className="text-[#6d4aff] font-bold">/</span><p><strong className="text-[#1a1a2e]">{en ? 'Email (subscription):' : 'Email (suscripción):'}</strong> {en ? 'Used solely to send updates about new MCSH and Observatory publications. Your email acts as a subscription identifier.' : 'Utilizado únicamente para enviar actualizaciones sobre nuevas publicaciones del MCSH y del Observatory. Tu email actúa como identificador de suscripción.'}</p></li>
            <li className="flex gap-3"><span className="text-[#6d4aff] font-bold">/</span><p><strong className="text-[#1a1a2e]">{en ? 'Technical data:' : 'Datos técnicos:'}</strong> {en ? 'Minimal technical metadata (IP address, browser type) necessary for security and proper site operation.' : 'Metadatos técnicos mínimos (dirección IP, tipo de navegador) necesarios para la seguridad y el correcto funcionamiento del sitio.'}</p></li>
          </ul>
          <div className="p-4 bg-[#f8f6ff] border-l-2 border-[#6d4aff] text-sm text-[#1a1a2e]">
            <strong>{en ? 'IDENTITY PHILOSOPHY:' : 'FILOSOFÍA DE IDENTIDAD:'}</strong> {en ? 'We do not build activity profiles or link your browsing to your identity. This is an open publication site.' : 'No construimos perfiles de actividad ni vinculamos tu navegación a tu identidad. Este es un sitio de publicación abierta.'}
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: en ? 'Purpose and Legal Basis' : 'Finalidad y Base Legal',
      content: (
        <ul className="space-y-2">
          <li className="flex gap-3"><span className="text-[#6d4aff]">—</span><p><strong className="text-[#1a1a2e]">{en ? 'Sending publications:' : 'Envío de publicaciones:'}</strong> {en ? 'data subject consent.' : 'consentimiento del interesado.'}</p></li>
          <li className="flex gap-3"><span className="text-[#6d4aff]">—</span><p><strong className="text-[#1a1a2e]">{en ? 'Site security and operation:' : 'Seguridad y operación del sitio:'}</strong> {en ? 'legitimate interest.' : 'interés legítimo.'}</p></li>
          <li className="flex gap-3"><span className="text-[#6d4aff]">—</span><p><strong className="text-[#1a1a2e]">{en ? 'Legal compliance:' : 'Cumplimiento legal:'}</strong> {en ? 'legal obligation where applicable.' : 'obligación legal cuando proceda.'}</p></li>
        </ul>
      ),
    },
    {
      num: '04',
      title: en ? 'Data Retention' : 'Conservación de Datos',
      content: (
        <ul className="space-y-2">
          <li className="flex gap-3"><span className="text-[#6d4aff]">—</span><p><strong className="text-[#1a1a2e]">{en ? 'Subscriptions:' : 'Suscripciones:'}</strong> {en ? 'as long as your subscription is active. You can unsubscribe at any time.' : 'mientras mantengas tu suscripción activa. Puedes darte de baja en cualquier momento.'}</p></li>
          <li className="flex gap-3"><span className="text-[#6d4aff]">—</span><p><strong className="text-[#1a1a2e]">{en ? 'Technical logs:' : 'Logs técnicos:'}</strong> {en ? 'minimum reasonable time for security.' : 'tiempo mínimo razonable para seguridad.'}</p></li>
        </ul>
      ),
    },
    {
      num: '05',
      title: en ? 'Recipients' : 'Destinatarios',
      content: <p>{en ? 'Data may be shared with providers necessary to operate the service and infrastructure (hosting, email). Under no circumstances is data sold to third parties.' : 'Los datos pueden compartirse con proveedores necesarios para operar el servicio e infraestructura (hosting, email). En ningún caso se venden datos a terceros.'}</p>,
    },
    {
      num: '06',
      title: en ? 'International Transfers' : 'Transferencias Internacionales',
      content: <p>{en ? 'If any provider is located outside the EEA, appropriate safeguards will be applied (standard contractual clauses or other mechanisms recognized by the GDPR).' : 'Si algún proveedor se encuentra fuera del EEE, se aplicarán las garantías adecuadas (cláusulas contractuales tipo u otros mecanismos reconocidos por el RGPD).'}</p>,
    },
    {
      num: '07',
      title: en ? 'Your Rights' : 'Tus Derechos',
      content: <p>{en ? 'You can exercise your rights of access, rectification, erasure, objection, restriction, and portability by writing to' : 'Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a'} <a href="mailto:contact@semanticfieldscience.org" className="text-[#6d4aff] hover:underline">contact@semanticfieldscience.org</a>. {en ? 'If you believe your rights have not been addressed, you can file a complaint with the competent data protection authority (AEPD in Spain).' : 'Si consideras que tus derechos no han sido atendidos, puedes presentar una reclamación ante la autoridad de protección de datos competente (AEPD en España).'}</p>,
    },
    {
      num: '08',
      title: en ? 'Security' : 'Seguridad',
      content: <p>{en ? 'We apply technical measures to protect information and reduce risks of unauthorized access. The internet is not infallible; no system can guarantee absolute security.' : 'Aplicamos medidas técnicas para proteger la información y reducir riesgos de acceso no autorizado. Internet no es infalible; ningún sistema puede garantizar seguridad absoluta.'}</p>,
    },
    {
      num: '09',
      title: en ? 'Minors' : 'Menores',
      content: <p>{en ? 'This service is not intended for minors. If we detect improper processing, we may request verification measures or proceed to delete the data.' : 'El servicio no está dirigido a menores. Si detectamos tratamiento indebido, podremos solicitar medidas de verificación o proceder a la eliminación de datos.'}</p>,
    },
    {
      num: '10',
      title: 'Cookies',
      content: <p>{en ? 'Semantic Field Science does not use commercial profiling cookies. We only use technical and operational mechanisms necessary for the security and performance of the site.' : 'Semantic Field Science no utiliza cookies de perfilado comercial. Solo empleamos mecanismos técnicos y operativos necesarios para la seguridad y el rendimiento del sitio.'}</p>,
    },
    {
      num: '11',
      title: en ? 'Changes to this Policy' : 'Cambios en esta Política',
      content: <p>{en ? 'We may update this policy for legal or technical reasons. The current version will always be published on this page.' : 'Podremos actualizar esta política por motivos legales o técnicos. La versión vigente estará siempre publicada en esta página.'}</p>,
    },
    {
      num: '12',
      title: en ? 'Contact' : 'Contacto',
      content: (
        <div className="space-y-4">
          <p>{en ? 'For privacy and data protection inquiries:' : 'Para consultas sobre privacidad y protección de datos:'}</p>
          <a href="mailto:contact@semanticfieldscience.org" className="inline-flex items-center px-6 py-3 bg-[#1a1a2e] text-white text-xs font-semibold rounded-lg hover:bg-[#2a2a4e] transition-colors tracking-wider uppercase">
            {en ? 'Contact' : 'Contactar'}
          </a>
        </div>
      ),
    },
  ];
}

export default function PrivacyContent() {
  const { locale } = useLang();
  const en = locale === 'en';
  const sections = useSections();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group">
              <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> {en ? 'Back to home' : 'Volver a inicio'}
            </Link>
            <LangToggle />
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-white font-mono font-bold text-lg">SFS</span>
            <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">Semantic Field Science</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight mt-4">{en ? 'Privacy Policy' : 'Política de Privacidad'}</h1>
          <p className="text-gray-400 mt-3 text-sm max-w-xl leading-relaxed">
            {en
              ? 'How we handle personal data: purpose, legal basis, retention, recipients, security, and rights (GDPR / LOPDGDD).'
              : 'Cómo tratamos los datos personales: finalidad, base legal, retención, destinatarios, seguridad y derechos (RGPD / LOPDGDD).'}
          </p>
          <div className="text-[11px] text-gray-600 font-mono mt-6 uppercase tracking-widest">
            {en ? 'Last updated: 15.02.2026' : 'Última actualización: 15.02.2026'}
          </div>
        </div>
      </div>

      {/* TOC */}
      <div className="max-w-4xl mx-auto px-8 -mt-6">
        <nav className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4">
            {en ? 'Table of Contents' : 'Índice'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm">
            {sections.map((s, i) => (
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
        {sections.map((s) => (
          <article key={s.num} id={`section-${s.num}`} className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-5 flex items-center gap-3">
              <span className="text-[#6d4aff] text-sm font-mono">{s.num}.</span> {s.title}
            </h2>
            <div className="text-sm text-gray-600 leading-relaxed">{s.content}</div>
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
