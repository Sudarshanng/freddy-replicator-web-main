
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 
          className={`text-4xl md:text-5xl font-light mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "200ms", fontFamily: "'Playfair Display', serif" }}
        >
          Fred Marcus Studio is built on a legacy of craftsmanship, determination,
          and impeccable customer service. We love what we do, and we pride
          ourselves on delivering quality images that stand the test of time — every
          time.
        </h2>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div 
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <img 
              src="public/lovable-uploads/18cdc56c-0a53-4c06-a529-a00176280257.png" 
              alt="Fred Marcus in his studio, 1955" 
              className="w-full h-auto"
            />
            <p className="mt-4 text-lg italic font-light">Fred Marcus in his studio<br/>1955</p>
          </div>
          
          <div 
            className={`text-left transition-all duration-1000 ${isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="text-2xl mb-6 font-light">"Make every photograph count"</h3>
            <p className="text-right text-sm mb-8">— FRED MARCUS</p>
            <p className="text-lg mb-6">
              Fred Marcus is a New York institution, handed down from father to
              son over three generations and eight decades. All along, we've
              been committed to making beautiful photographs and videos that
              tell the stories of life's most important moments.
            </p>
            <a 
              href="/about" 
              className="inline-block border-b border-black hover:border-gray-500 hover:text-gray-500 transition-colors pb-1"
            >
              More About Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
