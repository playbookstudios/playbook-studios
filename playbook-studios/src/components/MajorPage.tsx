import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  BookOpen, 
  GraduationCap, 
  School,
  Briefcase
} from 'lucide-react';
import { majors } from '../data/majors';
import { colleges } from '../data/colleges';
import { careers } from '../data/careers';

interface MajorPageProps {
  majorId: string;
}

export function MajorPage({ majorId }: MajorPageProps) {
  const major = majors.find(m => m.id === majorId);
  
  if (!major) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Major not found</h2>
          <Button onClick={() => window.location.hash = '#/'}>
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  const topUniversities = colleges.filter(c => major.topUniversities.includes(c.id));
  const relatedCareers = careers.filter(c => major.topCareers.includes(c.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl mb-4">{major.name}</h1>
          <Badge className="neomorphic-element text-base px-6 py-2">
            <GraduationCap className="h-4 w-4 mr-2" />
            College Major
          </Badge>
        </div>

        {/* Description */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle>What is {major.name}?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{major.description}</p>
          </CardContent>
        </Card>

        {/* Core Classes */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Core Classes You'll Take
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {major.coreClasses.map((className, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="neomorphic-number-small flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{className}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Class Example */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle>Example: What Classes Are Really Like</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{major.classExample}</p>
          </CardContent>
        </Card>

        {/* High School Comparison */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="h-6 w-6" />
              How It Compares to High School
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{major.highSchoolComparison}</p>
          </CardContent>
        </Card>

        {/* Top Universities */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle>Top 10 Universities for {major.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              These universities have the best undergraduate programs for {major.name}:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {topUniversities.map((college, index) => (
                <Card
                  key={college.id}
                  className="neomorphic-card cursor-pointer transition-all hover:scale-105"
                  onClick={() => window.location.hash = `#/college/${college.id}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="neomorphic-number-small flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1">{college.name}</h4>
                        <p className="text-sm text-gray-600">{college.city}, {college.state}</p>
                        <p className="text-sm text-purple-600 mt-1">
                          ${(college.annualCost / 1000).toFixed(0)}k/year
                        </p>
                      </div>
                      <ArrowLeft className="h-5 w-5 text-gray-400 rotate-180 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Careers */}
        <Card className="neomorphic-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Top Career Paths for {major.name} Majors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              Students who major in {major.name} commonly pursue these careers:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedCareers.map((career) => (
                <Card
                  key={career.id}
                  className="neomorphic-card cursor-pointer transition-all hover:scale-105"
                  onClick={() => window.location.hash = `#/career/${career.id}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg mb-1">{career.title}</h4>
                        <p className="text-sm text-gray-600">
                          ${(career.salary.entryLevel / 1000).toFixed(0)}k - ${(career.salary.tenYears / 1000).toFixed(0)}k
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Stability: {career.stability.rating}/10
                        </p>
                      </div>
                      <ArrowLeft className="h-5 w-5 text-gray-400 rotate-180" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        .neomorphic-card {
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          box-shadow: 20px 20px 40px #d1d1d1, -20px -20px 40px #ffffff;
          border: none;
          border-radius: 20px;
        }
        
        .neomorphic-element {
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          box-shadow: 6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff;
          border: none;
          border-radius: 20px;
        }
        
        .neomorphic-number-small {
          min-width: 2rem;
          height: 2rem;
          background: linear-gradient(145deg, #667eea, #764ba2);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 6px 6px 12px #5a6fd8, -6px -6px 12px #7c5fae;
        }
      `}</style>
    </div>
  );
}
