import useCotizador from "../hooks/useCotizador";

const Total = () => {
  const { total } = useCotizador();

  if (total === 0) {
    return null;
  }
  return <div>{total}</div>;
};

export default Total;
