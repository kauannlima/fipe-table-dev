import React, { useEffect, useState } from "react"
import { getMarcas } from "../../services/fipeService"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../atoms/select"
import { Label } from "../atoms/label"

interface BuscaMarcaProps {
  tipoVeiculo: "carros" | "motos" | "caminhoes"
  value: string
  onChange: (value: string) => void
}

export default function BuscaMarca({ tipoVeiculo, value, onChange }: BuscaMarcaProps) {
  const [marcas, setMarcas] = useState<{ codigo: number; nome: string }[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMarcas = async () => {
      setLoading(true)
      const data = await getMarcas(tipoVeiculo)
      setMarcas(data)
      setLoading(false)
    }
    fetchMarcas()
  }, [tipoVeiculo])

  return (
    <div className="mb-4">
      <Label>Marca:</Label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione a marca" />
        </SelectTrigger>
        <SelectContent>
          {marcas.map((m) => (
            <SelectItem key={m.codigo} value={String(m.codigo)}>
              {m.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {loading && <p className="text-sm text-gray-500 mt-1">Carregando marcas...</p>}
    </div>
  )
}
