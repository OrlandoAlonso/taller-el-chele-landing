import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
const navItems = [{
  label: "Servicios",
  href: "#servicios"
}, {
  label: "Galería",
  href: "#galeria"
}, {
  label: "Nosotros",
  href: "#nosotros"
}, {
  label: "Contacto",
  href: "#contacto"
}];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    // Check initial preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="Taller El Chele Logo" 
              className="w-12 h-12 rounded-lg object-cover transition-transform group-hover:scale-105"
            />
            <span className="font-display text-xl font-bold text-primary-foreground">Taller El Chele</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <a key={item.href} href={item.href} className="font-medium transition-colors text-primary-foreground">
                {item.label}
              </a>)}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-2">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-foreground" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border animate-slide-in-right">
            <div className="py-4 px-4 space-y-2">
              {navItems.map(item => <a key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 rounded-lg text-foreground hover:bg-muted font-medium transition-colors">
                  {item.label}
                </a>)}
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;