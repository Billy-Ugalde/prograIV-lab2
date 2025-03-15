import { useCounter } from "../Hooks/useCounter";

export default function Counter() {
  const { count, mensaje, increaseCount, decreaseCount } = useCounter();

  return (
    <div className="card">
      <p>{count}</p>

      {/* Mostrar el mensaje solo si existe el 5 que es mi numero favorito */}
      {mensaje && <p>{mensaje}</p>}

      <button onClick={increaseCount}>➕</button>   
      <button onClick={decreaseCount}>➖</button>
    </div>
  );
}

