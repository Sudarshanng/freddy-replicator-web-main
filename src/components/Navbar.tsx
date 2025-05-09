
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
              <div className="absolute top-8 right-8 z-10">
                <DrawerClose className="focus:outline-none hover:bg-black/5 p-2 rounded-full transition-colors">
                  <X size={24} />
                </DrawerClose>
              </div>

              {/* Menu content */}
              <div className="flex-1 py-24 px-6 md:px-20 h-full overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-16 gap-y-12 md:gap-y-0 max-w-7xl mx-auto">
                  {/* Column 1: Weddings, Videography, Commercial */}
                  <div className="space-y-12">
                    <div className="menu-category">
                      <h2 className="text-3xl md:text-4xl font-normal playfair mb-8">Weddings</h2>
                      <div className="flex flex-col space-y-6">
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">All Weddings</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">New York City Weddings</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">Hamptons Weddings</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">Destination Weddings</a></DrawerClose>
                      </div>
                    </div>
                    
                    <div className="menu-category">
                      <h2 className="text-3xl md:text-4xl font-normal playfair mb-8">Videography</h2>
                      <div className="flex flex-col space-y-6">
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">All Videography</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">Wedding Videography</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">Mitzvah Videography</a></DrawerClose>
                      </div>
                    </div>
                    
                    <div className="menu-category">
                      <h2 className="text-3xl md:text-4xl font-normal playfair mb-8">Commercial</h2>
                      <div className="flex flex-col space-y-6">
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">All Commercial</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">Corporate Events</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">Headshots</a></DrawerClose>
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 2: Engagements, Family Events */}
                  <div className="space-y-12">
                    <div className="menu-category">
                      <h2 className="text-3xl md:text-4xl font-normal playfair mb-8">Engagements</h2>
                      <div className="flex flex-col space-y-6">
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">All Engagements</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">New York City Engagements</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">Hamptons Engagements</a></DrawerClose>
                      </div>
                    </div>
                    
                    <div className="menu-category">
                      <h2 className="text-3xl md:text-4xl font-normal playfair mb-8">Family Events</h2>
                      <div className="flex flex-col space-y-6">
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">All Family Events</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">Family Portraits</a></DrawerClose>
                        <DrawerClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-xl md:text-2xl">Bar/Bat Mitzvahs</a></DrawerClose>
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 3: About, etc */}
                  <div className="space-y-5">
                    <DrawerClose asChild><a href="#" className="block text-3xl md:text-4xl font-normal playfair hover:opacity-60 transition-opacity mb-8">About Us</a></DrawerClose>
                    <DrawerClose asChild><a href="#" className="block text-3xl md:text-4xl font-normal playfair hover:opacity-60 transition-opacity mb-8">Testimonials</a></DrawerClose>
                    <DrawerClose asChild><a href="#" className="block text-3xl md:text-4xl font-normal playfair hover:opacity-60 transition-opacity mb-8">Contact</a></DrawerClose>
                    <DrawerClose asChild><a href="#" className="block text-3xl md:text-4xl font-normal playfair hover:opacity-60 transition-opacity mb-8">Inquiries</a></DrawerClose>
                    <DrawerClose asChild><a href="#" className="block text-3xl md:text-4xl font-normal playfair hover:opacity-60 transition-opacity mb-8">NYT Feature</a></DrawerClose>
                    <DrawerClose asChild><a href="#" className="block text-3xl md:text-4xl font-normal playfair hover:opacity-60 transition-opacity mb-8">Client Login</a></DrawerClose>
                  </div>
                </div>
              </div>
              
              {/* Footer section */}
              <div className="border-t py-8">
                <p className="text-center text-lg">
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
