import axios from 'axios';

const BASE_URL = 'https://parallelum.com.br/fipe/api/v1/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_FIPE_API_KEY}`, 
  },
});

export const getMarcas = async (tipo: 'carros' | 'motos' | 'caminhoes') => {
  const response = await api.get(`${tipo}/marcas`);
  return response.data;
};

export const getModelos = async (tipo: 'carros' | 'motos' | 'caminhoes', codMarca: number) => {
  const response = await api.get(`${tipo}/marcas/${codMarca}/modelos`);
  return response.data;
};

export const getAnos = async (tipo: 'carros' | 'motos' | 'caminhoes', codMarca: number, codModelo: number) => {
  const response = await api.get(`${tipo}/marcas/${codMarca}/modelos/${codModelo}/anos`);
  return response.data;
};

export const getValor = async (tipo: 'carros' | 'motos' | 'caminhoes', codMarca: number, codModelo: number, anos:string) => {
  const response = await api.get(`${tipo}/marcas/${codMarca}/modelos/${codModelo}/anos/${anos}`);
  return response.data;
};
