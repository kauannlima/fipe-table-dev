import React, { useEffect, useState } from "react"
import { getModelos } from "../../services/fipeService"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../atoms/select"
import { Label } from "../atoms/label"


interface BuscaModeloProps {
  tipoVeiculo: "carros" | "motos" | "caminhoes"
  codMarca: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

export default function BuscaModelo({ tipoVeiculo, codMarca, value, onChange, disabled }: BuscaModeloProps) {
  const [modelos, setModelos] = useState<{ codigo: number; nome: string }[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!codMarca) {
      setModelos([])
      return
    }
    const fetchModelos = async () => {
      setLoading(true)
      const data = await getModelos(tipoVeiculo, Number(codMarca))
      setModelos(data.modelos) 
      setLoading(false)
    }
    fetchModelos()
  }, [tipoVeiculo, codMarca])

  return (
    <div className="mb-4">
      <Label>Modelo:</Label>

      <Select value={value} onValueChange={onChange} disabled={disabled || loading || !codMarca}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione o modelo" />
        </SelectTrigger>
        <SelectContent>
          {modelos.map((m) => (
            <SelectItem key={m.codigo} value={String(m.codigo)}>
              {m.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {loading && <p className="text-sm text-gray-500 mt-1">Carregando modelos...</p>}
    </div>
  )
}
