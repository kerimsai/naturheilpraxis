
import { Leaf, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navLinks = [
  { href: "/services", label: "Leistungen" },
  { href: "/#testimonials", label: "Erfahrungsberichte" },
  { href: "/#wellness", label: "KI-Assistent" },
  { href: "/#booking", label: "Termin" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block font-headline text-lg">
              Naturheilpraxis Julia Jordan
            </span>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-2 text-sm font-medium">
          {navLinks.map((link) => (
             <Button key={link.href} variant="ghost" asChild>
                <Link href={link.href}>{link.label}</Link>
             </Button>
          ))}
          <Button asChild>
            <Link href="/#contact">Kontakt</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="flex flex-1 justify-end md:hidden">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
                <nav className="flex h-full flex-col justify-between p-6">
                    <div>
                        <Link href="/" className="mb-8 flex items-center space-x-2">
                            <Leaf className="h-6 w-6 text-primary" />
                            <span className="font-bold font-headline text-lg">
                            Naturheilpraxis J. Jordan
                            </span>
                        </Link>
                        <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <SheetClose asChild key={link.href}>
                            <Link href={link.href} className="text-xl font-medium text-foreground/80 hover:text-foreground transition-colors">
                                {link.label}
                            </Link>
                            </SheetClose>
                        ))}
                        </div>
                    </div>
                    <SheetClose asChild>
                        <Button asChild className="w-full">
                            <Link href="/#contact">Kontakt</Link>
                        </Button>
                    </SheetClose>
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
