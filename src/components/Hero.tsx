import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTeamImage from "@/assets/hero-team.jpg";
import heroWorkshopImage from "@/assets/hero-workshop.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Workshop Image */}
      <div className="absolute inset-0">
        <img
          src={heroWorkshopImage}
          alt="Taller mecánico"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      </div>

      {/* Two-column layout */}
      <div className="section-container relative z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 mb-6 animate-fade-in backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">
                Más de 30 años de experiencia
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Expertos en Mecánica{" "}
              <span className="text-primary">Automotriz</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Más de 30 años brindando mantenimiento y reparación confiable para
              tu vehículo.
            </p>
          </div>

          {/* Right Column - Team Image with fade (on top of background) */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-r-2xl">
              <img
                src={heroTeamImage}
                alt="Equipo de Taller El Chele"
                className="w-full h-full object-cover"
              />
              {/* Fade overlay to the left */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
              {/* Fade overlay on top */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 via-background/30 to-transparent" />
              {/* Fade overlay on bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 via-background/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Centered CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
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
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-2">
            <span className="text-3xl font-display font-bold text-accent">
              1000+
            </span>
            <span className="text-sm">Clientes satisfechos</span>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-3xl font-display font-bold text-accent">
              30+
            </span>
            <span className="text-sm">Años de experiencia</span>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-3xl font-display font-bold text-accent">
              100%
            </span>
            <span className="text-sm">Garantizado</span>
          </div>
        </div>
      </div>

      {/* Mobile - Team image overlay */}
      <div className="absolute inset-0 lg:hidden pointer-events-none">
        <div className="absolute bottom-1/4 right-0 w-3/4 h-1/2">
          <img
            src={heroTeamImage}
            alt="Equipo de Taller El Chele"
            className="w-full h-full object-cover opacity-30 rounded-l-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 43.3C840 46.7 960 53.3 1080 56.7C1200 60 1320 60 1380 60L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            className="fill-muted"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
