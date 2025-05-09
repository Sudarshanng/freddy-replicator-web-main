import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-1"></div>
        
        <Drawer>
          <DrawerTrigger asChild>
            <button className="focus:outline-none p-2 rounded-md hover:bg-black/10 transition-all ml-auto">
              <Menu size={28} className={scrolled ? "text-black" : "text-white"} />
            </button>
          </DrawerTrigger>
          <DrawerContent className="w-full h-full inset-0 max-h-screen rounded-none bg-white overflow-auto">
            <div className="h-screen flex flex-col">
              {/* Close button */}
              <div className="absolute top-6 right-6 z-10">
                <DrawerClose className="focus:outline-none hover:bg-black/5 p-2 rounded-full transition-colors">
                  <X size={24} />
                </DrawerClose>
              </div>

              {/* Menu content */}
              <div className="flex-1 py-16 px-6 md:px-16 h-full overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-16 gap-y-10 md:gap-y-0 max-w-6xl mx-auto">
                  {/* Column 1: Weddings, Videography, Commercial */}
                  <div className="space-y-10">
                    <div className="menu-category">
                      <h2 className="text-2xl font-normal mb-5">Weddings</h2>
                      <div className="flex flex-col space-y-3">
                        <DrawerClose asChild><a href="/all-weddings" className="hover:opacity-60 transition-opacity text-base">All Weddings</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">New York City Weddings</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">Hamptons Weddings</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">Destination Weddings</a></DrawerClose>
                      </div>
                    </div>
                    
                    <div className="menu-category">
                      <h2 className="text-2xl font-normal mb-5">Videography</h2>
                      <div className="flex flex-col space-y-3">
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">All Videography</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">Wedding Videography</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">Mitzvah Videography</a></DrawerClose>
                      </div>
                    </div>
                    
                    <div className="menu-category">
                      <h2 className="text-2xl font-normal mb-5">Commercial</h2>
                      <div className="flex flex-col space-y-3">
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">All Commercial</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">Corporate Events</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">Headshots</a></DrawerClose>
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 2: Engagements, Family Events */}
                  <div className="space-y-10">
                    <div className="menu-category">
                      <h2 className="text-2xl font-normal mb-5">Engagements</h2>
                      <div className="flex flex-col space-y-3">
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">All Engagements</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">New York City Engagements</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">Hamptons Engagements</a></DrawerClose>
                      </div>
                    </div>
                    
                    <div className="menu-category">
                      <h2 className="text-2xl font-normal mb-5">Family Events</h2>
                      <div className="flex flex-col space-y-3">
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">All Family Events</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">Family Portraits</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-base">Bar/Bat Mitzvahs</a></DrawerClose>
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 3: About, etc */}
                  <div className="space-y-3">
                    <DrawerClose asChild><a href="#" className="block text-2xl font-normal hover:opacity-60 transition-opacity mb-5">About Us</a></DrawerClose>
                    <DrawerClose asChild><a href="#" className="block text-2xl font-normal hover:opacity-60 transition-opacity mb-5">Testimonials</a></DrawerClose>
                    <DrawerClose asChild><a href="#" className="block text-2xl font-normal hover:opacity-60 transition-opacity mb-5">Contact</a></DrawerClose>
                    <DrawerClose asChild><a href="#" className="block text-2xl font-normal hover:opacity-60 transition-opacity mb-5">Inquiries</a></DrawerClose>
                    <DrawerClose asChild><a href="#" className="block text-2xl font-normal hover:opacity-60 transition-opacity mb-5">NYT Feature</a></DrawerClose>
                    <DrawerClose asChild><a href="#" className="block text-2xl font-normal hover:opacity-60 transition-opacity mb-5">Client Login</a></DrawerClose>
                  </div>
                </div>
              </div>
              
              {/* Footer section */}
              <div className="border-t py-6">
                <p className="text-center text-base">
                  Keep up with Fred Marcus: <a href="#" className="underline hover:opacity-70 transition-opacity">Behind the Lens</a>
                </p>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;