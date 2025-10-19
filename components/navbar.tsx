import Link from "next/link";
import { Headphones, Github } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <nav className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/welcome" className="flex items-center gap-2 font-bold text-lg">
          <Headphones className="w-6 h-6 text-primary" />
          <span className="hidden sm:inline">Spotify Refresh Token</span>
        </Link>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/andatoshiki/toshiki-spotify-refresh-token-generator"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="rounded p-2 hover:bg-muted transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
