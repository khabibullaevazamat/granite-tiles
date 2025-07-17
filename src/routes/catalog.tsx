import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/catalog')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className="max-w-[600px] mx-auto p-4">
        <div className="grid grid-cols-1 gap-8">
          {[...Array(66)].map((_, i) => {
            const num = String(i + 1).padStart(2, '0')
            return (
              <img
                key={num}
                alt={num}
                src={`/${num}.jpg`}
                className="block h-auto max-w-full border-none"
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
