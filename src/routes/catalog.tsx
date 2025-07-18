import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/catalog")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="p-4">
        <div className="mb-4">
          <Button variant="outline" asChild>
            <a className="" href="https://tilekafel.taplink.ws/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8L2 12L6 16" />
                <path d="M2 12H22" />
              </svg>
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {[...Array(66)].map((_, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <img
                key={num}
                alt={num}
                src={`/${num}.jpg`}
                className="block h-auto max-w-full border-none"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
