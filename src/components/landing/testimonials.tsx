
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Julias Ansatz ist unglaublich mitfühlend und gründlich. Ich fühlte mich zum ersten Mal auf meinem Gesundheitsweg gehört und unterstützt. Der personalisierte Behandlungsplan hat einen gewaltigen Unterschied gemacht.",
    name: "Anna Müller",
    avatar: "AM",
    image: "https://placehold.co/100x100.png",
    aiHint: "woman portrait"
  },
  {
    quote: "Ich war skeptisch gegenüber der Naturheilkunde, aber meine Erfahrung in dieser Praxis hat meine Meinung komplett geändert. Die Kombination aus Ernährungsberatung und Pflanzenheilkunde hat meine chronischen Probleme deutlich verbessert.",
    name: "Markus Weber",
    avatar: "MW",
    image: "https://placehold.co/100x100.png",
    aiHint: "man portrait"
  },
  {
    quote: "Die Mind-Body-Techniken, die ich von Julia gelernt habe, haben mein Leben verändert und mir geholfen, mit Stress und Angst umzugehen. Es ist eine wirklich ganzheitliche Praxis, die sich um den ganzen Menschen kümmert.",
    name: "Sophie Keller",
    avatar: "SK",
    image: "https://placehold.co/100x100.png",
    aiHint: "person smiling"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Was unsere Patienten sagen</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Entdecken Sie, wie wir anderen auf ihrem Weg zum Wohlbefinden geholfen haben.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex flex-col items-start justify-between p-6 h-full">
                    <blockquote className="italic text-lg mb-4 before:content-['„'] after:content-['“']">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center gap-4 mt-auto">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold font-headline">{testimonial.name}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
