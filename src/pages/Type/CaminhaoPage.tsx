import React, { useState, useEffect } from "react";
import { getValor } from "../../services/fipeService";
import BuscaMarca from "../../components/organisms/BuscaMarca";
import BuscaModelo from "../../components/organisms/BuscaModelo";
import BuscaAno from "../../components/organisms/BuscaAno";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/card";

const CaminhaoPage = () => {
  const [marcaSelecionada, setMarcaSelecionada] = useState("");
  const [modeloSelecionado, setModeloSelecionado] = useState("");
  const [anoSelecionado, setAnoSelecionado] = useState("");
  const [resultado, setResultado] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchValor = async () => {
      if (marcaSelecionada && modeloSelecionado && anoSelecionado) {
        setLoading(true);
        const data = await getValor(
          "caminhoes",
          Number(marcaSelecionada),
          Number(modeloSelecionado),
          anoSelecionado
        );
        setResultado(data);
        setLoading(false);
      }
    };
    fetchValor();
  }, [marcaSelecionada, modeloSelecionado, anoSelecionado]);

  return (
    <div className="max-w-xl mx-auto mt-32 p-2 space-y-6">
      <Card className="shadow-lg p-6">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-bold text-red-500">
           Caminhões
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <BuscaMarca
            tipoVeiculo="caminhoes"
            value={marcaSelecionada}
            onChange={(value) => {
              setMarcaSelecionada(value);
              setModeloSelecionado("");
              setAnoSelecionado("");
              setResultado(null);
            }}
          />

          <BuscaModelo
            tipoVeiculo="caminhoes"
            codMarca={marcaSelecionada}
            value={modeloSelecionado}
            onChange={(value) => {
              setModeloSelecionado(value);
              setAnoSelecionado("");
              setResultado(null);
            }}
            disabled={!marcaSelecionada}
          />

          <BuscaAno
            tipoVeiculo="caminhoes"
            codMarca={marcaSelecionada}
            codModelo={modeloSelecionado}
            value={anoSelecionado}
            onChange={setAnoSelecionado}
            disabled={!modeloSelecionado}
          />
        </CardContent>
      </Card>

      {/* Card de resultado */}
      <Card className="bg-white shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-center font-semibold">
            {loading
              ? "Carregando informações..."
              : resultado?.Modelo || " "}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p><strong>Marca:</strong> {loading ? "..." : resultado?.Marca || "-"}</p>
          <p><strong>Ano:</strong> {loading ? "..." : resultado?.AnoModelo || "-"}</p>
          <p><strong>Combustível:</strong> {loading ? "..." : resultado?.Combustivel || "-"}</p>
          <p><strong>Código FIPE:</strong> {loading ? "..." : resultado?.CodigoFipe || "-"}</p>
          <p><strong>Preço:</strong> {loading ? "..." : resultado?.Valor || "-"}</p>
          <p className="text-sm text-gray-500 text-center">
            {loading ? "..." : `Referência: ${resultado?.MesReferencia || "-"}`}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaminhaoPage;
