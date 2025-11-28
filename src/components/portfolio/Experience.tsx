import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Applogika",
      period: "2024 – Present",
      description: [
        "Built Leasely modules for property, tenant, vendor, and payment management",
        "Developed MarketIQ AI features and backend systems",
        "Worked with AWS cloud services and CI/CD pipelines",
        "Created comprehensive technical documentation",
        "Collaborated with cross-functional teams to deliver scalable solutions",
      ],
    },
    {
      title: "MERN Stack Developer",
      company: "Freelancer",
      period: "2023 – 2024",
      description: [
        "Built full-stack MERN applications from scratch",
        "Created RESTful APIs and interactive dashboards",
        "Implemented authentication and authorization systems",
        "Delivered end-to-end solutions for clients across various industries",
        "Managed project timelines and client communications",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Experience
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1 text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.period}
                      </p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start"
                          >
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;
