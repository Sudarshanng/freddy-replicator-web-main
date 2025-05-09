
import { useState } from "react";

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
  
  const services = [
    {
      id: "WEDDINGS",
      title: "Making a 'big day' last a lifetime.",
      image: "public/lovable-uploads/690887f7-7b22-4b8f-8b96-19abe5faae5e.png",
      description: "Capturing the magic of your special day with timeless elegance."
    },
    {
      id: "ENGAGEMENTS",
      title: "First comes love...",
      image: "public/lovable-uploads/511af21d-61f7-4394-9aaa-55ae1c7dbc75.png",
      description: "Creating beautiful memories of your journey together."
    },
    {
      id: "FAMILY EVENTS",
      title: "Celebrating moments that define us.",
      image: "public/lovable-uploads/cc11df9c-c6de-4cc3-a9b5-a35a79c65131.png",
      description: "From birthdays to bar mitzvahs, preserving your family's special occasions."
    },
    {
      id: "VIDEOGRAPHY",
      title: "Memories in motion.",
      image: "public/lovable-uploads/c81ba648-b637-4b67-9350-67d60fe32215.png",
      description: "Bringing your stories to life through masterful videography."
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
                className={`px-6 py-4 text-sm transition-colors ${
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
            
            <div className="relative h-[70vh]">
              <img 
                src={activeService.image} 
                alt={activeService.title}
                className="w-full h-full object-cover" 
              />
            </div>
            
            {activeTab === "WEDDINGS" && (
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <blockquote className="text-2xl italic font-light">
                    "Their photographers are not only experienced and incredibly talented, but they evoke a sentiment that changes a moment from ordinary to extraordinary."
                    <footer className="text-sm mt-4 non-italic">— ALISON BREWSTER</footer>
                  </blockquote>
                </div>
                <div>
                  <p className="text-lg mb-6">
                    Every wedding we photograph is unique, whether it's here in New York City or a destination wedding halfway across the globe. With personal, in-depth consultations and rich industry experience, we seamlessly capture must-have shots, candid moments, and everything in between.
                  </p>
                  <a href="/weddings" className="inline-block border-b border-black hover:border-gray-500 hover:text-gray-500 transition-colors pb-1">
                    All Weddings →
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
