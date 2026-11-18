# SCORE — Sitio web (P1) · Guía de trabajo del repo

Este archivo lo lee tanto una persona como Claude Code cuando trabajas en este
repo. Si estás usando Claude Code para maquetar el sitio, estas reglas
aplican automáticamente a esa sesión — no hace falta repetirlas.

## 1. Qué estamos construyendo aquí

Este repo es **solo el sitio web (P1)** de la plataforma SCORE para Music
Finance Pro. El diseño ya viene definido por el cliente en Figma — aquí no se
diseña, se maqueta.

**Incluye:**
- Las secciones aprobadas por el cliente (2026-11-17): presentación de
  SCORE, los 4 servicios, video de venta, por qué, nosotros, aliados,
  preguntas frecuentes, equipo y contacto
- Animaciones y efectos visuales del diseño del cliente, incluida la
  animación 3D de partículas del Hero (ver sección 7.9)
- Formulario de precalificación conectado a la API de SCORE
- Registro del lead con su origen de campaña (UTM)
- Responsive: móvil y tablet
- SEO básico + SSL
- Integración de analítica

**No incluye (si te lo piden, avisa a José antes de tocarlo — es cambio de
alcance):**
- Diseño gráfico, textos, fotos o producción del video (los entrega el
  cliente)
- Blog o CMS
- Otros idiomas
- Secciones adicionales a las aprobadas (lista de arriba)
- Compra o configuración del dominio

Si algo del Figma no calza con esta lista, es una señal de alcance — se lo
dices a José, no lo decides sobre la marcha.

**El sitio es estático.** Se publica como archivos HTML, CSS y JS ya
generados (`output: "export"`), sin servidor propio. Por eso no puede tener
rutas de API (`app/api/...`), Server Actions, `cookies()`, `headers()` ni nada
que necesite un servidor de Next en producción. Si el Figma pide algo así,
avísale a José.

## 2. Quién hace qué

- **Tú (maquetación del sitio):** conviertes el Figma en código, sigues esta
  guía, abres PRs. No tomas decisiones de arquitectura, alcance ni stack por
  tu cuenta.
- **José:** revisa y aprueba/fusiona cada PR, resuelve dudas de Git o
  despliegue, decide cualquier cambio de alcance o de stack, y es el dueño
  del despliegue en Render.

**Archivos que no tocas en un PR de maquetación** (si crees que hace falta,
pregúntale a José): `render.yaml`, `next.config.ts`, `.github/`,
`lib/lead-api.ts` y `lib/campaign.ts`. En `components/LeadForm.tsx` puedes
cambiar el diseño y los textos, pero no los campos ni lo que se envía (ver
sección 10).

Si te atoras con Git, GitHub o el despliegue: **detente y pregúntale a
José** en vez de improvisar algo que toque dominio, servidor o variables de
entorno.

## 3. Setup — primera vez

**Necesitas antes de empezar:**
1. Cuenta de GitHub (pídele a José que te agregue como colaborador del repo)
2. Node.js **22** (la versión que usan el CI y Render)
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
Abre `http://localhost:3003` — ahí ves el sitio corriendo en tu máquina.

El formulario envía a la API de SCORE (`NEXT_PUBLIC_API_URL`). Si no la
tienes corriendo, el formulario muestra error al enviar: es normal, no
bloquea la maquetación.

## 4. Estructura del proyecto — dónde vive cada cosa

Next.js App Router + TypeScript + Tailwind:

- `app/layout.tsx` — layout raíz (`lang="es"`, metadata). Ahí va el script
  de analítica cuando José apruebe el proveedor (usa
  `NEXT_PUBLIC_ANALYTICS_ID`).
- `app/page.tsx` — ensambla las secciones aprobadas en orden. No agregues
  secciones nuevas aquí sin confirmarlo (ver sección 1, es cambio de
  alcance).
- `components/Nav.tsx` y `components/SiteFooter.tsx` — menú fijo y pie.
- `components/sections/` — un componente por sección:
  - `Hero.tsx` — presentación de SCORE (aquí va la animación 3D)
  - `Servicios.tsx` — los 4 servicios (SCORE, TRACE, VALUE, CAPITAL)
  - `VideoVenta.tsx` — video de venta (el botón queda; el video se conecta
    cuando el cliente entregue la URL)
  - `PorQue.tsx`, `Nosotros.tsx`, `Aliados.tsx`, `Equipo.tsx`
  - `Faq.tsx` — preguntas frecuentes
  - `Contacto.tsx` — contacto, incluye `<LeadForm />`

  Cada sección se trabaja por separado — no hace falta tocar las demás.
- `components/LeadForm.tsx` — formulario de precalificación: nombre, email
  y "¿qué describe mejor tu caso?" (las 4 familias). Los textos de cada
  familia los da el Figma; los valores (`PROJECT`, `B2B`, ...) no se
  cambian.
- `lib/lead-api.ts` — envía el formulario a la API de SCORE y traduce la
  respuesta (enviado, datos inválidos, demasiados envíos, error).
- `lib/campaign.ts` — guarda los `utm_*` de la URL y los adjunta al envío.
- `app/robots.ts` y `app/sitemap.ts` — SEO básico. Usan
  `NEXT_PUBLIC_SITE_URL`.
- `public/` — imágenes, íconos y el video, **ya comprimidos** (sección 7).
- `render.yaml` — despliegue en Render y cabeceras de seguridad (lo
  mantiene José).

**Nota técnica — no lo quites:** `next.config.ts` tiene `agentRules:
false`. Sin eso, `next dev`/`next build` reescribe este mismo `CLAUDE.md`
agregándole un bloque autogenerado de reglas para agentes.

## 5. Flujo de trabajo (siempre así, sin excepciones)

Hay dos ramas fijas con roles distintos:

- **`develop`** — rama de integración. Aquí llegan todos los PR. Render
  despliega esta rama a **QA** automáticamente cuando el CI pasa.
- **`main`** — estrictamente producción. Solo se actualiza vía PR desde
  `develop` cuando José decide que lo que hay en QA está listo.

**Nunca se hace push directo a `develop` ni a `main`.** Está forzado por
branch protection en GitHub (requiere PR + el check `lint-and-build` en
verde). Todo cambio sigue estos pasos:

1. **Actualiza tu `develop` local** antes de empezar algo nuevo:
   ```bash
   git checkout develop
   git pull
   ```
2. **Crea una rama nueva** con nombre corto y descriptivo:
   ```bash
   git checkout -b feature/seccion-hero
   ```
   Prefijos: `feature/` (algo nuevo), `fix/` (corrección), `style/` (ajuste
   visual/CSS).
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
   En el PR escribe 2-3 líneas simples: **qué cambió y por qué**. No asumas
   que quien lo lee es programador.
5. **No hay vista previa automática por PR.** Revisa tu cambio en tu
   máquina (`npm run dev`, y en móvil con las herramientas de desarrollador)
   antes de avisar que está listo. Después del merge, el cambio aparece en
   QA en unos minutos.
6. **José revisa y fusiona a `develop`.** Nadie más mezcla PRs. El paso de
   `develop` a `main` lo hace José aparte.

## 6. CI — verificación automática

Cada PR hacia `develop` o `main` corre en GitHub Actions:

- **CI** (`ci.yml`, check `lint-and-build`): `npm ci`, `npm audit
  --audit-level=high` (falla si una dependencia tiene una vulnerabilidad
  alta o crítica), `npm run lint` y `npm run build` (exporta el sitio e
  incluye el chequeo de tipos).
- **security** (`security.yml`): busca secretos subidos por error
  (gitleaks), revisa las dependencias nuevas y analiza el código (CodeQL).
- **Dependabot** propone cada semana PRs con parches de dependencias; los
  revisa José.

Si un check queda en rojo, arréglalo antes de avisar que está listo. Si el
rojo viene de `npm audit` y tu PR no tocó dependencias, avísale a José: se
corrige en un PR aparte.

Por ahora no hay tests automatizados. Si un componente gana lógica real,
coméntalo con José antes de instalar un framework de testing.

## 7. Seguridad y privacidad — reglas del sitio

El sitio recoge datos personales (nombre y email) y forma parte de una
plataforma que debe cumplir SOC 2, ISO 27001 e ISO 27701. Lo que te toca:

1. **Sin secretos en el repo ni en el sitio.** Todo lo que lleva
   `NEXT_PUBLIC_` queda visible para cualquiera que abra el sitio. El sitio
   no usa API keys, contraseñas ni tokens; si algo te pide uno, para y
   pregúntale a José. Nunca subas `.env.local`.
2. **Nada de terceros sin aprobación.** No agregues scripts, fuentes de
   Google u otro CDN, iframes (YouTube, Vimeo, mapas), píxeles, chats ni
   widgets sin que José lo apruebe. Un servicio que recibe datos de los
   visitantes es un proveedor nuevo, y además la política de seguridad del
   sitio (CSP en `render.yaml`) bloquea lo que no esté autorizado: en el
   navegador verás el error en la consola. Las fuentes van con `next/font`
   (se descargan al compilar y se sirven desde el propio sitio).
3. **Imágenes y video livianos, dentro de `public/`.** Comprime antes de
   subir (WebP/AVIF para imágenes, video en MP4 H.264 de pocos MB). El plan
   de Render tiene un tope de tráfico al mes; un video pesado lo agota y deja
   el sitio caído hasta el mes siguiente.
4. **No registres datos personales.** Nada de `console.log` con el nombre, el
   email o lo que se envía en el formulario.
5. **No insertes HTML a mano.** Nada de `dangerouslySetInnerHTML` ni de armar
   HTML con texto externo.
6. **Aviso de privacidad.** El formulario lleva un enlace al aviso de
   privacidad (el texto lo entrega el cliente; hay un `TODO` en
   `LeadForm.tsx`). No pidas más datos de los que el formulario ya tiene.
7. **No afirmar certificaciones.** Ningún texto del sitio dice que SCORE o
   Music Finance Pro está "certificado", "SOC 2 compliant", "cumple ISO" o
   parecido: hoy no es cierto. Si el Figma lo trae, avísale a José.
8. **Accesibilidad básica:** cada campo con su `label`, imágenes con `alt`,
   contraste suficiente, todo usable con teclado. Los mensajes del
   formulario se anuncian (`aria-live`): no lo quites al maquetarlo.

9. **Animaciones y 3D.** Están aprobadas (canvas, CSS, WebGL). Si
   necesitas una librería (por ejemplo `three`), se instala con `npm` —
   nunca por CDN ni `<script>` externo — y se menciona en el PR. Respeta
   `prefers-reduced-motion` (sin animación o una versión quieta) y cuida
   que no ponga lento el sitio en móvil.

## 8. Antes de abrir un PR — checklist rápido

- [ ] `npm run dev` corre sin errores en tu máquina
- [ ] `npm run lint` y `npm run build` pasan sin errores
- [ ] Probaste la vista en móvil y tablet
- [ ] Sin errores de "Content Security Policy" en la consola del navegador
- [ ] Imágenes y video comprimidos; nada cargado desde otros sitios
- [ ] El commit/PR describe qué cambió, en lenguaje simple
- [ ] No tocaste nada fuera de la sección/tarea que te pidieron
- [ ] Si dudaste de algo de alcance o diseño, lo preguntaste antes de decidir

## 9. Stack y convenciones

- **Next.js** (React, App Router) exportado como sitio estático, desplegado
  en **Render** (`develop` → QA; producción la configura José)
- **TypeScript**, **Tailwind CSS**, **ESLint** (`npm run lint`)
- Repo en **GitHub**

Convenciones:

- Idioma de commits, PRs y comentarios de código: **español**
- Nombres de archivos y componentes: `PascalCase` para componentes,
  `kebab-case` para el resto
- Variables de entorno nuevas van en `.env.example` (sin valores reales) y
  se avisan a José para que las agregue en Render. Se leen al compilar:
  cambiarlas exige redesplegar
- Colores, tipografía y espaciados: el diseño (colores incluidos) ya lo
  aprobó el cliente y se pueden ajustar sin pedir permiso. Si un color se
  repite en varios componentes, conviene llevarlo a un token en
  `app/globals.css` (`--accent`, `--secondary`, etc.), pero no es requisito
  para subir un PR

## 10. Relación con score-app

Este repo es **independiente** de `score-app` (diagnóstico, panel interno y
API). No tienes acceso a ese repo.

El único punto de contacto es el formulario: el navegador envía a
`POST {NEXT_PUBLIC_API_URL}/api/v1/leads/prequalification` con `name`,
`email`, `family` (`PROJECT`, `B2B`, `PROFESSIONAL` o `CATALOG`) y los UTM
(`utmSource`, `utmMedium`, `utmCampaign`). La API acepta 5 envíos por minuto
por visitante y rechaza cualquier campo de más. Si necesitas cambiar qué
datos envía el formulario o cómo, avísale a José antes: es un contrato entre
los dos repos y él coordina ambos lados.
