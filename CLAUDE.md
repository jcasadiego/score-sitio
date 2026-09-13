# SCORE — Sitio web (P1) · Guía de trabajo del repo

Este archivo lo lee tanto una persona como Claude Code cuando trabajas en este
repo. Si estás usando Claude Code para maquetar el sitio, estas reglas
aplican automáticamente a esa sesión — no hace falta repetirlas.

## 1. Qué estamos construyendo aquí

Este repo es **solo el sitio web (P1)** de la plataforma SCORE para Music
Finance Pro. El diseño ya viene definido por el cliente en Figma — aquí no se
diseña, se maqueta.

**Incluye:**
- Hasta 5 secciones: presentación de SCORE, los 4 servicios, video de venta,
  preguntas frecuentes, contacto
- Formulario de precalificación conectado al sistema (endpoint a confirmar
  con José — ver `.env.example`)
- Registro del lead con su origen de campaña
- Responsive: móvil y tablet
- SEO básico + SSL
- Integración de analítica

**No incluye (si te lo piden, avisa a José antes de tocarlo — es cambio de
alcance):**
- Diseño gráfico, textos, fotos o producción del video (los entrega el
  cliente)
- Blog o CMS
- Otros idiomas
- Secciones adicionales a las 5 acordadas
- Compra o configuración del dominio

Si algo del Figma no calza con esta lista, es una señal de alcance — se lo
dices a José, no lo decides sobre la marcha.

**Nota sobre el formulario de precalificación:** el endpoint real vive en
`score-app` (la API de SCORE), que todavía se está construyendo. Mientras esa
API no esté lista, el formulario apunta a un destino temporal (por ejemplo,
un log a consola o un webhook de prueba) — José te dice cuándo cambiar al
endpoint definitivo. No bloquees tu trabajo esperando la API real.

## 2. Quién hace qué

- **Tú (maquetación del sitio):** conviertes el Figma en código, sigues esta
  guía, abres PRs. No tomas decisiones de arquitectura, alcance ni stack por
  tu cuenta.
- **José:** revisa y aprueba/fusiona cada PR, resuelve dudas de Git o
  despliegue, decide cualquier cambio de alcance o de stack.

Si te atoras con Git, GitHub o el despliegue en Vercel: **detente y pregúntale
a José** en vez de improvisar algo que toque configuración de dominio,
servidor o variables de entorno de producción.

## 3. Setup — primera vez

**Necesitas antes de empezar:**
1. Cuenta de GitHub (pídele a José que te agregue como colaborador del repo)
2. Node.js instalado (versión LTS — 20 o superior)
3. Git configurado en tu máquina:
   ```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu@email.com"
   ```

**Clonar y arrancar:**
```bash
git clone https://github.com/jcasadiego/score-sitio.git
cd score-sitio
npm install
cp .env.example .env.local   # pídele a José los valores que falten
npm run dev
```
Abre `http://localhost:3000` — ahí ves el sitio corriendo en tu máquina.

## 4. Estructura del proyecto — dónde vive cada cosa

El andamiaje base ya está creado (Next.js App Router + TypeScript +
Tailwind). Así se organiza, para que ubiques rápido dónde maquetar cada
sección del Figma:

- `app/layout.tsx` — layout raíz (`lang="es"`, metadata). Ahí va el script
  de analítica cuando se defina el proveedor (usa
  `NEXT_PUBLIC_ANALYTICS_ID`).
- `app/page.tsx` — ensambla las 5 secciones en orden. No agregues
  secciones nuevas aquí sin confirmarlo (ver sección 1, es cambio de
  alcance).
- `components/sections/` — un componente por sección, cada uno con
  encabezado simple y `// TODO: reemplazar con el diseño de Figma`:
  - `Hero.tsx` — presentación de SCORE
  - `Servicios.tsx` — los 4 servicios (SCORE, TRACE, VALUE, CAPITAL)
  - `VideoVenta.tsx` — espacio para el video de venta
  - `Faq.tsx` — preguntas frecuentes
  - `Contacto.tsx` — contacto, incluye `<LeadForm />`

  Maqueta cada sección reemplazando el contenido de su TODO — no hace
  falta tocar las demás para trabajar en una.
- `components/LeadForm.tsx` — formulario de precalificación (nombre,
  email). Hace `POST` a `NEXT_PUBLIC_LEAD_FORM_ENDPOINT`; si esa variable
  está vacía, solo hace `console.log` del payload (ver la nota del
  endpoint temporal en la sección 1). Si el Figma pide más campos,
  agrégalos aquí.
- `lib/campaign.ts` — captura `utm_source`, `utm_campaign` y
  `utm_medium` de la URL y los adjunta al envío del formulario. No
  debería hacer falta tocarlo salvo que cambie qué se registra del
  origen del lead.

**Nota técnica — no lo quites:** `next.config.ts` tiene `agentRules:
false`. Es a propósito: sin eso, `next dev`/`next build` reescribe este
mismo `CLAUDE.md` agregándole un bloque autogenerado de reglas para
agentes cada vez que alguien corre el proyecto.

## 5. Flujo de trabajo (siempre así, sin excepciones)

Hay dos ramas fijas con roles distintos:

- **`develop`** — rama de integración. Aquí llegan todos los PR de lo que
  se va construyendo. Vercel despliega esta rama a **QA**.
- **`main`** — estrictamente producción. Solo se actualiza vía PR desde
  `develop` cuando José decide que lo que hay en QA está listo para salir a
  producción. Vercel despliega esta rama a **producción**.

**Nunca se hace push directo a `develop` ni a `main`.** Todo cambio de
maquetación sigue estos pasos:

1. **Actualiza tu `develop` local** antes de empezar algo nuevo:
   ```bash
   git checkout develop
   git pull
   ```
2. **Crea una rama nueva** con nombre corto y descriptivo:
   ```bash
   git checkout -b feature/seccion-hero
   ```
   Prefijos sugeridos: `feature/` (algo nuevo), `fix/` (corrección),
   `style/` (ajuste visual/CSS).
3. **Trabaja y confirma en commits pequeños**, en español, en modo
   instrucción:
   ```bash
   git add .
   git commit -m "Agrega sección hero con imagen del Figma"
   ```
4. **Sube la rama y abre un Pull Request hacia `develop`** (no hacia
   `main`):
   ```bash
   git push -u origin feature/seccion-hero
   ```
   Al abrir el PR en GitHub, escribe 2-3 líneas simples: **qué cambió y por
   qué** (ej. "Agregué la sección de hero siguiendo el Figma, faltaba en la
   página principal"). No asumas que quien lo lee es programador.
5. **Vercel genera un preview automático** de esa rama — el link aparece en
   el propio PR. Revísalo tú mismo antes de avisar que está listo.
6. **José revisa y fusiona a `develop`.** Nadie más mezcla PRs. El paso de
   `develop` a `main` (QA → producción) lo hace José aparte, cuando decide
   que corresponde — no es parte del flujo normal de una tarea de
   maquetación.

## 6. CI — verificación automática

Cada PR hacia `develop` o `main`, y cada push a esas ramas, corre un
workflow de GitHub Actions (`.github/workflows/ci.yml`) que hace:

1. `npm ci` (instala dependencias exactas del lockfile)
2. `npm run lint`
3. `npm run build` (esto corre el chequeo de tipos de TypeScript también)

Si el check queda en rojo en el PR, arréglalo antes de avisar que está
listo para revisión — no es algo que José deba revisar a mano.
`npm run dev` no corre en CI porque es un servidor interactivo; el build
de producción es lo que valida que todo compile.

Por ahora no hay tests automatizados (no hay lógica compleja que
testear todavía — es maquetado). Cuando el `LeadForm` u otro componente
tenga lógica real (validaciones, distintos estados, etc.), ahí sí
conviene agregar tests puntuales con Vitest/React Testing Library en
vez de mantener el CI solo con lint+build — coméntalo con José antes de
instalar el framework de testing.

## 7. Antes de abrir un PR — checklist rápido

- [ ] `npm run dev` corre sin errores en tu máquina
- [ ] `npm run lint` pasa sin errores
- [ ] Probaste la vista en móvil (herramientas de desarrollador del navegador)
- [ ] El commit/PR describe qué cambió, en lenguaje simple
- [ ] No tocaste nada fuera de la sección/tarea que te pidieron
- [ ] Si dudaste de algo de alcance o diseño, lo preguntaste antes de decidir

## 8. Stack

- **Next.js** (React, App Router) — despliegue en **Vercel** (`develop` →
  QA, `main` → producción; ver sección 5)
- **TypeScript**
- **Tailwind CSS** — ya instalado y en uso, es el que toca
- **ESLint** — corre con `npm run lint`
- Repo en **GitHub**

## 9. Convenciones rápidas

- Idioma de commits, PRs y comentarios de código: **español**
- Nombres de archivos y componentes: `PascalCase` para componentes,
  `kebab-case` para el resto
- Variables de entorno nuevas van en `.env.example` (sin valores reales) y
  se avisan a José para que las agregue en Vercel
- Toda variable `NEXT_PUBLIC_*` viaja al navegador (queda visible en el
  bundle del cliente). Nunca pongas ahí una API key o secreto real — si
  hace falta una credencial, va en una variable sin ese prefijo
- Colores, tipografía y espaciados van como tokens en `app/globals.css`
  (`--primary`, `--secondary`, `--accent`, etc.), no como valores sueltos
  en cada componente — así un cambio del Figma se actualiza en un solo
  lugar

## 10. Relación con score-app

Este repo es **independiente** de `score-app` (donde viven el diagnóstico,
el panel interno y la API). No asumas acceso ni visibilidad sobre ese
código — es otro repo, con otro dueño de cambios, y tú no tienes acceso a
él.

El único punto de contacto entre los dos es el endpoint del formulario de
precalificación (sección 1 y `.env.example`). Si necesitas cambiar qué
datos envía el formulario o cómo los envía, avísale a José antes de
mergear — es quien ve los dos lados y coordina ese contrato.
