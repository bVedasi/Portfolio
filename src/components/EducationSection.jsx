import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
const EducationSection = () => {
  const education = [
    {
      level: "Graduation",
      institution: "VNR VJIET",
      grade: "9.56 CGPA"
    },
    {
      level: "Intermediate",
      institution: "FIITJEE Junior College",
      grade: "9.75 CGPA"
    },
    {
      level: "High School",
      institution: "Silver Oaks International School",
      grade: "10th Grade - 9.6 CGPA"
    }
  ];

  const stats = [
    { number: "10+", description: "Hackathons and Competitions" },
    { number: "5+", description: "Workshops and Certifications" },
    { number: "5+", description: "Courses" },
  ];

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // 20% of the section is in view
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="py-24 px-6 md:px-12 bg-black border-t border-white/10"
      ref={sectionRef}
      id='education'
    >
      <div className="container mx-auto">
        {/* Title Animation */}
        <motion.h2
          className="section-title mb-12"
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Education
        </motion.h2>

        {/* Education Cards */}
        <motion.div
          className="space-y-6 mb-24"
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{
                duration: 1,
                delay: index * 0.2, // Staggered animation for each card
                ease: "easeOut",
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{edu.level}</h3>
              <div className="border-t border-white/10 pt-3">
                <p className="text-white/70">{edu.institution}</p>
                <p className="text-white/70">{edu.grade}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section (Horizontal Bar) */}
        <motion.div
          className="bg-card rounded-2xl p-8 md:p-12"
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center px-4"
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{
                  duration: 1,
                  delay: index * 0.2, // Staggered animation for each stat
                  ease: "easeOut",
                }}
              >
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  {stat.number}
                </h3>
                <p className="text-white/60">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
