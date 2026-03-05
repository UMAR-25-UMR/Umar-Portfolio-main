import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CyberDash",
    description: "Real-time analytics dashboard with interactive data visualizations and AI-powered insights.",
    tags: ["React", "D3.js", "Node.js", "WebSocket"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "NeonChat",
    description: "End-to-end encrypted messaging platform with video calls and file sharing.",
    tags: ["Next.js", "WebRTC", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
  },
  {
    title: "PixelForge",
    description: "AI-powered image editor with real-time collaboration and cloud sync.",
    tags: ["TypeScript", "Canvas API", "AWS", "Python"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
  },
  {
    title: "VaultOS",
    description: "Secure password manager with biometric authentication and cross-platform sync.",
    tags: ["React Native", "Rust", "SQLite", "E2EE"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4 neon-text">
          PROJECTS
        </h2>
        <div className="h-[2px] w-16 mx-auto gradient-neon rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass glass-hover rounded-lg overflow-hidden group transition-all duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="p-2 glass rounded-full text-primary hover:neon-box transition-all">
                    <Github size={16} />
                  </a>
                  <a href="#" className="p-2 glass rounded-full text-primary hover:neon-box transition-all">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 text-foreground group-hover:neon-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary/80 font-mono text-xs rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
