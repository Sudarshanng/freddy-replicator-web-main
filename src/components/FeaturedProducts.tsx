
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Classic Cotton Shirt",
    price: "$120",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
  },
  {
    id: 2,
    name: "Tailored Wool Trousers",
    price: "$180",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    price: "$250",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80"
  },
  {
    id: 4,
    name: "Linen Blazer",
    price: "$320",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl font-light mb-4">FEATURED COLLECTION</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium pieces designed for elegance and comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group fade-in" style={{animationDelay: `${product.id * 0.1}s`}}>
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-none">
                    ADD TO CART
                  </Button>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-1">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-black text-white hover:bg-gray-800 rounded-none px-8 py-6">
            VIEW ALL PRODUCTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
