# Tu Móvil OK — Web Completa v4

Web profesional para **Tu Móvil OK**, tienda de reparación de móviles, tablets y ordenadores en Las Palmas de Gran Canaria.

## Funcionalidades

- **Landing page** con secciones: Hero, Servicios, Operadoras, Tienda, Opiniones, Contacto
- **Chatbot IA** con Claude (Anthropic API) + Google Calendar para agendar citas
- **Panel de administración** para gestión CRUD de productos (persistente vía storage)
- **WhatsApp integrado** en todos los CTAs
- **Mapa interactivo** con Google Maps embed
- **Responsive** — diseño adaptado a móvil, tablet y escritorio

## Estructura del proyecto

```
tumovilok/
├── public/
│   └── index.html
├── src/
│   ├── data/
│   │   ├── empresa.js          # Logo, datos de contacto, credenciales admin
│   │   ├── servicios.js        # Array de 10 servicios
│   │   ├── operadoras.js       # 7 operadoras con colores
│   │   ├── productos.js        # Catálogo por defecto (8 productos)
│   │   ├── resenas.js          # Reseñas de clientes
│   │   └── chatbotContext.js   # Contexto completo del chatbot (precios, reglas)
│   ├── hooks/
│   │   └── useProductos.js     # Hook para cargar/guardar productos en storage
│   ├── components/
│   │   ├── icons/
│   │   │   └── WaIcon.jsx      # Icono SVG de WhatsApp
│   │   ├── Header.jsx          # Navbar sticky con menú móvil
│   │   ├── Hero.jsx            # Sección principal con CTAs
│   │   ├── Servicios.jsx       # Grid de servicios
│   │   ├── Operadoras.jsx      # Cards de operadoras + Nickel
│   │   ├── Tienda.jsx          # Catálogo con filtros y admin CRUD
│   │   ├── ProductEditor.jsx   # Modal para añadir/editar productos
│   │   ├── AdminLogin.jsx      # Modal de autenticación admin
│   │   ├── Resenas.jsx         # Opiniones de clientes
│   │   ├── Chatbot.jsx         # Chatbot IA con Anthropic API
│   │   └── Footer.jsx          # Footer con mapa y contacto
│   ├── App.jsx                 # Componente principal + estado global
│   └── index.js                # Entry point
├── package.json
├── .gitignore
└── README.md
```

## Instalación

```bash
npm install
npm start
```

## Operadoras configuradas

| Operadora | Color     | Servicios                |
|-----------|-----------|--------------------------|
| Orange    | #FF6600   | Fibra + Móvil + Prepago  |
| Digi      | #00205B   | Fibra + Móvil + Prepago  |
| MásMóvil  | #FFD100   | Fibra + Móvil + Prepago  |
| O2        | #0050FF   | Fibra + Móvil            |
| Lowi      | #E60012   | Fibra + Móvil + Prepago  |
| Lebara    | #5BC0EB   | Móvil + Prepago          |
| Llamaya   | #FFFFFF   | Móvil + Prepago          |

## Admin

- Acceso desde el icono ⚙️ en la navbar
- Usuario y contraseña se configuran mediante variables de entorno (`REACT_APP_ADMIN_USER`, `REACT_APP_ADMIN_PASS`), ver `.env.example`. No hay credenciales hardcodeadas en el código.

## Tecnologías

- React 18 + Hooks
- Tailwind CSS (utility classes)
- Anthropic Claude API (chatbot)
- Google Calendar MCP (agendar citas)
- Google Maps Embed API

## Autor

Desarrollado por **Francisco José Navarro Fabelo** durante las FCT en Tu Móvil OK (IES El Rincón, ASIR).
