import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { rootRoute } from './routes/__root'
import { homeRoute } from './routes/HomeRoute'
import { aboutRoute } from './routes/AboutRoute' 
import { carroRoute } from './routes/CarroRoute' 
import { motoRoute } from './routes/MotoRoute' 
import { caminhaoRoute } from './routes/CaminhaoRoute' 

import "./index.css"; 


const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute, aboutRoute, carroRoute, motoRoute, caminhaoRoute]),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
