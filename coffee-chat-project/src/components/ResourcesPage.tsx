import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { BookOpen, Video, FileText, Download, ExternalLink, Clock } from 'lucide-react';

const resourceCategories = [
  {
    title: "Interview Preparation",
    icon: Video,
    resources: [
      {
        title: "Technical Interview Masterclass",
        type: "Video Course",
        duration: "4 hours",
        description: "Complete guide to acing technical interviews at top tech companies",
        difficulty: "Intermediate",
        downloadable: false,
      },
      {
        title: "Behavioral Interview Framework",
        type: "PDF Guide",
        duration: "30 min read",
        description: "STAR method and common behavioral interview questions with sample answers",
        difficulty: "Beginner",
        downloadable: true,
      },
      {
        title: "System Design Interview Prep",
        type: "Interactive Course",
        duration: "6 hours",
        description: "Learn to design scalable systems with real-world examples",
        difficulty: "Advanced",
        downloadable: false,
      }
    ]
  },
  {
    title: "Resume & LinkedIn",
    icon: FileText,
    resources: [
      {
        title: "ATS-Optimized Resume Templates",
        type: "Templates",
        duration: "Instant",
        description: "Professional resume templates that pass applicant tracking systems",
        difficulty: "Beginner",
        downloadable: true,
      },
      {
        title: "LinkedIn Optimization Guide",
        type: "Checklist",
        duration: "45 min",
        description: "Step-by-step guide to creating a standout LinkedIn profile",
        difficulty: "Beginner",
        downloadable: true,
      },
      {
        title: "Cover Letter Writing Workshop",
        type: "Video",
        duration: "2 hours",
        description: "Craft compelling cover letters that get you noticed",
        difficulty: "Intermediate",
        downloadable: false,
      }
    ]
  },
  {
    title: "Skill Development",
    icon: BookOpen,
    resources: [
      {
        title: "Full-Stack Development Roadmap",
        type: "Learning Path",
        duration: "6 months",
        description: "Complete roadmap from beginner to job-ready developer",
        difficulty: "Beginner",
        downloadable: false,
      },
      {
        title: "Data Science Fundamentals",
        type: "Course Series",
        duration: "8 weeks",
        description: "Python, statistics, and machine learning essentials",
        difficulty: "Intermediate",
        downloadable: false,
      },
      {
        title: "Product Management Toolkit",
        type: "Resource Kit",
        duration: "Ongoing",
        description: "Templates, frameworks, and tools for aspiring PMs",
        difficulty: "Intermediate",
        downloadable: true,
      }
    ]
  }
];

const featuredResources = [
  {
    title: "The Ultimate Job Search Guide",
    description: "A comprehensive 50-page guide covering everything from resume writing to salary negotiation",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
    type: "PDF Guide",
    downloads: "15,000+",
    rating: "4.8/5"
  },
  {
    title: "Networking Like a Pro",
    description: "Master the art of professional networking with actionable strategies and templates",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
    type: "Video Course",
    downloads: "8,500+",
    rating: "4.9/5"
  },
  {
    title: "Salary Negotiation Scripts",
    description: "Proven scripts and tactics to negotiate your worth confidently",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
    type: "Template Kit",
    downloads: "12,000+",
    rating: "4.7/5"
  }
];

export function ResourcesPage() {
  return (
    <div className="container max-w-7xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Career Resources</h1>
        <p className="text-muted-foreground text-lg">
          Everything you need to accelerate your career growth
        </p>
      </div>

      {/* Featured Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredResources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-200">
              <div className="relative overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <Badge className="absolute top-3 right-3">{resource.type}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{resource.downloads} downloads</span>
                  <span>★ {resource.rating}</span>
                </div>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Get Resource
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Resource Categories */}
      {resourceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <category.icon className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">{category.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.resources.map((resource, resourceIndex) => (
              <Card key={resourceIndex} className="hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                        <Badge 
                          variant={resource.difficulty === 'Beginner' ? 'secondary' : 
                                 resource.difficulty === 'Intermediate' ? 'default' : 'destructive'}
                          className="text-xs"
                        >
                          {resource.difficulty}
                        </Badge>
                      </div>
                    </div>
                    {resource.downloadable && (
                      <Download className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{resource.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant={resource.downloadable ? "default" : "outline"}>
                    {resource.downloadable ? (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </>
                    ) : (
                      <>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Access
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* Resource Request */}
      <Card className="bg-muted/50">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-muted-foreground mb-6">
            Let us know what resources would be most helpful for your career journey, 
            and we'll work on creating them.
          </p>
          <Button>Request a Resource</Button>
        </CardContent>
      </Card>
    </div>
  );
}