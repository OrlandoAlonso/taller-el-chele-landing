import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <section
      id="contacto"
      className="min-h-screen section-padding bg-muted flex flex-col justify-center"
    >
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.7991158452902!2d-86.21851165796342!3d12.12679962490439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73ff9d1c151cd5%3A0x13ab93f7ad883fb2!2sTaller%20El%20Chele!5e0!3m2!1ses-419!2sni!4v1769848199667!5m2!1ses-419!2sni"
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
                <p className="text-muted-foreground">
                  VI. Alemania, Del Gallo Mas Gallo, 1C. al Sur.
                </p>
              </div>
            </div>
            <Button asChild className="gap-2">
              <a
                href="https://www.google.com/maps/place/Taller+El+Chele/@12.1262656,-86.2363119,14z/data=!4m10!1m2!2m1!1sTaller+El+Chele,+VI.+Alemania+Del+Gallo+Mas+Gallo+Las+Americas,+1C.+al+Sur,+Managua+11001!3m6!1s0x8f73ff9d1c151cd5:0x13ab93f7ad883fb2!8m2!3d12.1267874!4d-86.2186716!15sCllUYWxsZXIgRWwgQ2hlbGUsIFZJLiBBbGVtYW5pYSBEZWwgR2FsbG8gTWFzIEdhbGxvIExhcyBBbWVyaWNhcywgMUMuIGFsIFN1ciwgTWFuYWd1YSAxMTAwMZIBCG1lY2hhbmlj4AEA!16s%2Fg%2F11yy_1vcq3?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
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
