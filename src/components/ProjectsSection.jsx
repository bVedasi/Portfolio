import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Black Coffee Packaging",
      image: "/Figma.png",
      category: "Figma Design",
      url: "https://www.figma.com/proto/2EMDkgQWnTfYNaCEYStv2d/MapAnApp?node-id=1-5979&t=J9RnxP54dmv28Uis-1"
    },
    {
      id: 2,
      title: "Luxury Soap Collection",
      image: "/SafeVoice.png",
      category: "Front End Development",
      url: "https://safevoice.netlify.app/"
    },
    {
      id: 3,
      title: "CARTS Tote Bag",
      image: "/AgroTech.png",
      category: "Hackathon",
      url: "https://github.com/bVedasi/Agrotech.github.io"
    },
    {
      id: 4,
      title: "Skincare Product",
      image: "/Games.png",
      category: "Brand Identity",
      url: "https://github.com/bVedasi/GamesArchade"
    }
  ];

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const blurVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0)", opacity: 1 },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-black border-t border-white/10"
    >
      <div className="container mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Recent Works</h2>
          <div className="ml-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <ChevronDown size={16} />
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={blurVariants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card group relative rounded-lg overflow-hidden"
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={blurVariants}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="grayscale-image w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button w-full flex items-center justify-center space-x-2"
                >
                  <span>View Project</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;