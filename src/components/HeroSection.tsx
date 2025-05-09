
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [isVideoLoaded]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source 
            src="https://cdn.pixabay.com/video/2015/08/08/91-135735330_large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {!isVideoLoaded && (
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&q=80" 
            alt="Photography backdrop" 
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div 
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mb-6">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-wide"
            style={{ 
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              opacity: isVisible ? 1 : 0,
              transition: "transform 0.7s ease, opacity 0.7s ease",
              fontFamily: "'Playfair Display', serif"
            }}
          >
            <div>BOBBI</div>
            <div className="mt-2">GULIANI</div>
            <div className="text-base mt-1 tracking-widest">EST. 1952</div>
          </h1>
        </div>
        
        <p 
          className="text-lg md:text-xl text-white/90 mb-20 max-w-xl mx-auto"
          style={{ 
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            opacity: isVisible ? 1 : 0,
            transition: "transform 0.7s ease 0.4s, opacity 0.7s ease 0.4s"
          }}
        >
          Over 60 years of timeless<br />visual storytelling.
        </p>

        <Link
          to="about"
          smooth={true}
          duration={800}
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
          style={{ 
            bottom: "3%", // Moved down further to the bottom
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.7s ease 0.6s"
          }}
        >
          <ChevronDown className="text-white animate-bounce" size={36} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
