import React, { useState } from 'react'
import MarcaDropdown from '../../components/organisms/MarcaDropdown'

const CaminhaoPage = () => {
  const [marcaSelecionada, setMarcaSelecionada] = useState("")

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Consulta FIPE - Caminhões</h1>

      <MarcaDropdown
        tipoVeiculo="caminhoes"
        value={marcaSelecionada}
        onChange={setMarcaSelecionada}
      />

      {marcaSelecionada && (
        <p className="mt-4 text-center text-gray-700">
          Marca selecionada: <strong>{marcaSelecionada}</strong>
        </p>
      )}
    </div>
  )
}

export default CaminhaoPage
