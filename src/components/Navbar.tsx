import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "py-6"}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold neon-text tracking-wider">
          UI
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
              {label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-lg p-6 space-y-4">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block font-mono text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
