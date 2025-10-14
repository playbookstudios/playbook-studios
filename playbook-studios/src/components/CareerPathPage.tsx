import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Briefcase, 
  Target,
  GraduationCap,
  AlertCircle,
  BookOpen
} from 'lucide-react';
import { careers, educationLevels } from '../data/careers';
import { majors } from '../data/majors';
import { CareerAwards } from './CareerAwards';

interface CareerPathPageProps {
  careerId: string;
}

export function CareerPathPage({ careerId }: CareerPathPageProps) {
  const career = careers.find(c => c.id === careerId);
  
  if (!career) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Career not found</h2>
          <Button onClick={() => window.location.hash = '#/'}>
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  const relatedMajors = majors.filter(m => career.topMajors.includes(m.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => window.location.hash = '#/'}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl mb-4">{career.title}</h1>
          
          {/* Career Awards */}
          {career.awards && career.awards.length > 0 && (
            <div className="mb-6">
              <CareerAwards careerAwardIds={career.awards} maxDisplay={6} size="md" />
            </div>
          )}
          
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Badge className="neomorphic-element text-gray-700">
              Stability: {career.stability.rating}/10
            </Badge>
            <Badge className="neomorphic-element text-gray-700">
              Competition: {career.competition.level}
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="neomorphic-card">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <div className="text-2xl mb-1">${(career.salary.entryLevel / 1000).toFixed(0)}k</div>
              <p className="text-sm text-gray-600">Entry Level Salary</p>
              <p className="text-xs text-gray-500 mt-1">{career.salary.entryLevelPercentile}th percentile</p>
            </CardContent>
          </Card>

          <Card className="neomorphic-card">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <div className="text-2xl mb-1">${(career.salary.tenYears / 1000).toFixed(0)}k</div>
              <p className="text-sm text-gray-600">After 10 Years</p>
              <p className="text-xs text-gray-500 mt-1">{career.salary.tenYearsPercentile}th percentile</p>
            </CardContent>
          </Card>

          <Card className="neomorphic-card">
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-purple-500" />
              <div className="text-2xl mb-1">{career.stability.rating}/10</div>
              <p className="text-sm text-gray-600">Job Stability</p>
            </CardContent>
          </Card>

          <Card className="neomorphic-card">
            <CardContent className="p-6 text-center">
              <Briefcase className="h-8 w-8 mx-auto mb-2 text-orange-500" />
              <div className="text-2xl mb-1">{career.competition.level}</div>
              <p className="text-sm text-gray-600">Competition</p>
            </CardContent>
          </Card>
        </div>

        {/* Description */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle>What Does a {career.title} Do?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{career.description}</p>
          </CardContent>
        </Card>

        {/* Work Example */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle>A Day in the Life</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{career.workExample}</p>
          </CardContent>
        </Card>

        {/* Industries */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle>Common Industries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {career.industries.map((industry, index) => (
                <Badge key={index} className="neomorphic-element text-base px-4 py-2 text-gray-700">
                  {industry}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stability & Disruption */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Job Stability & Future Outlook
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span>Stability Rating:</span>
                  <div className="flex gap-1">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-2 rounded ${
                          i < career.stability.rating
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{career.stability.disruptionRisk}</p>
            </div>
          </CardContent>
        </Card>

        {/* Competition & Difficulty */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle>Competition & Difficulty</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <span className="text-sm text-gray-600">Competition Level:</span>
                <p className="text-lg">{career.competition.level}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Difficulty Assessment:</span>
                <p className="text-gray-700 leading-relaxed">{career.competition.difficulty}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education Requirements */}
        <Card className="neomorphic-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Education Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Recommended Education */}
              <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{educationLevels[career.education.recommended].icon}</span>
                  <h4 className="text-lg font-semibold text-purple-800">
                    {educationLevels[career.education.recommended].label}
                  </h4>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-600">
                    {educationLevels[career.education.recommended].description}
                  </span>
                  <Badge className="bg-purple-200 text-purple-800">
                    {educationLevels[career.education.recommended].years}
                  </Badge>
                </div>
                <p className="text-sm font-medium text-purple-700">Recommended for this career</p>
              </div>

              {/* Minimum Education (if different) */}
              {career.education.minimum !== career.education.recommended && (
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{educationLevels[career.education.minimum].icon}</span>
                    <h4 className="text-lg font-semibold text-blue-800">
                      {educationLevels[career.education.minimum].label}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600">
                      {educationLevels[career.education.minimum].description}
                    </span>
                    <Badge className="bg-blue-200 text-blue-800">
                      {educationLevels[career.education.minimum].years}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-blue-700">Minimum requirement</p>
                </div>
              )}

              {/* Alternative Education Paths */}
              {career.education.alternatives && career.education.alternatives.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 mb-3">Alternative Education Paths:</h5>
                  <div className="flex flex-wrap gap-2">
                    {career.education.alternatives.map((altLevel, index) => (
                      <Badge key={index} className="bg-gray-200 text-gray-700">
                        {educationLevels[altLevel].label}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Notes */}
              {career.education.notes && (
                <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-amber-50">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-sm font-semibold text-amber-800 mb-1">Important Notes:</h5>
                      <p className="text-sm text-amber-700">{career.education.notes}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Top Majors */}
        <Card className="neomorphic-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Top Majors to Study
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">These majors will best prepare you for this career:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedMajors.map((major) => (
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
