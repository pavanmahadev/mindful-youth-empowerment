
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Heart, BookOpen, Brain, Smile, Clock, PlayCircle, ChevronRight, Activity, Yoga, Lotus } from 'lucide-react';

const VideoDialog = ({ videoTitle, videoDescription, videoUrl }: { videoTitle: string, videoDescription: string, videoUrl: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-awareness-purple hover:bg-awareness-purple/90">
          <PlayCircle className="h-4 w-4 mr-2" />
          Watch Video
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{videoTitle}</DialogTitle>
          <DialogDescription>{videoDescription}</DialogDescription>
        </DialogHeader>
        <div className="aspect-video w-full bg-gray-200 rounded-md flex items-center justify-center">
          {/* In a real app, this would be the actual video embed */}
          <div className="text-center p-6">
            <PlayCircle className="h-16 w-16 text-awareness-purple mx-auto mb-4" />
            <p className="text-gray-700">Video player would be embedded here</p>
            <p className="text-sm text-gray-500 mt-2">URL: {videoUrl}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const RecoveryMethod = ({ 
  title, 
  icon: Icon, 
  description, 
  benefits, 
  videoTitle, 
  videoDescription, 
  videoUrl,
  steps 
}: { 
  title: string, 
  icon: React.ElementType, 
  description: string, 
  benefits: string[], 
  videoTitle: string, 
  videoDescription: string, 
  videoUrl: string,
  steps: { title: string, description: string }[] 
}) => {
  return (
    <Card className="recovery-method-card transition-all duration-300">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-awareness-purple/10 rounded-full flex items-center justify-center">
            <Icon className="h-6 w-6 text-awareness-purple" />
          </div>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Holistic Recovery Technique</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">{description}</p>
        
        <div>
          <h4 className="font-medium mb-2">Benefits:</h4>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Heart className="h-4 w-4 text-awareness-green mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Steps to Practice:</h4>
          <ol className="space-y-3">
            {steps.map((step, index) => (
              <li key={index} className="rounded-md border p-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-awareness-blue flex items-center justify-center text-white text-sm font-medium">
                    {index + 1}
                  </div>
                  <h5 className="font-medium">{step.title}</h5>
                </div>
                <p className="mt-2 text-sm text-gray-600 pl-9">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </CardContent>
      <CardFooter>
        <VideoDialog 
          videoTitle={videoTitle} 
          videoDescription={videoDescription} 
          videoUrl={videoUrl} 
        />
      </CardFooter>
    </Card>
  );
};

const RecoveryMethods = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-awareness-green/20 to-awareness-purple/20 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Recovery Methods & Techniques</h1>
              <p className="text-xl text-gray-700 mb-8">
                Discover holistic approaches to recovery and well-being through mindfulness,
                yoga, meditation, and other research-backed practices that support healing.
              </p>
              <div className="flex justify-center space-x-4">
                <Badge variant="outline" className="px-4 py-2 text-awareness-green border-awareness-green">
                  <Yoga className="h-4 w-4 mr-2" />
                  Holistic
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-awareness-purple border-awareness-purple">
                  <Activity className="h-4 w-4 mr-2" />
                  Evidence-Based
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-awareness-blue border-awareness-blue">
                  <Lotus className="h-4 w-4 mr-2" />
                  Mind-Body
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Techniques Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center">Holistic Recovery Techniques</h2>
            
            <Tabs defaultValue="yoga" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="yoga">Yoga</TabsTrigger>
                <TabsTrigger value="meditation">Meditation</TabsTrigger>
                <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
              </TabsList>
              
              <TabsContent value="yoga" className="pt-8">
                <RecoveryMethod 
                  title="Yoga for Recovery"
                  icon={Yoga}
                  description="Yoga combines physical postures, breathing exercises, and meditation to improve physical and mental well-being. It can be particularly helpful during recovery by reducing stress, improving body awareness, and providing healthy coping mechanisms."
                  benefits={[
                    "Reduces stress and anxiety",
                    "Improves physical strength and flexibility",
                    "Enhances mind-body connection",
                    "Provides healthy coping skills",
                    "Supports better sleep quality"
                  ]}
                  videoTitle="Beginner Yoga for Recovery"
                  videoDescription="A gentle 15-minute yoga practice designed specifically for those in recovery."
                  videoUrl="https://example.com/recovery-yoga"
                  steps={[
                    {
                      title: "Start with Breathing",
                      description: "Sit comfortably, close your eyes, and take 5-10 deep breaths to center yourself."
                    },
                    {
                      title: "Gentle Warm-up",
                      description: "Perform neck rolls, shoulder circles, and gentle twists to prepare your body."
                    },
                    {
                      title: "Simple Poses",
                      description: "Practice mountain pose, forward fold, and child's pose, holding each for 5-10 breaths."
                    },
                    {
                      title: "Sun Salutations",
                      description: "Flow through 3-5 gentle sun salutations, coordinating movement with breath."
                    },
                    {
                      title: "Relaxation",
                      description: "End in savasana (corpse pose), allowing your body to integrate the practice for 3-5 minutes."
                    }
                  ]}
                />
              </TabsContent>
              
              <TabsContent value="meditation" className="pt-8">
                <RecoveryMethod 
                  title="Meditation Practices"
                  icon={Brain}
                  description="Meditation involves focusing the mind on a particular object, thought, or activity to train attention and awareness. Regular meditation practice can help reduce cravings, manage emotions, and develop greater self-awareness during recovery."
                  benefits={[
                    "Reduces cravings and impulses",
                    "Improves emotional regulation",
                    "Enhances self-awareness",
                    "Decreases anxiety and depression symptoms",
                    "Supports better decision-making"
                  ]}
                  videoTitle="Guided Meditation for Healing"
                  videoDescription="A 10-minute guided meditation specifically designed to support healing and recovery."
                  videoUrl="https://example.com/recovery-meditation"
                  steps={[
                    {
                      title: "Find a Quiet Space",
                      description: "Choose a quiet, comfortable place where you won't be disturbed for at least 10 minutes."
                    },
                    {
                      title: "Comfortable Position",
                      description: "Sit or lie down in a comfortable position with your spine relatively straight."
                    },
                    {
                      title: "Breath Awareness",
                      description: "Close your eyes and bring attention to your breath, noticing the sensation of breathing in and out."
                    },
                    {
                      title: "Mind Wandering",
                      description: "When your mind wanders (which is normal), gently bring your attention back to your breath without judgment."
                    },
                    {
                      title: "Gradual Increase",
                      description: "Begin with 5 minutes daily and gradually increase to 15-20 minutes as your practice develops."
                    }
                  ]}
                />
              </TabsContent>

              <TabsContent value="mindfulness" className="pt-8">
                <RecoveryMethod 
                  title="Mindfulness Techniques"
                  icon={Smile}
                  description="Mindfulness is the practice of being fully present and engaged in the moment, aware of your thoughts and feelings without judgment. Incorporating mindfulness into daily life can help with managing triggers and developing healthier responses to challenges."
                  benefits={[
                    "Increases awareness of triggers",
                    "Reduces automatic reactions",
                    "Builds resilience to stress",
                    "Improves focus and concentration",
                    "Enhances overall well-being"
                  ]}
                  videoTitle="Everyday Mindfulness Practices"
                  videoDescription="Learn simple mindfulness techniques you can incorporate into your daily routine."
                  videoUrl="https://example.com/mindfulness-techniques"
                  steps={[
                    {
                      title: "Mindful Breathing",
                      description: "Take 30 seconds several times a day to focus only on your breathing, noticing the sensations."
                    },
                    {
                      title: "Body Scan",
                      description: "Gradually move your attention through your body, noticing sensations without trying to change them."
                    },
                    {
                      title: "Mindful Eating",
                      description: "Eat one meal a day slowly and attentively, noticing flavors, textures, and your body's responses."
                    },
                    {
                      title: "STOP Technique",
                      description: "When stressed: Stop, Take a breath, Observe your experience, Proceed with awareness."
                    },
                    {
                      title: "Mindful Walking",
                      description: "Walk slowly for 5-10 minutes, paying close attention to each step and the sensations in your feet."
                    }
                  ]}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Daily Practice Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Incorporating Practice Into Daily Life</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-awareness-blue mr-3" />
                    <h3 className="text-xl font-semibold">Morning Routine (15-30 min)</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-awareness-blue/10 text-awareness-blue text-xs mr-2 mt-0.5">1</span>
                      <div>
                        <p className="font-medium">5 min: Mindful breathing</p>
                        <p className="text-sm text-gray-600">Sit comfortably and focus on your breath to center yourself</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-awareness-blue/10 text-awareness-blue text-xs mr-2 mt-0.5">2</span>
                      <div>
                        <p className="font-medium">10-20 min: Gentle yoga</p>
                        <p className="text-sm text-gray-600">Follow a simple sequence of stretches and poses</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-awareness-blue/10 text-awareness-blue text-xs mr-2 mt-0.5">3</span>
                      <div>
                        <p className="font-medium">5 min: Set positive intentions</p>
                        <p className="text-sm text-gray-600">Journal or mentally note your intentions for the day</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-awareness-purple mr-3" />
                    <h3 className="text-xl font-semibold">Evening Routine (15-20 min)</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-awareness-purple/10 text-awareness-purple text-xs mr-2 mt-0.5">1</span>
                      <div>
                        <p className="font-medium">5 min: Reflection</p>
                        <p className="text-sm text-gray-600">Review your day without judgment</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-awareness-purple/10 text-awareness-purple text-xs mr-2 mt-0.5">2</span>
                      <div>
                        <p className="font-medium">10 min: Guided meditation</p>
                        <p className="text-sm text-gray-600">Use an app or video for a calming meditation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-awareness-purple/10 text-awareness-purple text-xs mr-2 mt-0.5">3</span>
                      <div>
                        <p className="font-medium">5 min: Gratitude practice</p>
                        <p className="text-sm text-gray-600">Note three things you're grateful for today</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Throughout the Day</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-awareness-green/10 p-2 rounded-full mr-4">
                      <Lotus className="h-5 w-5 text-awareness-green" />
                    </div>
                    <div>
                      <p className="font-medium">Mini Mindfulness Breaks</p>
                      <p className="text-gray-600">Take 1-2 minute breaks throughout the day to check in with yourself. Focus on your breath, notice how your body feels, and observe your thoughts without judgment.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-awareness-green/10 p-2 rounded-full mr-4">
                      <Activity className="h-5 w-5 text-awareness-green" />
                    </div>
                    <div>
                      <p className="font-medium">Mindful Movement</p>
                      <p className="text-gray-600">Incorporate short stretching or walking breaks, especially after long periods of sitting. Pay attention to physical sensations as you move.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-awareness-green/10 p-2 rounded-full mr-4">
                      <BookOpen className="h-5 w-5 text-awareness-green" />
                    </div>
                    <div>
                      <p className="font-medium">Supportive Reading</p>
                      <p className="text-gray-600">Spend 10-15 minutes reading recovery-oriented or inspirational material to reinforce your commitment to wellness.</p>
                    </div>
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

export default RecoveryMethods;
