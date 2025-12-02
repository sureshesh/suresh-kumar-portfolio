import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const name = "Suresh Kumar";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-hero-from/10 via-background to-hero-to/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* AVAILABLE FOR WORK BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 backdrop-blur">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-white text-sm font-medium">
                Available for work!
              </span>
            </div>
          </motion.div>

          {/* LOCATION TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-gray-300 mb-6"
          >
            Currently based in India — open to relocate
          </motion.p>

          {/* LETTER BY LETTER ANIMATION */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.05 },
              },
            }}
            className="text-5xl md:text-7xl font-bold mb-6 flex justify-center flex-wrap gap-1"
          >
            <span className="text-white">Hello, I'm&nbsp;</span>

            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-red-500"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-4xl font-semibold text-foreground mb-6"
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I build scalable, modern web applications with clean code and exceptional user experiences.
            Passionate about creating solutions that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col items-center gap-8"
          >
            {/* CTA BUTTON */}
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Hire Me
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Linkedin className="text-white h-6 w-6" />
              </a>

              <a
                href="https://github.com/sureshesh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Github className="text-white h-6 w-6" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
