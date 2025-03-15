import { useState, useEffect } from "react";

export function useCounter() {
  // Cargar el valor del contador desde localStorage o usar 0 por defecto
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("counter");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const [mensaje, setMensaje] = useState(""); // Estado del mensaje

  // Guardar en localStorage cada vez que count cambie
  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  const updateMessage = (nuevoValor) => {
    if (nuevoValor === 5) {
      setMensaje("Es mi número favorito 🎉");
    } else {
      setMensaje(""); // Borra el mensaje si no es 5
    }
  };

  const decreaseCount = () => {
    setCount(prev => {
      const newValue = prev > 0 ? prev - 1 : 0;
      updateMessage(newValue);
      return newValue;
    });
  };

  const increaseCount = () => {
    setCount(prev => {
      const newValue = prev + 1;
      updateMessage(newValue);
      return newValue;
    });
  };

  return { count, mensaje, increaseCount, decreaseCount };
}
