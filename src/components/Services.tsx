import { Settings, Wrench, Search, Disc, PaintBucket, Zap } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Mantenimiento",
    description:
      "Cambio de aceite, filtros, bujías y mantenimiento preventivo para mantener tu vehículo en óptimas condiciones.",
  },
  {
    icon: Wrench,
    title: "Reparación",
    description:
      "Reparaciones mecánicas completas del motor, transmisión y sistema eléctrico con mano de obra garantizada.",
  },
  {
    icon: Search,
    title: "Diagnóstico",
    description:
      "Diagnóstico computarizado y escaneo de códigos de error para identificar problemas con precisión.",
  },
  {
    icon: Disc,
    title: "Frenos y Suspensión",
    description:
      "Cambio de pastillas, discos, amortiguadores y alineación para tu seguridad en el camino.",
  },
  {
    icon: PaintBucket,
    title: "Enderezado y Pintura",
    description:
      "Restauramos la carrocería de tu vehículo con enderezado profesional y pintura de alta calidad para dejarlo como nuevo.",
  },
  {
    icon: Zap,
    title: "Electricidad",
    description:
      "Diagnóstico y reparación del sistema eléctrico: alternador, motor de arranque, luces, sensores y cableado completo.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="min-h-screen section-padding bg-background flex flex-col justify-center">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Lo que hacemos
          </span>
          <h2 className="section-title text-center">Nuestros Servicios</h2>
          <p className="section-subtitle mx-auto text-center">
            Ofrecemos una gama completa de servicios mecánicos para mantener tu
            vehículo funcionando de manera segura y eficiente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
