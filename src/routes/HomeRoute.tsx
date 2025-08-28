import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import HomePage from '../pages/Home/HomePage'

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})
