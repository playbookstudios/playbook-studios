import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Compass, TrendingUp, Briefcase, DollarSign, Award, Filter } from 'lucide-react';
import { careers, careerCategories } from '../data/careers';
import { careerAwards } from '../data/careerAwards';
import { CareerAwards } from './CareerAwards';
import { useState } from 'react';
import logoImage from '../assets/images/career-playbook-logo-v2.png';

export function AllCareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAward, setSelectedAward] = useState<string | null>(null);

  // Filter careers based on category and award
  const filteredCareers = careers.filter(career => {
    const matchesCategory = !selectedCategory || career.category === selectedCategory;
    const matchesAward = !selectedAward || (career.awards && career.awards.includes(selectedAward));
    return matchesCategory && matchesAward;
  });

  // Group filtered careers by category
  const careersByCategory = careerCategories.reduce((acc, category) => {
    acc[category] = filteredCareers.filter(career => career.category === category);
    return acc;
  }, {} as Record<string, typeof careers>);

  // Determine which categories to display (only those with filtered results)
  const displayCategories = careerCategories.filter(category => careersByCategory[category].length > 0);

  const totalCareersShown = filteredCareers.length;

  // Get careers that have the selected award
  const careersWithAward = selectedAward ? 
    careers.filter(career => career.awards && career.awards.includes(selectedAward)) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="The Career Playbook" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#/careers" className="text-gray-900 transition-colors">Explore Careers</a>
            <a href="#/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            <a href="#/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <div className="inline-block neomorphic-icon-container-large mb-4">
              <Briefcase className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Explore Career Paths
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover {careers.length} popular careers in the United States. Learn about salaries, job stability, 
            daily responsibilities, and find the perfect path for your future.
          </p>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-8 px-6 bg-gradient-to-b from-white/50 to-transparent">
        <div className="container mx-auto max-w-7xl">
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
                All Careers ({careers.length})
              </button>
              {careerCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category} ({careersByCategory[category].length})
                </button>
              ))}
            </div>
          </div>

          {/* Award Filter Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-gray-500" />
              <h3 className="text-lg text-gray-700">Filter by Awards</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedAward(null)}
                className={`award-filter-btn ${!selectedAward ? 'active' : ''}`}
              >
                All Awards
              </button>
              {careerAwards.map((award) => {
                const careerCount = careers.filter(career => 
                  career.awards && career.awards.includes(award.id)
                ).length;
                
                if (careerCount === 0) return null;
                
                return (
                  <button
                    key={award.id}
                    onClick={() => setSelectedAward(award.id)}
                    className={`award-filter-btn ${selectedAward === award.id ? 'active' : ''}`}
                    title={award.description}
                  >
                    <span className="mr-2">{award.icon}</span>
                    {award.title} ({careerCount})
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="text-gray-900">{totalCareersShown} careers</span>
              {selectedCategory && <span> in <span className="text-gray-900">{selectedCategory}</span></span>}
              {selectedAward && <span> with <span className="text-gray-900">{careerAwards.find(a => a.id === selectedAward)?.title}</span></span>}
            </p>
            {(selectedCategory || selectedAward) && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedAward(null);
                }}
                className="text-gray-600 hover:text-gray-900"
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Careers by Category */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {totalCareersShown === 0 ? (
            <div className="text-center py-16">
              <div className="inline-block neomorphic-icon-container-large mb-4">
                <Filter className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-600">No careers found</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Try adjusting your filters to see more career options.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedAward(null);
                }}
                className="neomorphic-button-primary"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-16">
              {displayCategories.map((category) => (
                <div key={category}>
                  {/* Category Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      <h2 className="text-3xl">{category}</h2>
                    </div>
                    <p className="text-gray-600 ml-16">
                      {careersByCategory[category].length} {careersByCategory[category].length === 1 ? 'career' : 'careers'} in this category
                    </p>
                  </div>

                  {/* Career Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {careersByCategory[category].map((career) => (
                      <Card 
                        key={career.id} 
                        className="neomorphic-card cursor-pointer transition-all hover:scale-105"
                        onClick={() => window.location.hash = `#/career/${career.id}`}
                      >
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span className="pr-2">{career.title}</span>
                            <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-gray-600 line-clamp-3">{career.description}</p>
                            
                            {/* Career Awards */}
                            {career.awards && career.awards.length > 0 && (
                              <CareerAwards careerAwardIds={career.awards} maxDisplay={3} size="sm" />
                            )}
                            
                            {/* Salary Info */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
                                <div>
                                  <p className="text-xs text-gray-500">Entry Level</p>
                                  <p className="text-green-700">
                                    ${(career.salary.entryLevel / 1000).toFixed(0)}k/year
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-xs text-gray-500">10 Years</p>
                                  <p className="text-green-700">
                                    ${(career.salary.tenYears / 1000).toFixed(0)}k/year
                                  </p>
                                </div>
                              </div>
                              
                              {/* Stability Rating */}
                              <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                                <span className="text-sm text-gray-600">Job Stability</span>
                                <div className="flex items-center gap-1">
                                  {Array.from({ length: 10 }).map((_, i) => (
                                    <div
                                      key={i}
                                      className={`w-2 h-4 rounded-sm ${
                                        i < career.stability.rating
                                          ? 'bg-blue-500'
                                          : 'bg-gray-200'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              
                              {/* Competition Level */}
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-500">Competition</span>
                                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                                  {career.competition.level}
                                </span>
                              </div>
                            </div>

                            {/* Industries */}
                            <div>
                              <p className="text-xs text-gray-500 mb-2">Common Industries</p>
                              <div className="flex flex-wrap gap-2">
                                {career.industries.slice(0, 3).map((industry) => (
                                  <span 
                                    key={industry} 
                                    className="text-xs px-2 py-1 rounded-full bg-purple-50 text-purple-700"
                                  >
                                    {industry}
                                  </span>
                                ))}
                                {career.industries.length > 3 && (
                                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                                    +{career.industries.length - 3} more
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="neomorphic-card p-12">
            <h2 className="text-4xl mb-4">Ready to Plan Your Future?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Click on any career to explore detailed information about salary growth, 
              required majors, and top universities.
            </p>
            <Button 
              size="lg" 
              className="neomorphic-button-primary"
              onClick={() => window.location.hash = '#/'}
            >
              Back to Home
            </Button>
          </Card>
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
        
        .category-filter-btn {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(145deg, #ffffff, #f8f8f8);
          box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #4b5563;
          font-size: 0.875rem;
        }
        
        .category-filter-btn:hover {
          box-shadow: 4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff;
          transform: translateY(-1px);
          color: #1f2937;
        }
        
        .category-filter-btn.active {
          background: linear-gradient(145deg, #667eea, #764ba2);
          color: white;
          box-shadow: 8px 8px 16px #5a6fd8, -8px -8px 16px #7c5fae;
        }
        
        .category-filter-btn.active:hover {
          box-shadow: 4px 4px 8px #5a6fd8, -4px -4px 8px #7c5fae;
        }
        
        .award-filter-btn {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(145deg, #ffffff, #f8f8f8);
          box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #4b5563;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
        }
        
        .award-filter-btn:hover {
          box-shadow: 4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff;
          transform: translateY(-1px);
          color: #1f2937;
        }
        
        .award-filter-btn.active {
          background: linear-gradient(145deg, #f59e0b, #d97706);
          color: white;
          box-shadow: 8px 8px 16px #e5a523, -8px -8px 16px #f59e0b;
        }
        
        .award-filter-btn.active:hover {
          box-shadow: 4px 4px 8px #e5a523, -4px -4px 8px #f59e0b;
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
      `}</style>
    </div>
  );
}
