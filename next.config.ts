import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Evita que Next.js sobreescriba nuestro CLAUDE.md con su bloque de reglas para agentes.
  agentRules: false,
};

export default nextConfig;
