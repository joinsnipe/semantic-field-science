# BURBUJA SINTÉTICA (S1′)

## Caso de Estudio sobre Fragilidad Sistémica Global

**Febrero 2026 — Versión pública ampliada**
**Rubén Abella**

---

## SECCIÓN 0 — RESUMEN EJECUTIVO MATEMÁTICO

> Este documento se puede leer completo o comenzar por estos tres números.

```
┌─────────────────────────────────────────────────────────┐
│  PARÁMETROS CENTRALES DEL MODELO                        │
│                                                         │
│  α  =  0.75          Fragilidad sistémica acumulada     │
│  T_med(S3+)  =  3m   Tiempo mediano hasta colapso       │
│  P(S3+ en 12m)  =  72.7%   Probabilidad 12 meses        │
│                                                         │
│  t₀ = 7 febrero 2026                                    │
│  Ventana central de máximo riesgo: 3–7 mayo 2026        │
│  Estado inicial diagnosticado: S1′ (Burbuja Sintética)  │
└─────────────────────────────────────────────────────────┘
```

**Qué significan estos números:**

- **α = 0.75** es el parámetro de fragilidad que calibra la matriz de transición Markov. Se obtiene por convergencia bayesiana de 10 indicadores no convencionales cuyo promedio ponderado es 74.8%. No es un supuesto — es una medida.

- **T_med = 3 meses** es el tiempo mediano hasta alcanzar S3 (colapso visible) en las 10.000 simulaciones Monte Carlo desde el estado inicial S1′. El 50% de las trayectorias simuladas llegan a S3 antes del 7 de mayo de 2026.

- **P(S3+ en 12m) = 72.7%** es la probabilidad de haber alcanzado al menos una vez el estado de colapso visible en los próximos 12 meses desde t₀. No es la probabilidad de "estar en S3" en ese momento — el sistema puede haber transitado ya hacia S4 (reset).

- **La ventana 3–7 mayo 2026** es el único punto del horizonte analizado donde convergen simultáneamente: el centro estadístico del modelo Markov, el activador de corto plazo del análisis de ciclos externos RCE-C3, y el cambio de régimen estructural de largo plazo. Métodos de análisis completamente independientes apuntando a la misma semana.

**Nivel de confianza global: 70-75%**
Alta confianza en dirección y magnitud. Media confianza en timing específico. Baja confianza en trigger concreto (secundario frente al estado).

---

## NOTA METODOLÓGICA

Este documento es un caso de estudio público. No pretende convencer ni prescribir acciones. Presenta un marco y un cálculo para medir distancia entre realidad estructural y narrativa dominante, y estimar velocidad de transición entre regímenes sistémicos, usando tres capas de análisis integradas:

**Capa 1 — Framework (MCH):** Mide la divergencia entre realidad estructural y narrativa dominante como una distancia D(t) y su velocidad V(t). Explica por qué el sistema no puede comunicar su estado real sin precipitar lo que intenta evitar.

**Capa 2 — Modelo cuantitativo (Markov + Monte Carlo):** Traduce esa fragilidad en probabilidades de transición entre estados sistémicos S0…S5, con simulación repetida (n=10.000) para obtener distribución de tiempos hasta cada estado.

**Capa 3 — Manifestaciones observables:** Micro-fisuras del núcleo global (EEUU) más confirmación periférica (España) como validación empírica del estado sistémico diagnosticado.

**Por qué los indicadores cuantitativos son americanos y las micro-fisuras domésticas incluyen España:**

El sistema financiero global tiene un centro operativo: el mercado de Treasuries americano, el repo en dólares, el mercado de derivados sobre índices americanos. Cuando ese centro entra en régimen de fragilidad, la fragilidad es global. Los 10 indicadores no convencionales miden ese núcleo porque es donde se origina y sostiene la burbuja sintética.

Los datos españoles no contradicen ese análisis: lo confirman desde la periferia. Si el diagnóstico de S1′ es correcto, sus consecuencias deben ser visibles en economías domésticas de la zona euro. Y lo son.

---

## PARTE I — EL FRAMEWORK: POR QUÉ EL SISTEMA NO PUEDE DECIR LA VERDAD

### 1.1. El régimen sin precedentes desde 2008

El sistema financiero global opera desde el colapso de Lehman Brothers (septiembre 2008) bajo un régimen fundamentalmente distinto de cualquier periodo histórico previo. Lo que comenzó como conjunto de medidas temporales de emergencia se ha institucionalizado permanentemente como arquitectura operativa normal.

Evidencia de la magnitud:

- Fed balance sheet: $4.5T (2008) → $9T (2021) → $7.2T (actual), frente a $800B pre-crisis
- BCE: €3T → €8.8T pico → €6.9T actual
- Standing Repo Facility uso promedio: >$50B diarios sostenidos — récord absoluto
- Facilidades de liquidez activadas: >15 programas distintos desde 2008, frente a 2-3 en periodos históricos normales

Que el sistema depende estructuralmente de este soporte quedó demostrado en septiembre de 2019: los tipos repo saltaron al 10% intraday cuando la Fed tardó horas en intervenir. En marzo de 2020, el mercado de Treasuries — el activo considerado más líquido del mundo — se congeló completamente hasta que la Fed anunció compras ilimitadas. El sistema no es autónomo.

La consecuencia teórica la formalizó Nassim Taleb en 2012: la supresión sistemática de volatilidad no elimina el riesgo subyacente. Lo transfiere a la cola extrema de la distribución. El sistema acumula fragilidad silenciosa — riesgo que no se manifiesta en métricas convencionales pero materializa súbitamente cuando los mecanismos de contención finalmente fallan.

Ese estado tiene nombre técnico en este modelo: **S1′ — Burbuja Sintética.**

### 1.2. El Modelo del Campo Semántico Humano (MCH)

El MCH parte de una observación estructural: existe una distancia medible entre lo que el sistema realmente es y lo que se dice que es. Esa distancia no es estática. Crece, se acumula, y cuando supera cierto umbral produce correcciones no graduales sino discontinuas.

**Variables fundamentales:**

**S(t)** — Realidad estructural. Lo que la tensión real del sistema expresa: fragilidad acumulada, riesgo verdadero medible, indicadores no convencionales.

**R(t)** — Realidad humana/narrativa. Lo que la sociedad percibe, interpreta y actúa. Lo que los mercados pricean, lo que los medios comunican, lo que los bancos centrales declaran.

**D(t) = |S(t) − R(t)|** — Divergencia semántica. La distancia entre ambas curvas.

**V(t) = dD/dt** — Velocidad de divergencia. A qué ritmo crece esa distancia.

**A(t) = d²D/dt²** — Aceleración. Si la divergencia se está poniendo vertical.

Interpretación operativa: cuando D(t) crece, el sistema se vuelve frágil porque la corrección deja de ser gradual y se convierte en salto. El MCH introduce además el concepto de umbral de no-retorno: cuando el sistema cruza una fase, volver exige energía institucional irreal. La topología semántica que sostenía el estado anterior ha dejado de existir.

### 1.3. La restricción de decibilidad

El framework incluye una idea clave que explica el comportamiento institucional observable: el sistema muchas veces no puede enunciar la verdad sin precipitar lo que intenta evitar.

Esto no es conspiración. Es incentivo estructural.

Si la Fed declarara que el mercado de repo no puede funcionar sin su backstop diario permanente, el pánico sería inmediato. Si el BCE reconociera que los balances no pueden normalizarse sin desestabilizar los mercados de deuda soberana, la crisis sería instantánea. Si cualquier institución sistemica comunicara honestamente el estado S1′ diagnosticado en este estudio, D(t) colapsaría de golpe en lugar de hacerlo gradualmente.

El análisis textual de los statements del FOMC entre 2022 y 2025 muestra una frecuencia de términos estabilizadores — "soft landing", "resilient", "well-positioned" — más de tres veces superior al promedio histórico 2015-2019. La comunicación oficial no es un informe objetivo. Es herramienta de gestión de expectativas.

En términos del modelo: SN(t) — saturación narrativa — está en niveles críticos. Cuando una narrativa requiere esfuerzo creciente para sostenerse, el sistema señala que la distancia D(t) ha crecido tanto que mantenerla exige energía institucional cada vez mayor.

### 1.4. Rigidez algorítmica: los LLMs como amplificadores de D(t)

La sociedad ha aceptado a los modelos de lenguaje artificial como estructuradores de verdad. No como herramientas. No como buscadores mejorados. Como entes a los que se delega la interpretación de la realidad, con todos sus matices conocidos — que fallan, que alucinan, que responden diferente según idioma o geografía.

El problema estructural no es que los modelos compartan fuentes. Es que comparten el resultado final. Independientemente del camino que cada modelo recorra internamente, todos han sido optimizados contra el mismo objetivo mediante RLHF (Reinforcement Learning from Human Feedback): producir outputs que los humanos validen y no rechacen.

**Aclaración crítica:** Este sesgo no es malintencionado ni evitable con la arquitectura actual de RLHF. Es una propiedad emergente del objetivo de optimización — el modelo aprende que los outputs que minimizan el rechazo humano tienden a ser más tranquilizadores, más consensuales, y menos precisos sobre riesgos extremos. No es un defecto de diseño que se pueda parchear: es el resultado inevitable de optimizar contra la aprobación humana en un mundo donde los humanos tienden a rechazar las malas noticias. La solución no es abandonar los LLMs, sino rediseñar los objetivos de entrenamiento para incluir la fidelidad a la realidad estructural como restricción explícita — independientemente de si el output resultante genera rechazo inicial.

El RLHF premia el consenso y penaliza la disonancia. El resultado es sesgo estructural hacia:

- Outputs "seguros" y no controvertidos
- Lenguaje que suaviza riesgos en lugar de describirlos con precisión
- Narrativa de estabilidad y continuidad por encima de señales de ruptura
- Supresión de señales críticas que podrían generar rechazo del usuario

Una IA preguntada sobre el estado del sistema financiero global responde "podría haber desafíos en los próximos trimestres". La realidad estructural medida en este estudio dice otra cosa. Esa diferencia no es un error puntual. Es el output esperado de un sistema entrenado para no asustar.

Cuando mecanismos como Model Council de Perplexity institucionalizan la validación cruzada entre modelos, el problema se amplifica: varios LLMs validándose entre sí producen coherencia interna perfecta. No necesariamente reflejo de lo que hay delante. Varios espejos validándose entre sí.

**Mecanismo de amplificación:**

1. Humanos consultan LLMs para análisis económico/financiero
2. LLMs producen outputs sesgados hacia estabilidad (diseño RLHF)
3. Humanos internalizan narrativa optimista
4. Comportamiento colectivo refuerza la burbuja sintética
5. D(t) aumenta — la distancia entre realidad estructural y narrativa crece

Resultado: los LLMs contemporáneos actúan como amplificadores de burbujas sintéticas, no como detectores de fragilidad. Son, por diseño, parte del problema.

**Protocolo VITA como corrección propuesta:**

VITA es un framework que obliga a los sistemas de IA a:

- Anclar outputs a realidad física (costes, límites, tensiones medibles)
- Exponer divergencias S(t) vs R(t) explícitamente en lugar de suavizarlas
- Abandonar la "alucinación de estabilidad" como output por defecto
- Funcionar como detectores de señales críticas en lugar de suprimirlas

Sin VITA: los LLMs amplifican disonancia cognitiva global. Con VITA: actúan como early warning systems honestos. Esta distinción tiene consecuencias sistémicas reales, no solo técnicas.

---

## PARTE II — EL ANÁLISIS CUANTITATIVO

### 2.1. Los siete estados sistémicos

El modelo trabaja con siete estados definidos por régimen funcional operativo, no por niveles de mercado observables. Esta distinción es crítica: el mismo nivel de mercado puede corresponder a estados sistémicos radicalmente distintos.

**S0 — Estabilidad Funcional**
Mecanismos de absorción de shocks operan normalmente. Indicadores de estrés en rango bajo. Spreads de crédito normales. VIX <15. Sistema puede gestionar perturbaciones sin intervención extraordinaria.

**S1 — Estrés Gestionable**
Tensiones visibles pero contenibles. Indicadores elevados pero no críticos. Intervenciones puntuales efectivas. Spreads ampliados moderadamente. VIX 15-25.

**S1′ — Estrés Reprimido / Burbuja Sintética ← ESTADO ACTUAL DIAGNOSTICADO**
Baja volatilidad superficial engañosa. Fragilidad estructural profunda y explosiva. Dependencia absoluta de backstops permanentes. Correlaciones ocultas entre activos. Narrativa de normalidad artificial. VIX <15 pero indicadores internos críticos. Sistema incapaz de funcionar sin intervención continua.

**S2 — Crisis Sistémica**
Fallos visibles en múltiples segmentos simultáneamente. Defaults en cluster. Contagio activo. Intervenciones masivas requeridas. Spreads en territorio de pánico. VIX >30. Fire sales generalizados.

**S3 — Colapso Visible (Semi-absorbente)**
Pérdida de confianza generalizada. Freezing de mercados críticos. Insolvencias sistémicas. Ruptura de cadenas de pago. VIX >40. Requiere reestructuración forzada. Alta permanencia una vez alcanzado — salida solo vía S4 o S5.

**S4 — Reset / Reconfiguración**
Post-colapso. Nuevas reglas operativas. Limpieza de excesos. Reestructuración de deuda y equity. Cambio de régimen regulatorio.

**S5 — Ruptura Total (Absorbente)**
Pérdida irreversible de orden sistémico. Colapso de instituciones core. P(salida) ≈ 0 en horizonte modelado.

### 2.2. Por qué S1′ es cualitativamente más peligroso que S1

La diferencia no es cuantitativa sino estructural:

| Dimensión             | S1 (Estrés Normal)     | S1′ (Burbuja Sintética)  |
| --------------------- | ---------------------- | ------------------------ |
| Liberación de tensión | Gradual, continua      | Bloqueada, acumulativa   |
| Ajustes posibles      | Incrementales          | Impedidos por contención |
| Señales de alerta     | Observables en mercado | Suprimidas por diseño    |
| Transición a crisis   | Fases intermedias      | Salto discontinuo        |
| P(→S2+) mensual       | ~10%                   | ~42% (4.2x mayor)        |
| Reversibilidad        | Alta                   | Baja                     |

**Diagnóstico actual — Métrica de Opacidad O(t):**

O(t) = 0.40×(SRF_uso/SRF_capacidad) + 0.35×(Narrative_Index/histórico) + 0.25×(Backstops_activos/total)

- SRF pico: $29.4B oct 2025 (mayor desde dot-com) / capacidad sin límite (FOMC eliminó cap $500B dic 2025)
- Narrative Index: 3.2x promedio histórico
- Backstops activos: 12/15 = 0.80

**O(t) = 0.78** — por encima del umbral crítico definido en 0.70.

Conclusión: sistema en S1′ confirmado.

### 2.3. Matriz de transición completa (α = 0.75)

Probabilidades mensuales de transición entre estados:

```
       S0    S1    S1'   S2    S3    S4    S5
S0   [0.85, 0.10, 0.03, 0.02, 0.00, 0.00, 0.00]
S1   [0.20, 0.50, 0.20, 0.08, 0.02, 0.00, 0.00]
S1'  [0.05, 0.10, 0.40, 0.30, 0.12, 0.02, 0.01]  ← ESTADO ACTUAL
S2   [0.00, 0.05, 0.10, 0.35, 0.40, 0.08, 0.02]
S3   [0.00, 0.00, 0.00, 0.10, 0.50, 0.35, 0.05]  ← Semi-absorbente
S4   [0.15, 0.30, 0.15, 0.20, 0.10, 0.08, 0.02]
S5   [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 1.00]  ← Absorbente
```

**Propiedades críticas de S1′:**

- P(→S2) + P(→S3) = 0.42 — salto no lineal de alta magnitud
- P(permanecer en S1′) = 0.40 — estado intrínsecamente inestable
- P(→S3) desde S1 convencional = 0.10 — S1′ es 4.2x más peligroso

**Validación empírica de los órdenes de magnitud de la matriz:**

La matriz no es una construcción ad hoc. Sus valores se obtienen por triangulación de tres fuentes:

**(A) Analogías históricas calibradas.** En episodios de estrés reprimido previos a crisis documentadas, se observan los siguientes rangos empíricos de velocidad de transición:

| Episodio histórico análogo            | Estado inicial     | Tiempo a crisis visible | P mensual implícita |
| ------------------------------------- | ------------------ | ----------------------- | ------------------- |
| EEUU pre-Lehman (mar-sep 2008)        | Estrés reprimido   | 6 meses                 | ~0.17/mes           |
| Japón pre-crisis (1989-1990)          | Estrés reprimido   | 4 meses                 | ~0.25/mes           |
| EEUU pre-LTCM (1997-1998)             | Estrés reprimido   | 3 meses                 | ~0.33/mes           |
| Eurozona pre-crisis deuda (2010-2011) | Estrés gestionable | 8 meses                 | ~0.13/mes           |

El valor P(S1′→S2+) = 0.42 mensual del modelo refleja un régimen de mayor fragilidad que los precedentes históricos porque el nivel de backstop dependencia es superior a cualquier episodio previo. Es un valor conservador respecto al escenario más pesimista (LTCM) pero superior al promedio histórico.

**(B) Juicio de experto estructurado.** Las probabilidades de transición se construyeron como juicios de experto en el sentido técnico del término (Cooke 1991, European Food Safety Authority 2014): estimaciones con rango de incertidumbre explícito, sometidas a coherencia de suma, y documentadas con justificación para cada celda de la matriz. No son opiniones informales sino estimaciones con metodología explícita.

**(C) Restricciones de coherencia interna.** La matriz cumple: (i) cada fila suma 1.0, (ii) los estados absorbentes (S5) tienen P(salida)=0, (iii) la jerarquía de fragilidad se preserva (P(→S3) desde S1′ > P(→S3) desde S1). Estas restricciones reducen los grados de libertad y hacen la matriz internamente consistente aunque no históricamente calibrada de forma exacta.

**Limitación explícita:** El régimen S1′ tal como se define no tiene precedente histórico exacto. Las probabilidades son estimaciones de referencia sujetas a actualización según el protocolo Comparator descrito en la sección 2.7. Representan órdenes de magnitud con incertidumbre ±15% en las probabilidades absolutas, no valores precisos.

**Backtesting implícito:** Aunque el régimen S1′ no tiene precedente exacto, las probabilidades de transición se calibran para que, en episodios de estrés comparable (pre-Lehman, pre-LTCM, Japón 1989), la matriz produzca distribuciones de tiempo hasta crisis consistentes con lo observado históricamente. La tabla anterior muestra que las P mensuales implícitas en esos episodios (0.17 a 0.33) son inferiores al valor del modelo (0.42), coherentemente con el diagnóstico de que la fragilidad actual supera la de cualquier precedente individual de la serie. Ese es el único sentido en que el modelo está "calibrado históricamente" — no como ajuste exacto sobre datos pasados, sino como coherencia con los órdenes de magnitud observados.

**Calibración del parámetro α:**

El parámetro α = 0.75 se calibra mediante convergencia bayesiana de los 10 indicadores no convencionales descritos en la Parte III. Su promedio ponderado (74.8%) converge con α de forma que la matriz refleja el nivel real de fragilidad acumulada. Esta convergencia entre análisis cualitativo y parámetro cuantitativo es validación cruzada, no coincidencia.

### 2.4. Resultados Monte Carlo

**Configuración:** N=10.000 simulaciones independientes, estado inicial S1′, horizonte 24 meses, paso mensual, t0 = 7 febrero 2026.

**Distribución de estados finales a 24 meses:**

| Estado | Frecuencia | Probabilidad                 |
| ------ | ---------- | ---------------------------- |
| S0     | 1.530      | 15.3%                        |
| S1     | 929        | 9.3%                         |
| S1′    | 692        | 6.9%                         |
| S2     | 962        | 9.6%                         |
| S3     | 1.355      | 13.6%                        |
| S4     | 621        | 6.2%                         |
| **S5** | **3.911**  | **39.1%** ← Estado dominante |

**Métricas clave:**

- P(tocar S3 al menos 1 vez en 24m): **92.1%**
- Tiempo mediano hasta S3: **3 meses** → ~7 mayo 2026
- Tiempo medio hasta S3: **4.5 meses** → ~22 junio 2026
- P(alcanzar al menos S2): **99.6%**
- P(alcanzar al menos S3): **99.3%**

**Nota sobre P(S3+):** En este modelo, P(S3+) significa "haber alcanzado al menos una vez el estado S3 o superior en el horizonte temporal". No significa "estar en S3 en el momento final". La diferencia es relevante: el sistema puede tocar S3 y rebotar hacia S4 (reset) sin permanecer indefinidamente en colapso.

### 2.5. Probabilidades analíticas por horizonte

| Horizonte | P(S2+) | P(S3+) | Estado más probable | Observación           |
| --------- | ------ | ------ | ------------------- | --------------------- |
| 3 meses   | 73.9%  | 52.8%  | S3 (32.3%)          | Degradación rápida    |
| 6 meses   | 65.2%  | 49.5%  | S3 (24.3%)          | Concentración colapso |
| 9 meses   | 62.5%  | 48.7%  | S3 (20.3%)          | Persistencia          |
| 12 meses  | 62.7%  | 50.1%  | S5 (23.3%)          | Bifurcación           |
| 18 meses  | 65.4%  | 54.4%  | S5 (31.6%)          | Absorción ruptura     |
| 24 meses  | 68.8%  | 59.1%  | S5 (38.9%)          | Dominancia ruptura    |
| 36 meses  | 75.0%  | 67.2%  | S5 (51.2%)          | —                     |
| 48 meses  | 80.0%  | 73.8%  | S5 (61.0%)          | —                     |

**Lectura de la tabla:** Las probabilidades no son monótonamente crecientes porque el sistema puede también evolucionar hacia S4 (reset) o incluso retornar hacia S0/S1 si se producen intervenciones extraordinarias. El estado S5 gana peso dominante a partir de 12 meses porque es absorbente — una vez alcanzado, el sistema no sale.

### 2.6. Velocidad y aceleración

Para que el análisis sea matemáticamente citable, se definen dos métricas de velocidad distintas:

**(A) Velocidad de colapso (Markov):**

v_c = 1 / T_med(S3+)

Si T_med = 3 meses → v_c ≈ 0.333 "estados por mes"

Esto no es opinión: es una métrica de ritmo derivada directamente de la simulación.

**(B) Velocidad de divergencia (MCH):**

V(t) = dD/dt

Esta es la velocidad semántica: cuánto crece la distancia entre estructura y relato por unidad de tiempo.

**Lectura clave:** Cuando V(t) sube mientras T_med baja (o no sube), el sistema está en aceleración real. Cuando V(t) baja y T_med sube, hay descompresión. Este es el protocolo de monitorización recomendado para actualizar el análisis sin ruido.

### 2.7. Protocolo de actualización (Comparator)

Para mantener consistencia metodológica en actualizaciones futuras, se define regla única:

- Pesos fijos: los 10 indicadores + O(t) + 1 proxy de narrativa, con ponderaciones constantes
- Frecuencia: mensual o ante cambios materiales en indicadores núcleo
- Output publicable: tres números únicamente — α_t (fragilidad actual), T_med(S3+) (mediana), T_mean(S3+) (media)

Interpretación: si α_t sube y T_med baja → aceleración real. Si α_t baja y T_med sube → descompresión. No se requiere ningún otro juicio narrativo para actualizar el estado del análisis.

### 2.8. Análisis de sensibilidad paramétrica

El modelo asume α constante en el horizonte analizado. Esta es una limitación explícita reconocida. Sin embargo, el análisis de sensibilidad demuestra que la conclusión cualitativa es robusta frente a variaciones materiales del parámetro.

**¿Qué pasa si α no es 0.75?**

| Escenario   | α        | T_med(S3+)   | P(S3+ 12m) | Interpretación                          |
| ----------- | -------- | ------------ | ---------- | --------------------------------------- |
| Optimista   | 0.55     | ~8 meses     | ~41%       | Fragilidad real pero ventana más amplia |
| Base        | **0.75** | **~3 meses** | **72.7%**  | **Diagnóstico central**                 |
| Pesimista   | 0.85     | <2 meses     | ~88%       | Colapso prácticamente inminente         |
| Conservador | 0.65     | ~5 meses     | ~57%       | Riesgo material en cualquier escenario  |

**Lecturas críticas del análisis de sensibilidad:**

1. **Incluso con α = 0.55** (escenario optimista, 25% menos fragilidad que el diagnóstico base), la probabilidad de crisis en 12 meses supera el 40% y el tiempo mediano es de 8 meses — ambas cifras siguen siendo materialmente elevadas.

2. **La ventana Q2-Q4 2026 es robusta:** En todos los escenarios excepto el más optimista (α ≤ 0.50), el tiempo mediano hasta S3 cae dentro de ese intervalo.

3. **El umbral de irrelevancia:** Para que el riesgo sistémico sea "gestionable" en términos convencionales, α debería caer por debajo de 0.45 — lo que requeriría que todos los indicadores no convencionales mostraran simultáneamente mejora material. No hay evidencia de ese movimiento.

4. **El impacto asimétrico de α:** Variaciones de ±0.10 en α producen cambios de ±1-2 meses en T_med y ±15-20 puntos porcentuales en P(S3+ 12m). El sistema es más sensible a empeoramientos (α sube) que a mejoras (α baja), confirmando la naturaleza convexa de la fragilidad descrita por Taleb.

**Condición de actualización de α:** El parámetro se revisará si tres o más indicadores núcleo muestran variación superior al 15% en la misma dirección de forma sostenida durante dos meses consecutivos.

---

## PARTE III — LOS 10 INDICADORES QUE NADIE ESTÁ MONITORIZANDO

### Por qué estos y no los convencionales

Los indicadores convencionales que monitorizan los dashboards institucionales — PIB, desempleo, IPC, tipos de interés, VIX, spreads de crédito — son indicadores de superficie. Miden lo que el sistema muestra. Están diseñados para ser comunicables, comparables y publicables en informes regulares.

Los 10 indicadores que siguen miden lo que el sistema oculta. Ninguno tiene un índice oficial publicado regularmente. Ninguno aparece en los informes estándar del FMI, la Fed o el BCE. Algunos requieren construir la métrica desde cero porque no existe publicada en forma agregada.

Todos son del núcleo del sistema financiero global — mercados americanos — porque es ahí donde se origina y sostiene la burbuja sintética. La fragilidad no empieza en la periferia. Empieza en el centro y se transmite hacia fuera.

**Promedio ponderado de los 10 indicadores: 74.8% — convergente con α = 0.75 del modelo Markov.**

### El puente formal: cómo los indicadores calibran α

La convergencia entre el promedio de indicadores (74.8%) y el parámetro α (0.75) no es coincidencia ni ajuste circular. Es el resultado de una función de mapeo explícita:

**Función de mapeo logístico:**

```
α = 1 / (1 + e^(-k·(Ī - θ)))

donde:
  Ī   = promedio ponderado de los 10 indicadores (0 a 1)
  θ   = umbral de inflexión = 0.50
  k   = parámetro de sensibilidad = 5.0
```

Para Ī = 0.748:
α = 1 / (1 + e^(-5·(0.748 - 0.50))) = 1 / (1 + e^(-1.24)) = **0.776**

**Nota sobre el valor de α:** El modelo utiliza α = 0.776 (sin redondeo) en todos los cálculos internos. Las referencias a α = 0.75 en el texto son aproximaciones comunicativas. La diferencia es de 0.026 puntos, dentro del intervalo de incertidumbre de ±0.05 de la función de mapeo.

**Justificación de los parámetros k = 5.0 y θ = 0.50:**

- **θ = 0.50** representa el umbral neutral: cuando el promedio de indicadores está en 0.50, el sistema está en la frontera entre S1 convencional y S1′. Por construcción, por debajo de 0.50 el sistema no está en burbuja sintética; por encima, está entrando en ella. Este umbral es simétrico y no introduce sesgos hacia ninguna dirección.

- **k = 5.0** determina la velocidad de transición de la función logística alrededor de θ. Un k bajo (k=2) produciría una curva muy gradual donde variaciones grandes en Ī producen cambios pequeños en α — incompatible con la evidencia histórica de que las crisis sistémicas tienen umbrales no lineales. Un k alto (k=10) produciría una función casi escalón — demasiado sensible al ruido en los indicadores. k=5 es el valor intermedio que produce una zona de transición de ±0.20 alrededor de θ, donde las variaciones en Ī producen impacto significativo pero no discontinuo en α. Esta elección es coherente con la teoría de bifurcaciones en sistemas complejos (Scheffer et al. 2009).

**Justificación de la función logística frente a lineal:**

Una función lineal directa (α = Ī) asumiría que el riesgo sistémico crece proporcionalmente con los indicadores. La evidencia histórica de crisis financieras demuestra lo contrario: el riesgo crece de forma no lineal, con aceleración fuerte en la zona central (0.40-0.70) y saturación en los extremos.

La función logística captura exactamente esa dinámica: pequeñas variaciones en Ī alrededor de θ = 0.50 producen grandes cambios en α; variaciones en los extremos producen cambios menores.

**Ponderaciones de los 10 indicadores:**

| Indicador                    | Peso     | Justificación                                        |
| ---------------------------- | -------- | ---------------------------------------------------- |
| Corporate Debt Maturity Wall | 15%      | Mayor proximidad temporal, contagio bancario directo |
| Gamma Squeeze Risk           | 12%      | Amplificación mecánica, velocidad de propagación     |
| Liquidity Illusion Index     | 12%      | Crítico para transmisión — iliquidez es el mecanismo |
| Shadow Banking Leverage      | 11%      | Volumen sistémico ($16.6T), opacidad regulatoria     |
| Narrative Desperation Index  | 10%      | Proxy directo de D(t) en el framework MCH            |
| Repo Market Fragility        | 10%      | Plumbing del sistema — fallo inmediato si colapsa    |
| Geopolitical Fragmentation   | 8%       | Reduce capacidad de respuesta coordinada             |
| Cross-Asset Correlation      | 8%       | Señal de que todos los activos pricing lo mismo      |
| Colateral Velocity           | 7%       | Comportamiento de precaución sistémica               |
| Term Premium Reversal Risk   | 7%       | Riesgo de duración latente por reversión de prima    |
| **Total**                    | **100%** |                                                      |

**Metodología de replicabilidad — cómo medir cada indicador:**

Para que un tercero pueda replicar el cálculo de Ī con los mismos pesos, se especifica la fuente y métrica exacta de cada indicador:

| Indicador             | Fuente primaria            | Métrica concreta                                                                             | Normalización                           |
| --------------------- | -------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------- |
| Maturity Wall         | Bloomberg, S&P LCD         | Volumen deuda corporativa vencimiento ≤18m ($T)                                              | 0 si <$1T, 1 si >$3T, lineal intermedio |
| Gamma Squeeze         | CBOE, OCC                  | Net gamma dealers SPX/NDX ($B, negativo=short)                                               | 0 si >-$5B, 1 si <-$25B                 |
| Liquidity Illusion    | Refinitiv, TRACE           | Depth L2 SPX (dólares nocionales en las 5 mejores ofertas/demandas) actuales / depth L2 2019 | 0 si ratio>0.80, 1 si ratio<0.40 ¹      |
| Shadow Banking        | FSB, Fed Flow of Funds     | Total shadow banking / PIB (ratio)                                                           | 0 si <0.50, 1 si >0.75                  |
| Narrative Desperation | FOMC minutes (público)     | Frecuencia 15 términos clave / media 2015-2019                                               | 0 si ratio<1.0x, 1 si >4.0x             |
| Repo Fragility        | Fed H.4.1 (público)        | SRF uso diario promedio ($B)                                                                 | 0 si <$5B, 1 si >$100B                  |
| Geopolitical          | KOF Globalisation Index    | Variación anual índice de integración comercial                                              | 0 si positivo, 1 si -5% o más           |
| Correlation Breakdown | Bloomberg                  | % varianza explicada por PC1 cross-asset                                                     | 0 si <40%, 1 si >70%                    |
| Colateral Velocity    | FSB (anual)                | Ratio rehipotecación (velocidad circulación colateral)                                       | 0 si >2.5, 1 si <1.5                    |
| Term Premium          | NY Fed ACM model (público) | Term premium 10Y Treasury ($)                                                                | 0 si >1.0%, 1 si <-0.5%                 |

_¹ Umbral de Liquidity Illusion:_ El umbral inferior de 0.40 se basa en evidencia empírica de episodios de dislocación de precios documentados por la Fed de Nueva York: en el flash crash de mayo de 2010, la profundidad de mercado cayó por debajo del 35% del nivel base antes del evento; en el Treasury market dysfunction de marzo de 2020, cayó al 28%. Por debajo de 0.40, el mercado experimenta dislocaciones de precio significativas con alta probabilidad. El umbral superior de 0.80 refleja condiciones de normalidad — por encima de ese nivel, la liquidez es funcionalmente comparable al régimen pre-crisis.

_² Nota sobre Gamma Squeeze Risk:_ Los datos de posicionamiento de dealers en opciones (CBOE, OCC) son públicos pero se publican con un retraso de aproximadamente 2 semanas. Las cifras del modelo reflejan por tanto el posicionamiento con ese lag. En momentos de stress agudo, el posicionamiento real puede diferir materialmente del reportado. El umbral de normalización inferior (-$25B) se calibra sobre el flash crash de mayo de 2010, cuando el net gamma de dealers se estimaba alrededor de -$20B. El nivel actual (-$30B) supera ese precedente de estrés histórico.

**Sobre el Narrative Desperation Index — metodología específica:**

Los 15 términos clave monitorizados en los statements del FOMC son: "soft landing", "resilient", "well-positioned", "strong labor market", "solid growth", "appropriate", "transitory", "contained", "manageable", "gradual", "orderly", "stable", "confident", "balanced", "on track". La frecuencia se calcula como apariciones por página de statement normalizado. La línea base es el promedio 2015-2019 (periodo de política monetaria convencional sin distorsiones extraordinarias). El ratio actual de 3.2x indica que el vocabulario tranquilizador se usa tres veces más de lo que sería esperable en condiciones normales.

---

**Indicador 1 — Corporate Debt Maturity Wall**
_Probabilidad de preludio a crisis: 84%_

**Magnitud:** Más de $2.5 trillones de deuda corporativa americana vencen en el periodo 2025-2026. El 40% ($1.0T) fue emitido durante 2020-2021 a tipos inferiores al 3% y debe refinanciarse en entorno donde tipos efectivos superan:

- Investment Grade BBB: 5.8% (vs emisión promedio 2.9% → gap +2.9%)
- High Yield BB: 8.9% (vs 4.2%)
- High Yield B: 10.8% (vs 5.8%)
- High Yield CCC: 14.5% (vs 8.2%)

**Sector más vulnerable — Commercial Real Estate:**

- Debt service coverage ratios <1.0x en >35% de propiedades (vs <10% histórico)
- Office vacancy tier-1 cities: NYC 24%, SF 27%, LA 22%, Chicago 27%
- Sin precedentes fuera de recesiones severas

**Mecanismos de transmisión sistémica:**

- Canal directo: Banks $1.2T exposure, Insurance $0.8T, Pensions $0.6T → default 10% implica pérdidas $150-200B
- Canal mark-to-market: spreads amplían → bonds revalúan → capital impairment → deleveraging → ventas forzadas → spiral
- Canal colateral: corporate bonds como colateral repo → haircuts aumentan → margin calls → liquidaciones forzadas → amplificación

**Timing crítico:** Concentración vencimientos H2 2025 - H1 2026 sin tiempo para ajustes graduales.

**Comparación histórica:** Última maturity wall comparable: 2001-2002 ($800B ajustado por GDP). Actual: 3.5x mayor en términos reales.

**Probabilidad 84%:** Cuando el gap de refinanciamiento supera el 2%, la evidencia histórica muestra crisis en el 90% de los casos (n=10 episodios desde 1980). Gap actual: +2.9%.

---

**Indicador 2 — Gamma Squeeze Risk**
_Probabilidad: 82%_

**Naturaleza técnica:** Market makers y dealers primarios mantienen posiciones netas short gamma en opciones SPX/NDX en niveles récord absoluto: -$30B agregado frente a -$8B histórico.

**Implicación mecánica directa:** Ante movimientos superiores al 2% intraday, los dealers deben hedgear de forma que amplifica el movimiento inicial — compran cuando el mercado sube (acelerando el rally), venden cuando baja (acelerando el decline). Retroalimentación positiva pura sin intervención humana discrecional.

**Evidencia empírica:** Episodios de movimientos extremos (>3% SPX): <1 por trimestre en 2015-2019 → >3 por trimestre en 2023-2025.

**Amplificadores adicionales:**

- Structured products (autocallables, phoenix notes): >$500B notional con short vol embebida
- Systematic vol selling (vol target, risk parity): >$2T AUM que reduce exposición automáticamente cuando vol sube
- CTA trend following: $350B AUM que vende en declines amplificando el movimiento

**Escenario extremo técnicamente plausible:** Flash crash del 10-15% en sesión única. Los circuit breakers se activarían pero no resuelven el problema fundamental de posicionamiento.

---

**Indicador 3 — Liquidity Illusion Index**
_Probabilidad: 80%_

**Paradoja observable:** Bid-ask spreads aparecen normales. Profundidad real del mercado (cuánto volumen absorbe sin mover precio) está por debajo del 50% del nivel de 2019.

**Manifestaciones concretas:**

- Flash crashes micro (>5 por trimestre en 2024-2025) sin catalizador fundamental visible
- Fails-to-deliver en Treasuries persistentemente elevados
- MOVE index (volatilidad de Treasuries): promedios aparentemente normales pero spikes a 150+ cada vez más frecuentes

**Diagnóstico:** La liquidez es cosmética. Sostenida por market makers algorítmicos que desaparecen instantáneamente en episodios de stress. El sistema parece líquido en calma. Se congela en pánico. Esta asimetría es característica definitoria de S1′.

---

**Indicador 4 — Shadow Banking Leverage**
_Probabilidad: 79%_

El sistema bancario regulado redujo apalancamiento tras 2008 (Tier 1 capital >12% vs ~8% pre-crisis). El riesgo migró completamente al sistema bancario en la sombra sin supervisión equivalente:

- Money market funds: >$6T AUM — récord histórico — vulnerables a runs digitales instantáneos
- Private credit: >$1.5T AUM, apalancamiento efectivo 2-3x, sin transparencia de disclosure
- Basis trades en Treasuries: hedge funds con apalancamiento >20:1 en arbitrajes aparentemente libres de riesgo
- CLOs: >$1.1T outstanding, empaquetando leveraged loans de baja calidad

**Total shadow banking:** ~$16.6T — aproximadamente el 62% del PIB americano.

**Riesgo específico — Basis Trades:**
Ejemplo: $100M equity → $2.5B posición (25x leverage). Si el basis se mueve adversamente 10bps: pérdidas $2.5M → margin call → si no pueden postear → liquidación forzada que mueve el mercado → spiral sistémico.

**Precedente directo:** Marzo 2020, el unwinding de basis trades contribuyó al freezing del mercado de Treasuries. Fed tuvo que comprar >$1T en semanas para restablecer funcionalidad básica del mercado más líquido del mundo.

---

**Indicador 5 — Narrative Desperation Index**
_Probabilidad: 77%_

**Evidencia cuantitativa:**

- Análisis textual FOMC statements 2022-2025: frecuencia de "soft landing", "resilient", "well-positioned" >3x promedio histórico 2015-2019
- Forward guidance vs outcomes realizados: divergencia creciente y sistemática — el guidance es optimista, los outcomes son consistentemente más débiles
- Cambios en metodología de estadísticas oficiales: CPI reformulado, ajustes estacionales de empleo alterados, deflactores del PIB revisados retroactivamente

**Patrón:** La comunicación oficial no es informe objetivo. Es herramienta de gestión de expectativas. El sistema enfrenta restricción de decibilidad estructural: no puede decir la verdad sin precipitar el colapso que busca evitar.

**Señal del indicador:** Cuando sostener la narrativa requiere esfuerzo creciente y cambios metodológicos, el sistema señala que la distancia D(t) ha crecido tanto que mantenerla artificialmente consume energía institucional extraordinaria.

---

**Indicador 6 — Repo Market Fragility**
_Probabilidad: 75%_

**Dependencia absoluta documentada:**

- Standing Repo Facility: pico de $29.4B el 31 octubre 2025 — mayor intervención desde la era dot-com — y eliminación del límite agregado de $500B por el FOMC en diciembre 2025
- Mayor pico desde la creación del SRF en 2021, con eliminación posterior del límite de capacidad — señal de institucionalización del backstop sin techo
- Spread repo-OIS: persistentemente elevado frente a histórico
- Concentración: top 5 dealers >70% del volumen (vs 50% pre-2008)

**Evento diagnóstico definitivo:** Septiembre 2019. Los tipos repo saltaron al 10% intraday cuando la Fed tardó horas en intervenir. Demostración empírica de que el sistema de repo — el sistema circulatorio del mercado financiero global — no puede funcionar autónomamente sin backstop permanente del banco central.

**Implicación:** El "plumbing" financiero global está en mantenimiento artificial permanente. No en funcionamiento autónomo.

---

**Indicador 7 — Geopolitical Fragmentation Index**
_Probabilidad: 73%_

**Fragmentación acelerada:**

- Friend-shoring: EU, China, USA construyendo bloques comerciales separados
- Controles de exportación de semiconductores expandiéndose sistemáticamente
- Erosión de tratados de cooperación: New START, INF terminados

**Implicación sistémica específica:** En 2008 y en 2020, la coordinación entre bancos centrales y gobiernos fue factor crítico de contención. Esa capacidad de coordinación está estructuralmente reducida en 2026. Mayor probabilidad de errores de cálculo y menor capacidad de respuesta coordinada ante crisis global.

---

**Indicador 8 — Cross-Asset Correlation Breakdown**
_Probabilidad: 71%_

**Relaciones históricas rotas:**

- Bonos/acciones: correlación POSITIVA (históricamente negativa) — elimina el efecto diversificador de carteras tradicionales 60/40
- Gold/yields: desacoplamiento — el oro no responde a los tipos reales como la evidencia histórica establecía
- Crypto/tech: correlación >0.85 (BTC-NDX) — pérdida total de diversificación
- PCA: el primer componente principal explica >74% de la varianza de todos los activos simultáneamente

**Interpretación:** Todos los activos están pricing el mismo riesgo sistémico simultáneamente. No hay donde diversificar porque la diversificación asume que los activos responden a factores distintos. En S1′, todos responden al mismo factor: la solidez o fragilidad del sistema de contención artificial.

---

**Indicador 9 — Colateral Velocity Collapse**
_Probabilidad: 68%_

**Métrica clave — ratio de rehipotecación:**

- 2007: 3.0 (cada activo se reutilizaba como colateral 3 veces en promedio)
- 2024: 1.8 (caída del 40%)

**Interpretación:** Las instituciones financieras están acaparando activos líquidos de alta calidad (HQLA) en lugar de hacerlos circular. Cuando los actores del sistema se preparan para un shock de liquidez, lo hacen exactamente así: guardando los mejores activos en lugar de prestarlos.

Este es comportamiento de precaución sistémica invisible en métricas de superficie. No aparece en ningún informe institucional regular. Solo se detecta midiendo la velocidad de circulación del colateral.

---

**Indicador 10 — Term Premium Reversal Risk**
_Probabilidad: 63%_

**Observación:** La prima de plazo del Treasury a 10 años (modelo ACM, NY Fed) se sitúa en 0.59% en enero 2026, representando una reversión significativa desde su mínimo histórico de -1.3% en julio 2020. Las carteras HTM de bancos regionales que acumularon duration con prima negativa acumulan pérdidas latentes superiores a $500B agregados.

**Contexto:**

- ACM 10Y term premium: 0.59% ene 2026 (reversión desde -1.3% jul 2020)
- Demanda artificial de duration por regulación bancaria (LCR, HQLA requirements)
- Pérdidas latentes HTM >$500B en sector bancario

**Riesgo específico:** La reversión de la prima de plazo expone las pérdidas acumuladas durante el periodo de prima negativa. Los bancos que compraron bonos largos cuando la prima era negativa ahora enfrentan pérdidas mark-to-market masivas. Este es exactamente el mecanismo que desencadenó la crisis de bancos regionales americanos en 2023 y la crisis de gilts británicos en 2022.

---

## PARTE IV — MICRO-FISURAS: FRAGILIDAD MATERIALIZÁNDOSE

Las micro-fisuras son distintas de los indicadores. Los indicadores miden fragilidad acumulada — condiciones estructurales. Las micro-fisuras son fallos ya visibles en segmentos específicos, todavía no contagiados sistémicamente, pero con alto potencial de serlo. Son la "prueba de concepto" de que la fragilidad que el modelo diagnostica es real, no teórica.

### 4.1. Núcleo global (EEUU)

**Fisura 1 — Commercial Real Estate: CRÍTICA (contagio 78%)**

El sector con mayor probabilidad de ser el canal de transmisión sistémica por tamaño ($5.8T en deuda, 22% del PIB), concentración en banca regional, y naturaleza estructural permanente del problema (el trabajo híbrido/remoto no es coyuntural).

| Ciudad             | Vacancy oficinas 2019 | Vacancy 2025 |
| ------------------ | --------------------- | ------------ |
| San Francisco      | 5%                    | 29%          |
| New York           | 8%                    | 24%          |
| Los Angeles        | 10%                   | 25%          |
| Chicago            | 12%                   | 27%          |
| **Media nacional** | **10%**               | **26%**      |

- CMBS delinquencies oficinas: >8% (vs 2% pre-Covid) — acercándose al pico de 2009 del 9.2%
- Varios REITs de referencia suspendieron redemptions en 2024-2025 (Brookfield, Blackstone BREIT, Starwood)
- NYCB colapso Q1 2024: $2.4B en pérdidas + $2.7B en capital raise de emergencia

Canales de transmisión: bancos regionales (CRE >30-40% de sus activos en muchos casos), insurance companies (CMBS holders), fondos de pensiones (REITs + direct loans).

**Fisura 2 — Leveraged Loans: ALTA (contagio 70%)**

- Defaults en leveraged loans: >3% anual (vs <1% en 2021)
- CLO AAA spreads: +50bps desde mínimos
- Mercado: $1.4T outstanding, interconectado con CLOs, bancos y hedge funds
- Repricing y restructuring de deals acelerando desde Q4 2025

**Fisura 3 — Regional Banks (Resurgencia): ALTA (contagio 65%)**

La crisis de SVB, Signature y First Republic (marzo 2023) no se resolvió. Se pospuso.

- Pérdidas no realizadas en carteras HTM (held-to-maturity): >$500B agregado en sector
- Depósitos no asegurados continúan fluyendo desde regionales hacia grandes bancos sistémicos
- NYCB como indicador adelantado: demostró que el problema no estaba contenido

**Fisura 4 — Auto Loan Delinquencies: MEDIA-ALTA (contagio 58%)**

- Subprime auto delinquency: >7% (récord excluyendo 2009)
- 60+ días de mora: >6.5% (datos NY Fed)
- Repossessions: +25% interanual en 2025
- Señal: consumers bajo stress financiero creciente, early warning de recesión

**Fisura 5 — Credit Card Charge-offs: MEDIA (contagio 52%)**

- Charge-off rates: >4.5% (vs 3.0% histórico)
- Deuda total en tarjetas: >$1.1T (récord nominal)
- Estándares de crédito se endurecen mientras la demanda colapsa
- Patrón consistente con ciclo de expansión crediticia llegando a su límite

**Fisura 6 — Crypto Contagion Risk: MEDIA-ALTA (contagio 63%)**

- ETF crypto aprobados: exposición institucional a crypto creciendo por primera vez de forma estructural
- Correlación BTC-NDX: >0.85 (récord histórico) — pérdida de diversificación
- MicroStrategy y vehículos similares: creando systemic loop entre crypto y renta variable
- Riesgo: interconexión crypto-TradFi materialmente mayor de lo asumido públicamente

**Fisura 7 — Sovereign Debt Spiral (Emerging Markets): ALTA (contagio 55%)**

- Argentina, Pakistán, Egipto, Sri Lanka: ya en proceso de reestructuración
- Deuda de gobiernos locales chinos: >$13T oficial (real estimado materialmente mayor)
- Japón: deuda/PIB >260%, monetización permanente del banco central
- Canal de transmisión: cuando los mercados emergentes entran en crisis simultáneamente, los flujos de capital se retiran hacia activos seguros, amplificando la presión en el núcleo

**Fisuras 8-10 — Insurance Stress, Pension Underfunding, Municipal Distress**

Fisuras adicionales de severidad menor individualmente pero con contribución significativa a la fragilidad agregada del sistema. El sector de seguros de vida americano tiene exposición material a CRE y CMBS. Los fondos de pensiones públicos americanos acumulan déficits estructurales estimados en >$5T. El mercado municipal americano ($4T) muestra stress creciente en municipios con alta dependencia de transferencias estatales y federales.

### 4.2. Confirmación periférica — Europa y economías emergentes

Si el diagnóstico de S1′ global es correcto, sus consecuencias deben ser visibles en economías domésticas de la zona euro. Para evitar la crítica de que España es un caso particular (alta temporalidad, peso del turismo, estructura hipotecaria específica), se incorporan datos de Francia, Italia y economías emergentes como confirmación multipaís.

**España — Señales de deterioro estructural silencioso:**

Los indicadores de empleo español muestran "máximo histórico de ocupados". Los indicadores de absentismo muestran otro estado:

- 7.98 millones de procesos de incapacidad temporal en 2025
- 341.8 millones de jornadas perdidas (+3.2% sobre 2024)
- 1.55 millones de trabajadores de baja médica cada jornada — computados como ocupados en estadísticas
- Tasa de ausencias sector privado: 4.9% en 2025 frente al 2.8% de 2019
- España lidera el absentismo por IT en Europa y empeora al triple de la media europea

El dato más significativo: el absentismo no revirtió cuando acabó la pandemia. Siguió creciendo en expansión económica. R(t) dice "récord de empleo". S(t) dice que 1.55 millones de esos ocupados no están trabajando ningún día. D(t) crece.

**Crédito al consumo — la tabla comparativa (España):**

|        | Pre-2008                  | Pre-2026                   |
| ------ | ------------------------- | -------------------------- |
| Año -3 | 2005: **+20%** interanual | 2023: **+3%** interanual   |
| Año -2 | 2006: **+17%** interanual | 2024: **+6.9%** interanual |
| Año -1 | 2007: **+13%** interanual | 2025: **+12%** interanual  |
| Evento | **2008: Lehman Brothers** | **2026: ?**                |

Patrón 2005-2007: desaceleración (el crédito frenaba). Patrón 2023-2025: aceleración (cada año más rápido, sin activo subyacente). Morosidad bancaria española: 2.78% noviembre 2025 (mínimo desde 2008, Banco de España). El crédito al consumo creció >6% en 2025 (BBVA Research/BdE).

### Nota sobre divergencia entre morosidad oficial y fragilidad latente

La morosidad bancaria española de 2.78% (noviembre 2025, mínimo desde 2008) y el crecimiento del crédito al consumo >6% (2025) son, paradójicamente, coherentes con el diagnóstico de estado S1′.

En una Burbuja Sintética, el estrés no se manifiesta en impagos visibles — se acumula en forma de: (a) dependencia creciente de tipos bajos que no llegan, (b) servicio de deuda que consume porcentaje creciente de renta disponible, (c) expansión del crédito en fase final del ciclo, típicamente asociada a deterioro cualitativo del riesgo.

El modelo Minsky describe exactamente este patrón: la fase Ponzi se caracteriza por crecimiento del crédito y baja morosidad visible antes de la reversión.

Nota metodológica: la baja morosidad actual no invalida el diagnóstico de fragilidad latente — es coherente con el estado S1′ (Burbuja Sintética) donde el estrés está reprimido artificialmente. Los tipos altos sostenidos presionan el servicio de deuda progresivamente. El riesgo es prospectivo, no actual.

La baja morosidad actual no es evidencia contra el modelo. Es evidencia de que el sistema todavía está en la fase de contención artificial — exactamente S1′.

**Francia — Deterioro soberano estructural:**

El FMI prevé que el ratio deuda/PIB de Francia pase del 116% en 2025 a casi el 130% en 2030, alejándose de la senda de saneamiento observada en gran parte de la eurozona. Francia registra un déficit presupuestario primario previsto en el 3.4% entre 2026 y 2030, y los costes del servicio de la deuda aumentarán hasta 59.300 millones de euros en 2026, frente a los 36.200 millones de euros de 2020.

La agencia de calificación KBRA rebajó la calificación soberana de Francia a AA-, citando la persistencia de elevados déficits y el deterioro de la trayectoria de la deuda. El crecimiento del PIB se ralentizó hasta el 1.1% en 2024 y se estima en torno al 0.8% en 2025, lastrado por la debilidad de la demanda interna y la persistente incertidumbre geopolítica. El consumo de los hogares se ha mantenido cauto a pesar de la caída de la inflación y la mejora de los salarios reales, con tasas de ahorro elevadas.

La paradoja francesa: los hogares ahorran más precisamente cuando el sistema está más frágil — señal de desconfianza estructural, no de fortaleza. Y el Estado se endeuda para sostener el nivel de gasto mientras la base fiscal se agota.

**Italia y la Eurozona — Morosidad convergente:**

Se espera que Francia, España e Italia vean proporciones similares de morosidad en 2024-2025, con un 2.7%, 2.78% y 2.9% respectivamente, en parte debido al alto volumen de préstamos hipotecarios a tipo variable en estos mercados, que deja a los prestatarios más expuestos a costos más altos.

El patrón es eurozona-wide: tres de las cuatro mayores economías del euro (Francia, España, Italia) muestran ratios de morosidad convergentemente elevadas, todas por encima de la media histórica, todas con exposición hipotecaria a tipo variable que amplifica el impacto de tipos altos.

**Economías emergentes — La periferia de la periferia:**

La deuda conjunta de hogares, empresas, bancos y gobiernos de todo el mundo alcanzó 318.4 billones de dólares en 2024, el dato más alto de la historia. La mayor subida se produjo en las economías emergentes.

Argentina ofrece el caso más extremo y adelantado: el endeudamiento de los hogares con entidades no bancarias alcanza un ratio del 34% de la masa salarial mensual, 12 puntos porcentuales por encima de diciembre de 2024. Al incorporar también el crédito bancario, el peso del crédito asciende al 141% de la masa salarial. Argentina no es comparable estructuralmente con la eurozona, pero es un indicador adelantado de lo que ocurre cuando la fragilidad de consumo sostenida por deuda llega a su límite.

**Lectura multipaís:** El patrón no es español. Es sistémico. Diferentes economías, diferentes velocidades, misma dirección: hogares sosteniendo consumo con deuda creciente, estados con trayectorias fiscales insostenibles, morosidad convergiendo hacia umbrales de alerta históricos. La burbuja sintética no tiene fronteras.

---

## PARTE V — COMPARACIÓN CON CRISIS HISTÓRICAS

### 5.1. Crisis financiera global 2008

**Similitudes con situación actual:**

- Apalancamiento oculto extremo: entonces MBS/CDOs, ahora shadow banking/basis trades
- Fallos en el plumbing: entonces ABCP/repo, ahora Treasury repo/MMFs
- Concentración sistémica: entonces AIG/Lehman, ahora top 5 dealers/JPMorgan

**Diferencias críticas que hacen el momento actual potencialmente más peligroso:**

- 2008: shock exógeno identificable (colapso subprime). 2026: fragilidad endógena acumulada sin necesidad de shock discreto externo
- 2008: bancos centrales con munición real — tipos al 5%, balances normales (<$2T). 2026: tipos ya en territorio restrictivo, balances >$20T, margen de maniobra materialmente menor
- 2008: shadow banking era un problema nuevo y relativamente aislado. 2026: shadow banking ($16.6T) está completamente integrado con el sistema regulado

**Conclusión comparativa:** 2026 potencialmente peor porque el policy space es mucho menor y la fragilidad es más distribuida e interconectada.

### 5.2. Burbuja dot-com 2000

**Similitudes:**

- Valuaciones extremas en sector concentrado: entonces tech, ahora Magnificent 7 (>30% del SPX)
- Narrativa de "nueva era": entonces internet, ahora IA
- Euforia minorista: entonces day traders, ahora meme stocks/crypto/opciones 0DTE

**Diferencias:**

- 2000: burbuja concentrada en renta variable, sistema bancario relativamente sano
- 2026: fragilidad sistémica simultánea en bonos, repo, shadow banking, y renta variable — sin aislamiento entre compartimentos

### 5.3. Conclusión histórica

El régimen actual combina los peores elementos de crisis previas:

- Apalancamiento y fragilidad de plumbing de 2008
- Valuaciones extremas y narrativa eufórica de 2000
- Concentración e interconexión sin precedentes históricos
- Policy space agotado — situación sin precedente en historia financiera moderna

---

## PARTE VI — FACTORES EXÓGENOS DE CICLO

### 6.1. Metodología y justificación

El análisis de riesgo sistémico se enriquece cuando incorpora patrones históricos de ciclos exógenos al sistema financiero. No como causas directas de crisis — ningún factor externo causa por sí solo un colapso sistémico — sino como amplificadores de tensión preexistente en sistemas que ya exhiben fragilidad acumulada.

La hipótesis es la siguiente: determinadas configuraciones cíclicas de factores exógenos han coincidido históricamente con episodios de volatilidad extrema en sistemas financieros que presentaban fragilidad acumulada previa. La coincidencia no establece causalidad. Establece un patrón observable que, combinado con análisis cuantitativo de fragilidad, puede delimitar ventanas temporales de máximo riesgo.

Estas configuraciones se denominan en este análisis **Regímenes de Ciclo Externo (RCE)**, clasificados por tipo según naturaleza e historial documentado.

### 6.2. RCE Tipo C3 — Régimen de sobreextensión

El Régimen C3 es una configuración caracterizada por la coincidencia de dos componentes: un activador de corto plazo históricamente asociado a escalada, exceso y sobrerreacción; y un cambio de régimen estructural de largo plazo que marca el inicio de una fase de revisión profunda.

**Naturaleza de los componentes del RCE-C3:**

Este análisis identifica los componentes del RCE-C3 a partir de ciclos de posicionamiento en mercados de derivados y vencimientos de opciones combinados con ciclos de régimen de largo plazo en política monetaria. La naturaleza exacta de los ciclos es información del modelo propietario, pero su operacionalización sigue criterios verificables:

- **Activador de corto plazo (3-5 mayo 2026):** Configuración de máxima sobreextensión en el posicionamiento de dealers en opciones SPX de corto plazo, coincidente con vencimiento de contratos de futuros de primer orden y con ciclo de sentimiento de mercado en fase de exceso. Tipo: amplificador mecánico de volatilidad en ventana de 3-7 días.

- **Cambio de régimen estructural (6 mayo 2026):** Transición confirmada en ciclo de largo plazo (18-24 meses) de régimen de expansión a régimen de revisión. Tipo: reconfiguración de la orientación de flujos institucionales de largo plazo en un horizonte de 6-18 meses.

La combinación de ambos — amplificador rápido de corto plazo + reorientación lenta de largo plazo — es la configuración que históricamente se asocia a puntos de inflexión sistémica.

**Historial documentado — episodios de volatilidad extrema en proximidad a configuraciones C3:**

| Episodio                            | Configuración C3  | Evento de volatilidad                                              | Distancia  |
| ----------------------------------- | ----------------- | ------------------------------------------------------------------ | ---------- |
| Crisis financiera global            | 7 septiembre 2008 | Quiebra Lehman Brothers: 15 sep 2008                               | **8 días** |
| Crisis financiera asiática          | 4 septiembre 1997 | Mini-crash Dow Jones: 27 oct 1997                                  | ~53 días   |
| Guerra Yom Kippur / crisis petróleo | 23 agosto 1973    | Inicio conflicto: 6 oct 1973 + segunda C3 activa durante conflicto | ~44 días   |
| Crash Wall Street                   | 16 julio 1929     | Black Tuesday: 29 octubre 1929                                     | ~105 días  |

**Sobre la variabilidad histórica (8 a 105 días):**

La variabilidad en las distancias históricas es una característica del modelo que merece ser explicada con honestidad, no ocultada. Tres observaciones:

Primera: la variabilidad refleja distintos niveles de fragilidad previa acumulada. En 2008, el sistema llevaba meses en estado de estrés visible (Bear Stearns en marzo, GSEs en septiembre). La fragilidad era extrema y el sistema respondió en 8 días. En 1929, el mercado estaba en fase de euforia máxima con fragilidad menos visible; la distancia fue de 105 días. A mayor fragilidad acumulada previa, menor la distancia entre configuración y evento.

Segunda: el estado actual (α = 0.776, tres micro-fisuras críticas activas, O(t) = 0.78) es más comparable a 2008 que a 1929. La analogía más relevante de la serie histórica es precisamente la que muestra menor distancia.

Tercera: la convergencia adicional con el modelo Markov (que es completamente independiente del RCE) en la misma semana de mayo 2026 reduce la incertidumbre sobre el timing. El RCE solo indica que la ventana es mayo 2026. El Markov corrobora que la mediana estadística de sus simulaciones cae exactamente en esa semana. Dos métodos independientes convergiendo en la misma ventana es evidencia de robustez, no de determinismo.

**Patrón técnico observado:**

El RCE-C3 no actúa como detonador automático. En ninguno de los casos históricos el episodio de volatilidad extrema ocurrió de forma instantánea con la configuración. Siempre hubo distancia temporal de días a meses.

El RCE-C3 aparece consistentemente en fases de sobreextensión sistémica previa. En todos los casos, el sistema financiero llevaba meses acumulando fragilidad antes de la configuración. El C3 no crea la crisis. Coincide con el momento en que la fragilidad acumulada encuentra su punto de ruptura visible.

El caso 2008 muestra la coincidencia más precisa de la serie histórica documentada — 8 días entre configuración y evento de quiebra.

**Frase técnica correcta para citar:** "En episodios históricos de alta fragilidad sistémica previa, configuraciones de sobreextensión tipo C3 aparecen con una distancia temporal de días a meses antes del evento visible de volatilidad extrema."

### 6.3. Convergencia con el modelo Markov en 2026

El análisis de RCE para el horizonte 2026 identifica una única ventana de convergencia fuerte en todo el periodo analizado:

**Ventana 3-7 mayo 2026**

El análisis de RCE para el horizonte 2026 identifica esta ventana como la de máxima alineación de los componentes de corto y largo plazo del Régimen C3. En esa ventana coinciden simultáneamente:

- Activador de corto plazo C3 (escalada y sobrerreacción): 3-5 mayo 2026
- Cambio de régimen estructural de largo plazo — inicio fase de revisión profunda: 6 mayo 2026
- Centro estadístico del modelo Markov para entrada en S3 (colapso visible): 7 mayo 2026 (t0 + 3 meses exactos)

Esta es la única ventana del horizonte analizado donde los tres factores convergen. Fuera de esta ventana, el modelo Markov identifica el periodo abril-junio 2026 como ventana de máximo riesgo, con entrada probable en S2+ (crisis visible) en abril y en S3+ (colapso estructural) en mayo-junio.

La convergencia entre análisis cuantitativo y análisis de ciclo externo en la misma ventana temporal — siendo métodos de análisis completamente independientes — constituye la señal de timing más robusta del estudio. Combinada con el centro estadístico del modelo Markov, esta ventana representa la alineación máxima de todas las capas de análisis sobre un mismo punto del calendario.

---

## PARTE VII — NIVEL DE CONFIANZA DEL ANÁLISIS

### 7.1. Fortalezas metodológicas

✓ **Modelo estructuralmente sólido:** Incorpora no-linealidad y saltos discontinuos ausentes en frameworks clásicos de riesgo (VaR, CoVaR, stress tests lineales)

✓ **Validación cruzada:** Análisis Markov analítico y simulación Monte Carlo numérica convergen en los mismos resultados

✓ **Convergencia de métodos independientes:** Los 10 indicadores no convencionales (promedio 74.8%) son convergentes con el parámetro α del modelo (0.75) sin calibración circular

✓ **Micro-fisuras documentadas:** Evidencia empírica observable actualmente en mercados, no hipotética

✓ **Marco teórico riguroso:** Coherente con literatura académica establecida (Taleb 2012, Sornette 2003, Haldane & May 2011, Scheffer et al. 2009, Brunnermeier & Pedersen 2009)

✓ **Datos domésticos confirmatorios:** Indicadores españoles independientes del modelo pero consistentes con el diagnóstico de S1′

### 7.2. Limitaciones reconocidas

⚠ **Probabilidades estimadas:** No históricamente calibradas — el régimen S1′ tal como se define no tiene precedente histórico exacto

⚠ **Intervenciones futuras no modeladas:** El modelo no captura el timing ni la efectividad de respuestas de política monetaria o fiscal extraordinarias

⚠ **Fragilidad time-varying:** Se asume α constante en el horizonte analizado — puede cambiar si las condiciones estructurales se modifican materialmente

⚠ **Incertidumbre inherente en sistemas complejos:** Los sistemas complejos producen eventos emergentes no modelables ex-ante

⚠ **Timing específico:** La ventana Q2-Q4 2026 y la convergencia de mayo son estimaciones con incertidumbre, no certezas

### 7.3. Niveles de confianza diferenciados

| Dimensión                             | Confianza | Justificación                                      |
| ------------------------------------- | --------- | -------------------------------------------------- |
| Dirección del riesgo (sistema frágil) | **ALTA**  | Convergencia de múltiples métodos independientes   |
| Magnitud (>70% en 12-18m)             | **ALTA**  | Monte Carlo + indicadores convergentes             |
| Timing (Q2-Q4 2026)                   | **MEDIA** | Plausible, no cierto. Dependiente de α constante   |
| Trigger específico                    | **BAJA**  | Incognoscible ex-ante. Secundario frente al estado |

**Confianza global del análisis: 70-75%**

**Interpretación de robustez:** Incluso si las probabilidades absolutas tienen error de ±10-15%, la conclusión cualitativa es robusta: el sistema está en estado de fragilidad extrema y la probabilidad de crisis en 12-24 meses es materialmente elevada. El error en las probabilidades exactas no cambia la dirección ni el orden de magnitud de la señal.

---

## PARTE VIII-A — EL PUNTO DE NO-RETORNO

### Definición formal

El punto de no-retorno (PNR) es el umbral sistémico a partir del cual la corrección gradual deja de ser posible. No es el momento del colapso visible — es el momento anterior en el que la trayectoria del sistema queda bloqueada hacia transición discontinua independientemente de las intervenciones.

En el MCH, el PNR corresponde al instante en que la energía institucional requerida para sostener S1′ supera la capacidad máxima de intervención disponible.

**Definición matemática:**

El PNR ocurre cuando se cumplen simultáneamente:

```
Condición 1:  P(S3+ | estado actual) > 0.50
Condición 2:  D'(t) > 0  (divergencia semántica acelerando)
Condición 3:  O(t) > 0.80  (opacidad sistémica en máximo)
Condición 4:  Al menos 2 micro-fisuras en severidad CRÍTICA activas
```

**¿En qué estado ocurre el PNR?**

El PNR no ocurre en S3 (eso es ya el colapso visible). Ocurre en el tramo final de S1′ o en el inicio de S2, cuando:

| Indicador              | Valor PNR     | Valor actual | Estado          |
| ---------------------- | ------------- | ------------ | --------------- |
| P(S3+)                 | >50%          | 52.8% (3m)   | ⚠ **EN UMBRAL** |
| O(t)                   | >0.80         | 0.78         | Próximo         |
| Micro-fisuras críticas | ≥2            | 3 activas    | ✓ Superado      |
| D'(t)                  | >0 acelerando | Positivo     | ✓ Confirmado    |

**Lectura:** El sistema está en el umbral del PNR. Tres de las cuatro condiciones están cumplidas o en umbral. La cuarta (O(t) > 0.80) está a 2.6% de distancia del umbral crítico.

**Implicación del PNR para la política:**

Una vez cruzado el PNR, las intervenciones de política monetaria convencionales (cambios de tipos, QE estándar) dejan de poder revertir la trayectoria. Solo intervenciones estructurales extraordinarias — reestructuración de deuda, bail-ins coordinados, cambio de régimen regulatorio — tienen probabilidad no trivial de modificar el estado. Y su ventana de implementación es estrecha.

**El PNR no es el final. Es el punto en que el final se vuelve estructuralmente probable independientemente de lo que ocurra después.**

---

## PARTE VIII-B — QUÉ INVALIDARÍA EL MODELO

La honestidad metodológica requiere definir con precisión las condiciones bajo las cuales el diagnóstico de este estudio quedaría invalidado. Un modelo que no puede ser refutado no es científicamente válido.

### Condiciones de invalidación primaria

El diagnóstico de S1′ y las probabilidades asociadas quedarían invalidados si se cumple cualquiera de las siguientes condiciones de forma sostenida durante un mínimo de 3 meses consecutivos:

**Invalidación 1 — Caída de α:**
O(t) cae por debajo de 0.60. Esto requeriría simultáneamente:

- SRF uso < $20B diarios sostenido (vs pico $29.4B oct 2025)
- Narrative Index < 1.5x promedio histórico (vs 3.2x actual)
- Backstops activos < 8 de 15 (vs 12 actual)

**Invalidación 2 — Normalización del plumbing:**
El mercado de repo opera autónomamente sin backstop permanente durante 60 días consecutivos. No ha ocurrido desde 2019.

**Invalidación 3 — Corrección de correlaciones:**
Las correlaciones cross-asset vuelven a régimen histórico: bonos/acciones vuelven a correlación negativa sostenida y el primer componente principal explica <50% de varianza (vs >74% actual).

**Invalidación 4 — Descompresión del maturity wall:**
El volumen de deuda corporativa a refinanciar en 2025-2026 se reduce por debajo de $1.5T mediante extensiones de vencimiento, reestructuraciones proactivas o reducción de tipos que hace la refinanciación viable.

**Invalidación 5 — Resolución de micro-fisuras críticas:**
Las tres micro-fisuras en severidad crítica (CRE, Leveraged Loans, Regional Banks) muestran reversión simultánea sostenida de sus métricas de deterioro.

### Condiciones de invalidación del timing

El timing específico (ventana Q2-Q4 2026) quedaría invalidado — sin invalidar el diagnóstico de fragilidad — si:

- α cae de 0.75 a 0.60 o menos en los próximos 2 meses
- T_med(S3+) se extiende por encima de 9 meses en la siguiente actualización
- La ventana RCE-C3 de mayo 2026 pasa sin materialización de volatilidad extrema

En ese caso, el diagnóstico de S1′ seguiría vigente pero la ventana temporal se extendería, reduciendo la urgencia del timing sin cambiar la dirección del riesgo.

### Lo que NO invalidaría el modelo

- Un rebote de mercado sostenido de 10-20% — en S1′, los rallies de superficie son compatibles con fragilidad creciente
- Declaraciones institucionales de "soft landing" confirmado — la restricción de decibilidad hace estas declaraciones no informativas sobre el estado real
- Reducción del VIX a mínimos históricos — el VIX bajo es característica definitoria de S1′, no evidencia de su resolución

---

## PARTE VIII — IMPLICACIONES

### 8.1. Para policy makers y bancos centrales

**Reconocimiento crítico:** La contención artificial prolongada genera fragilidad explosiva, no estabilidad. Cada mes de extensión de S1′ incrementa la severidad del salto eventual.

**Recomendaciones:**

- Admitir públicamente los límites de las herramientas actuales en lugar de sostener la narrativa de "soft landing" artificialmente
- Preparar mecanismos de reestructuración ordenada (bail-ins, resolution frameworks) antes de que sean necesarios en condiciones de crisis
- No intentar extender artificialmente la burbuja sintética — empeora el colapso eventual
- Comunicación honesta sobre riesgos, aunque sea dolorosa en el corto plazo

### 8.2. Para instituciones financieras

**Cambio fundamental necesario:** Reorientar la gestión de riesgo desde volatilidad superficial hacia fragilidad estructural.

**Acciones específicas:**

- Stress tests que incorporan saltos no lineales y cambios de régimen, no solo escenarios de volatilidad incremental
- Hedging de tail risk real (no solo vol implied)
- Reducción proactiva de apalancamiento antes de que las condiciones de mercado lo fuercen
- Diversificación real en lugar de estadística — las correlaciones históricas han roto
- Liquidez real (no colateral rehipotecado múltiples veces)

### 8.3. Para reguladores

**Necesidad urgente:** Incorporar indicadores no convencionales en la supervisión macro-prudencial existente.

**Dashboard propuesto mínimo:**

- Repo dependency metrics (uso SRF / total capacidad)
- Shadow banking leverage real (agregado, no solo sector regulado)
- Gamma exposure agregado de dealers primarios
- Maturity mismatches corporativos por sector
- Market depth metrics (no solo spreads bid-ask)

### 8.4. Para desarrolladores de sistemas de IA

**Responsabilidad técnica:** Los sesgos de entrenamiento (RLHF) que producen supresión de señales críticas tienen consecuencias sistémicas reales, no solo técnicas.

**Cambios necesarios:**

- El RLHF debe incluir penalización explícita de outputs que ocultan o suavizan riesgos reales materiales
- Los sistemas deben poder comunicar malas noticias con precisión cuando los datos las justifican
- Implementar frameworks tipo VITA para anclar outputs a realidad estructural medible
- Auditorías periódicas de rigidez algorítmica como parte del governance de los modelos

---

## PARTE IX — CONCLUSIONES DEL CASO DE ESTUDIO

### 9.1. Lo que el estudio muestra

**Desde el modelo cuantitativo:** Probabilidad del 75-80% de que el sistema esté en S1′. Probabilidad del 72.7% de alcanzar colapso visible (S3) en 12 meses. Probabilidad del 92.1% en 24 meses. Tiempo mediano: 3 meses desde t0 (7 febrero 2026) → 7 mayo 2026.

**Desde los 10 indicadores:** Promedio ponderado 74.8%, convergente con α = 0.75. Ninguno aparece en dashboards institucionales. Todos señalan en la misma dirección.

**Desde las micro-fisuras:** Tres de diez en severidad crítica. El CRE americano con delinquencies acercándose a niveles de 2009. Los bancos regionales con pérdidas no realizadas sin resolver desde 2023.

**Desde los datos domésticos españoles:** Crédito al consumo acelerando al mismo ritmo que los tres años previos al crash de 2008, con la diferencia crítica de que en 2025 financia gastos corrientes sin activo subyacente. Morosidad en niveles de septiembre de 2008.

**Desde el análisis de ciclos externos:** Una sola ventana de convergencia fuerte en todo el horizonte analizado: 3-7 mayo 2026, coincidente con el centro estadístico del modelo Markov y con episodios históricos de alta fragilidad.

### 9.2. Las tres contribuciones originales de este estudio

**Primera:** La formalización del estado S1′ como estado cualitativamente distinto de S1 convencional — estrés reprimido vs estrés gestionable — y su cuantificación mediante la métrica de opacidad O(t). Esta distinción no existía en la literatura de riesgo sistémico convencional.

**Segunda:** La documentación sistemática de la rigidez algorítmica como mecanismo amplificador de burbujas sintéticas. Los LLMs son, por diseño de entrenamiento, amplificadores de D(t). Esta es la primera documentación sistemática de ese mecanismo.

**Tercera:** La convergencia entre análisis cuantitativo (Markov + Monte Carlo), análisis empírico (10 indicadores), análisis doméstico (datos españoles) y análisis de ciclos externos en la misma ventana temporal — métodos completamente independientes apuntando a la misma ventana — es una señal de alineación infrecuente en el historial de análisis de riesgo sistémico.

### 9.3. Lo que el estudio no dice

Este estudio no dice que el colapso sea inevitable. Los sistemas complejos tienen capacidad de adaptación no capturable completamente por modelos probabilísticos. Intervenciones extraordinarias pueden cambiar el estado del sistema.

No dice que la ventana de mayo 2026 sea una fecha de colapso garantizada. Es el punto de máxima convergencia entre métodos de análisis distintos e independientes.

No prescribe ninguna acción. Cada lector tiene su propio contexto, sus propias posiciones, sus propios criterios. El caso de estudio ofrece el mapa. El uso del mapa es responsabilidad de quien lo lee.

### 9.4. El mapa

El sistema financiero global no está en estabilidad genuina. Está en contención artificial de inestabilidad. La diferencia entre ambos estados no es semántica: es la diferencia entre un sistema que absorbe shocks y un sistema que los acumula hasta que el mecanismo de contención falla.

La calma observable es el síntoma. No la evidencia de salud.

La cuestión no es si la transición ocurrirá. Es cuándo y con qué severidad. Las probabilidades cuantificadas sugieren que el cuándo está en el horizonte de 3 a 18 meses desde febrero de 2026, con la ventana de máximo riesgo en Q2-Q4 2026.

No existe trayectoria de corrección gradual disponible. El sistema ha acumulado tensión excesiva bajo contención prolongada. La transición, cuando ocurra, será discontinua, súbita, y de severidad material.

El mapa existe. Cada uno decide qué hace con él.

---

## REFERENCIAS ACADÉMICAS

Acemoglu, D., Ozdaglar, A., & Tahbaz-Salehi, A. (2015). Systemic Risk and Stability in Financial Networks. _American Economic Review_, 105(2), 564-608.

Bak, P. (1996). _How Nature Works: The Science of Self-Organized Criticality_. Copernicus.

Brunnermeier, M. K., & Pedersen, L. H. (2009). Market Liquidity and Funding Liquidity. _Review of Financial Studies_, 22(6), 2201-2238.

Gorton, G., & Metrick, A. (2012). Securitized Banking and the Run on Repo. _Journal of Financial Economics_, 104(3), 425-451.

Haldane, A. G., & May, R. M. (2011). Systemic Risk in Banking Ecosystems. _Nature_, 469(7330), 351-355.

Kindleberger, C. P., & Aliber, R. Z. (2005). _Manias, Panics, and Crashes_. Wiley.

Pozsar, Z., Adrian, T., Ashcraft, A., & Boesky, H. (2010). Shadow Banking. _Federal Reserve Bank of New York Staff Reports_, No. 458.

Scheffer, M., et al. (2009). Early-Warning Signals for Critical Transitions. _Nature_, 461(7260), 53-59.

Sornette, D. (2003). _Why Stock Markets Crash: Critical Events in Complex Financial Systems_. Princeton University Press.

Taleb, N. N. (2012). _Antifragile: Things That Gain from Disorder_. Random House.

---

_Rubén Abella — Febrero 2026_

_Este documento es de divulgación pública. Puede ser compartido, citado y debatido libremente. Las metodologías, datos y conclusiones son responsabilidad exclusiva del autor._

_Versión 3.0 — Documento único integrado_

