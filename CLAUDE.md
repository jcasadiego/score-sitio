# score-sitio

Landing pública de SCORE (Music Finance Pro). Sitio estático HTML/CSS/JS con React vendorizado (`vendor/`). La versión aprobada por el cliente es **`version-c/`** — el diseño, los textos y las animaciones de `version-c` no se modifican salvo instrucción explícita de José.

---

## Estructura del repo

```
score-sitio/
├── assets/              # Imágenes, videos, logos (sirven en dist/assets/)
├── vendor/              # React + ReactDOM production builds (sin CDN externo)
├── version-c/
│   └── index.html       # Versión aprobada — único archivo fuente del sitio
├── version-a/           # Referencia histórica — no se publica
├── version-b/           # Referencia histórica — no se publica
├── scripts/
│   └── build.sh         # Genera dist/ a partir de version-c/
├── .github/
│   ├── workflows/ci.yml         # lint-and-build (check requerido en develop)
│   ├── workflows/security.yml   # gitleaks + CodeQL
│   └── dependabot.yml           # Actualiza actions fijadas por SHA
├── render.yaml          # Blueprint de Render (documentación + config)
└── dist/                # Artefacto de build — en .gitignore, no commitear
```

---

## Arquitectura de `version-c/index.html`

El archivo (~1400 líneas) contiene todo el sitio: HTML, CSS inline y un componente React class en JS puro sin transpilación.

**Puntos de entrada del JS (cerca del final del archivo):**
- `var SCORE_API_URL = '__SCORE_API_URL__'` — el build script reemplaza este placeholder con el valor de la variable de entorno.
- `var WA_NUMBER = ''` — vacío hasta que José pase el número.
- `ReactDOM.createRoot(...).render(h(Component, __defaults))` — monta el componente.

**Dentro de la clase `Component`:**
- `_init()` — inicializa `this._h` (todos los handlers) y `this._form` (valores del formulario). Se llama desde `componentDidMount` y `renderVals`.
- `this._h.submit` — handler del formulario: valida, construye payload, llama a la API, maneja 201/400/429/5xx/red.
- `renderVals()` — devuelve el objeto de datos que consume la función de plantilla `__tpl`.
- `__tpl(s0, s)` (fuera de la clase, línea ~537) — la plantilla completa como llamadas `h()` (`React.createElement`). Es una sola línea minificada. Para modificar la UI hay que editar esta función.

**Estado relevante del formulario:**
| Clave | Descripción |
|---|---|
| `loading` | Envío en curso — bloquea doble submit |
| `sent` | Éxito (201) |
| `netErr` | Error de red, timeout, 5xx o 400 genérico — muestra botón "Intentar de nuevo" |
| `err429` | Rate limit (429) |
| `err` | Objeto `{ campo: true }` — errores de validación o de campo desde la API |

---

## Construir y probar en local

```sh
# Build (requiere SCORE_API_URL del origen real):
SCORE_API_URL=https://score-api-qa.onrender.com sh scripts/build.sh

# Servir y verificar en el navegador (CORS bloqueará el envío del form desde localhost, es esperado):
python3 -m http.server -d dist 8080
```

`dist/` es el artefacto final que Render publica. Nunca commitear `dist/`.

---

## Variable de entorno

| Variable | Requerida | Descripción |
|---|---|---|
| `SCORE_API_URL` | Sí | Origen de la API, ej. `https://score-api-qa.onrender.com`. Sin barra final. Debe empezar con `https://`. |

José la configura manualmente en el dashboard de Render (Settings → Environment). No tiene valor por defecto intencional: un default incorrecto enviaría leads de producción a QA.

---

## Contrato de la API (no cambiar desde este repo)

```
POST {SCORE_API_URL}/api/v1/leads/prequalification
Content-Type: application/json
Sin auth ni cookies.
```

| Campo | Requerido | Reglas |
|---|---|---|
| `name` | sí | 2–120 caracteres |
| `email` | sí | email válido, máx. 254 |
| `phone` | no | 7–20: dígitos, espacios, `-`, `(`, `)` y `+` inicial |
| `family` | sí | `PROJECT`, `B2B`, `PROFESSIONAL` o `CATALOG` |
| `utmSource` | no | máx. 200 |
| `utmMedium` | no | máx. 200 |
| `utmCampaign` | no | máx. 200 |

Opcionales vacíos se **omiten**. Cualquier campo fuera de esta tabla → 400.

Mapeo de pestañas del formulario:
- Artista o proyecto → `PROJECT`
- Empresa → `B2B`
- Catálogo → `CATALOG`
- Evento → `PROFESSIONAL`

---

## Flujo de ramas y PRs

- Rama base activa: `develop`
- Crear ramas desde `develop`: `fix/…` o `feature/…`
- PRs hacia `develop`; mergear cuando el CI esté en verde
- `develop` → `main` lo decide José (release a producción)
- Nunca push directo a `develop` ni `main`

Commits en español, modo instrucción: "Corrige…", "Agrega…". PRs con 2–3 líneas de qué cambió y por qué, más test plan real.

---

## Reglas que no negociar

- Identificadores en inglés; textos de UI en español.
- No agregar servicios de terceros que reciban datos de visitantes.
- No logear datos del formulario en consola ni en ningún lado.
- No escribir que SCORE está "certificado" o es "compliant" con SOC 2 / ISO.
- No commitear `.env`, tokens ni secretos.
- No tocar `version-a/` ni `version-b/` (quedan como referencia; no se publican).

---

## Pendientes para José

- **Número de WhatsApp** (`WA_NUMBER` en `version-c/index.html`): dejarlo vacío hasta que José pase el número.
- **Aviso de privacidad**: enlace desde el formulario; cliente entrega el texto.
- **API de producción**: al hacer el release, cambiar `SCORE_API_URL` en Render prod y actualizar `connect-src` en la CSP de `render.yaml`.
- **Campos del formulario no enviados a la API**: `country`, `project`, `role` y `links` se piden en el form visual pero la API los rechaza. José decide si ajustar la API o eliminar esos campos del form.
