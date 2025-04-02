
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Phone, ExternalLink, FileText, Video, Users, Headphones, Calendar, Download, BookOpen, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  buttonText = "Learn More", 
  badges = [] 
}: { 
  title: string, 
  description: string, 
  icon: React.ElementType, 
  link: string, 
  buttonText?: string,
  badges?: { text: string, variant?: "default" | "secondary" | "outline" | "destructive" }[]
}) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <div className="flex items-start space-x-4">
          <div className="bg-awareness-purple/10 p-2 rounded-full">
            <Icon className="h-5 w-5 text-awareness-purple" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            <div className="flex flex-wrap gap-2 mt-2">
              {badges.map((badge, index) => (
                <Badge key={index} variant={badge.variant || "outline"} className="text-xs">
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600 mb-4">
          {description}
        </CardDescription>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full flex items-center gap-2">
            {buttonText}
            <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </Card>
  );
};

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-awareness-blue/10 to-awareness-green/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Support Resources</h1>
              <p className="text-xl text-gray-700 mb-4">
                Access a curated collection of resources to support your journey toward 
                recovery and well-being.
              </p>
              <p className="text-gray-600">
                If you need immediate help, call the 24/7 Substance Abuse Helpline:
              </p>
              <div className="mt-4 inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Phone className="h-5 w-5 text-awareness-purple mr-2" />
                <span className="font-semibold">1-800-662-HELP (4357)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Crisis Resources Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">Crisis Support</h2>
              <p className="text-gray-600 mb-6">Immediate resources for those in need of urgent help</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-red-50 border-red-100">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-red-500" />
                      </div>
                      <CardTitle>National Suicide Prevention Lifeline</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 mb-4">
                      24/7, free and confidential support for people in distress, plus prevention and crisis resources.
                    </CardDescription>
                    <div className="bg-white p-3 rounded-md border border-red-100 text-center">
                      <p className="font-bold text-lg">988</p>
                      <p className="text-sm text-gray-600">Call or Text</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-100">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-blue-500" />
                      </div>
                      <CardTitle>SAMHSA's National Helpline</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 mb-4">
                      Treatment referral and information service (in English and Spanish) for individuals facing mental health or substance use disorders.
                    </CardDescription>
                    <div className="bg-white p-3 rounded-md border border-blue-100 text-center">
                      <p className="font-bold text-lg">1-800-662-HELP (4357)</p>
                      <p className="text-sm text-gray-600">Available 24/7, 365 days a year</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Separator />
        
        {/* Educational Resources Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">Educational Resources</h2>
              <p className="text-gray-600 mb-6">Learn more about substance abuse and recovery</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ResourceCard 
                  title="Understanding Addiction" 
                  description="Comprehensive guide to understanding the science of addiction, its effects on the brain, and recovery processes."
                  icon={BookOpen}
                  link="https://www.drugabuse.gov/publications/drugs-brains-behavior-science-addiction/treatment-recovery"
                  badges={[
                    { text: "Educational", variant: "outline" },
                    { text: "Science-Based", variant: "outline" }
                  ]}
                />
                
                <ResourceCard 
                  title="Youth Prevention Resources" 
                  description="Resources specifically designed for teens and young adults to understand and prevent substance abuse."
                  icon={Users}
                  link="https://teens.drugabuse.gov/"
                  badges={[
                    { text: "Youth-Focused", variant: "outline" },
                    { text: "Prevention", variant: "outline" }
                  ]}
                />
                
                <ResourceCard 
                  title="Recovery Research Institute" 
                  description="Non-profit research institute providing accessible information about recovery from substance use disorders."
                  icon={Globe}
                  link="https://www.recoveryanswers.org/"
                  badges={[
                    { text: "Research", variant: "outline" },
                    { text: "Evidence-Based", variant: "outline" }
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
        
        <Separator />
        
        {/* Recovery Tools Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">Recovery Tools & Resources</h2>
              <p className="text-gray-600 mb-6">Practical tools to support your recovery journey</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ResourceCard 
                  title="Recovery Podcast Series" 
                  description="Listen to inspiring stories from young people who have overcome substance abuse challenges."
                  icon={Headphones}
                  link="https://www.samhsa.gov/brss-tacs/recovery-support-tools/peers"
                  buttonText="Listen Now"
                  badges={[
                    { text: "Audio", variant: "outline" },
                    { text: "Peer Stories", variant: "outline" }
                  ]}
                />
                
                <ResourceCard 
                  title="Recovery Apps Collection" 
                  description="A curated list of mobile applications that can support your recovery journey with tracking, motivation, and resources."
                  icon={Calendar}
                  link="https://www.addictioncenter.com/apps-tools/"
                  buttonText="View Apps"
                  badges={[
                    { text: "Digital Tools", variant: "outline" },
                    { text: "Self-Help", variant: "outline" }
                  ]}
                />
                
                <ResourceCard 
                  title="Recovery Workbooks" 
                  description="Downloadable workbooks with exercises and activities to support recovery and build coping skills."
                  icon={Download}
                  link="https://www.hazeldenbettyford.org/recovery/tools"
                  buttonText="Download Materials"
                  badges={[
                    { text: "Printable", variant: "outline" },
                    { text: "Interactive", variant: "outline" }
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <Separator />
        
        {/* Video Resources Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">Video Resources</h2>
              <p className="text-gray-600 mb-6">Educational and inspirational video content</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResourceCard 
                  title="Understanding the Teen Brain" 
                  description="Short educational videos explaining how the teen brain develops and why young people may be more vulnerable to substance use."
                  icon={Video}
                  link="https://teens.drugabuse.gov/teens/drug-facts/brain-and-addiction"
                  buttonText="Watch Videos"
                  badges={[
                    { text: "Educational", variant: "outline" },
                    { text: "Brain Science", variant: "outline" }
                  ]}
                />
                
                <ResourceCard 
                  title="Recovery Stories" 
                  description="Video testimonials from young people sharing their personal journeys through addiction and into recovery."
                  icon={Video}
                  link="https://www.facesandvoicesofrecovery.org/resources/recovery-stories/"
                  buttonText="Watch Stories"
                  badges={[
                    { text: "Testimonials", variant: "outline" },
                    { text: "Inspiring", variant: "outline" }
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* PDF Resources Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">Downloadable Guides</h2>
              <p className="text-gray-600 mb-6">Comprehensive guides and information sheets</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ResourceCard 
                  title="Family Resource Guide" 
                  description="Comprehensive guide for families supporting a loved one dealing with substance use challenges."
                  icon={FileText}
                  link="https://www.samhsa.gov/families"
                  buttonText="Download PDF"
                  badges={[
                    { text: "For Families", variant: "outline" },
                    { text: "Support Guide", variant: "outline" }
                  ]}
                />
                
                <ResourceCard 
                  title="Recovery Planning Toolkit" 
                  description="Step-by-step workbook to create your personal recovery plan with goals, triggers, and coping strategies."
                  icon={FileText}
                  link="https://store.samhsa.gov/sites/default/files/d7/priv/sma09-4380.pdf"
                  buttonText="Download PDF"
                  badges={[
                    { text: "Planning Tool", variant: "outline" },
                    { text: "Self-Directed", variant: "outline" }
                  ]}
                />
                
                <ResourceCard 
                  title="Relapse Prevention Guide" 
                  description="Evidence-based strategies and worksheets to identify triggers and develop a relapse prevention plan."
                  icon={FileText}
                  link="https://www.samhsa.gov/resource/ebp/wellness-recovery-action-plan-wrap"
                  buttonText="Download PDF"
                  badges={[
                    { text: "Prevention", variant: "outline" },
                    { text: "Worksheets", variant: "outline" }
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-awareness-purple text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Recovery Journey Today</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              You don't have to face substance abuse challenges alone. Join our community for support,
              resources, and guidance on your path to recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="bg-white text-awareness-purple hover:bg-gray-100">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/awareness">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
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

export default Resources;
