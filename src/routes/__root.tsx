// src/routes/__root.tsx
import { RootRoute, Outlet } from '@tanstack/react-router'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

export const rootRoute = new RootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})
