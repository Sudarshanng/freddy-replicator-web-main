
import Navbar from "@/components/Navbar";

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-light mb-8 text-center">SHOP OUR COLLECTION</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our collection page is currently under development. Please check back soon to explore our products.
          </p>
          <div className="text-center">
            <a href="/" className="inline-block border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
