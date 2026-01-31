import {
  Wrench,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-card py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Wrench className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-primary-foreground dark:text-foreground">
                Taller El Chele
              </span>
            </a>
            <p className="text-primary-foreground/70 dark:text-muted-foreground text-sm leading-relaxed">
              Más de 30 años brindando servicio mecánico de calidad. Tu
              confianza es nuestra prioridad.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground dark:text-foreground mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70 dark:text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>+505 8572-9478</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 dark:text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>VI. Alemania, Del Gallo Mas Gallo, 1C. al Sur.</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground dark:text-foreground mb-4">
              Horario
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70 dark:text-muted-foreground text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span>Lunes - Viernes: 8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 dark:text-muted-foreground text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span>Sábado: 8:00 AM - 1:00 PM</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 dark:text-muted-foreground text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span>
                  Domingo: <span className="text-red-400">Cerrado</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground dark:text-foreground mb-4">
              Síguenos
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/tallerelchele1108/"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 dark:bg-muted flex items-center justify-center hover:bg-accent transition-colors group"
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook className="w-5 h-5 text-primary-foreground dark:text-foreground group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 dark:border-border">
          <p className="text-center text-primary-foreground/50 dark:text-muted-foreground text-sm">
            © {new Date().getFullYear()} Taller El Chele. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
