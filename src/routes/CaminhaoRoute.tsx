import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import CaminhaoPage from '../pages/Type/CaminhaoPage'

export const caminhaoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/caminhao',
  component: CaminhaoPage,
})
