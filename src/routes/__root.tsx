import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="max-w-[600px] mx-auto">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
