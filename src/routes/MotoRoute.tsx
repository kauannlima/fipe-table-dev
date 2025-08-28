import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import MotoPage from '../pages/Type/MotoPage'

export const motoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/moto',
  component: MotoPage,
})
