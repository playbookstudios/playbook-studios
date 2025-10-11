import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowLeft, BookOpen, Filter, GraduationCap, DollarSign, TrendingUp } from 'lucide-react';
import { majors } from '../data/majors';
import { useState } from 'react';
import logoImage from '../assets/images/career-playbook-logo-v3.png';

export function CollegeMajorsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Create categories from majors
  const categories = Array.from(new Set(majors.map(major => {
    if (major.name.includes('Computer') || major.name.includes('Software') || major.name.includes('Data')) {
      return 'Technology';
    } else if (major.name.includes('Engineering')) {
      return 'Engineering';
    } else if (major.name.includes('Nursing') || major.name.includes('Medicine') || major.name.includes('Biology')) {
      return 'Health & Medicine';
    } else if (major.name.includes('Business') || major.name.includes('Economics') || major.name.includes('Finance')) {
      return 'Business & Finance';
    } else if (major.name.includes('Psychology') || major.name.includes('Sociology') || major.name.includes('Education')) {
      return 'Social Sciences';
    } else if (major.name.includes('Art') || major.name.includes('Design') || major.name.includes('Music')) {
      return 'Arts & Design';
    } else {
      return 'Other';
    }
  }))).sort();

  const filteredMajors = majors.filter(major => {
    if (!selectedCategory) return true;
    
    const majorCategory = major.name.includes('Computer') || major.name.includes('Software') || major.name.includes('Data') ? 'Technology' :
                         major.name.includes('Engineering') ? 'Engineering' :
                         major.name.includes('Nursing') || major.name.includes('Medicine') || major.name.includes('Biology') ? 'Health & Medicine' :
                         major.name.includes('Business') || major.name.includes('Economics') || major.name.includes('Finance') ? 'Business & Finance' :
                         major.name.includes('Psychology') || major.name.includes('Sociology') || major.name.includes('Education') ? 'Social Sciences' :
                         major.name.includes('Art') || major.name.includes('Design') || major.name.includes('Music') ? 'Arts & Design' : 'Other';
    
    return majorCategory === selectedCategory;
  });

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
            <a href="#/careers" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a>
            <a href="#/majors" className="text-gray-900 transition-colors">College Majors</a>
            <a href="#/universities" className="text-gray-600 hover:text-gray-900 transition-colors">Universities</a>
            <a href="#/podcast" className="text-gray-600 hover:text-gray-900 transition-colors">Podcast</a>
            <a href="#/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            <a href="#/auth" className="text-gray-600 hover:text-gray-900 transition-colors">Account</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <div className="inline-block neomorphic-icon-container-large mb-4">
              <BookOpen className="h-12 w-12 text-purple-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            College Majors
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore different college majors and discover which one aligns with your career goals and interests.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <h3 className="text-lg text-gray-700">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`category-filter-btn ${!selectedCategory ? 'active' : ''}`}
              >
                All Majors
              </button>
              {categories.map((category) => {
                const majorCount = majors.filter(major => {
                  const majorCategory = major.name.includes('Computer') || major.name.includes('Software') || major.name.includes('Data') ? 'Technology' :
                                       major.name.includes('Engineering') ? 'Engineering' :
                                       major.name.includes('Nursing') || major.name.includes('Medicine') || major.name.includes('Biology') ? 'Health & Medicine' :
                                       major.name.includes('Business') || major.name.includes('Economics') || major.name.includes('Finance') ? 'Business & Finance' :
                                       major.name.includes('Psychology') || major.name.includes('Sociology') || major.name.includes('Education') ? 'Social Sciences' :
                                       major.name.includes('Art') || major.name.includes('Design') || major.name.includes('Music') ? 'Arts & Design' : 'Other';
                  return majorCategory === category;
                }).length;
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`category-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  >
                    {category} ({majorCount})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Majors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMajors.map((major) => (
              <Card key={major.id} className="neomorphic-card hover:scale-105 transition-transform duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="neomorphic-icon-container">
                      <GraduationCap className="h-6 w-6 text-purple-500" />
                    </div>
                    <CardTitle className="text-xl">{major.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 line-clamp-3">{major.description}</p>
                    
                    {/* Core Classes Preview */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700">Core Classes:</h4>
                      <div className="flex flex-wrap gap-1">
                        {major.coreClasses.slice(0, 3).map((className, index) => (
                          <Badge key={index} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                            {className}
                          </Badge>
                        ))}
                        {major.coreClasses.length > 3 && (
                          <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600 border-gray-200">
                            +{major.coreClasses.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* High School Comparison */}
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">High School Comparison:</span> {major.highSchoolComparison}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        className="flex-1 neomorphic-button-primary"
                        onClick={() => window.location.hash = `#/major/${major.id}`}
                      >
                        Learn More
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.location.hash = '#/careers'}
                      >
                        Related Careers
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredMajors.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No majors found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            </div>
          )}
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
        
        .neomorphic-icon-container {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(145deg, #f8f9fa, #e9ecef);
          box-shadow: inset 8px 8px 16px #dcdcdc, inset -8px -8px 16px #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .neomorphic-icon-container-large {
          width: 5rem;
          height: 5rem;
          background: linear-gradient(145deg, #f8f9fa, #e9ecef);
          box-shadow: inset 12px 12px 24px #dcdcdc, inset -12px -12px 24px #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
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

        .category-filter-btn {
          padding: 0.5rem 1rem;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          background: white;
          color: #6b7280;
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .category-filter-btn:hover {
          border-color: #667eea;
          color: #667eea;
          transform: translateY(-1px);
        }
        
        .category-filter-btn.active {
          background: linear-gradient(145deg, #667eea, #764ba2);
          color: white;
          border-color: transparent;
          box-shadow: 4px 4px 8px #5a6fd8, -4px -4px 8px #7c5fae;
        }
      `}</style>
    </div>
  );
}
