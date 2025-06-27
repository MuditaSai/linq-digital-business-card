import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-sm font-bold">L</span>
            </div>
            <span className="hidden font-bold sm:inline-block">LINQ</span>
          </Link>
        </div>

        <nav className="flex items-center space-x-4">
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/examples"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Examples
          </Link>
          <Button variant="default" size="sm">
            Create Card
          </Button>
        </nav>
      </div>
    </header>
  );
}
