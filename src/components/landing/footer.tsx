
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: 'Facebook', url: '#', icon: Facebook },
  { name: 'Instagram', url: '#', icon: Instagram },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">Naturheilpraxis Julia Jordan</span>
            </Link>
            <p className="text-muted-foreground">
              Ihre Partnerin für ganzheitliche Gesundheit
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg font-headline">Kontaktinformationen</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Vaalserstr. 525, 52074 Aachen, Deutschland</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+4915150798638" className="hover:text-primary">+49 (0)151 50798638</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@heilpraxis-jordan.de" className="hover:text-primary">info@heilpraxis-jordan.de</a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg font-headline">Folgen Sie mir</h4>
            <div className="flex space-x-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button key={link.name} variant="outline" size="icon" asChild>
                    <a href={link.url} aria-label={link.name}>
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Naturheilpraxis Julia Jordan. Alle Rechte vorbehalten.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/impressum" className="hover:text-primary">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-primary">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
