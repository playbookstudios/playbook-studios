import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  MapPin, 
  DollarSign, 
  GraduationCap,
  Home
} from 'lucide-react';
import { colleges } from '../data/colleges';
import { majors } from '../data/majors';

interface CollegePageProps {
  collegeId: string;
}

export function CollegePage({ collegeId }: CollegePageProps) {
  const college = colleges.find(c => c.id === collegeId);
  
  if (!college) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">College not found</h2>
          <Button onClick={() => window.location.hash = '#/'}>
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  const topMajorsData = majors.filter(m => college.topMajors.includes(m.id));

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
          <Button 
            variant="ghost" 
            onClick={() => window.location.hash = '#/'}
            className="flex items-center space-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-5xl mb-4">{college.name}</h1>
          <div className="flex items-center gap-4 flex-wrap">
            <Badge className="neomorphic-element text-base px-4 py-2">
              <MapPin className="h-4 w-4 mr-2" />
              {college.city}, {college.state}
            </Badge>
            <Badge className="neomorphic-element text-base px-4 py-2">
              <DollarSign className="h-4 w-4 mr-2" />
              ${(college.annualCost / 1000).toFixed(0)}k per year
            </Badge>
          </div>
        </div>

        {/* Annual Cost Details */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              Annual Cost
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Annual Cost:</span>
                <span className="text-3xl">${college.annualCost.toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * This includes tuition, fees, room, and board. Financial aid and scholarships may significantly reduce this cost. 
                Always check with the school's financial aid office for your specific situation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">City:</span>
                <span className="text-lg">{college.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">State:</span>
                <span className="text-lg">{college.state}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Campus Life */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle>Campus Life & Culture</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{college.campusDescription}</p>
          </CardContent>
        </Card>

        {/* Top Majors */}
        <Card className="neomorphic-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Top Majors at {college.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              These are the strongest and most popular programs at this university:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {topMajorsData.map((major) => (
                <Card
                  key={major.id}
                  className="neomorphic-card cursor-pointer transition-all hover:scale-105"
                  onClick={() => window.location.hash = `#/major/${major.id}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg mb-1">{major.name}</h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {major.description}
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
      `}</style>
    </div>
  );
}
