"use client";

import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import ParaQuien from "@/components/sections/ParaQuien";
import VideoVenta from "@/components/sections/VideoVenta";
import Equipo from "@/components/sections/Equipo";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Servicios from "@/components/sections/Servicios";
import Contacto from "@/components/sections/Contacto";
import Nosotros from "@/components/sections/Nosotros";
import Aliados from "@/components/sections/Aliados";
import PorQue from "@/components/sections/PorQue";
import Faq from "@/components/sections/Faq";
import { captureCampaignFromUrl } from "@/lib/campaign";

export default function Home() {
  useEffect(() => {
    captureCampaignFromUrl();
  }, []);

  return (
    <main>
      <Hero />
      <ParaQuien />
      <VideoVenta />
      <Equipo />
      <ComoFunciona />
      <Servicios />
      <Contacto />
      <Nosotros />
      <Aliados />
      <PorQue />
      <Faq />
    </main>
  );
}
