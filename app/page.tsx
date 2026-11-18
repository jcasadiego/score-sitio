"use client";

import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import VideoVenta from "@/components/sections/VideoVenta";
import PorQue from "@/components/sections/PorQue";
import Nosotros from "@/components/sections/Nosotros";
import Aliados from "@/components/sections/Aliados";
import Faq from "@/components/sections/Faq";
import Equipo from "@/components/sections/Equipo";
import Contacto from "@/components/sections/Contacto";
import { captureCampaignFromUrl } from "@/lib/campaign";

export default function Home() {
  useEffect(() => {
    captureCampaignFromUrl();
  }, []);

  return (
    <main>
      <Hero />
      <Servicios />
      <VideoVenta />
      <PorQue />
      <Nosotros />
      <Aliados />
      <Faq />
      <Equipo />
      <Contacto />
    </main>
  );
}
