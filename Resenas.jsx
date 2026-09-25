import { RESENAS } from "../data/resenas";

export default function Resenas() {
  return (
    <section id="opiniones" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">Opiniones</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESENAS.map((r, i) => (
            <div key={i} className="flex flex-col bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex gap-0.5 mb-4">{Array.from({ length: 5 }).map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}</div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{r.texto}"</p>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">{r.ini}</div>
                <div><p className="text-sm font-semibold text-gray-900">{r.nombre}</p><p className="text-xs text-gray-400">{r.servicio}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
