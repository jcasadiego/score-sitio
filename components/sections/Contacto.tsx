import LeadForm from "@/components/LeadForm";

export default function Contacto() {
  // TODO: reemplazar con el diseño de Figma
  return (
    <section id="contacto" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Contacto</h2>
      <p className="mt-2 text-sm text-gray-500">
        Formulario de precalificación
      </p>
      <div className="mt-6">
        <LeadForm />
      </div>
    </section>
  );
}
