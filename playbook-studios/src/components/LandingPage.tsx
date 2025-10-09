import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Compass, GraduationCap, Building2, TrendingUp } from 'lucide-react';
import { careers } from '../data/careers';
import { CareerVideoCarousel } from './CareerVideoCarousel';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl">CareerPath</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#/careers" className="text-gray-600 hover:text-gray-900 transition-colors">Explore Careers</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Discover Your
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Dream Career
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Explore careers, find the perfect major, and discover colleges that will help you achieve your goals. 
            Your future starts here.
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

      {/* Stats Section */}
      <section className="py-12 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="neomorphic-card text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 w-16 h-16 neomorphic-icon-container flex items-center justify-center text-blue-500">
                  <Compass className="h-8 w-8" />
                </div>
                <div className="text-4xl mb-2">10</div>
                <p className="text-gray-600">Top Career Paths</p>
              </CardContent>
            </Card>
            <Card className="neomorphic-card text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 w-16 h-16 neomorphic-icon-container flex items-center justify-center text-purple-500">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div className="text-4xl mb-2">19</div>
                <p className="text-gray-600">College Majors</p>
              </CardContent>
            </Card>
            <Card className="neomorphic-card text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 w-16 h-16 neomorphic-icon-container flex items-center justify-center text-green-500">
                  <Building2 className="h-8 w-8" />
                </div>
                <div className="text-4xl mb-2">40+</div>
                <p className="text-gray-600">Top Universities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section id="careers" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Explore Top Career Paths</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most popular and in-demand careers in the United States
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {careers.map((career) => (
              <Card 
                key={career.id} 
                className="neomorphic-card cursor-pointer transition-all hover:scale-105"
                onClick={() => window.location.hash = `#/career/${career.id}`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{career.title}</span>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-600 line-clamp-3">{career.description}</p>
                    <div className="flex items-center space-x-2 pt-3">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm">
                        ${(career.salary.entryLevel / 1000).toFixed(0)}k starting
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                <h3 className="text-xl mb-3">Explore Careers</h3>
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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Compass className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl">CareerPath</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering high school students to discover their future
          </p>
          <p className="text-gray-500 text-sm">
            &copy; 2025 CareerPath. All information is for educational purposes.
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
          box-shadow: inset 8px 8px 16px #dcdcdc, inset -8px -8px 16px #ffffff;
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
      `}</style>
    </div>
  );
}
