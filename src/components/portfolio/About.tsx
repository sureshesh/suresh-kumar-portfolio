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

          <Card className="p-8 md:p-12 shadow-lg bg-card border-border">
             <h1 className="text-4xl font-bold mb-10 text-center">About Me</h1>

      <div className="max-w-3xl text-center space-y-6 leading-relaxed text-lg">
        
        <p>
          My name is <span className="font-semibold">Suresh Kumar</span>, and I am a 
          <span className="font-semibold"> Full-Stack Developer</span> with strong real-world
          experience building clean, efficient, and scalable web applications.
          I specialize in crafting smooth and modern UIs using 
          <span className="font-semibold"> React.js, Tailwind CSS, and modern frontend architectures</span>.
        </p>

        <p>
          Alongside my frontend expertise, I have solid experience building backend systems using 
          <span className="font-semibold"> Node.js, Express.js, MongoDB</span>, and cloud-based services.
          I design full-stack applications from scratch, handle database architecture, manage APIs, and deliver 
          optimized performance with clean, production-ready code.
        </p>

        <p>
          Over the past <span className="font-semibold">2+ years</span>, I have worked on various projects and dashboards, 
          including CRM systems, automation tools, and creative UI/UX components. 
          I enjoy writing maintainable code, improving user experience, and solving real technical challenges.
        </p>

        <p>
          Outside of development, I am passionate about learning new technologies,
          improving my problem-solving skills, and currently preparing content for my upcoming 
          <span className="font-semibold"> Tamil YouTube Tech Channel</span> focused on JavaScript, React.js, Node.js,
          DSA, full-stack apps, and cloud basics.
        </p>

        <p>
          I am always excited to explore new frameworks, work on impactful products, and collaborate with teams
          where I can bring value through engineering, creativity, and modern development practices.
        </p>
      </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
