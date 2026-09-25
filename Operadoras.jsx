import { E } from "../data/empresa";
import { OPERADORAS } from "../data/operadoras";

export default function Operadoras() {
  return (
    <section id="operadoras" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">Operadoras</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Fibra, Móvil y Prepago al mejor precio</h2>
          <p className="mt-3 text-gray-500">Distribuidores oficiales. Tarjetas prepago y recargas: nuestro producto estrella.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OPERADORAS.map((op, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white">
              <div className="h-24 flex items-center justify-center border-b border-gray-100" style={{ backgroundColor: op.color }}>
                <span className="text-2xl font-extrabold" style={{ color: op.textColor || (op.textDark ? "#111827" : "#ffffff") }}>{op.nombre}</span>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-gray-900 mb-1">{op.servicios}</p>
                <p className="text-xs text-gray-500 mb-4">Contratos, prepago y portabilidad.</p>
                <a href={`https://wa.me/${E.wa}?text=Hola, quiero info sobre tarifas de ${op.nombre}.`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700">Consultar tarifas →</a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 rounded-xl bg-white border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center flex-shrink-0"><span className="text-white font-black text-xl">N</span></div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-gray-900">Cuenta Nickel</h3>
            <p className="text-sm text-gray-500 mt-1">Abre tu cuenta bancaria en 5 minutos directamente en nuestra tienda. Sin comisiones.</p>
          </div>
          <a href={`https://wa.me/${E.wa}?text=Hola, quiero info sobre Cuenta Nickel.`} target="_blank" rel="noopener noreferrer"
            className="h-10 px-5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-lg transition-colors flex-shrink-0 flex items-center">Más info</a>
        </div>
      </div>
    </section>
  );
}
