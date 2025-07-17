import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-[url('/bg.jpg')] bg-cover bg-center h-screen max-w-[600px] mx-auto p-4">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
