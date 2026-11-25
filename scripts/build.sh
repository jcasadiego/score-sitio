#!/bin/sh
# Construye dist/ a partir de version-c/ para publicar en Render.
# Uso: SCORE_API_URL=https://score-api-qa.onrender.com sh scripts/build.sh
set -e

# ── 1. Validar SCORE_API_URL ────────────────────────────────────────────────
case "${SCORE_API_URL:-}" in
  https://*) ;;
  *)
    echo "ERROR: SCORE_API_URL debe estar definida y comenzar con 'https://'" >&2
    echo "  Ejemplo: SCORE_API_URL=https://score-api-qa.onrender.com sh scripts/build.sh" >&2
    exit 1
    ;;
esac
API_URL="${SCORE_API_URL%/}"

# ── 2. Limpiar y crear dist/ ────────────────────────────────────────────────
rm -rf dist
mkdir -p dist/assets dist/vendor

# ── 3. Copiar assets/ y vendor/ ─────────────────────────────────────────────
cp -r assets/. dist/assets/
cp -r vendor/. dist/vendor/

# ── 4. Reescribir rutas relativas y copiar a dist/index.html ────────────────
sed 's|\.\./assets/|assets/|g; s|\.\./vendor/|vendor/|g' version-c/index.html > dist/index.html

# ── 5. Inyectar SCORE_API_URL ───────────────────────────────────────────────
tmp_html=$(mktemp)
sed "s|__SCORE_API_URL__|${API_URL}|g" dist/index.html > "$tmp_html" && mv "$tmp_html" dist/index.html

# ── 6. Verificaciones de integridad ─────────────────────────────────────────
errors=0

if grep -q 'PENDING' dist/index.html; then
  echo "ERROR: dist/index.html aún contiene 'PENDING'" >&2
  errors=1
fi

if grep -q '\.\.\/' dist/index.html; then
  echo "ERROR: dist/index.html aún contiene '../'" >&2
  errors=1
fi

if grep -q '__SCORE_API_URL__' dist/index.html; then
  echo "ERROR: el placeholder __SCORE_API_URL__ no fue reemplazado — falta en version-c/index.html" >&2
  errors=1
fi

# Verificar que todos los src/href/poster locales existen en dist/
while IFS= read -r ref; do
  [ -z "$ref" ] && continue
  if [ ! -f "dist/${ref}" ]; then
    echo "ERROR: referencia local no encontrada en dist/: ${ref}" >&2
    errors=1
  fi
done <<REFS
$(grep -o -E '(src|href|poster)="[^"]+"' dist/index.html \
  | sed 's/^[^=]*="//; s/"$//' \
  | grep -vE '^(https?://|//|#|mailto:|tel:)' \
  | sort -u || true)
REFS

# Verificar que dist/ solo contiene index.html, assets/ y vendor/
unexpected=$(find dist -type f | grep -Ev '^dist/(index\.html$|assets/|vendor/)' || true)
if [ -n "$unexpected" ]; then
  echo "ERROR: archivos inesperados en dist/:" >&2
  echo "$unexpected" >&2
  errors=1
fi

[ "$errors" -ne 0 ] && exit 1

echo "Build OK — dist/ lista"
