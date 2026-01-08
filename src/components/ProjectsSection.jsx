import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const ProjectsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [projectsPerView, setProjectsPerView] = useState(4);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const scrollRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "TODO App",
      image: "/todo.png",
      category: "Web Development with AI Integration",
      url: "https://github.com/bVedasi/ToDoApp",
      description:"A Python-based to-do list application with an intelligent recommendation engine. Features database integration, task management capabilities, and automated suggestions to help users organize and prioritize their daily tasks."
    },
    
    {
      id: 2,
      title: "AI Recipe Generator",
      image: "/Recipe.png",
      category: "AI with python",
      url: "https://recipe-generator-ai.streamlit.app/",
      description:"A Streamlit-powered web application that generates personalized recipe recommendations using the Spoonacular API. Users input available ingredients and meal preferences to discover matching recipes with detailed cooking instructions"
    },
    {
      id: 3,
      title: "Rental",
      image: "/rental.png",
      category: "Design Thinking",
      url: "https://github.com/bVedasi/Rental",
      description:"A full-stack rental platform built with TypeScript, React, and Supabase demonstrating user-centric design thinking and modern web development. Features authentication, shopping cart functionality, product categorization, and responsive UI with Tailwind CSS."
    },
    {
      id: 4,
      title: "Safe Voice",
      image: "/SafeVoice.png",
      category: "Front End Development",
      url: "https://safevoice.netlify.app/",
      description:"A React-based web application that promotes safe communication by analyzing text input for harmful content. Utilizes the Perspective API to provide real-time feedback on message safety, helping users craft respectful and non-offensive messages."
    },
    {
      id: 5,
      title: "Figma",
      image: "/Figma.png",
      category: "Figma Design",
      url: "https://www.figma.com/proto/2EMDkgQWnTfYNaCEYStv2d/MapAnApp?node-id=1-5979&t=J9RnxP54dmv28Uis-1",
      description:"A Figma prototype for 'MapAnApp', a mobile application designed to help users discover and explore local attractions. Features intuitive navigation, interactive maps, and user-friendly interfaces to enhance the travel experience."
    },
    {
      id: 6,
      title: "Games Arcade",
      image: "/Games.png",
      category: "Python Programming",
      url: "https://github.com/bVedasi/GamesArchade",
      description:"A collection of classic arcade games developed in Python, including Snake, Tic-Tac-Toe, and Hangman. Each game features simple graphics and user-friendly controls, showcasing fundamental programming concepts and game design principles."
    }
  ];

  // Responsive: set projectsPerView based on screen width
  useEffect(() => {
    const updateProjectsPerView = () => {
      if (window.innerWidth < 768) {
        setProjectsPerView(1);
      } else if (window.innerWidth < 1024) {
        setProjectsPerView(2);
      } else {
        setProjectsPerView(4);
      }
    };
    updateProjectsPerView();
    window.addEventListener('resize', updateProjectsPerView);
    return () => window.removeEventListener('resize', updateProjectsPerView);
  }, []);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const blurVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0)", opacity: 1 },
  };

  const descVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  const visibleProjects = projects.slice(startIndex, startIndex + projectsPerView);

  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex + projectsPerView < projects.length;

  const handleScrollLeft = () => {
    if (canScrollLeft) setStartIndex(startIndex - 1);
  };

  const handleScrollRight = () => {
    if (canScrollRight) setStartIndex(startIndex + 1);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-2 md:px-12 bg-black border-t border-white/10"
    >
      <div className="container mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Recent Works</h2>
        </div>

        <div className="flex items-center justify-center mb-6 w-full">
          {/* Left Arrow */}
          {canScrollLeft ? (
            <button
              onClick={handleScrollLeft}
              className="text-white text-3xl px-1 py-1 rounded select-none w-8 flex-shrink-0"
              aria-label="Scroll Left"
              style={{ transition: 'background 0.2s' }}
            >
              &lt;
            </button>
          ) : (
            <div className="w-8" />
          )}

          {/* Projects Grid */}
          <div
            ref={scrollRef}
            className="flex justify-center w-full"
          >
            <motion.div
              className={`grid gap-6 w-full ${
                projectsPerView === 1
                  ? 'grid-cols-1'
                  : projectsPerView === 2
                  ? 'grid-cols-2'
                  : 'grid-cols-4'
              }`}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={blurVariants}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {visibleProjects.map((project, index) => (
                // wrapper so description is a sibling (outside the card)
                <div
                  key={project.id}
                  className={`project-wrapper flex flex-col items-center w-full max-w-md
                    ${projectsPerView === 1 ? "max-w-full" : ""} md:max-w-none`}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                >
                  <motion.div
                    data-project-idx={index}
                    className="project-card group rounded-2xl overflow-hidden w-full"
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
                        <span className="font-mono">View Project</span>
                      </a>
                    </div>
                  </motion.div>

                  {/* Description is outside the card and appears below the card/button */}
                  <AnimatePresence>
                    {hoveredProjectId === project.id && (
                      <motion.div
                        key={`desc-${project.id}`}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={descVariants}
                        transition={{ duration: 0.18 }}
                        className="w-full mt-4 p-4 bg-neutral-900/80 rounded-2xl text-sm text-gray-300 shadow-md font-mono"
                      >
                        {project.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          {canScrollRight ? (
            <button
              onClick={handleScrollRight}
              className="text-white text-3xl px-1 py-1 rounded select-none w-8 flex-shrink-0"
              aria-label="Scroll Right"
              style={{ transition: 'background 0.2s' }}
            >
              &gt;
            </button>
          ) : (
            <div className="w-8" />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;