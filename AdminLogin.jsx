import { useState } from "react";
import { ADMIN_USER, ADMIN_PASS } from "../data/empresa";

export default function AdminLogin({ onLogin, onClose }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      onLogin();
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  const onKey = (e) => { if (e.key === "Enter") handleLogin(); };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">🔒 Admin</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
            <input type="text" value={user} onChange={e => { setUser(e.target.value); setError(""); }} onKeyDown={onKey}
              className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500/30 focus:border-red-500 outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input type="password" value={pass} onChange={e => { setPass(e.target.value); setError(""); }} onKeyDown={onKey}
              className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500/30 focus:border-red-500 outline-none"/>
          </div>
          {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
        </div>
        <div className="p-6 border-t border-gray-100">
          <button onClick={handleLogin} className="w-full h-10 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-sm">Entrar</button>
        </div>
      </div>
    </div>
  );
}
