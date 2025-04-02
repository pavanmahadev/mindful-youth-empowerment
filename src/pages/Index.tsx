
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Heart, Brain, Users, ShieldCheck, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Empowering Youth Through <span className="gradient-text">Awareness</span> and <span className="gradient-text">Recovery</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Join our community and access resources to understand drug abuse, recovery methods, and build a healthier future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/awareness">
                    <Button className="w-full sm:w-auto bg-awareness-blue hover:bg-awareness-blue/90 text-white">
                      Learn More
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Join Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=800&q=80" 
                  alt="Mindful Youth Community" 
                  className="rounded-lg shadow-xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose MindfulYouth</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive platform provides resources and support for youth dealing with substance abuse challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-awareness-blue/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-awareness-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
                <p className="text-gray-600">
                  Access comprehensive information about substance abuse, effects, and prevention strategies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-awareness-purple/10 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-awareness-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Recovery Techniques</h3>
                <p className="text-gray-600">
                  Learn proven methods like yoga, meditation, and mindfulness to support recovery and wellness.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-awareness-green/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-awareness-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-gray-600">
                  Connect with peers who understand your journey and share experiences in a safe environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80" 
                  alt="About MindfulYouth" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">About MindfulYouth</h2>
                <p className="text-gray-600 mb-6">
                  MindfulYouth was founded with a mission to provide accessible education and recovery 
                  resources for young people facing substance abuse challenges. We believe in empowering 
                  youth through knowledge, community support, and practical recovery techniques.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <ShieldCheck className="h-6 w-6 text-awareness-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Expert-reviewed educational content</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-6 w-6 text-awareness-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Step-by-step recovery technique videos</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-6 w-6 text-awareness-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Supportive community of peers and professionals</span>
                  </li>
                </ul>
                <Link to="/about">
                  <Button className="bg-awareness-purple hover:bg-awareness-purple/90">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 bg-awareness-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Journey to Recovery Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of young people who have found hope, healing, and community through MindfulYouth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="bg-white text-awareness-blue hover:bg-gray-100">
                  <span>Create Free Account</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Explore Resources
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
