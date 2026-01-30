import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWorkshopImage from "@/assets/hero-workshop.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Workshop Image */}
      <div className="absolute inset-0">
        <img src={heroWorkshopImage} alt="Taller mecánico" className="w-full h-full object-cover blur-sm dark:blur-0 dark:opacity-60" />
        {/* Light mode: darker tint for readability. Dark mode: gradient overlay */}
        <div className="absolute inset-0 bg-foreground/30 dark:bg-transparent dark:bg-gradient-to-r dark:from-background/90 dark:via-background/70 dark:to-background/40" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-20 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 mb-6 animate-fade-in backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">
              Más de 30 años de experiencia
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in text-primary-foreground text-center" style={{
          animationDelay: "0.1s"
        }}>
            Expertos en Mecánica{" "}
            <span className="text-primary">Automotriz</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-10 max-w-lg mx-auto animate-fade-in text-primary-foreground/80" style={{
          animationDelay: "0.2s"
        }}>
            Más de 30 años brindando mantenimiento y reparación confiable para
            tu vehículo.
          </p>
        </div>

        {/* Centered CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in" style={{
        animationDelay: "0.3s"
      }}>
          <Button variant="hero" size="xl" className="group">
            <CalendarCheck className="w-5 h-5 transition-transform group-hover:scale-110" />
            Agenda tu cita
          </Button>
          <Button variant="outline" size="xl" className="group border-primary">
            <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
            Llámanos
          </Button>
        </div>

        {/* Centered Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-fade-in" style={{
        animationDelay: "0.4s"
      }}>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-display font-bold text-accent">
              1000+
            </span>
            <span className="text-sm text-primary-foreground/70">Clientes satisfechos</span>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-3xl font-display font-bold text-accent">
              30+
            </span>
            <span className="text-sm text-primary-foreground/70">Años de experiencia</span>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-3xl font-display font-bold text-accent">
              100%
            </span>
            <span className="text-sm text-primary-foreground/70">Garantizado</span>
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;