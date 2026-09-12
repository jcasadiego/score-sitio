import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCORE — Music Finance Pro",
  description:
    "SCORE ayuda a artistas y sellos a tomar decisiones financieras con datos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* TODO: script de analítica — cuando se defina el proveedor (GA/Plausible/etc.),
            inicializarlo aquí usando process.env.NEXT_PUBLIC_ANALYTICS_ID */}
      </body>
    </html>
  );
}
