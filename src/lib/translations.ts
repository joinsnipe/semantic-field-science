export type Locale = 'en' | 'es';

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    'nav.subtitle': 'Public archive · Foundational text · Author: Rubén Abella',

    // Hero
    'hero.title1': 'Meaning moves.',
    'hero.title2': 'Now it can be measured.',
    'hero.model': 'Human Semantic Field Model (MCSH)',
    'hero.desc': 'A framework for observing the distance between what is said and what is. Between narrative and reality. Between a system and its truth.',
    'hero.cta1': 'Read the foundational document',
    'hero.cta2': 'Get new publications',
    'hero.obs.state': 'State',

    // What is MCSH
    'what.title': 'What is the MCSH?',
    'what.p1': 'The MCSH is a conceptual framework that observes how meaning is generated, transforms, and sustains over time. It does not describe isolated words: it describes',
    'what.p1.bold': 'fields of meaning',
    'what.p1.end': ', their dynamics, their tensions, and their direction.',
    'what.p2.start': 'It proposes a metric for something that always existed but had never been formalized:',
    'what.p2.bold': 'the distance between what a system says it is and what it actually is',
    'what.p3': 'This site exists as a stable reference for the foundational text and its associated public records.',

    // Why now
    'why.title': 'Why now?',
    'why.p1': 'Language models have become structurers of truth. Governments, markets, and institutions operate on narratives that do not always align with the underlying structural reality.',
    'why.p2': 'The MCSH proposes measuring that distance. Rigorously. Mathematically. Without relying on what the system says about itself.',
    'why.p3': 'Because the distance between narrative and reality is not a philosophical problem. It is a technical problem with a solution.',

    // Concepts
    'concepts.title': 'Conceptual Foundations',
    'concepts.sub': 'The six axes that structure the model',
    'c1.title': 'Semantic Field',
    'c1.text': 'The space where meaning lives, organizes, and tensions. It is not static: it has direction and velocity.',
    'c2.title': 'Semantic Dynamics',
    'c2.text': 'How meaning shifts, reorganizes, or stabilizes. Change is the norm, not the exception.',
    'c3.title': 'Semantic Time',
    'c3.text': 'How a story is lived, remembered, or projected. The time of meaning is not clock time.',
    'c4.title': 'Narrative Tension',
    'c4.text': 'The forces driving the evolution of meaning. When tension exceeds a threshold, the system changes state.',
    'c5.title': 'Semantic Authority',
    'c5.text': 'The ability to influence what something means for a group. Whoever controls meaning controls the perception of reality.',
    'c6.title': 'Human–AI Interaction',
    'c6.text': 'How technical systems amplify, reflect, or distort human meaning fields. LLMs are the most relevant and least understood case.',

    // Reading domains
    'domains.title': 'Reading Domains',
    'domains.p1': 'The MCSH can be read at multiple scales: from personal narrative to the collapse of complex systems. It is a framework for anyone who needs to measure the distance between what something says it is and what it actually is.',
    'domains.p2': 'Operational applications live elsewhere. Here lives the foundation.',

    // Model in action
    'action.title': 'The Model in Action',
    'action.sub': 'From theoretical framework to applications that measure what no one had measured before.',
    'eco1.badge': '🔴 LIVE · Feb 2026',
    'eco1.title': 'Systemic Fragility Observatory',
    'eco1.text': 'MCSH applied to global systemic risk. 7-state Markov model + Monte Carlo n=10,000. 10 non-conventional indicators. Public monitor with critical convergence window May 2026.',
    'eco1.cta': 'Enter the Observatory →',
    'eco2.badge': 'Patent pending · AI Compliance',
    'eco2.title': 'SPE Audit',
    'eco2.text': 'Forensic integrity engine that certifies the temporal integrity of any file — AI outputs, corporate documents, contracts, compliance records — through cryptographic Forensic Capsules. One-click integrity certification.',
    'eco2.cta': 'Visit SPE Audit →',
    'eco3.badge': 'Patent pending · Enterprise',
    'eco3.title': 'SPE Trace',
    'eco3.text': 'Measures the distance between what a company says it is and what the market understands it to be. S(t) vs R(t). D(t) = |S(t) − R(t)|. Semantic reality for any organization.',
    'eco3.cta': 'Visit SPE Trace →',

    // Foundational note
    'note.title': 'Foundational Note',
    'note.p1.bold': 'Meaning moves.',
    'note.p1': 'It expands, contracts, tensions, bifurcates.',
    'note.p2.start': 'The MCSH was created to observe that movement with conceptual rigor and human sensitivity, keeping open the frontier between',
    'note.p2.em1': 'foundational framework',
    'note.p2.and': 'and',
    'note.p2.em2': 'subsequent operational work',

    // Documents
    'docs.title': 'Documents',
    'docs.sub': 'Public texts of the MCSH. The foundational document is published without applications or promises: as a stable reference.',
    'docs.fund.title': 'Foundational Document',
    'docs.case.title': 'Case Study',
    'docs.case.sub': 'Synthetic Bubble · Feb 2026 · PDF',
    'docs.also': 'Also available:',
    'docs.md': 'Markdown version',

    // How it began
    'origin.title': 'How it all began',
    'origin.d1.date': 'March 2024',
    'origin.d1.p1': 'is born — an auction marketplace. Trying to survive, we began measuring how language models positioned us against the competition.',
    'origin.d2.date': 'October 2025',
    'origin.d2.p1.start': 'Snipe goes to market. To validate the MCSH framework we run a',
    'origin.d2.p1.bold1': 'semantic and entropic analysis',
    'origin.d2.p1.mid': 'of over 700 companies — heat maps, k-cluster, singularity analysis. Result:',
    'origin.d2.p1.bold2': '#17 among the most singular',
    'origin.d2.p1.end': ". Ranked ahead of major platforms. With zero investment. But the market wasn't buying.",
    'origin.d3.label': 'The anomaly',
    'origin.d3.text': "Something didn't add up. Two truths were operating in parallel and they didn't match.",
    'origin.quote': 'Why does that distance exist? Who measures it? Who certifies it? No one.',
    'origin.born': 'Everything else was born from that question.',
    'origin.link': 'Read the full story →',

    // Author
    'author.title': 'Author',
    'author.role': 'Independent researcher in meaning dynamics, AI auditing, and systemic fragility.',
    'author.bio': 'Entrepreneur. Observer. Author of the MCSH. What started as an anomaly in a marketplace became a framework for measuring the distance between narrative and reality in any system.',

    // Subscribe
    'sub.title': 'Get new publications',
    'sub.desc': 'Subscribe to receive updates from the public archive (new notes, revisions, and documents).',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq1.q': 'What is the MCSH?',
    'faq1.a': 'A conceptual framework for observing the dynamics of meaning: how it is generated, how it shifts, and how it tensions across narrative, social, and technical contexts.',
    'faq2.q': 'Does the document present applications or methodologies?',
    'faq2.a': 'No. The published text is strictly foundational. It defines the conceptual framework: its scope and limits, without operational derivatives.',
    'faq3.q': "Where is the author's public statement?",
    'faq3.a': 'On the About page and in the introduction published on LinkedIn.',
    'faq4.q': 'What is the Systemic Fragility Observatory?',
    'faq4.a': 'It is the application of the MCSH to global systemic risk. A public monitor with a Markov model, Monte Carlo simulation, and 10 non-conventional indicators that no institutional dashboard publishes. Free access.',
    'faq5.q': 'What are SPE Audit and SPE Trace?',
    'faq5.a': 'They are the two commercial applications of the MCSH. SPE Audit certifies the temporal integrity of any file — AI outputs, corporate documents, contracts — with one click (speaudit.com). SPE Trace measures the semantic reality of organizations (spetrace.com).',

    // Footer
    'footer.privacy': 'Privacy',

    // Newsletter form
    'form.name': 'Name',
    'form.email': 'Email',
    'form.country': 'Country',
    'form.interest': 'Area of interest',
    'form.interest.mcsh': 'MCSH – Theoretical framework',
    'form.interest.obs': 'Observatory – Systemic fragility',
    'form.interest.spe': 'SPE – AI auditing & traceability',
    'form.interest.all': 'All',
    'form.privacy': 'I accept the',
    'form.privacy.link': 'Privacy Policy',
    'form.submit': 'Subscribe',
    'form.sending': 'Sending...',
    'form.error': 'Error sending. Please try again.',
    'form.done.title': 'Subscribed',
    'form.done.desc': "You'll receive the next MCSH publications.",
  },
  es: {
    // Nav
    'nav.subtitle': 'Archivo público · Texto fundacional · Autoría: Rubén Abella',

    // Hero
    'hero.title1': 'El significado se mueve.',
    'hero.title2': 'Ahora se puede medir.',
    'hero.model': 'Modelo del Campo Semántico Humano (MCSH)',
    'hero.desc': 'Un marco para observar la distancia entre lo que se dice y lo que es. Entre la narrativa y la realidad. Entre el sistema y su verdad.',
    'hero.cta1': 'Leer el documento fundacional',
    'hero.cta2': 'Recibir nuevas publicaciones',
    'hero.obs.state': 'Estado',

    // What is MCSH
    'what.title': '¿Qué es el MCSH?',
    'what.p1': 'El MCSH es un marco conceptual que observa cómo el significado se genera, se transforma y se sostiene a lo largo del tiempo. No describe palabras aisladas: describe',
    'what.p1.bold': 'campos de significado',
    'what.p1.end': ', su dinámica, sus tensiones y su dirección.',
    'what.p2.start': 'Propone una métrica para algo que siempre existió pero nunca se había formalizado:',
    'what.p2.bold': 'la distancia entre lo que un sistema dice que es y lo que realmente es',
    'what.p3': 'Este sitio existe como referencia estable del texto fundacional y de sus notas públicas asociadas.',

    // Why now
    'why.title': '¿Por qué ahora?',
    'why.p1': 'Los modelos de lenguaje se han convertido en estructuradores de verdad. Gobiernos, mercados e instituciones operan sobre narrativas que no siempre coinciden con la realidad estructural subyacente.',
    'why.p2': 'El MCSH propone medir esa distancia. Con rigor. Con matemática. Sin depender de lo que el sistema dice sobre sí mismo.',
    'why.p3': 'Porque la distancia entre la narrativa y la realidad no es un problema filosófico. Es un problema técnico con solución.',

    // Concepts
    'concepts.title': 'Fundamentos conceptuales',
    'concepts.sub': 'Los seis ejes que estructuran el modelo',
    'c1.title': 'Campo semántico',
    'c1.text': 'El espacio donde vive, se organiza y se tensiona el significado. No es estático: tiene dirección y velocidad.',
    'c2.title': 'Dinámica semántica',
    'c2.text': 'Cómo el significado se desplaza, se reorganiza o se estabiliza. El cambio es la norma, no la excepción.',
    'c3.title': 'Tiempo semántico',
    'c3.text': 'Cómo una historia se vive, se recuerda o se proyecta. El tiempo del significado no es el tiempo del reloj.',
    'c4.title': 'Tensión narrativa',
    'c4.text': 'Las fuerzas que impulsan la evolución del significado. Cuando la tensión supera un umbral, el sistema cambia de estado.',
    'c5.title': 'Autoridad semántica',
    'c5.text': 'La capacidad de influir en lo que algo significa para un grupo. Quien controla el significado, controla la percepción de la realidad.',
    'c6.title': 'Interacción humano–IA',
    'c6.text': 'Cómo los sistemas técnicos amplifican, reflejan o distorsionan campos de significado humanos. Los LLMs son el caso más relevante y menos comprendido.',

    // Reading domains
    'domains.title': 'Ámbitos de lectura',
    'domains.p1': 'El MCSH puede leerse en múltiples escalas: desde la narrativa personal hasta el colapso de sistemas complejos. Es un marco para cualquiera que necesite medir la distancia entre lo que algo dice que es y lo que realmente es.',
    'domains.p2': 'Las aplicaciones operativas viven en otro lugar. Aquí vive el fundamento.',

    // Model in action
    'action.title': 'El modelo en acción',
    'action.sub': 'Del marco teórico a aplicaciones que miden lo que nadie había medido antes.',
    'eco1.badge': '🔴 LIVE · Feb 2026',
    'eco1.title': 'Systemic Fragility Observatory',
    'eco1.text': 'Aplicación del MCSH al riesgo sistémico global. Modelo Markov 7 estados + Monte Carlo n=10.000. 10 indicadores no convencionales. Monitor público con ventana crítica mayo 2026.',
    'eco1.cta': 'Acceder al Observatory →',
    'eco2.badge': 'Patente en curso · Compliance IA',
    'eco2.title': 'SPE Audit',
    'eco2.text': 'Motor de integridad forense que certifica la integridad temporal de cualquier archivo — outputs de IA, documentos corporativos, contratos, registros de compliance — mediante Cápsulas Forenses criptográficas. Certificación de integridad a un solo clic para cualquier empresa.',
    'eco2.cta': 'Ver SPE Audit →',
    'eco3.badge': 'Patente en curso · Empresas',
    'eco3.title': 'SPE Trace',
    'eco3.text': 'Mide la distancia entre lo que una empresa dice que es y lo que el mercado entiende que es. S(t) vs R(t). D(t) = |S(t) − R(t)|. Realidad semántica para cualquier organización.',
    'eco3.cta': 'Ver SPE Trace →',

    // Foundational note
    'note.title': 'Nota fundacional',
    'note.p1.bold': 'El significado se mueve.',
    'note.p1': 'Se expande, se contrae, se tensa, se bifurca.',
    'note.p2.start': 'El MCSH nace para observar ese movimiento con rigor conceptual y sensibilidad humana, manteniendo abierta la frontera entre',
    'note.p2.em1': 'marco fundacional',
    'note.p2.and': 'y',
    'note.p2.em2': 'trabajo operativo posterior',

    // Documents
    'docs.title': 'Documentos',
    'docs.sub': 'Textos públicos del MCSH. El documento fundacional se publica sin aplicaciones ni promesas: como referencia estable.',
    'docs.fund.title': 'Documento Fundacional',
    'docs.case.title': 'Caso de Estudio',
    'docs.case.sub': 'Burbuja Sintética · Feb 2026 · PDF',
    'docs.also': 'También disponible:',
    'docs.md': 'versión Markdown',

    // How it began
    'origin.title': 'Cómo empezó todo',
    'origin.d1.date': 'Marzo 2024',
    'origin.d1.p1': 'nace — un marketplace de subastas. Intentando sobrevivir, empezamos a medir cómo nos posicionaban los modelos de lenguaje frente a la competencia.',
    'origin.d2.date': 'Octubre 2025',
    'origin.d2.p1.start': 'Snipe sale al mercado. Para validar la propuesta del MCSH hacemos un',
    'origin.d2.p1.bold1': 'estudio semántico y entrópico',
    'origin.d2.p1.mid': 'de más de 700 empresas — mapas de calor, k-cluster, análisis de singularidad. Resultado:',
    'origin.d2.p1.bold2': '#17 entre las más singulares',
    'origin.d2.p1.end': '. Posicionados por delante de grandes plataformas. Con cero inversión. Pero el mercado no compraba.',
    'origin.d3.label': 'La anomalía',
    'origin.d3.text': 'Algo no cuadraba. Había dos verdades operando en paralelo y no coincidían.',
    'origin.quote': '¿Por qué existe esa distancia? ¿Quién la mide? ¿Quién la certifica? Nadie.',
    'origin.born': 'De esa pregunta nació todo lo demás.',
    'origin.link': 'Leer la historia completa →',

    // Author
    'author.title': 'Autoría',
    'author.role': 'Investigación independiente en dinámica del significado, auditoría de IA y fragilidad sistémica.',
    'author.bio': 'Emprendedor. Observador. Autor del MCSH. Lo que empezó como una anomalía en un marketplace acabó siendo un framework para medir la distancia entre narrativa y realidad en cualquier sistema.',

    // Subscribe
    'sub.title': 'Recibir nuevas publicaciones',
    'sub.desc': 'Registro para recibir actualizaciones del archivo público (nuevas notas, revisiones y documentos).',

    // FAQ
    'faq.title': 'Preguntas frecuentes',
    'faq1.q': '¿Qué es el MCSH?',
    'faq1.a': 'Un marco conceptual para observar la dinámica del significado: cómo se genera, se desplaza y se tensiona en contextos narrativos, sociales y técnicos.',
    'faq2.q': '¿El documento presenta aplicaciones o metodologías?',
    'faq2.a': 'No. El texto publicado es estrictamente fundacional. Delimita el marco conceptual: explícita sus alcances y límites, sin derivadas operativas.',
    'faq3.q': '¿Dónde está la declaración pública del autor?',
    'faq3.a': 'En la página About y en la presentación publicada en LinkedIn.',
    'faq4.q': '¿Qué es el Systemic Fragility Observatory?',
    'faq4.a': 'Es la aplicación del MCSH al riesgo sistémico global. Un monitor público con modelo Markov, Monte Carlo y 10 indicadores no convencionales que ningún dashboard institucional publica. Acceso gratuito.',
    'faq5.q': '¿Qué son SPE Audit y SPE Trace?',
    'faq5.a': 'Son las dos aplicaciones comerciales del MCSH. SPE Audit certifica la integridad temporal de cualquier archivo — outputs de IA, documentos corporativos, contratos — a un solo clic (speaudit.com). SPE Trace mide la realidad semántica de organizaciones (spetrace.com).',

    // Footer
    'footer.privacy': 'Privacidad',

    // Newsletter form
    'form.name': 'Nombre',
    'form.email': 'Correo electrónico',
    'form.country': 'País',
    'form.interest': 'Área de interés',
    'form.interest.mcsh': 'MCSH – Marco teórico',
    'form.interest.obs': 'Observatory – Fragilidad sistémica',
    'form.interest.spe': 'SPE – Auditoría y trazabilidad IA',
    'form.interest.all': 'Todo',
    'form.privacy': 'Acepto la',
    'form.privacy.link': 'Política de Privacidad',
    'form.submit': 'Registro',
    'form.sending': 'Enviando...',
    'form.error': 'Error al enviar. Inténtalo de nuevo.',
    'form.done.title': 'Registrado',
    'form.done.desc': 'Recibirás las próximas publicaciones del MCSH.',
  },
};
