const SERVICIOS = ["SCORE", "TRACE", "VALUE", "CAPITAL"];

export default function Servicios() {
  // TODO: reemplazar con el diseño de Figma
  return (
    <section id="servicios" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Servicios</h2>
      <p className="mt-2 text-sm text-gray-500">Los 4 servicios</p>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SERVICIOS.map((servicio) => (
          <li key={servicio} className="border rounded p-4">
            {servicio}
          </li>
        ))}
      </ul>
    </section>
  );
}
