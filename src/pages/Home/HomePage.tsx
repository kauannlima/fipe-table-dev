import { Car, Truck, Bike, TriangleAlert } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 px-4">
        <div
          className="flex flex-col items-center p-12 bg-white shadow-lg rounded-xl cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-full md:w-64"
          onClick={() => navigate({ to: "/carro" })}
        >
          <Car className="w-20 h-20 text-blue-500 mb-4" />
          <span className="text-2xl font-semibold mb-2">Carros</span>
          <p className="text-center text-gray-600">
            Consulte a tabela FIPE de carros, descubra preços médios e modelos
            disponíveis.
          </p>
        </div>
        <div
          className="flex flex-col items-center p-12 bg-white shadow-lg rounded-xl cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-full md:w-64"
          onClick={() => navigate({ to: "/moto" })}
        >
          <Bike className="w-20 h-20 text-green-500 mb-4" />
          <span className="text-2xl font-semibold mb-2">Motos</span>
          <p className="text-center text-gray-600">
            Acesse os valores médios de motos na tabela FIPE e informações sobre
            modelos.
          </p>
        </div>
        <div
          className="flex flex-col items-center p-12 bg-white shadow-lg rounded-xl cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-full md:w-64"
          onClick={() => navigate({ to: "/caminhao" })}
        >
          <Truck className="w-20 h-20 text-red-500 mb-4" />
          <span className="text-2xl font-semibold mb-2">Caminhões</span>
          <p className="text-center text-gray-600">
            Confira preços médios de caminhões, modelos e informações detalhadas
            na tabela FIPE.
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-lg mx-auto text-sm text-gray-600 dark:text-gray-400">
        <TriangleAlert className="inline-block w-4 h-4 mr-1 align-text-top text-yellow-500" />
        Observação: Para valores precisos, selecione corretamente marca, modelo
        e ano. A Tabela FIPE determina preços apenas com todos os dados
        específicos.
      </p>
    </>
  );
};

export default HomePage;
