import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import logo from "@/assets/logo-sinfondo.png";

interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
}

const navItems: NavItem[] = [
  {
    label: "Servicios",
    href: "#servicios",
  },
  {
    label: "Trabajos",
    href: "/trabajos",
    isRoute: true,
  },
  {
    label: "Taller",
    href: "#taller",
  },
  {
    label: "Nosotros",
    href: "#nosotros",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    // Set dark mode permanently
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="Taller El Chele Logo"
                className="w-14 h-14 object-contain rounded-xl transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <span className="font-display text-xl font-bold text-primary-foreground">
              Taller El Chele
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.href === "#contacto") {
                return (
                  <button
                    key={item.href}
                    onClick={() => setIsContactOpen(true)}
                    className="font-medium transition-colors text-primary-foreground hover:text-accent cursor-pointer"
                  >
                    {item.label}
                  </button>
                );
              }
              if (item.isRoute) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="font-medium transition-colors text-primary-foreground hover:text-accent"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <a
                  key={item.href}
                  href={`/${item.href}`}
                  className="font-medium transition-colors text-primary-foreground hover:text-accent"
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border animate-slide-in-right">
            <div className="py-4 px-4 space-y-2">
              {navItems.map((item) => {
                if (item.href === "#contacto") {
                  return (
                    <button
                      key={item.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsContactOpen(true);
                      }}
                      className="block w-full text-left py-3 px-4 rounded-lg text-foreground hover:bg-muted font-medium transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  );
                }
                if (item.isRoute) {
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 rounded-lg text-foreground hover:bg-muted font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={item.href}
                    href={`/${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 rounded-lg text-foreground hover:bg-muted font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <ContactModal open={isContactOpen} onOpenChange={setIsContactOpen} />
    </header>
  );
};
export default Header;
