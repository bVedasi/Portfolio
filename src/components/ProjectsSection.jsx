import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const ProjectsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const scrollRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Safe Voice",
      image: "/SafeVoice.png",
      category: "Front End Development",
      url: "https://safevoice.netlify.app/"
    },
    {
      id: 2,
      title: "AI Recipe Generator",
      image: "/Recipe.png",
      category: "AI with python",
      url: "https://recipe-generator-ai.streamlit.app/"
    },
    {
      id: 3,
      title: "AgroTech",
      image: "/AgroTech.png",
      category: "Hackathon",
      url: "https://github.com/bVedasi/Agrotech.github.io"
    },
    {
      id: 4,
      title: "Figma",
      image: "/Figma.png",
      category: "Figma Design",
      url: "https://www.figma.com/proto/2EMDkgQWnTfYNaCEYStv2d/MapAnApp?node-id=1-5979&t=J9RnxP54dmv28Uis-1"
    },
    {
      id: 5,
      title: "Games Arcade",
      image: "/Games.png",
      category: "Python Programming",
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

  const visibleProjects = projects.slice(startIndex, startIndex + 4);

  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex + 4 < projects.length;

  // Smooth scroll logic
  const scrollToProject = (newIndex) => {
    setStartIndex(newIndex);
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(`[data-project-idx="0"]`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
    }
  };

  const handleScrollLeft = () => {
    if (canScrollLeft) scrollToProject(startIndex - 1);
  };

  const handleScrollRight = () => {
    if (canScrollRight) scrollToProject(startIndex + 1);
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
        </div>

        <div className="flex items-center justify-center mb-6">
          {/* Left Arrow */}
          {canScrollLeft ? (
            <button
              onClick={handleScrollLeft}
              className="text-white text-3xl px-3 py-1 rounded select-none"
              aria-label="Scroll Left"
              style={{ transition: 'background 0.2s' }}
            >
              &lt;
            </button>
          ) : (
            <div className="w-10" />
          )}

          {/* Projects Grid with smooth scroll */}
          <div
            ref={scrollRef}
            className="flex-1 flex justify-center overflow-x-auto scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={blurVariants}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ width: '100%' }}
            >
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  data-project-idx={index}
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
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          {canScrollRight ? (
            <button
              onClick={handleScrollRight}
              className="text-white text-3xl px-3 py-1 rounded select-none"
              aria-label="Scroll Right"
              style={{ transition: 'background 0.2s' }}
            >
              &gt;
            </button>
          ) : (
            <div className="w-10" />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;