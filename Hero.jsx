import { LOGO, E } from "../data/empresa";

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider w-fit">📍 Las Palmas de Gran Canaria</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Reparamos tu móvil, tablet y PC. <span className="text-red-600">Rápido y bien.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed">Reparaciones, tarjetas prepago, fibra y móvil, punto de paquetería, accesorios y mucho más.</p>
            <div className="flex flex-wrap gap-3 pt-3">
              <a href={`https://wa.me/${E.wa}?text=Hola, necesito una reparación.`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-red-600/20">Pedir Presupuesto</a>
              <a href={`tel:${E.tel}`} className="inline-flex items-center gap-2 h-12 px-6 bg-white border border-gray-200 hover:border-red-300 text-gray-800 font-semibold rounded-lg transition-colors">📞 Llamar Ahora</a>
            </div>
            <div className="flex gap-8 pt-6 mt-2 border-t border-gray-200">
              {[{ n: "+500", l: "Reparaciones" }, { n: "4.8★", l: "Valoración" }, { n: "Express", l: "En el día" }].map(s => (
                <div key={s.l}><p className="text-xl font-bold text-gray-900">{s.n}</p><p className="text-xs text-gray-500 mt-0.5">{s.l}</p></div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden bg-white shadow-2xl p-6">
              <img src={LOGO} alt="Tu Móvil OK" className="w-full max-w-sm mx-auto"/>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-lg">✅</div>
              <div><p className="text-sm font-bold text-gray-900">Garantía</p><p className="text-xs text-gray-500">En todas las reparaciones</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
