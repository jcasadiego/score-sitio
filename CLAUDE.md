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

## 4. Flujo de trabajo (siempre así, sin excepciones)

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

## 5. Antes de abrir un PR — checklist rápido

- [ ] `npm run dev` corre sin errores en tu máquina
- [ ] Probaste la vista en móvil (herramientas de desarrollador del navegador)
- [ ] El commit/PR describe qué cambió, en lenguaje simple
- [ ] No tocaste nada fuera de la sección/tarea que te pidieron
- [ ] Si dudaste de algo de alcance o diseño, lo preguntaste antes de decidir

## 6. Stack

- **Next.js** (React) — despliegue en **Vercel** (`develop` → QA, `main` →
  producción; ver sección 4)
- Repo en **GitHub**
- Estilos: a definir en la primera semana (Tailwind es lo más probable dado
  el resto del stack de Colmena — confírmalo con José antes de instalar
  nada nuevo)

## 7. Convenciones rápidas

- Idioma de commits, PRs y comentarios de código: **español**
- Nombres de archivos y componentes: `PascalCase` para componentes,
  `kebab-case` para el resto
- Variables de entorno nuevas van en `.env.example` (sin valores reales) y
  se avisan a José para que las agregue en Vercel

## 8. Relación con score-app

Este repo es **independiente** de `score-app` (donde viven el diagnóstico,
el panel interno y la API). No asumas acceso ni visibilidad sobre ese
código — es otro repo, con otro dueño de cambios, y tú no tienes acceso a
él.

El único punto de contacto entre los dos es el endpoint del formulario de
precalificación (sección 1 y `.env.example`). Si necesitas cambiar qué
datos envía el formulario o cómo los envía, avísale a José antes de
mergear — es quien ve los dos lados y coordina ese contrato.
