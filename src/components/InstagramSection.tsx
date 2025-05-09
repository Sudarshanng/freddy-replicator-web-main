
import { useState } from "react";
import { Button } from "@/components/ui/button";

const InstagramSection = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const instagramPosts = [
    { id: 1, image: "https://photos.smugmug.com/Portfolio/i-28DjQ97/0/MV2f2kn4ZPcJ9Hv98zBfNLWvxQWX92t5XN8BPm7zq/L/DSC_6526-L.jpg", isVideo: false },
    { id: 2, image: "https://photos.smugmug.com/Portfolio/i-ZxsV9Lg/0/LHSbmr4T92R6tHLGzfDgJjb2pf5SF7B4LrSPdcdgv/L/D85_1716-2-L.jpg", isVideo: false },
    { id: 3, image: "https://photos.smugmug.com/Portfolio/i-vT3Hhfv/2/KXwF3sXCk5zqQpVmrvfpv48MhGxzChpsmDM3v2PKs/L/13653433_301661686848532_8090073379047065920_o-L.jpg", isVideo: false },
    { id: 4, image: "https://photos.smugmug.com/Portfolio/i-BQVpNCw/2/NcnQWsWDVzhBDCRNK25nMNFs8RzWzcMwLKSQWjffd/L/13909380_301662263515141_8477096690723333335_o-L.jpg", isVideo: false },
  ];

  return (
    <section id="social" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <h3 className="text-xl">Follow us on Instagram</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative aspect-square group cursor-pointer overflow-hidden">
              <img 
                src={post.image} 
                alt={`Instagram post ${post.id}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              {post.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/30 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg mb-4">Explore the site:</h4>
            <div className="relative border-b border-gray-300">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full py-3 pr-10 bg-transparent focus:outline-none"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-0 top-1/2 -translate-y-1/2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Sign up for updates:</h4>
            <form onSubmit={handleSubmit} className="flex items-center border-b border-gray-300">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full py-3 bg-transparent focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-10 text-center text-sm text-gray-500">
          © 2025 Bobby Guliani. All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
