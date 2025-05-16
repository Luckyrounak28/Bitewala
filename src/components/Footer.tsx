import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src="/images/logo-white.png" alt="Bitewala" className="h-12" />
            </Link>
            <p className="text-neutral-300 mb-6">
              Full taste, zero waste. Refreshingly natural beverages made from the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-white transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy-policy" className="text-neutral-300 hover:text-white transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-neutral-300 hover:text-white transition duration-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-neutral-300 hover:text-white transition duration-300">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-neutral-300 hover:text-white transition duration-300">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 text-primary-500" />
                <span className="text-neutral-300">
                  123 Refreshment Street,<br />
                  Flavor District, IN 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="flex-shrink-0 w-5 h-5 mr-3 text-primary-500" />
                <a 
                  href="tel:+918012345678" 
                  className="text-neutral-300 hover:text-white transition duration-300"
                >
                  +91 801 234 5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="flex-shrink-0 w-5 h-5 mr-3 text-primary-500" />
                <a 
                  href="mailto:hello@bitewala.com" 
                  className="text-neutral-300 hover:text-white transition duration-300"
                >
                  hello@bitewala.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Bitewala. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/196/196566.png" 
              alt="Visa" 
              className="h-6" 
            />
            <img 
              src="https://cdn-icons-png.flaticon.com/512/196/196578.png" 
              alt="Mastercard" 
              className="h-6" 
            />
            <img 
              src="https://cdn-icons-png.flaticon.com/512/196/196539.png" 
              alt="American Express" 
              className="h-6" 
            />
            <img 
              src="https://cdn-icons-png.flaticon.com/512/196/196565.png" 
              alt="PayPal" 
              className="h-6" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;