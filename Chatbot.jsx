import { useState, useRef, useEffect } from "react";
import { CHATBOT_CONTEXT } from "../data/chatbotContext";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "¡Hola! Soy el asistente de Tu Móvil OK. Puedo ayudarte con precios, servicios, horarios y también agendar citas para reparaciones. ¿En qué puedo ayudarte?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg = { role: "user", content: text };
    const newMsgs = [...messages, userMsg];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: CHATBOT_CONTEXT,
          messages: newMsgs.map(m => ({ role: m.role, content: m.content })),
          mcp_servers: [
            {
              type: "url",
              url: "https://gcal.mcp.claude.com/mcp",
              name: "google-calendar",
            },
          ],
        }),
      });
      const data = await res.json();
      // Extract text from all content blocks (ignores tool_use/tool_result internals)
      const textParts = (data.content || [])
        .filter(b => b.type === "text")
        .map(b => b.text);
      const reply = textParts.join("\n").trim() || "Lo siento, llámanos al 642414289.";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Error de conexión. Contacta al 642414289." }]);
    }
    setLoading(false);
  };
  const onKey = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 left-5 z-50 w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-xl transition-all hover:scale-110" aria-label="Asistente">
        {isOpen
          ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          : <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>}
      </button>
      {isOpen && (
        <div className="fixed bottom-24 left-5 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden" style={{ height: "480px" }}>
          <div className="bg-red-600 text-white px-4 py-3 flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">🤖</div>
            <div><p className="font-semibold text-sm">Asistente Tu Móvil OK</p><p className="text-xs text-red-200">En línea</p></div>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user" ? "bg-red-600 text-white rounded-br-md" : "bg-white text-gray-800 border border-gray-200 rounded-bl-md shadow-sm"
                }`}>{m.content}</div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}/>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}/>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}/>
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef}/>
          </div>
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2 flex-shrink-0">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={onKey}
              placeholder="Escribe tu consulta..." className="flex-1 h-10 px-4 rounded-full bg-gray-100 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500/30 border-none"/>
            <button onClick={send} disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white flex items-center justify-center transition-colors flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </button>
          </div>
          {messages.length <= 1 && (
            <div className="px-3 pb-3 bg-white flex flex-wrap gap-1.5">
              {["Precio pantalla iPhone", "Agendar cita", "Tarifas fibra", "Horarios"].map(s => (
                <button key={s} onClick={() => setInput(s)} className="px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-medium hover:bg-red-100 transition-colors">{s}</button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
