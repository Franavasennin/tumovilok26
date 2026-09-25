import { SERVICIOS } from "../data/servicios";

export default function Servicios() {
  return (
    <section id="servicios" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Todo lo que necesitas</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Reparaciones, conectividad, accesorios y más en un solo lugar.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICIOS.map((s, i) => (
            <div key={i} className="group p-6 rounded-xl border border-gray-100 hover:border-red-200 bg-white hover:bg-red-50/30 transition-all duration-200">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.t}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
