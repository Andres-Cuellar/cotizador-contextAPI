import { useCallback, useRef, useMemo } from "react";
import useCotizador from "../hooks/useCotizador";
import { MARCAS, PLANES } from "../constans";

const Total = () => {
  const { total, datos } = useCotizador();
  const { marca, year, plan } = datos;

  const [nombreMarca] = useMemo(
    () => MARCAS.filter((m) => m.id === Number(marca)),
    [total]
  );

  const [nombrePlan] = useMemo(
    () => PLANES.filter((p) => p.id === Number(plan)),
    [total]
  );

  const yearRef = useRef(year);

  if (total === 0) {
    return null;
  }
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Año del auto: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total cotización: </span>
        {total}
      </p>
    </div>
  );
};

export default Total;
