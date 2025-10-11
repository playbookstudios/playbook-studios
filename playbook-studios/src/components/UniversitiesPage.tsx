import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowLeft, Building2, Filter, MapPin, DollarSign, Users } from 'lucide-react';
import { colleges } from '../data/colleges';
import { useState } from 'react';
import logoImage from '../assets/images/career-playbook-logo-v3.png';

export function UniversitiesPage() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);

  // Create states list from colleges
  const states = Array.from(new Set(colleges.map(college => college.state))).sort();

  const filteredColleges = colleges.filter(college => {
    const stateMatch = !selectedState || college.state === selectedState;
    const priceMatch = !priceRange || (
      priceRange === 'under-50k' && college.annualCost < 50000 ||
      priceRange === '50k-70k' && college.annualCost >= 50000 && college.annualCost < 70000 ||
      priceRange === '70k-90k' && college.annualCost >= 70000 && college.annualCost < 90000 ||
      priceRange === 'over-90k' && college.annualCost >= 90000
    );
    return stateMatch && priceMatch;
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
            <a href="#/podcast" className="text-gray-600 hover:text-gray-900 transition-colors">Episodes</a>
            <a href="#/careers" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a>
            <a href="#/majors" className="text-gray-600 hover:text-gray-900 transition-colors">College Majors</a>
            <a href="#/universities" className="text-gray-900 transition-colors">Universities</a>
            <a href="#/find-your-path" className="text-gray-600 hover:text-gray-900 transition-colors">Find Your Path</a>
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
              <Building2 className="h-12 w-12 text-green-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Universities
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore top universities and find the perfect institution for your academic and career goals.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <h3 className="text-lg text-gray-700">Filter Universities</h3>
            </div>
            
            {/* State Filter */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">State</h4>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedState(null)}
                  className={`category-filter-btn ${!selectedState ? 'active' : ''}`}
                >
                  All States
                </button>
                {states.map((state) => {
                  const collegeCount = colleges.filter(college => college.state === state).length;
                  return (
                    <button
                      key={state}
                      onClick={() => setSelectedState(state)}
                      className={`category-filter-btn ${selectedState === state ? 'active' : ''}`}
                    >
                      {state} ({collegeCount})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h4 className="text-sm font-semibold text-gray-600 mb-2">Annual Cost</h4>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setPriceRange(null)}
                  className={`category-filter-btn ${!priceRange ? 'active' : ''}`}
                >
                  All Prices
                </button>
                <button
                  onClick={() => setPriceRange('under-50k')}
                  className={`category-filter-btn ${priceRange === 'under-50k' ? 'active' : ''}`}
                >
                  Under $50k
                </button>
                <button
                  onClick={() => setPriceRange('50k-70k')}
                  className={`category-filter-btn ${priceRange === '50k-70k' ? 'active' : ''}`}
                >
                  $50k - $70k
                </button>
                <button
                  onClick={() => setPriceRange('70k-90k')}
                  className={`category-filter-btn ${priceRange === '70k-90k' ? 'active' : ''}`}
                >
                  $70k - $90k
                </button>
                <button
                  onClick={() => setPriceRange('over-90k')}
                  className={`category-filter-btn ${priceRange === 'over-90k' ? 'active' : ''}`}
                >
                  Over $90k
                </button>
              </div>
            </div>
          </div>

          {/* Universities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <Card key={college.id} className="neomorphic-card hover:scale-105 transition-transform duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="neomorphic-icon-container">
                      <Building2 className="h-6 w-6 text-green-500" />
                    </div>
                    <CardTitle className="text-lg">{college.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{college.city}, {college.state}</span>
                    </div>

                    {/* Annual Cost */}
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">
                        ${college.annualCost.toLocaleString()}/year
                      </span>
                    </div>
                    
                    {/* Campus Description */}
                    <p className="text-gray-600 line-clamp-4 text-sm">{college.campusDescription}</p>
                    
                    {/* Top Majors */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700">Top Majors:</h4>
                      <div className="flex flex-wrap gap-1">
                        {college.topMajors.slice(0, 3).map((majorId, index) => (
                          <Badge key={index} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                            {majorId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </Badge>
                        ))}
                        {college.topMajors.length > 3 && (
                          <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600 border-gray-200">
                            +{college.topMajors.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        className="flex-1 neomorphic-button-primary"
                        onClick={() => window.location.hash = `#/college/${college.id}`}
                      >
                        Learn More
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.location.hash = '#/majors'}
                      >
                        View Majors
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredColleges.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No universities found</h3>
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
