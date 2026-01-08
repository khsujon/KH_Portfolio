import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  images,
  source_code_link,
}) => {
  const cardRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projectImages = images || [image];

  useEffect(() => {
    const el = cardRef.current;

    // ScrollTrigger for animating project cards with stagger
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100, // Start off-screen
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",  // Trigger when the top of the element hits the bottom of the viewport
          end: "top center",    // End when the top reaches the center of the viewport
          scrub: true,          // Smoothly sync scroll and animation
          markers: false,       // Set to `true` to see debug markers
        },
      }
    );
  }, []);

  // Auto-scroll images
  useEffect(() => {
    if (projectImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % projectImages.length
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [projectImages.length]);

  const shouldShowButton = description.length > 150;
  const displayDescription = !isExpanded && shouldShowButton 
    ? description.substring(0, 150) + "..." 
    : description;

  return (
    <div ref={cardRef} className="h-full">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col"
      >
        <div className="relative w-full h-[280px] overflow-hidden">
          {projectImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`project_image_${idx}`}
              className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ${
                idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          {/* Image indicators */}
          {projectImages.length > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {projectImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex 
                      ? 'bg-white w-6' 
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-5 flex-grow flex flex-col">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <div className={`mt-2 ${isExpanded ? 'max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-tertiary pr-2' : 'max-h-[120px] overflow-hidden'}`}>
            <div className="text-secondary text-[13px] leading-relaxed space-y-3">
              {description.split('\\n\\n').map((section, idx) => {
                // Check if section starts with **
                if (section.includes('**')) {
                  const parts = section.split('**');
                  return (
                    <div key={idx} className="space-y-1.5">
                      {parts.map((part, partIdx) => {
                        if (partIdx % 2 === 1) {
                          // Bold text
                          return <strong key={partIdx} className="text-white font-semibold">{part}</strong>;
                        } else if (part.includes('•')) {
                          // Bullet points
                          const lines = part.split('\\n').filter(line => line.trim());
                          return (
                            <ul key={partIdx} className="space-y-1 ml-4">
                              {lines.map((line, lineIdx) => {
                                if (line.includes('•')) {
                                  const content = line.replace('•', '').trim();
                                  // Parse inline bold within bullet points
                                  const boldParts = content.split('**');
                                  return (
                                    <li key={lineIdx} className="flex items-start">
                                      <span className="text-[#915EFF] mr-2">•</span>
                                      <span>
                                        {boldParts.map((bp, bpIdx) => 
                                          bpIdx % 2 === 1 ? 
                                            <strong key={bpIdx} className="text-white font-semibold">{bp}</strong> : 
                                            bp
                                        )}
                                      </span>
                                    </li>
                                  );
                                }
                                return <span key={lineIdx}>{line}</span>;
                              })}
                            </ul>
                          );
                        } else if (part.includes('|')) {
                          // Tech stack with pipes
                          const techs = part.split('|').map(t => t.trim()).filter(t => t);
                          return (
                            <div key={partIdx} className="flex flex-wrap gap-2">
                              {techs.map((tech, techIdx) => {
                                const cleanTech = tech.replace(/\*\*/g, '');
                                return (
                                  <span key={techIdx} className="bg-[#915EFF]/10 text-white px-2 py-1 rounded text-[11px] font-medium border border-[#915EFF]/20">
                                    {cleanTech}
                                  </span>
                                );
                              })}
                            </div>
                          );
                        } else {
                          return <span key={partIdx}>{part}</span>;
                        }
                      })}
                    </div>
                  );
                }
                return <p key={idx}>{section}</p>;
              })}
            </div>
          </div>
          
          {(description.length > 400 || description.split('\\n').length > 8) && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-[#915EFF] text-[13px] font-semibold hover:text-white transition-colors self-start flex items-center gap-1"
            >
              {isExpanded ? (
                <>
                  <span>Show Less</span>
                  <span className="text-[10px]">▲</span>
                </>
              ) : (
                <>
                  <span>See Full Details</span>
                  <span className="text-[10px]">▼</span>
                </>
              )}
            </button>
          )}
        </div>

        <div className={`mt-4 flex flex-wrap gap-2 ${isExpanded ? 'max-h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-tertiary' : ''}`}>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  useEffect(() => {
    // Stagger effect for project cards
    gsap.fromTo(
      ".project-card", // Select all project cards
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Stagger delay of 0.3 seconds between each card
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",  // Trigger when the top of the container reaches the bottom
          end: "top center",
          scrub: true,
          markers: false, // Set to true to see debug markers
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </div>

      <div className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project-card">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
