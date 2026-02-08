import {
  Wrench,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-card py-6">
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
                <a
                  href="tel:+50585729478"
                  className="hover:text-decoration-underline hover:underline transition-colors"
                >
                  +505 8572 - 9478
                </a>
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
                Lunes - Viernes:
                <span className="text-green-400">8:00 AM - 5:30 PM</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 dark:text-muted-foreground text-sm">
                <Clock className="w-4 h-4 text-accent" />
                Sábado:<span className="text-green-400">8:00 AM - 12:00 PM</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 dark:text-muted-foreground text-sm">
                <Clock className="w-4 h-4 text-accent" />
                Domingo:<span className="text-red-400">Cerrado</span>
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
                <Facebook className="w-5 h-5 text-primary-foreground dark:text-foreground group-hover:dark:text-blue-600" />
              </a>
              <a
                href="https://wa.me/50585729478"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 dark:bg-muted flex items-center justify-center hover:bg-accent transition-colors group"
                aria-label="WhatsApp"
                target="_blank"
              >
                <WhatsAppIcon className="w-5 h-5 text-primary-foreground dark:text-foreground group-hover:text-green-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-primary-foreground/10 dark:border-border">
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
