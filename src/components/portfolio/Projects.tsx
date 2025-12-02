import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplogikaImg from "@/assets/Applogika.png";
import LeaselyImg from "@/assets/Leasely.png";
import MarketIQImg from "@/assets/MarketIQ.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workProjects = [
    {
      title: "MarketIQ",
      subtitle: "AI Social Media Marketing App",
      image: MarketIQImg,
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
      image: LeaselyImg,
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
      image: ApplogikaImg,
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
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded mb-4"
                        />
                      )}
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
                {workProjects[2].image && (
                  <img
                    src={workProjects[2].image}
                    alt={workProjects[2].title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                )}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
