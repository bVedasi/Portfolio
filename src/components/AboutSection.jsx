import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
const AboutSection = () => {
  const skills = ["MERN", "UI/UX", "Programming", "Figma", "ML"];
  const experiences = [
    { role: "Volunteer", organization: "ACM, VNR VJIET", year: "Currently" },
    { role: "Student Editor", organization: "Vignana Vartha", year: "Currently" },
    { role: "FrontEnd Developer", organization: "VJ Community", year: "2024" },
  ];

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,  // Ensures animation triggers every time it comes into view
    threshold: 0.2,  // Trigger when 20% of the section is in view
  });

  const blurVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0)", opacity: 1 },
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-black"
      id="about-me"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Text Content */}
          <motion.div
            className="text-content"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={blurVariants}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="section-title">Meet Vedasi</h2>
            <p className="text-white/80 mb-10 leading-relaxed">
              I love crafting clean, interactive, and life-like websites that
              merge design with functionality. My curiosity drives me to
              constantly explore emerging domains like Artificial Intelligence
              and Machine Learning, with the goal of contributing
              meaningfully to their evolution.
            </p>

            {/* Skills Section */}
            <div className="flex flex-wrap gap-3 mb-12">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="skill-tag"
                  initial="hidden"
                  animate={sectionInView ? "visible" : "hidden"}
                  variants={blurVariants}
                  transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Experiences Section */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-[120px_1fr_100px] gap-4 border-b border-white/10 pb-4"
                  initial="hidden"
                  animate={sectionInView ? "visible" : "hidden"}
                  variants={blurVariants}
                  transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                >
                  <div className="font-medium">{exp.role}</div>
                  <div className="text-white/70">{exp.organization}</div>
                  <div className="text-right text-white/70">{exp.year}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex items-center justify-center"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={blurVariants}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="rounded-2xl overflow-hidden w-full max-w-md">
              <img
                src="/Vedasi.jpg"
                alt="Vedasi profile"
                style={{ filter: "grayscale(100%)" }}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
