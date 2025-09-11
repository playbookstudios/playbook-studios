import { useState } from 'react';
import { Search, TrendingUp, DollarSign, Users, Calendar, GraduationCap, Code, BarChart3, Heart, Megaphone, BookOpen, Stethoscope, Cog, CheckSquare, Calculator } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { careerPaths, getMajorsByCareer, type CareerPath } from '../data/career-data';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CareerPathsPageProps {
  onSectionChange: (section: string) => void;
  selectedCareerPath?: string;
}

const getIconComponent = (iconName: string, className: string = 'w-6 h-6') => {
  const icons: Record<string, any> = {
    Code,
    BarChart3,
    Heart,
    TrendingUp,
    Megaphone,
    BookOpen,
    Stethoscope,
    Cog,
    CheckSquare,
    Calculator
  };
  
  const IconComponent = icons[iconName] || TrendingUp;
  return <IconComponent className={className} />;
};

export function CareerPathsPage({ onSectionChange, selectedCareerPath }: CareerPathsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(
    selectedCareerPath ? careerPaths.find(c => c.id === selectedCareerPath) || null : null
  );

  const filteredCareers = careerPaths.filter(career =>
    career.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.commonIndustries.some(industry => 
      industry.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const formatSalary = (salary: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(salary);
  };

  const handleMajorClick = (majorId: string) => {
    onSectionChange(`majors-${majorId}`);
  };

  if (selectedPath) {
    const relatedMajors = getMajorsByCareer(selectedPath.id);

    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedPath(null)}
              className="mb-4"
            >
              ← Back to Career Paths
            </Button>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${selectedPath.gradient} rounded-lg flex items-center justify-center`}>
                {getIconComponent(selectedPath.icon, 'w-8 h-8 text-white')}
              </div>
              <div>
                <h1 className="mb-2">{selectedPath.name}</h1>
                <div className="flex gap-2">
                  <Badge variant="secondary">{selectedPath.competitionLevel} Competition</Badge>
                  <Badge variant="secondary">{selectedPath.difficulty} Difficulty</Badge>
                  <Badge variant="outline">{selectedPath.stabilityRating} Stability</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Job Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    What You'll Do
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{selectedPath.jobDescription}</p>
                  <div>
                    <h4 className="mb-2">A Day in the Life:</h4>
                    <p className="text-muted-foreground">{selectedPath.workExample}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Industries & Stability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Common Industries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {selectedPath.commonIndustries.map((industry, index) => (
                        <Badge key={index} variant="outline">{industry}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Job Outlook
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span>Stability Rating</span>
                        <Badge variant="secondary">{selectedPath.stabilityRating}</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm">
                        <strong>20-Year Outlook:</strong> {selectedPath.disruptionLikelihood}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Top Majors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Best Majors for This Career
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedMajors.map((major) => (
                      <div
                        key={major.id}
                        onClick={() => handleMajorClick(major.id)}
                        className="p-3 border rounded-lg hover:bg-accent cursor-pointer transition-colors"
                      >
                        <h4 className="font-medium">{major.name}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {major.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Salary Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Salary Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="mb-3">Entry Level</h4>
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        {formatSalary(selectedPath.entryLevelSalary.median)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {selectedPath.entryLevelSalary.percentile} nationally
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3">10+ Years Experience</h4>
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        {formatSalary(selectedPath.experiencedSalary.median)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {selectedPath.experiencedSalary.percentile} nationally
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-sm text-muted-foreground">Competition</div>
                        <Badge variant="outline" className="mt-1">
                          {selectedPath.competitionLevel}
                        </Badge>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Difficulty</div>
                        <Badge variant="outline" className="mt-1">
                          {selectedPath.difficulty}
                        </Badge>
                      </div>
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
          <h1 className="mb-4">Explore Career Paths</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover the top career paths in the US. Get detailed insights into job responsibilities, 
            salary expectations, growth outlook, and the best educational paths to get there.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search career paths or industries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Career Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <Card 
              key={career.id} 
              className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              onClick={() => setSelectedPath(career)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${career.gradient} rounded-lg flex items-center justify-center`}>
                      {getIconComponent(career.icon, 'w-6 h-6 text-white')}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{career.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {career.stabilityRating}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {career.jobDescription}
                </p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Entry Level</span>
                    <span className="font-medium">
                      {formatSalary(career.entryLevelSalary.median)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Experienced</span>
                    <span className="font-medium">
                      {formatSalary(career.experiencedSalary.median)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-xs text-muted-foreground">Competition</span>
                    <Badge variant="outline" className="text-xs">
                      {career.competitionLevel}
                    </Badge>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t">
                  <div className="flex flex-wrap gap-1">
                    {career.commonIndustries.slice(0, 3).map((industry, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {industry}
                      </Badge>
                    ))}
                    {career.commonIndustries.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{career.commonIndustries.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCareers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No career paths found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}