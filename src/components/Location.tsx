import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const address = "VI. Alemania, Del Gallo Mas Gallo, 1C. al Sur.";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Taller El Chele " + address
  )}`;

  return (
    <section id="contacto" className="section-padding bg-muted">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Encuéntranos
          </span>
          <h2 className="section-title text-center">Nuestra Ubicación</h2>
          <p className="section-subtitle mx-auto text-center">
            Visítanos en nuestro taller o contáctanos para más información.
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-4xl mx-auto">
          {/* Map Placeholder */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-card border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5850548477886!2d-89.18718268518714!3d13.69413629039382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633067dbcbe39d%3A0x7a83af4fb4a7f2f6!2sSan%20Salvador%2C%20El%20Salvador!5e0!3m2!1sen!2sus!4v1706800000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Ubicación de Taller El Chele"
            />
          </div>

          {/* Address & Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">
                  Taller El Chele
                </p>
                <p className="text-muted-foreground">{address}</p>
              </div>
            </div>
            <Button asChild className="gap-2">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                Abrir en Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
