import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Users, Target, Award, Heart, Coffee, Lightbulb, Handshake, TrendingUp } from 'lucide-react';

interface AboutPageProps {
  onSectionChange: (section: string) => void;
}

export function AboutPage({ onSectionChange }: AboutPageProps) {
  const stats = [
    { label: 'Students Helped', value: '10,000+', icon: Users },
    { label: 'Coffee Chats Facilitated', value: '25,000+', icon: Coffee },
    { label: 'Success Stories', value: '2,500+', icon: Award },
    { label: 'Partner Companies', value: '500+', icon: Handshake },
  ];

  const values = [
    {
      icon: Heart,
      title: "Human Connection",
      description: "We believe in the power of authentic conversations and meaningful relationships in career development."
    },
    {
      icon: Target,
      title: "Personalized Growth",
      description: "Every career journey is unique. We provide personalized guidance tailored to individual goals and aspirations."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "We foster a culture of continuous learning and adaptation to help professionals thrive in changing markets."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "We leverage data and analytics to provide actionable insights for career development and salary negotiation."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Co-founder & CEO",
      bio: "Former Google PM with 8 years of experience in career mentorship",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b8c5?w=150&h=150&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Co-founder & CTO",
      bio: "Ex-Meta engineer passionate about connecting talent with opportunity",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Community",
      bio: "Career coach and HR expert with 10+ years in talent development",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      name: "David Kim",
      role: "Head of Partnerships",
      bio: "Former recruiter at top tech companies, building bridges between talent and employers",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Our Mission</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bridging the Gap Between{' '}
            <span className="text-primary">Ambition</span> and{' '}
            <span className="text-primary">Opportunity</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Coffee Chat Project was born from a simple belief: that meaningful conversations 
            between students and industry professionals can transform careers and lives.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              How a simple coffee conversation sparked a movement
            </p>
          </div>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              It started in 2019 when our co-founders, Sarah and Michael, were both working at top tech companies 
              and noticed a recurring problem: talented, ambitious students struggling to break into their dream careers 
              despite having the skills and motivation to succeed.
            </p>
            
            <p>
              The traditional hiring process felt broken. Students were applying to hundreds of jobs online with 
              little response, while employers complained they couldn't find quality candidates. Meanwhile, 
              industry professionals wanted to help but lacked an effective platform to do so.
            </p>
            
            <p>
              The solution came during a coffee chat between Sarah and a computer science student who had been 
              job searching for months. After a 30-minute conversation sharing insights about the industry, 
              interview tips, and making a few introductions, the student landed three interviews within two weeks.
            </p>
            
            <p>
              That's when we realized: the missing piece wasn't just skills or opportunity—it was connection. 
              Real, human connection between students seeking guidance and professionals willing to share their knowledge.
            </p>
            
            <p>
              Today, The Coffee Chat Project has facilitated over 25,000 meaningful conversations, helped 10,000+ 
              students launch their careers, and created a thriving community where knowledge sharing and 
              mentorship flourish naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Passionate individuals dedicated to your career success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="opacity-90">Job placement rate within 6 months</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$40K</div>
              <div className="opacity-90">Average salary increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="opacity-90">Average mentor satisfaction rating</div>
            </div>
          </div>
          <p className="text-lg opacity-90 mb-8">
            We're proud of these numbers, but we're even prouder of the individual stories behind them. 
            Every statistic represents a life changed, a dream realized, and a future made brighter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => onSectionChange('case-studies')}
            >
              Read Success Stories
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => onSectionChange('assessment')}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're a student looking for guidance or a professional wanting to give back, 
            there's a place for you in The Coffee Chat Project community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => onSectionChange('assessment')}
            >
              I'm a Student
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onSectionChange('contact')}
            >
              I Want to Mentor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}