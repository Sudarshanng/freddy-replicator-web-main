import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const fullImageRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
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
    <>
      <section 
        id="about" 
        ref={sectionRef} 
        className="py-24 md:py-32 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full opacity-30 translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gray-100 rounded-full opacity-20"></div>
        
        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div 
            ref={headingRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 
              className="text-3xl md:text-5xl font-light leading-tight mb-16 text-gray-900"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Bobby Guliani Studio is built on a legacy of craftsmanship, 
               determination and 
              <span className="italic font-medium"> impeccable customer service</span>.
              <span className="block mt-4">
                We love what we do, and we pride ourselves on delivering quality images
                that stand the test of time — every time.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Full-width image section with much larger display */}
      <section 
        ref={fullImageRef}
        className={`w-full relative transition-opacity duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ 
          height: "100vh", 
          minHeight: "800px",
          transitionDelay: "300ms"
        }}
      >
        <img 
          src="https://photos.smugmug.com/Services/Fashion-Shows/i-tR5W5h2/0/Kv43dpPhQRDggsBXwdF7TpPzqcLwtLMRt233hkwSn/L/IMG_6805-L.jpg" 
          alt="Fashion show photograph by bobby guliani Studio" 
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute bottom-0 right-0 p-6 bg-gradient-to-tl from-black to-transparent opacity-70 text-white text-right">
          <p className="text-2xl italic font-light" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            Fashion Show, 2023
          </p>
        </div>
      </section>

      {/* Regular about section content continued */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div 
              ref={imageRef}
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="relative">
                <div className="absolute inset-0 border-2 border-gray-300 transform translate-x-4 translate-y-4 z-0"></div>
                <img 
                  src="https://photos.smugmug.com/Services/Bobby-in-Action/i-xsHnG2H/0/KWBd7VCWbH2nWV8dHqsmnhBz7KP49RHPfVh8Mc5W8/O/B_8328.jpg" 
                  alt="Bobby Guliani in his studio, 1955" 
                  className="w-full h-auto object-cover relative z-10 shadow-xl"
                />
              </div>
              <p className="mt-6 text-lg italic font-light text-center md:text-left" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Bobby Guliani Marcus in his studio
                <span className="block text-gray-500">1955</span>
              </p>
            </div>
            
            <div 
              ref={textRef}
              className={`text-left transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="relative mb-10">
                <h3 className="text-2xl md:text-3xl mb-2 font-light" style={{ fontFamily: "'Times New Roman', Times, serif" }}>"Make every photograph count"</h3>
                <p className="text-right text-sm text-gray-500" style={{ fontFamily: "'Times New Roman', Times, serif" }}>— Bobby Guliani</p>
                <div className="absolute left-0 -bottom-4 w-20 h-1 bg-gray-300"></div>
              </div>
              
              <p className="text-lg mb-8 leading-relaxed text-gray-800" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Bobby Guliani is a New York institution, handed down from father to
                son over three generations and eight decades. All along, we've
                been committed to making beautiful photographs and videos that
                tell the stories of life's most important moments.
              </p>
              
              <p className="text-lg mb-10 leading-relaxed text-gray-800" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Our studio blends timeless photographic techniques with modern innovation,
                ensuring each client receives images that are both contemporary and enduring.
              </p>
              
              <a 
                href="/about" 
                className="inline-flex items-center group"
              >
                <span className="mr-2 font-medium border-b border-black group-hover:border-gray-500 group-hover:text-gray-500 transition-colors pb-1" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  More About Us
                </span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;