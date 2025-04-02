
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, BookOpen, LogIn, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-awareness-purple" />
            <span className="font-bold text-xl">MindfulYouth</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/awareness" className="text-gray-600 hover:text-awareness-blue transition-colors">
              Drug Awareness
            </Link>
            <Link to="/recovery" className="text-gray-600 hover:text-awareness-green transition-colors">
              Recovery Methods
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-awareness-purple transition-colors">
              Resources
            </Link>
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="flex items-center gap-1 bg-awareness-purple hover:bg-awareness-purple/90">
                  <User className="h-4 w-4" />
                  <span>Register</span>
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link 
              to="/awareness" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-awareness-blue hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Drug Awareness
            </Link>
            <Link 
              to="/recovery" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-awareness-green hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Recovery Methods
            </Link>
            <Link 
              to="/resources" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-awareness-purple hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3 gap-2">
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full justify-center">Login</Button>
                </Link>
                <Link to="/register" className="w-full">
                  <Button className="w-full justify-center bg-awareness-purple hover:bg-awareness-purple/90">Register</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
