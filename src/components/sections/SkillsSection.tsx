"use client";

import Image from "next/image";
import { motion } from "motion/react";

// Static skills data with tech stack logos
const skills = [
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    color: "#777BB4",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    color: "#FF2D20",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    color: "#007396",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    color: "#239120",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    color: "#4479A1",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    color: "#FFCA28",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    color: "#FF9900",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    color: "#2496ED",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Vue",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    color: "#4FC08D",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    color: "#000000",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies I work with professionally
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 md:gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative flex flex-col items-center"
              >
                {/* Floating animated container */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="relative"
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                  />

                  {/* Icon container */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center bg-background rounded-2xl border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Skill name */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="mt-4 text-center"
                >
                  <p className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
