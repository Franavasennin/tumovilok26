import { useState } from "react";
import useProductos from "./hooks/useProductos";
import { E } from "./data/empresa";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Operadoras from "./components/Operadoras";
import Tienda from "./components/Tienda";
import ProductEditor from "./components/ProductEditor";
import AdminLogin from "./components/AdminLogin";
import Resenas from "./components/Resenas";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import WaIcon from "./components/icons/WaIcon";

export default function App() {
  const { productos, saveProductos, loaded } = useProductos();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const handleAdminClick = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setShowLogin(true);
    }
  };

  const handleDeleteProduct = (id) => {
    if (deleteConfirm === id) {
      saveProductos(productos.filter(p => p.id !== id));
      setDeleteConfirm(null);
    } else {
      setDeleteConfirm(id);
      setTimeout(() => setDeleteConfirm(null), 3000);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowEditor(true);
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowEditor(true);
  };

  const handleSaveProduct = (product) => {
    const exists = productos.find(p => p.id === product.id);
    if (exists) {
      saveProductos(productos.map(p => p.id === product.id ? product : p));
    } else {
      saveProductos([...productos, product]);
    }
    setShowEditor(false);
    setEditingProduct(null);
  };

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-8 h-8 border-3 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-sm text-gray-500">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}>
      {isAdmin && (
        <div className="bg-red-600 text-white text-center py-2 text-sm font-medium">
          🔒 Modo Administrador — Los cambios en productos se guardan automáticamente
          <button onClick={() => setIsAdmin(false)} className="ml-3 underline hover:no-underline">Salir</button>
        </div>
      )}

      <Header onAdminClick={handleAdminClick} isAdmin={isAdmin}/>
      <Hero/>
      <Servicios/>
      <Operadoras/>
      <Tienda
        productos={productos}
        isAdmin={isAdmin}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
        onAdd={handleAddProduct}
        deleteConfirm={deleteConfirm}
      />
      <Resenas/>
      <Footer/>
      <Chatbot/>

      {/* WhatsApp flotante */}
      <a href={`https://wa.me/${E.wa}?text=Hola, quiero información.`} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110" aria-label="WhatsApp">
        <WaIcon c="w-7 h-7"/>
      </a>

      {showLogin && <AdminLogin onLogin={() => { setIsAdmin(true); setShowLogin(false); }} onClose={() => setShowLogin(false)}/>}
      {showEditor && <ProductEditor product={editingProduct} onSave={handleSaveProduct} onCancel={() => { setShowEditor(false); setEditingProduct(null); }}/>}
    </div>
  );
}
