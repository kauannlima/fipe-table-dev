import React, { useEffect, useState } from "react"
import { getMarcas } from "../../services/fipeService"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../atoms/select"
import { Label } from "../atoms/label"

interface MarcaDropdownProps {
  tipoVeiculo: "carros" | "motos" | "caminhoes"
  value: string
  onChange: (value: string) => void
}

export default function MarcaDropdown({ tipoVeiculo, value, onChange }: MarcaDropdownProps) {
  const [marcas, setMarcas] = useState<{ codigo: string; nome: string }[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMarcas = async () => {
      setLoading(true)
      const data = await getMarcas(tipoVeiculo) // usa o tipo recebido
      setMarcas(data)
      setLoading(false)
    }
    fetchMarcas()
  }, [tipoVeiculo]) // refaz a busca se o tipo mudar

  return (
    <div className="mb-4">
      <Label>Marca:</Label>

      <Select value={value} onValueChange={onChange} disabled={loading}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione a marca" />
        </SelectTrigger>

        <SelectContent>
          {marcas.map((m) => (
            <SelectItem key={m.codigo} value={m.codigo}>
              {m.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {loading && (
        <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
          <div className="h-4 w-4 border-2 border-t-2 border-gray-300 rounded-full animate-spin"></div>
          Carregando marcas...
        </div>
      )}
    </div>
  )
}
