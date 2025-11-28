import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  GitBranch,
  Layout,
  Server,
  Cloud,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript (ES6+)", "React.js", "Redux", "TailwindCSS"],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database",
      items: ["MongoDB", "Mongoose"],
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Version Control",
      items: ["Git", "GitHub", "CI/CD"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Deployment",
      items: ["AWS EC2", "AWS S3", "Deployments"],
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Tools",
      items: ["VS Code", "Postman", "npm/yarn"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                  <div className="text-skill-icon mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {skill.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm bg-project-tag text-project-tagText px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
