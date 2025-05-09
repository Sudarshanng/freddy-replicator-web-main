import { useState, useRef, useEffect } from "react";

const ServiceCard = ({ title, image, description }: { title: string; image: string; description: string }) => {
  return (
    <div className="relative group">
      <img src={image} alt={title} className="w-full h-[400px] object-cover" />
      <div className="absolute inset-0 bg-black/40 transition-opacity opacity-0 group-hover:opacity-100"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-6">
          <h3 className="text-white text-3xl font-light mb-2">{title}</h3>
          <div className="h-[1px] w-20 bg-white mx-auto mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("WEDDINGS");
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Auto-play video when the VIDEOGRAPHY tab is selected
  useEffect(() => {
    if (activeTab === "VIDEOGRAPHY" && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay was prevented:", error);
      });
    }
  }, [activeTab]);
  
  const services = [
    {
      id: "WEDDINGS",
      title: "Making a 'big day' last a lifetime.",
      image: "https://images.squarespace-cdn.com/content/v1/6564afb4f0851760cfcdde58/7b9c38ff-2de4-4881-a33c-7929e5335851/Harini-Aswin-MCC-Hall-Chennai-0609+-+Copy.jpg",
      description: "Capturing the magic of your special day with timeless elegance.",
      type: "image"
    },
    {
      id: "ENGAGEMENTS",
      title: "First comes love...",
      image: "https://media.istockphoto.com/id/1175709402/photo/no-diamond-can-compare-to-this-precious-love.jpg?s=612x612&w=0&k=20&c=do_IAR2f8vzdQ40gLvfhE5hTs3ApK9OBPhC-v8lFAMI=",
      description: "Creating beautiful memories of your journey together.",
      type: "image"
    },
    {
      id: "FAMILY EVENTS",
      title: "Celebrating moments that define us.",
      image: "https://images.squarespace-cdn.com/content/v1/6033f1f3491cd4498d3a75d2/1653768590734-IZM4HZCDZXLLLPFGHUME/fred-marcus-studio-family-events-ditrapani.jpg?format=1500w",
      description: "From birthdays to bar mitzvahs, preserving your family's special occasions.",
      type: "image"
    },
    {
      id: "VIDEOGRAPHY",
      title: "Memories in motion.",
      image: "https://cdn.pixabay.com/video/2024/03/08/203449-921267347_large.mp4",
      description: "Bringing your stories to life through masterful videography.",
      type: "video"
    }
  ];
  
  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-center mb-10 font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
          What We Do
        </h2>
        
        <div className="flex justify-center border-b border-gray-200 mb-12">
          <div className="flex flex-wrap justify-center">
            {services.map((service) => (
              <button
                key={service.id}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === service.id 
                    ? "border-b-2 border-black -mb-[1px]" 
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => setActiveTab(service.id)}
              >
                {service.id} {activeTab === service.id ? "↓" : ""}
              </button>
            ))}
          </div>
        </div>
        
        {activeService && (
          <div className="fade-in">
            <h3 className="text-5xl text-center mb-12 font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
              {activeService.title}
            </h3>
            
            <div className="relative h-[70vh] overflow-hidden shadow-lg">
              {activeService.type === "video" ? (
                <video 
                  ref={videoRef}
                  src={activeService.image}
                  className="w-full h-full object-cover"
                  controls
                  muted
                  loop
                  playsInline
                  poster="public/lovable-uploads/c81ba648-b637-4b67-9350-67d60fe32215.png"
                />
              ) : (
                <img 
                  src={activeService.image} 
                  alt={activeService.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
              )}
            </div>
            
            {activeTab === "WEDDINGS" && (
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <blockquote className="text-2xl font-normal text-gray-800 border-l-4 border-gray-300 pl-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    "bobby guliani photographers are not only experienced and incredibly talented, but they evoke a sentiment that changes a moment from ordinary to extraordinary."
                    <footer className="text-sm mt-4 text-gray-600" style={{ fontFamily: "'Times New Roman', Times, serif" }}>— ALISON BREWSTER</footer>
                  </blockquote>
                </div>
                <div>
                  <p className="text-lg mb-6 leading-relaxed text-gray-800" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    Every wedding we photograph is unique, whether it's here in New York City or a destination wedding halfway across the globe. With personal, in-depth consultations and rich industry experience, we seamlessly capture must-have shots, candid moments, and everything in between.
                  </p>
                  <a href="/weddings" className="inline-block border-b border-black hover:border-gray-500 hover:text-gray-500 transition-colors pb-1" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    All Weddings →
                  </a>
                </div>
              </div>
            )}
            
            {activeTab === "VIDEOGRAPHY" && (
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <blockquote className="text-2xl font-normal text-gray-800 border-l-4 border-gray-300 pl-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    "Their videography captures not just moments, but emotions and stories that can be relived for generations to come."
                    <footer className="text-sm mt-4 text-gray-600" style={{ fontFamily: "'Times New Roman', Times, serif" }}>— MICHAEL DAVIDSON</footer>
                  </blockquote>
                </div>
                <div>
                  <p className="text-lg mb-6 leading-relaxed text-gray-800" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    Our videography team blends artistic vision with technical expertise to create cinematic experiences that tell your unique story. From concept to final edit, we work closely with you to ensure every important moment is captured with precision and creativity.
                  </p>
                  <a href="/videography" className="inline-block border-b border-black hover:border-gray-500 hover:text-gray-500 transition-colors pb-1" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    View Our Films →
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;