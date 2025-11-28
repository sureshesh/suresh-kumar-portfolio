import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workProjects = [
    {
      title: "MarketIQ",
      subtitle: "AI Social Media Marketing App",
      description:
        "Built automation modules and integrated AI features using AWS Bedrock. Implemented Nova voice recognition, scheduling systems, and performance optimizations.",
      tech: ["React", "Node.js", "AWS Bedrock", "AI/ML", "Voice Recognition"],
      highlights: [
        "AI automation modules",
        "AWS Bedrock integration",
        "Nova voice recognition",
        "Scheduling & performance improvements",
      ],
    },
    {
      title: "Leasely",
      subtitle: "Rental Management System",
      description:
        "Developed comprehensive modules for property, tenant, vendor, and payment management. Integrated IoT-based property monitoring and enhanced dashboard workflows.",
      tech: ["MERN Stack", "IoT", "Payment Integration", "Real-time Data"],
      highlights: [
        "Property & tenant management",
        "Vendor & payment modules",
        "IoT property monitoring",
        "Dashboard workflow optimization",
      ],
    },
    {
      title: "Applogika Website",
      subtitle: "Company Website",
      description:
        "Built responsive, modern company website with focus on SEO and performance. Utilized modern development tools and best practices.",
      tech: ["React", "TailwindCSS", "SEO", "Performance Optimization"],
      highlights: [
        "Responsive design",
        "SEO optimization",
        "Performance enhancements",
        "Modern tooling (VS Code, Lovable, GitHub Copilot)",
      ],
    },
  ];

  const personalProjects = [
    {
      title: "Project Name 1",
      description: "Description of your personal project goes here. Add details about what you built and the technologies used.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Name 2",
      description: "Description of your personal project goes here. Add details about what you built and the technologies used.",
      tech: ["Express", "PostgreSQL", "Docker"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Name 3",
      description: "Description of your personal project goes here. Add details about what you built and the technologies used.",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Projects
          </h2>

          {/* Work Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
              Professional Work Projects{" "}
              <span className="text-primary">(Applogika)</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
              {workProjects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                    <h4 className="text-2xl font-bold mb-2 text-foreground">
                      {project.title}
                    </h4>
                    <p className="text-primary font-semibold mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-semibold mb-2 text-foreground">
                        Key Highlights:
                      </h5>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="text-primary mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-project-tag text-project-tagText"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <h4 className="text-2xl font-bold mb-2 text-foreground">
                  {workProjects[2].title}
                </h4>
                <p className="text-primary font-semibold mb-3">
                  {workProjects[2].subtitle}
                </p>
                <p className="text-muted-foreground mb-4">
                  {workProjects[2].description}
                </p>

                <div className="mb-4">
                  <h5 className="font-semibold mb-2 text-foreground">
                    Key Highlights:
                  </h5>
                  <ul className="space-y-1">
                    {workProjects[2].highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {workProjects[2].tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-project-tag text-project-tagText"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Personal Projects */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
              Personal Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {personalProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border flex flex-col">
                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-project-tag text-project-tagText text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
