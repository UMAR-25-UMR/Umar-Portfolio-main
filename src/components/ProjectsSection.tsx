import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Trimline Group",
    description:
      "A modern React-based corporate website built for a polymer supply company. It features a responsive design, clean UI, service sections, product information, and optimized performance to showcase the company’s capabilities and industrial solutions.",
    tags: ["React", "Tailwind CSS", "Formspree API", "Google Analytics"],
    image: "Trimline.png",
    github: "https://github.com/UMAR-25-UMR/Trimline-react-app-by-umar",
    live: "https://trimline-react-app-by-umar.vercel.app/",
  },
  {
    title: "Eyeonic E-Commerce Platform",
    description:
      "A modern e-commerce website designed for an eyewear brand. The site includes product listings, clean product showcases, responsive layouts, and a user-friendly shopping interface to improve the online browsing and purchasing experience.",
    tags: ["HTML", "CSS", "JavaScript", "Formspree API"],
    image: "Eyeonic.png",
    github: "https://github.com/UMAR-25-UMR/Eyeonic",
    live: "https://eyeonic-eweb.netlify.app/",
  },
  {
    title: "Masjid Darussalam Website",
    description:
      "A responsive mosque website designed to provide prayer timings, announcements, and community information. The platform helps visitors stay updated with daily prayers and mosque activities through a simple, accessible interface focused on community engagement.",
    tags: ["TypeScript", "Tailwind CSS", "JS"],
    image:
      "Masjid Darussalam.png",
    github: "https://github.com/UMAR-25-UMR/Masjid-Darussalam",
    live: "https://masjid-darussalam.vercel.app/",
  },
  {
    title: "VaultOS",
    description:
      "Secure password manager with biometric authentication and encrypted storage.",
    tags: ["React Native", "Rust", "SQLite", "E2EE"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    github: "https://github.com/UMAR-25-UMR/vaultos",
    live: "https://vaultos.vercel.app/",
  },
  {
    title: "Masjid Darussalam Website",
    description:
      "Islamic community website with prayer times, announcements, and events.",
    tags: ["React", "Tailwind", "Prayer API"],
    image:
      "https://images.unsplash.com/photo-1564769625392-651b5caa1cce?w=600&h=400&fit=crop",
    github: "https://github.com/UMAR-25-UMR/masjid-website",
    live: "https://masjid-website.vercel.app/",
  },
  {
    title: "Quiz Learning Platform",
    description:
      "Interactive quiz platform with authentication, random questions, and downloadable results.",
    tags: ["HTML", "CSS", "JavaScript", "PDF Generator"],
    image:
      "https://images.unsplash.com/photo-1581091012184-7c2f3f3c66a1?w=600&h=400&fit=crop",
    github: "https://github.com/UMAR-25-UMR/quiz-platform",
    live: "https://quiz-platform.vercel.app/",
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
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-2 glass rounded-full text-primary hover:neon-box transition-all"
                  >
                    <Github size={16} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="p-2 glass rounded-full text-primary hover:neon-box transition-all"
                  >
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
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary/80 font-mono text-xs rounded-sm"
                    >
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