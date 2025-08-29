import React, { useEffect, useState } from "react"
import { getAnos } from "../../services/fipeService"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../atoms/select"
import { Label } from "../atoms/label"

interface BuscaAnoProps {
  tipoVeiculo: "carros" | "motos" | "caminhoes"
  codMarca: string
  codModelo: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

export default function BuscaAno({ tipoVeiculo, codMarca, codModelo, value, onChange, disabled }: BuscaAnoProps) {
  const [anos, setAnos] = useState<{ codigo: string; nome: string }[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!codMarca || !codModelo) {
      setAnos([])
      return
    }
    const fetchAnos = async () => {
      setLoading(true)
      const data = await getAnos(tipoVeiculo, Number(codMarca), Number(codModelo))
      setAnos(data)
      setLoading(false)
    }
    fetchAnos()
  }, [tipoVeiculo, codMarca, codModelo])

  return (
    <div className="mb-4">
      <Label>Ano:</Label>

      <Select value={value} onValueChange={onChange} disabled={disabled || loading || !codModelo}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione o ano" />
        </SelectTrigger>
        <SelectContent>
          {anos.map((a) => (
            <SelectItem key={a.codigo} value={a.codigo}>
              {a.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {loading && <p className="text-sm text-gray-500 mt-1">Carregando anos...</p>}
    </div>
  )
}
