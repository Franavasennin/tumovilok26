import { useState, useEffect } from "react";
import { PRODUCTOS_DEFAULT } from "../data/productos";

export default function useProductos() {
  const [productos, setProductos] = useState(PRODUCTOS_DEFAULT);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await window.storage.get("productos-catalogo");
        if (result && result.value) {
          const parsed = JSON.parse(result.value);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setProductos(parsed);
          }
        }
      } catch {
        // Key doesn't exist yet, use defaults
      }
      setLoaded(true);
    })();
  }, []);

  const saveProductos = async (newProds) => {
    setProductos(newProds);
    try {
      await window.storage.set("productos-catalogo", JSON.stringify(newProds));
    } catch (e) {
      console.error("Error guardando productos:", e);
    }
  };

  return { productos, saveProductos, loaded };
}
