"use client";

import Script from 'next/script';

export function Booking() {
  return (
    <section id="booking" className="container py-12 md:py-24">
      <div className="flex flex-col items-center gap-8 text-center">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Buchen Sie Ihren Termin</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                Bereit, den ersten Schritt zu besserer Gesundheit zu machen? Buchen Sie Ihren Termin direkt online. Ich freue mich darauf, Sie in meiner Praxis begrüssen zu dürfen.
            </p>
        </div>
        <div className="w-full max-w-4xl">
          {/* Calendly Inline-Widget Beginn */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/kerimsaiacc/termin" 
            style={{minWidth: '320px', height: '700px'}}
          ></div>
          <Script 
            type="text/javascript" 
            src="https://assets.calendly.com/assets/external/widget.js" 
            async 
          />
          {/* Calendly Inline-Widget Ende */}
        </div>
      </div>
    </section>
  );
}
