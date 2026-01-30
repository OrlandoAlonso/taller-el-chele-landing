import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/95 dark:from-background/95 dark:via-background/90 dark:to-background/95" />

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 dark:bg-accent/30 border border-accent/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground dark:text-accent">
              Más de 30 años de experiencia
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground dark:text-foreground leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Expertos en Mecánica{" "}
            <span className="text-accent">Automotriz</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-primary-foreground/80 dark:text-muted-foreground mb-10 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Más de 30 años brindando mantenimiento y reparación confiable para
            tu vehículo.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" className="group">
              <CalendarCheck className="w-5 h-5 transition-transform group-hover:scale-110" />
              Agenda tu cita
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Llámanos
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-12 flex flex-wrap items-center gap-8 text-primary-foreground/60 dark:text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display font-bold text-accent">
                1000+
              </span>
              <span className="text-sm">Clientes satisfechos</span>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20 dark:bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display font-bold text-accent">
                30+
              </span>
              <span className="text-sm">Años de experiencia</span>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20 dark:bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display font-bold text-accent">
                100%
              </span>
              <span className="text-sm">Garantizado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
