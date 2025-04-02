
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/auth/LoginForm';
import { Heart } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-10">
            <div className="bg-white py-4 px-8 rounded-full shadow-sm inline-flex items-center">
              <Heart className="h-5 w-5 text-awareness-purple mr-2" />
              <span className="font-medium">MindfulYouth</span>
            </div>
          </div>
          
          <LoginForm />
          
          <div className="mt-10 text-center">
            <h3 className="text-gray-500 text-sm">Need immediate help?</h3>
            <p className="text-gray-700 font-medium">Call our 24/7 helpline: (800) 123-4567</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
