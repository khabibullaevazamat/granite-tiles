import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="max-w-[600px] mx-auto p-4">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
