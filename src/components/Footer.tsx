
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/stores" className="text-gray-600 hover:text-black transition-colors">Our Stores</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-black transition-colors">Careers</Link></li>
              <li><Link to="/sustainability" className="text-gray-600 hover:text-black transition-colors">Sustainability</Link></li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-600 hover:text-black transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-black transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact Us</Link></li>
              <li><Link to="/track-order" className="text-gray-600 hover:text-black transition-colors">Track Your Order</Link></li>
            </ul>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop/men" className="text-gray-600 hover:text-black transition-colors">Men's Collection</Link></li>
              <li><Link to="/shop/women" className="text-gray-600 hover:text-black transition-colors">Women's Collection</Link></li>
              <li><Link to="/shop/accessories" className="text-gray-600 hover:text-black transition-colors">Accessories</Link></li>
              <li><Link to="/shop/sale" className="text-gray-600 hover:text-black transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Contact</h3>
            <address className="not-italic text-gray-600 space-y-2">
              <p>123 Fashion Street</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">Email: info@fredmarcus.com</p>
              <p>Tel: (212) 555-0123</p>
            </address>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">© 2025 Fred Marcus. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-black transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-black transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-600 hover:text-black transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
