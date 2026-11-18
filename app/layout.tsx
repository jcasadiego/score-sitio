import type { Metadata } from "next";
import { Quicksand, Questrial } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SCORE — Music Finance Pro",
  description:
    "Diagnóstico estratégico para artistas, empresas, catálogos y eventos musicales. Entiende el momentum real de tu proyecto.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${quicksand.variable} ${questrial.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <SiteFooter />
        {/* TODO: script de analítica — cuando se defina el proveedor (GA/Plausible/etc.),
            inicializarlo aquí usando process.env.NEXT_PUBLIC_ANALYTICS_ID */}
      </body>
    </html>
  );
}
