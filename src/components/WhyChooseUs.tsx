import { UserCheck, Heart, Shield, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Técnicos Especializados",
    description:
      "Personal capacitado y con años de experiencia en todo tipo de vehículos.",
  },
  {
    icon: Heart,
    title: "Atención Personalizada",
    description:
      "Te explicamos cada detalle y te mantenemos informado durante todo el proceso.",
  },
  {
    icon: Shield,
    title: "Diagnóstico Confiable",
    description:
      "Usamos equipo de última generación para diagnósticos precisos y certeros.",
  },
  {
    icon: DollarSign,
    title: "Precios Claros y Justos",
    description:
      "Cotizaciones transparentes sin sorpresas. Sabes exactamente lo que pagas.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="nosotros" className="min-h-screen section-padding bg-muted flex flex-col justify-center">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-4">
            Nuestra diferencia
          </span>
          <h2 className="section-title text-center">
            ¿Por qué elegir Taller El Chele?
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Combinamos experiencia, honestidad y tecnología para brindarte el
            mejor servicio automotriz.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center p-6 rounded-2xl bg-card border border-border card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-card-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
