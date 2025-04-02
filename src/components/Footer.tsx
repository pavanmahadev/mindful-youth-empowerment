
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-6 w-6 text-awareness-purple" />
              <span className="font-bold text-xl">MindfulYouth</span>
            </div>
            <p className="text-gray-600 mb-6">
              Empowering youth with knowledge and resources to overcome substance abuse challenges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-awareness-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-awareness-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-awareness-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-awareness-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-awareness-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/awareness" className="text-gray-600 hover:text-awareness-purple transition-colors">
                  Drug Awareness
                </Link>
              </li>
              <li>
                <Link to="/recovery" className="text-gray-600 hover:text-awareness-purple transition-colors">
                  Recovery Methods
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-awareness-purple transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/helpline" className="text-gray-600 hover:text-awareness-purple transition-colors">
                  Helpline
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-awareness-purple transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-awareness-purple transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-awareness-purple transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-awareness-purple flex-shrink-0 mt-1" />
                <span className="text-gray-600">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-awareness-purple flex-shrink-0 mt-1" />
                <span className="text-gray-600">info@mindfulyouth.org</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-awareness-purple flex-shrink-0 mt-1" />
                <span className="text-gray-600">123 Wellness Street, Health City, HC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} MindfulYouth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
