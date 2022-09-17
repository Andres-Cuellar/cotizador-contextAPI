import useCotizador from "../hooks/useCotizador";
import Formulario from "./Formulario";
import Spinner from "./Spinner";
import Total from "./Total";

const AppSeguro = () => {
  const { total, cargando } = useCotizador();
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black mb-10">
          Cotizador de seguros de auto
        </h1>
        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
          <Formulario />
          {cargando ? <Spinner /> : <Total />}
        </main>
      </header>
    </>
  );
};

export default AppSeguro;
