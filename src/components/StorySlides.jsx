import React, { useEffect, useState } from 'react';

const slides = [
  {
    title: "The Beginning",
    content: "Every great developer has a story. Mine began with curiosity and a passion for solving problems.",
    color: "from-blue-500 to-purple-600",
    icon: "💡"
  },
  {
    title: "Learning the Craft",
    content: "Through years of study and practice, I've honed my skills in JavaScript, React, and modern web development.",
    color: "from-purple-600 to-pink-500",
    icon: "🔧"
  },
  {
    title: "Building Solutions",
    content: "I've created applications that solve real-world problems, focusing on clean code and user experience.",
    color: "from-pink-500 to-orange-500",
    icon: "🚀"
  },
  {
    title: "Collaboration",
    content: "Working with teams has taught me the value of communication, adaptability, and shared vision.",
    color: "from-orange-500 to-yellow-500",
    icon: "👥"
  },
  {
    title: "Continuous Growth",
    content: "The tech landscape evolves rapidly, and I'm committed to growing with it, learning new technologies and approaches.",
    color: "from-yellow-500 to-green-500",
    icon: "🌱"
  },
  {
    title: "The Future",
    content: "I'm excited about what's next - new challenges, technologies, and opportunities to create meaningful experiences.",
    color: "from-green-500 to-blue-500",
    icon: "✨"
  }
];

export default function StorySlides() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  if (!mounted) return null;

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">My Journey</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {slides.map((slide, index) => (
            <div key={index} className="flex justify-center">
              <div
                className={`bg-gradient-to-br ${slide.color} text-white rounded-xl p-4 sm:p-6 md:p-8 
                  h-[280px] sm:h-[320px] md:h-80 w-full max-w-[280px] sm:max-w-[320px] md:max-w-md
                  flex flex-col justify-between shadow-xl 
                  transform transition-transform duration-300 hover:scale-105`}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">{slide.icon}</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{slide.title}</h3>
                  <p className="text-base sm:text-lg">{slide.content}</p>
                </div>
                <div className="text-xs sm:text-sm mt-2 sm:mt-4 opacity-75">Chapter {index + 1}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-base sm:text-lg text-dark-400 dark:text-light-400 max-w-2xl mx-auto">
            This journey represents my growth as a developer, from first learning to code to building complex applications.
            Each slide captures a chapter in my ongoing story of learning and creating.
          </p>
        </div>
      </div>
    </div>
  );
}
