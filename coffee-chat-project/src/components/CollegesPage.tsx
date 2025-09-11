import { useState } from 'react';
import { Search, Building2, DollarSign, MapPin, Users, BookOpen, GraduationCap, Atom, TreePine, Crown, Sun, Cpu, Cross, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { colleges, getMajorById, type College } from '../data/career-data';

interface CollegesPageProps {
  onSectionChange: (section: string) => void;
  selectedCollege?: string;
}

const getIconComponent = (iconName: string, className: string = 'w-6 h-6') => {
  const icons: Record<string, any> = {
    Atom,
    TreePine,
    Crown,
    Sun,
    Cpu,
    Cross,
    Zap,
    Building2
  };
  
  const IconComponent = icons[iconName] || Building2;
  return <IconComponent className={className} />;
};

export function CollegesPage({ onSectionChange, selectedCollege }: CollegesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollegeState, setSelectedCollegeState] = useState<College | null>(
    selectedCollege ? colleges.find(c => c.id === selectedCollege) || null : null
  );

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCost = (cost: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(cost);
  };

  const handleMajorClick = (majorId: string) => {
    onSectionChange(`majors-${majorId}`);
  };

  if (selectedCollegeState) {
    const collegeMajors = selectedCollegeState.topMajors.map(majorId => getMajorById(majorId)).filter(Boolean);

    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedCollegeState(null)}
              className="mb-4"
            >
              ← Back to Colleges
            </Button>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${selectedCollegeState.gradient} rounded-lg flex items-center justify-center`}>
                {getIconComponent(selectedCollegeState.icon, 'w-8 h-8 text-white')}
              </div>
              <div>
                <h1 className="mb-2">{selectedCollegeState.name}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedCollegeState.city}, {selectedCollegeState.state}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{formatCost(selectedCollegeState.annualCost)}/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Campus Life & Culture */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Campus Life & Culture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCollegeState.lifestyleDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Top Academic Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Top Academic Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {collegeMajors.map((major) => (
                      <div
                        key={major.id}
                        onClick={() => handleMajorClick(major.id)}
                        className="p-3 border rounded-lg hover:bg-accent cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-8 h-8 bg-gradient-to-r ${major.gradient} rounded-md flex items-center justify-center`}>
                            {getIconComponent(major.icon, 'w-4 h-4 text-white')}
                          </div>
                          <h4 className="font-medium">{major.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {major.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Facts */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Annual Cost</span>
                      <span className="font-medium">{formatCost(selectedCollegeState.annualCost)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Location</span>
                      <span className="font-medium">{selectedCollegeState.city}, {selectedCollegeState.state}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Top Programs</span>
                      <span className="font-medium">{selectedCollegeState.topMajors.length} majors</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Academic Strengths</h4>
                    <div className="flex flex-wrap gap-2">
                      {collegeMajors.slice(0, 4).map((major) => (
                        <Badge key={major.id} variant="secondary" className="text-xs">
                          {major.name}
                        </Badge>
                      ))}
                      {collegeMajors.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{collegeMajors.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Explore Top Universities</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover leading universities and colleges. Learn about campus culture, costs, 
            academic programs, and find the perfect fit for your educational journey.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search colleges or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map((college) => (
            <Card 
              key={college.id} 
              className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              onClick={() => setSelectedCollegeState(college)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${college.gradient} rounded-lg flex items-center justify-center`}>
                    {getIconComponent(college.icon, 'w-6 h-6 text-white')}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-2">{college.name}</CardTitle>
                    <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span className="text-sm">{college.city}, {college.state}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Annual Cost</span>
                    <span className="font-medium">{formatCost(college.annualCost)}</span>
                  </div>

                  <div className="pt-3 border-t">
                    <h4 className="text-sm font-medium mb-2">Top Programs:</h4>
                    <div className="flex flex-wrap gap-1">
                      {college.topMajors.slice(0, 3).map((majorId, index) => {
                        const major = getMajorById(majorId);
                        return major ? (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {major.name}
                          </Badge>
                        ) : null;
                      })}
                      {college.topMajors.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{college.topMajors.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {college.lifestyleDescription}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No colleges found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}