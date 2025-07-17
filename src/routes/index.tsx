import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <Button className="uppercase py-6" variant="outline" asChild>
          <Link to="/catalog">Katalog</Link>
        </Button>
        <Button className="uppercase py-6" variant="outline" asChild>
          <a target="_blank" href="tel:998971709090" rel="noopener noreferrer">
            +998971709090
          </a>
        </Button>
        <Button className="uppercase py-6" variant="outline" asChild>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/tile_kafel"
          >
            Instagram
          </a>
        </Button>
        <Button className="uppercase py-6" variant="outline" asChild>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/keramagranit"
          >
            Telegram
          </a>
        </Button>
      </div>
    </div>
  );
}
