import { useState, useEffect } from "react";
import { LOGO, E } from "../data/empresa";
import WaIcon from "./icons/WaIcon";

export default function Header({ onAdminClick, isAdmin }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [
    { l: "Inicio", h: "#inicio" }, { l: "Servicios", h: "#servicios" },
    { l: "Operadoras", h: "#operadoras" }, { l: "Tienda", h: "#tienda" },
    { l: "Opiniones", h: "#opiniones" }, { l: "Contacto", h: "#contacto" },
  ];
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img src={LOGO} alt={E.nombre} className="w-10 h-10 rounded-lg object-cover" />
          <span className="text-lg font-bold text-gray-900 tracking-tight">{E.nombre}</span>
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {links.map(l => <a key={l.h} href={l.h} className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">{l.l}</a>)}
          <button onClick={onAdminClick} className={`text-sm font-medium transition-colors ${isAdmin ? "text-red-600" : "text-gray-400 hover:text-gray-600"}`} title="Panel Admin">
            ⚙️
          </button>
        </nav>
        <a href={`https://wa.me/${E.wa}?text=Hola, quiero información.`} target="_blank" rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 h-10 px-5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-colors">
          <WaIcon c="w-4 h-4"/> WhatsApp
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gray-700" aria-label="Menú">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4 shadow-lg">
          {links.map(l => <a key={l.h} href={l.h} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-gray-700 hover:text-red-600 border-b border-gray-50">{l.l}</a>)}
          <button onClick={() => { setOpen(false); onAdminClick(); }} className="block py-3 text-sm font-medium text-gray-500 hover:text-red-600 w-full text-left">⚙️ Admin</button>
          <a href={`https://wa.me/${E.wa}`} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 w-full h-11 bg-green-500 text-white font-semibold rounded-lg">
            <WaIcon c="w-4 h-4"/> WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
