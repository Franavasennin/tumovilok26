import { LOGO, E } from "../data/empresa";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5 mb-2">
              <img src={LOGO} alt={E.nombre} className="w-10 h-10 rounded-lg object-cover" />
              <span className="text-white font-bold text-lg">{E.nombre}</span>
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href={`tel:${E.tel}`} className="hover:text-red-400 transition-colors">📞 {E.tel}</a>
              <a href={`mailto:${E.email}`} className="hover:text-red-400 transition-colors">✉️ {E.email}</a>
              <a href={E.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">📍 {E.dir}, {E.ciudad}</a>
            </div>
            <div className="flex gap-3 mt-2">
              <a href={E.ig} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={E.fb} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Horario</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex justify-between pb-2 border-b border-gray-800"><span>Lunes – Viernes</span><span className="text-white font-medium">{E.horario.semana}</span></li>
              <li className="flex justify-between pb-2 border-b border-gray-800"><span>Sábado</span><span className="text-white font-medium">{E.horario.sabado}</span></li>
              <li className="flex justify-between pb-2 border-b border-gray-800"><span>Domingo</span><span className="text-red-400 font-medium">{E.horario.domingo}</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Encuéntranos</h3>
            <a href={E.mapsUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-44 rounded-lg overflow-hidden bg-gray-800 relative group cursor-pointer">
              <iframe title="Ubicación" src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&q=${encodeURIComponent(E.dir+", "+E.ciudad)}&zoom=16`}
                width="100%" height="100%" style={{ border: 0, pointerEvents: "none" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                  Abrir en Google Maps →
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-5">
        <p className="text-center text-xs text-gray-500">© {new Date().getFullYear()} {E.nombre}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
