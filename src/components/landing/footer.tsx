
import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: 'Facebook', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'LinkedIn', url: '#' },
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
              Ihr Partner für ganzheitliche Gesundheit und natürliche Heilung.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg font-headline">Kontaktinformationen</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Musterstrasse 123, 12345 Musterstadt, Deutschland</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+491234567890" className="hover:text-primary">+49 123 456 7890</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@naturheilpraxis-jordan.de" className="hover:text-primary">info@naturheilpraxis-jordan.de</a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg font-headline">Folgen Sie uns</h4>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="outline" size="icon" asChild>
                  <a href={link.url} aria-label={link.name}>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      {/* Placeholder for social icons */}
                      <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.1,9.78 4.2,10.59C3.47,10.57 2.78,10.36 2.17,10.05C2.17,10.07 2.17,10.08 2.17,10.09C2.17,12.19 3.65,13.95 5.6,14.34C5.24,14.44 4.86,14.5 4.47,14.5C4.2,14.5 3.93,14.47 3.67,14.42C4.22,16.14 5.76,17.38 7.62,17.42C6.18,18.55 4.42,19.24 2.5,19.24C2.17,19.24 1.84,19.22 1.51,19.17C3.39,20.41 5.64,21.17 8.1,21.17C16,21.17 20.33,14.65 20.33,8.8C20.33,8.62 20.33,8.45 20.32,8.27C21.15,7.67 21.87,6.9 22.46,6Z" />
                    </svg>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Naturheilpraxis Julia Jordan. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
