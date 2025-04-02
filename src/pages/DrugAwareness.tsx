
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Info, AlertCircle, Brain, Pill, BookOpen } from 'lucide-react';

const DrugAwareness = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-awareness-blue/20 to-awareness-purple/20 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Drug Awareness & Education</h1>
              <p className="text-xl text-gray-700 mb-8">
                Understanding substance abuse is the first step toward prevention and recovery.
                Explore our comprehensive resources to learn about different drugs, their effects,
                and warning signs of addiction.
              </p>
              <div className="flex justify-center space-x-4">
                <Badge variant="outline" className="px-4 py-2 text-awareness-blue border-awareness-blue">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Educational
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-awareness-purple border-awareness-purple">
                  <Info className="h-4 w-4 mr-2" />
                  Research-Based
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-awareness-green border-awareness-green">
                  <Brain className="h-4 w-4 mr-2" />
                  Youth-Focused
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Substance Information Tabs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center">Understanding Common Substances</h2>
            
            <Tabs defaultValue="alcohol" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="alcohol">Alcohol</TabsTrigger>
                <TabsTrigger value="marijuana">Marijuana</TabsTrigger>
                <TabsTrigger value="opioids">Opioids</TabsTrigger>
                <TabsTrigger value="stimulants">Stimulants</TabsTrigger>
              </TabsList>
              
              <TabsContent value="alcohol" className="pt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                      Alcohol
                    </CardTitle>
                    <CardDescription>
                      Despite being legal for adults, alcohol poses serious risks for young people.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Effects on the Body</h3>
                      <p className="text-gray-700">
                        Alcohol is a central nervous system depressant that affects thinking, behavior, and coordination.
                        It can cause liver damage, heart problems, and developmental issues in young people.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Warning Signs</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Changes in mood or behavior</li>
                        <li>Declining academic performance</li>
                        <li>Memory lapses</li>
                        <li>Slurred speech or coordination problems</li>
                        <li>Smell of alcohol on breath or clothes</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Risks for Youth</h3>
                      <p className="text-gray-700">
                        Young people who drink alcohol are more likely to experience problems with school, 
                        social relationships, and other substance use. Alcohol can interfere with brain development
                        and increase the risk of future addiction.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="marijuana" className="pt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-green-500 mr-2" />
                      Marijuana
                    </CardTitle>
                    <CardDescription>
                      While increasingly legal for adults, marijuana has specific risks for developing brains.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Effects on the Body</h3>
                      <p className="text-gray-700">
                        Marijuana affects brain areas responsible for memory, coordination, and judgment.
                        THC, the main psychoactive compound, can cause relaxation, altered senses, and in some cases,
                        paranoia or anxiety.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Warning Signs</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Red eyes and dilated pupils</li>
                        <li>Increased appetite</li>
                        <li>Delayed reaction time</li>
                        <li>Lack of motivation</li>
                        <li>Poor memory or concentration</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Risks for Youth</h3>
                      <p className="text-gray-700">
                        Adolescent marijuana use is associated with reduced attention, memory, and learning functions.
                        It may increase the risk of mental health issues in those with a predisposition and can lead to
                        decreased academic performance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="opioids" className="pt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                      Opioids
                    </CardTitle>
                    <CardDescription>
                      Highly addictive substances that include prescription painkillers and heroin.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Effects on the Body</h3>
                      <p className="text-gray-700">
                        Opioids bind to receptors in the brain, reducing pain and creating feelings of euphoria.
                        They slow breathing and heart rate, and can be life-threatening in overdose situations.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Warning Signs</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Constricted pupils</li>
                        <li>Drowsiness or nodding off</li>
                        <li>Slurred speech</li>
                        <li>Constipation</li>
                        <li>Needle marks (if injecting)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Risks for Youth</h3>
                      <p className="text-gray-700">
                        Young people may become addicted quickly, and opioid misuse can lead to 
                        respiratory depression, coma, or death. Many start with prescription medications
                        before transitioning to illicit opioids like heroin.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="stimulants" className="pt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-purple-500 mr-2" />
                      Stimulants
                    </CardTitle>
                    <CardDescription>
                      Substances that increase alertness, attention, and energy including cocaine, amphetamines, and some medications.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Effects on the Body</h3>
                      <p className="text-gray-700">
                        Stimulants increase dopamine levels in the brain, creating feelings of euphoria.
                        They raise heart rate, blood pressure, and body temperature while decreasing appetite and sleep.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Warning Signs</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Excessive energy or hyperactivity</li>
                        <li>Dilated pupils</li>
                        <li>Decreased appetite and weight loss</li>
                        <li>Insomnia</li>
                        <li>Paranoia or agitation</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Risks for Youth</h3>
                      <p className="text-gray-700">
                        Young people may use stimulants to improve academic performance or lose weight.
                        Risks include cardiovascular problems, malnutrition, and psychosis with heavy use.
                        Prescription stimulant misuse has increased among youth in recent years.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Recognizing Warning Signs</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  Physical Warning Signs
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                    <span>Bloodshot eyes or dilated pupils</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                    <span>Changes in appetite or sleep patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                    <span>Sudden weight loss or gain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                    <span>Deterioration in physical appearance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                    <span>Unusual smells on breath, body, or clothing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                    <span>Impaired coordination or tremors</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Brain className="h-5 w-5 text-amber-500 mr-2" />
                  Behavioral Warning Signs
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                    <span>Skipping class or declining grades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                    <span>Missing money, valuables, or prescriptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                    <span>Secretive behavior or lying</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                    <span>Sudden change in friends or hobbies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                    <span>Legal problems or engaging in risky behaviors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                    <span>Using substances despite negative consequences</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Pill className="h-5 w-5 text-awareness-purple mr-2" />
                  Psychological Warning Signs
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-awareness-purple mt-2 mr-2"></span>
                    <span>Unexplained change in personality or attitude</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-awareness-purple mt-2 mr-2"></span>
                    <span>Sudden mood swings, irritability, or anger</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-awareness-purple mt-2 mr-2"></span>
                    <span>Lack of motivation or energy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-awareness-purple mt-2 mr-2"></span>
                    <span>Appearing fearful, anxious, or paranoid</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-awareness-purple mt-2 mr-2"></span>
                    <span>Depression or suicidal thoughts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-awareness-purple mt-2 mr-2"></span>
                    <span>Periods of unusual hyperactivity or agitation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DrugAwareness;
