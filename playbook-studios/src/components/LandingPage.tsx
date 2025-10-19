import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Compass, GraduationCap, Building2, TrendingUp, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { careers } from '../data/careers';
import { CareerVideoCarousel } from './CareerVideoCarousel';
import { CareerAwards } from './CareerAwards';
import logoImage from '../assets/images/career-playbook-logo-v3.png';
import React, { useState, useEffect } from 'react';

export function LandingPage() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    // Auto-advance testimonials every 4 seconds
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % 5);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + 5) % 5);
  };

  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % 5);
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "High School Senior",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      quote: "The Career Playbook helped me discover my passion for software engineering. I had no idea what career path to choose, but their resources made it so clear!"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "College Freshman",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote: "I was torn between different majors until I found The Career Playbook. Now I'm confidently pursuing civil engineering and know exactly what to expect."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "High School Junior",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      quote: "The insights on day-to-day work life and salary expectations were game-changers. I found my dream career in marketing and have a clear path forward!"
    },
    {
      id: 4,
      name: "David Kim",
      role: "College Sophomore",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      quote: "Thanks to The Career Playbook, I switched from an undecided major to data science. The career information was exactly what I needed to make an informed decision."
    },
    {
      id: 5,
      name: "Aisha Patel",
      role: "High School Senior",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      quote: "I never knew there were so many career options in healthcare beyond being a doctor. The Career Playbook opened my eyes to becoming a physician assistant!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#/" className="cursor-pointer">
              <img 
                src={logoImage} 
                alt="The Career Playbook" 
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#/podcast" className="text-gray-600 hover:text-gray-900 transition-colors">Episodes</a>
            <a href="#/careers" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a>
            <a href="#/majors" className="text-gray-600 hover:text-gray-900 transition-colors">College Majors</a>
            <a href="#/universities" className="text-gray-600 hover:text-gray-900 transition-colors">Universities</a>
            <a href="#/find-your-path" className="text-gray-600 hover:text-gray-900 transition-colors">Find Your Path</a>
            <a href="#/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            <a href="#/auth" className="text-gray-600 hover:text-gray-900 transition-colors">Account</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            The Playbook For Your
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Dream Career
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Most students pick a major without knowing their career options. We'll help you find a career path that actually fits you, and the next steps to get there.
          </p>
          
          <Button 
            size="lg" 
            className="neomorphic-button-primary"
            onClick={() => {
              window.location.hash = '#/careers';
            }}
          >
            Start Exploring
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Video Carousel in Hero */}
        <CareerVideoCarousel />
      </section>


      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how The Career Playbook has helped students find their dream careers
            </p>
          </div>
          
          <div className="relative">
            {/* Main Testimonial Card */}
            <Card className="neomorphic-card">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Image Section */}
                  <div className="flex flex-col items-center space-y-4 flex-shrink-0">
                    <img
                      src={testimonials[currentTestimonialIndex].image}
                      alt={testimonials[currentTestimonialIndex].name}
                      className="w-20 h-20 rounded-full object-cover neomorphic-avatar"
                    />
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonialIndex].name}</p>
                      <p className="text-gray-600">{testimonials[currentTestimonialIndex].role}</p>
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="flex-1 text-center lg:text-left">
                    <Quote className="h-10 w-10 text-blue-500 mb-4 opacity-50 mx-auto lg:mx-0" />
                    <p className="text-xl text-gray-700 italic leading-relaxed">
                      "{testimonials[currentTestimonialIndex].quote}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={goToPreviousTestimonial}
                className="w-12 h-12 neomorphic-icon-container flex items-center justify-center hover:scale-110 transition-transform"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestimonialIndex 
                        ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-600' 
                        : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNextTestimonial}
                className="w-12 h-12 neomorphic-icon-container flex items-center justify-center hover:scale-110 transition-transform"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section id="about" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Your Journey to Success</h2>
            <p className="text-xl text-gray-600">
              Three simple steps to discover your future
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="neomorphic-card text-center">
              <CardContent className="p-8">
                <div className="neomorphic-number mx-auto mb-6">1</div>
                <h3 className="text-xl mb-3">Careers</h3>
                <p className="text-gray-600">
                  Browse top career paths to understand salary, job stability, and day-to-day work
                </p>
              </CardContent>
            </Card>
            
            <Card className="neomorphic-card text-center">
              <CardContent className="p-8">
                <div className="neomorphic-number mx-auto mb-6">2</div>
                <h3 className="text-xl mb-3">Find Your Major</h3>
                <p className="text-gray-600">
                  Discover which college majors prepare you for your dream career
                </p>
              </CardContent>
            </Card>
            
            <Card className="neomorphic-card text-center">
              <CardContent className="p-8">
                <div className="neomorphic-number mx-auto mb-6">3</div>
                <h3 className="text-xl mb-3">Choose Your College</h3>
                <p className="text-gray-600">
                  Explore top universities for your major and find the perfect fit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={logoImage} 
              alt="The Career Playbook" 
              className="h-12 w-auto"
            />
          </div>
          <p className="text-gray-400 mb-4">
            Empowering high school students to discover their future
          </p>
          <p className="text-gray-500 text-sm">
            &copy; 2025 The Career Playbook. All information is for educational purposes.
          </p>
        </div>
      </footer>

      <style jsx>{`
        .neomorphic-card {
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          box-shadow: 20px 20px 40px #d1d1d1, -20px -20px 40px #ffffff;
          border: none;
          border-radius: 20px;
        }
        
        .neomorphic-button-primary {
          background: linear-gradient(145deg, #667eea, #764ba2);
          color: white;
          box-shadow: 8px 8px 16px #5a6fd8, -8px -8px 16px #7c5fae;
          border: none;
          border-radius: 12px;
        }
        
        .neomorphic-button-primary:hover {
          box-shadow: 4px 4px 8px #5a6fd8, -4px -4px 8px #7c5fae;
          transform: translateY(-2px);
        }
        
        .neomorphic-icon-container {
          background: linear-gradient(145deg, #f8f9fa, #e9ecef);
          box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
          border-radius: 50%;
        }
        
        .neomorphic-number {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(145deg, #667eea, #764ba2);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 8px 8px 16px #5a6fd8, -8px -8px 16px #7c5fae;
        }
        
        .neomorphic-avatar {
          box-shadow: 12px 12px 24px #d1d1d1, -12px -12px 24px #ffffff;
          border: 4px solid white;
          transition: transform 0.3s ease;
        }
        
        .neomorphic-avatar:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
