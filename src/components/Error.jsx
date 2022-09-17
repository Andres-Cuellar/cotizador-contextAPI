import useCotizador from "../hooks/useCotizador";

export const Error = () => {
  const { error } = useCotizador();
  return (
    <div>
      <p className="border text-center border-red-400 bg-red-100 py-3 text-red-700 font-bold">
        {error}
      </p>
    </div>
  );
};
