import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>

          <Card className="p-8 md:p-12 shadow-lg bg-card border-border">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              I am a passionate <span className="text-primary font-semibold">MERN Stack Developer</span> with
              experience building full-stack applications and modern user
              interfaces. I focus on{" "}
              <span className="text-primary font-semibold">clean code</span>,{" "}
              <span className="text-primary font-semibold">performance optimization</span>, and creating{" "}
              <span className="text-primary font-semibold">user-friendly experiences</span> that solve real-world
              problems. With a strong foundation in JavaScript and modern web
              technologies, I bring ideas to life through elegant and scalable
              solutions.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
