import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import CarroPage from '../pages/Type/CarroPage'

export const carroRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/carro',
  component: CarroPage,
})
