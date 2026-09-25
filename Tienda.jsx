import { useState } from "react";
import { E } from "../data/empresa";
import WaIcon from "./icons/WaIcon";

export default function Tienda({ productos, isAdmin, onEdit, onDelete, onAdd, deleteConfirm }) {
  const [filtro, setFiltro] = useState("Todos");
  const cats = ["Todos", ...new Set(productos.map(p => p.cat))];
  const items = filtro === "Todos" ? productos : productos.filter(p => p.cat === filtro);

  return (
    <section id="tienda" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">Tienda</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Accesorios y complementos</h2>
          <p className="mt-3 text-gray-500">Disponibles en tienda. Consulta disponibilidad por WhatsApp.</p>
        </div>

        {isAdmin && (
          <div className="mb-6 flex justify-center">
            <button onClick={onAdd} className="h-10 px-5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2">
              ＋ Añadir producto
            </button>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map(c => (
            <button key={c} onClick={() => setFiltro(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filtro === c ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{c}</button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((p) => (
            <div key={p.id} className="group rounded-xl border border-gray-100 overflow-hidden bg-white hover:shadow-md transition-shadow relative">
              {isAdmin && (
                <div className="absolute top-2 right-2 z-10 flex gap-1">
                  <button onClick={() => onEdit(p)} className="w-7 h-7 rounded-full bg-white/90 shadow text-xs hover:bg-blue-50 flex items-center justify-center" title="Editar">✏️</button>
                  <button onClick={() => onDelete(p.id)} className={`rounded-full shadow text-xs flex items-center justify-center transition-all ${deleteConfirm === p.id ? "bg-red-600 text-white px-2 h-7 text-[10px] font-bold" : "w-7 h-7 bg-white/90 hover:bg-red-50"}`} title="Eliminar">
                    {deleteConfirm === p.id ? "¿Seguro?" : "🗑️"}
                  </button>
                </div>
              )}
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img src={p.img} alt={p.nombre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x400?text=Sin+Imagen"; }}/>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider">{p.cat}</p>
                <h3 className="text-sm font-semibold text-gray-900 mt-1 leading-snug">{p.nombre}</h3>
                {p.desc && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{p.desc}</p>}
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-red-600">{p.precio}</span>
                  <a href={`https://wa.me/${E.wa}?text=Hola, me interesa: ${p.nombre}`} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white transition-colors" aria-label="Consultar">
                    <WaIcon c="w-4 h-4"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
