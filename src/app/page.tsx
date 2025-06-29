import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Booking } from "@/components/landing/booking";
import { Footer } from "@/components/landing/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="animate-in fade-in-0 duration-1000">
          <Hero />
        </div>
        <div className="animate-in fade-in-0 duration-1000 delay-300">
          <Services />
        </div>
        <div className="animate-in fade-in-0 duration-1000 delay-700">
          <Booking />
        </div>
        <Separator />
      </main>
      <Footer />
    </div>
  );
}
