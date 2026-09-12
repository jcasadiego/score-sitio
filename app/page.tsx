"use client";

import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import VideoVenta from "@/components/sections/VideoVenta";
import Faq from "@/components/sections/Faq";
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
      <Faq />
      <Contacto />
    </main>
  );
}
