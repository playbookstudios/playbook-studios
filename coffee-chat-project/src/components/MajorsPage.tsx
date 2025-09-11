import { useState } from 'react';
import { Search, BookOpen, GraduationCap, Building2, TrendingUp, Users, Monitor, Database, HeartHandshake, DollarSign, Target, Microscope, Wrench, Briefcase, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { majors, getCollegesByMajor, getCareerPathsByMajor, type Major } from '../data/career-data';

interface MajorsPageProps {
  onSectionChange: (section: string) => void;
  selectedMajor?: string;
}

const getIconComponent = (iconName: string, className: string = 'w-6 h-6') => {
  const icons: Record<string, any> = {
    Monitor,
    Database,
    HeartHandshake,
    DollarSign,
    Target,
    GraduationCap,
    Microscope,
    Wrench,
    Briefcase,
    FileText,
    BookOpen
  };
  
  const IconComponent = icons[iconName] || BookOpen;
  return <IconComponent className={className} />;
};

export function MajorsPage({ onSectionChange, selectedMajor }: MajorsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMajorState, setSelectedMajorState] = useState<Major | null>(
    selectedMajor ? majors.find(m => m.id === selectedMajor) || null : null
  );

  const filteredMajors = majors.filter(major =>
    major.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    major.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCollegeClick = (collegeId: string) => {
    onSectionChange(`colleges-${collegeId}`);
  };

  const handleCareerClick = (careerId: string) => {
    onSectionChange(`career-paths-${careerId}`);
  };

  if (selectedMajorState) {
    const relatedColleges = getCollegesByMajor(selectedMajorState.id);
    const relatedCareers = getCareerPathsByMajor(selectedMajorState.id);

    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedMajorState(null)}
              className="mb-4"
            >
              ← Back to Majors
            </Button>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${selectedMajorState.gradient} rounded-lg flex items-center justify-center`}>
                {getIconComponent(selectedMajorState.icon, 'w-8 h-8 text-white')}
              </div>
              <div>
                <h1 className="mb-2">{selectedMajorState.name}</h1>
                <p className="text-muted-foreground">{selectedMajorState.description}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Course Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Required Courses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedMajorState.requiredClasses.map((course, index) => (
                      <div key={index} className="p-3 bg-accent/50 rounded-lg">
                        <span className="text-sm font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-medium mb-2">What to Expect:</h4>
                    <p className="text-sm text-muted-foreground">{selectedMajorState.classExamples}</p>
                  </div>

                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h4 className="font-medium mb-2">High School Comparison:</h4>
                    <p className="text-sm text-muted-foreground">{selectedMajorState.highSchoolComparison}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Top Universities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Top Universities for {selectedMajorState.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedColleges.map((college) => (
                      <div
                        key={college.id}
                        onClick={() => handleCollegeClick(college.id)}
                        className="p-3 border rounded-lg hover:bg-accent cursor-pointer transition-colors"
                      >
                        <h4 className="font-medium">{college.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {college.city}, {college.state}
                        </p>
                        <p className="text-sm font-medium mt-1">
                          ${college.annualCost.toLocaleString()}/year
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Career Paths */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Career Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedCareers.map((career) => (
                    <div
                      key={career.id}
                      onClick={() => handleCareerClick(career.id)}
                      className="p-3 border rounded-lg hover:bg-accent cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-8 h-8 bg-gradient-to-r ${career.gradient} rounded-md flex items-center justify-center`}>
                          {getIconComponent(career.icon, 'w-4 h-4 text-white')}
                        </div>
                        <h4 className="font-medium">{career.name}</h4>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Entry Level</span>
                          <span className="font-medium">
                            ${career.entryLevelSalary.median.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Experienced</span>
                          <span className="font-medium">
                            ${career.experiencedSalary.median.toLocaleString()}
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-xs mt-2">
                          {career.stabilityRating} Stability
                        </Badge>
                      </div>
                    </div>
                  ))}
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
          <h1 className="mb-4">Explore Academic Majors</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover different academic majors, their coursework, and career opportunities. 
            Find the perfect educational path that aligns with your interests and goals.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search majors or subjects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Majors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMajors.map((major) => (
            <Card 
              key={major.id} 
              className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              onClick={() => setSelectedMajorState(major)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${major.gradient} rounded-lg flex items-center justify-center`}>
                    {getIconComponent(major.icon, 'w-6 h-6 text-white')}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{major.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {major.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Sample Courses:</h4>
                    <div className="flex flex-wrap gap-1">
                      {major.requiredClasses.slice(0, 3).map((course, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                      {major.requiredClasses.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{major.requiredClasses.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Top Universities</span>
                      <span className="text-xs font-medium">
                        {major.topUniversities.length} options
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMajors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No majors found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}