import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="max-w-[600px] mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <a className="text-blue-500" href="tel:998971709090">+998 (97) 170-90-90</a>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/tile_kafel">Instagram</a>
          <a href="https://t.me/keramagranit">Telegram</a>
        </div>
      </div>
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
  )
}
