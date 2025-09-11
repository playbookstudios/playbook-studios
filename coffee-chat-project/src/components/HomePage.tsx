import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Play, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onSectionChange: (section: string) => void;
}

export function HomePage({ onSectionChange }: HomePageProps) {
  const stats = [
    { label: 'Students Helped', value: '10K+', icon: Users },
    { label: 'Success Stories', value: '2.5K+', icon: Award },
    { label: 'Average Salary Increase', value: '35%', icon: TrendingUp },
  ];

  const features = [
    {
      title: 'Career Path Explorer',
      description: 'Discover top career paths with detailed salary and growth insights',
      action: () => onSectionChange('career-paths'),
    },
    {
      title: 'College Majors Guide',
      description: 'Find the perfect major for your dream career with course details',
      action: () => onSectionChange('majors'),
    },
    {
      title: 'University Rankings',
      description: 'Explore top universities for your chosen field of study',
      action: () => onSectionChange('colleges'),
    },
    {
      title: 'Mock Interviews',
      description: 'Practice with industry professionals and get real-time feedback',
      action: () => onSectionChange('interviews'),
    },
    {
      title: 'Case Studies',
      description: 'Learn from real success stories and career transformations',
      action: () => onSectionChange('case-studies'),
    },
    {
      title: 'Job Board',
      description: 'Discover opportunities from partner companies',
      action: () => onSectionChange('jobs'),
    },
    {
      title: 'Salary Insights',
      description: 'Get data-driven salary expectations for your field',
      action: () => onSectionChange('salaries'),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Trusted by 10K+ Students
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Bridge the Gap Between{' '}
                  <span className="text-primary">Students</span> and{' '}
                  <span className="text-primary">Employers</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  The Coffee Chat Project connects ambitious students with industry leaders through meaningful conversations, mock interviews, and career guidance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => onSectionChange('assessment')}>
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => onSectionChange('about')}>
                  Learn More
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Hero */}
            <div className="relative">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-muted flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"></div>
                    <Button
                      size="lg"
                      className="relative z-10 rounded-full h-16 w-16 p-0"
                      onClick={() => {
                        // In a real app, this would open a video modal
                        console.log('Playing video...');
                      }}
                    >
                      <Play className="h-8 w-8 fill-current" />
                    </Button>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Watch: How Coffee Chats Changed My Career</p>
                      <p className="text-xs opacity-90">3:42 min</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Career Path Flow Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Path to Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow our guided journey from career exploration to college selection. 
              Get personalized insights every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1" onClick={() => onSectionChange('career-paths')}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Explore Career Paths</h3>
                <p className="text-muted-foreground mb-4">
                  Discover top careers with salary insights, growth outlook, and industry trends
                </p>
                <Badge variant="secondary">10 Career Paths</Badge>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1" onClick={() => onSectionChange('majors')}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Choose Your Major</h3>
                <p className="text-muted-foreground mb-4">
                  Find the perfect major with detailed course information and career connections
                </p>
                <Badge variant="secondary">10+ Majors</Badge>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1" onClick={() => onSectionChange('colleges')}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Select Your College</h3>
                <p className="text-muted-foreground mb-4">
                  Explore top universities with campus culture insights and cost information
                </p>
                <Badge variant="secondary">Top 10 Universities</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => onSectionChange('career-paths')}>
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From interview preparation to salary negotiation, we provide the tools and connections you need to land your dream job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-200" onClick={feature.action}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-primary text-primary-foreground">
            <CardContent className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your Career Journey?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join thousands of students who have successfully launched their careers through meaningful connections and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={() => onSectionChange('assessment')}>
                  Take Assessment
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => onSectionChange('interviews')}>
                  Browse Interviews
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}