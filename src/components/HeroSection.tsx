import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-mono text-sm tracking-[0.3em] uppercase text-neon-cyan mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          &lt; Hello World /&gt;
        </p>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6 neon-text animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
          UMAR IMRAN
        </h1>

        <div className="h-[2px] w-32 mx-auto gradient-neon rounded-full mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }} />

        <p className="font-body text-xl sm:text-2xl md:text-3xl font-light text-foreground/80 mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
          WEB Developer &bull; Creative Coder &bull; Undergraduate
        </p>

        <div className="flex gap-4 justify-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: "1.1s" }}>
          <a href="#contact" className="px-8 py-3 font-display text-sm tracking-widest uppercase border border-primary/50 rounded-sm neon-border hover:bg-primary/10 transition-all duration-300 text-primary">
            Get In Touch
          </a>
          <a href="#projects" className="px-8 py-3 font-display text-sm tracking-widest uppercase gradient-neon rounded-sm text-background font-bold hover:opacity-90 transition-all duration-300">
            View Work
          </a>
        </div>

        <div className="flex gap-6 justify-center animate-fade-in opacity-0" style={{ animationDelay: "1.3s" }}>
          {[
            { icon: Github, href: "https://github.com/UMAR-25-UMR", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/umar-imran-448922268/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:umarimran2504@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} className="p-3 border border-border rounded-full hover:border-primary/50 hover:neon-border transition-all duration-300 text-muted-foreground hover:text-primary" aria-label={label}>
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-primary/60 hover:text-primary transition-colors">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
