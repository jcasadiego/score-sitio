import type { NextConfig } from "next";

// En Render (que define RENDER=true) un build sin la URL de la API publicaría
// un formulario que no envía nada: mejor que falle el despliegue.
if (process.env.RENDER && !process.env.NEXT_PUBLIC_API_URL) {
  throw new Error("Falta NEXT_PUBLIC_API_URL: el formulario no tendría a dónde enviar.");
}

const nextConfig: NextConfig = {
  // El sitio se publica como archivos estáticos (sitio estático de Render):
  // no hay servidor de Next en producción.
  output: "export",
  // La optimización de imágenes de Next necesita servidor. Las imágenes se
  // suben ya comprimidas y en el tamaño en que se muestran.
  images: { unoptimized: true },
  // Evita que Next.js sobreescriba nuestro CLAUDE.md con su bloque de reglas para agentes.
  agentRules: false,
  // Las cabeceras de seguridad (CSP, HSTS, etc.) no van aquí: un sitio
  // exportado no las aplica. Están en `render.yaml`.
};

export default nextConfig;
