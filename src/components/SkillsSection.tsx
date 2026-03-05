const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Docker", level: 75 },
  { name: "AWS / Cloud", level: 70 },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "Tailwind CSS",
  "GraphQL", "REST APIs", "Git", "CI/CD", "Figma", "Linux"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4 neon-text">
          SKILLS
        </h2>
        <div className="h-[2px] w-16 mx-auto gradient-neon rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div className="space-y-5">
            {skills.map(({ name, level }) => (
              <div key={name}>
                <div className="flex justify-between mb-1.5">
                  <span className="font-mono text-sm text-foreground/90">{name}</span>
                  <span className="font-mono text-xs text-primary">{level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-neon rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${level}%` }}
                  >
                    <div className="absolute inset-0 animate-pulse-neon opacity-60" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-foreground/90">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass rounded-sm font-mono text-xs tracking-wider text-primary/80 hover:text-primary hover:neon-border transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
