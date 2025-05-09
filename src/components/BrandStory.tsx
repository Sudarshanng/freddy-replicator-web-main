
const BrandStory = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" 
              alt="Brand Story" 
              className="w-full h-[600px] object-cover"
            />
          </div>
          
          <div className="fade-in" style={{animationDelay: "0.2s"}}>
            <h2 className="text-3xl font-light mb-6">OUR STORY</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 2010, Fred Marcus started with a simple vision: to create timeless clothing that combines exceptional craftsmanship with modern sensibilities.
              </p>
              <p>
                Our garments are crafted using only the finest materials sourced from sustainable producers across the globe. Each piece represents our commitment to quality, style, and responsible fashion.
              </p>
              <p>
                Today, we continue to expand our collection while staying true to our core principles of elegance, quality, and attention to detail.
              </p>
              <p>
                We believe that great clothing should not only look good but feel good and do good. That's why sustainability and ethical production are at the heart of everything we do.
              </p>
            </div>
            <div className="mt-8">
              <a href="/about" className="text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
