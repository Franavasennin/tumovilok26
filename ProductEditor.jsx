import { useState } from "react";

export default function ProductEditor({ product, onSave, onCancel }) {
  const isNew = !product;
  const [form, setForm] = useState({
    nombre: product?.nombre || "",
    precio: product?.precio || "",
    img: product?.img || "",
    cat: product?.cat || "",
    desc: product?.desc || "",
  });

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSave = () => {
    if (!form.nombre || !form.precio || !form.cat) return;
    onSave({
      id: product?.id || Date.now().toString(),
      ...form,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={onCancel}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">{isNew ? "Añadir Producto" : "Editar Producto"}</h3>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
            <input type="text" value={form.nombre} onChange={e => set("nombre", e.target.value)}
              className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500/30 focus:border-red-500 outline-none" placeholder="Funda Silicona iPhone"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Precio *</label>
            <input type="text" value={form.precio} onChange={e => set("precio", e.target.value)}
              className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500/30 focus:border-red-500 outline-none" placeholder="9,99 €"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Categoría *</label>
            <input type="text" value={form.cat} onChange={e => set("cat", e.target.value)}
              className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500/30 focus:border-red-500 outline-none" placeholder="Fundas, Cables, Audio..."/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">URL de imagen</label>
            <input type="text" value={form.img} onChange={e => set("img", e.target.value)}
              className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500/30 focus:border-red-500 outline-none" placeholder="https://..."/>
            {form.img && (
              <div className="mt-2 w-24 h-24 rounded-lg overflow-hidden bg-gray-100 border">
                <img src={form.img} alt="Preview" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/100x100?text=Error"; }}/>
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea value={form.desc} onChange={e => set("desc", e.target.value)} rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500/30 focus:border-red-500 outline-none resize-none" placeholder="Breve descripción del producto..."/>
          </div>
        </div>
        <div className="p-6 border-t border-gray-100 flex gap-3 justify-end">
          <button onClick={onCancel} className="h-10 px-5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">Cancelar</button>
          <button onClick={handleSave} disabled={!form.nombre || !form.precio || !form.cat}
            className="h-10 px-5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 disabled:bg-gray-300 rounded-lg transition-colors">
            {isNew ? "Añadir" : "Guardar"}
          </button>
        </div>
      </div>
    </div>
  );
}
