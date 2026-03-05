import { Code2, Palette, Server } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Code2, title: "Frontend", desc: "React, TypeScript, Tailwind CSS, JavaScript, CSS, HTML" },
    { icon: Server, title: "Backend", desc: "SQL, Python, APIs" },
    { icon: Palette, title: "Design", desc: "Figma, UI/UX Design" },
  ];

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4 neon-text">
          ABOUT ME
        </h2>
        <div className="h-[2px] w-16 mx-auto gradient-neon rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg font-body text-foreground/80 leading-relaxed">
              I'm a passionate full-stack developer with <span className="text-primary font-semibold">1+ years</span> of experience crafting high-performance web applications. I specialize in building pixel-perfect, accessible interfaces with clean, maintainable code.
            </p>
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and pushing the boundaries of what's possible on the web.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-display font-bold neon-text">10+</div>
                <div className="text-sm text-muted-foreground font-mono">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold neon-text-cyan">2+</div>
                <div className="text-sm text-muted-foreground font-mono">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold neon-text">1+</div>
                <div className="text-sm text-muted-foreground font-mono">Years</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="glass glass-hover rounded-lg p-6 flex items-start gap-4 transition-all duration-300 group" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:neon-box transition-all duration-300">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
