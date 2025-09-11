import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, Clock, TrendingUp, Building, User, ExternalLink } from 'lucide-react';

const mockCaseStudies = [
  {
    id: 1,
    title: "From Bootcamp to Big Tech: Landing at Google",
    person: "Alex Chen",
    previousRole: "Retail Manager",
    currentRole: "Software Engineer at Google",
    salaryIncrease: "180%",
    timeline: "8 months",
    industry: "Technology",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    excerpt: "How a career changer with no technical background landed a $150k role at Google through strategic preparation and networking.",
    tags: ["Career Change", "Self-taught", "Big Tech", "Bootcamp"],
    keyTakeaways: [
      "Built 5 portfolio projects showcasing different tech stacks",
      "Networked strategically through Coffee Chat Project",
      "Practiced 200+ coding problems before interviews",
      "Leveraged transferable skills from previous management experience"
    ]
  },
  {
    id: 2,
    title: "Product Manager Success Story: From Intern to Director",
    person: "Sarah Kim",
    previousRole: "Marketing Intern",
    currentRole: "Product Director at Stripe",
    salaryIncrease: "320%",
    timeline: "3 years",
    industry: "Fintech",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b8c5?w=400&h=300&fit=crop",
    excerpt: "A strategic journey from intern to director, showcasing the power of mentorship and continuous learning in product management.",
    tags: ["Product Management", "Fast Track", "Leadership", "Fintech"],
    keyTakeaways: [
      "Found strong mentors through coffee chats",
      "Led cross-functional projects as an intern",
      "Developed deep understanding of user needs",
      "Built strong relationships across all departments"
    ]
  },
  {
    id: 3,
    title: "Data Science Pivot: From Academia to Industry",
    person: "Dr. Michael Rodriguez",
    previousRole: "PhD in Biology",
    currentRole: "Senior Data Scientist at Netflix",
    salaryIncrease: "85%",
    timeline: "14 months",
    industry: "Entertainment",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
    excerpt: "Transitioning from academic research to industry data science, leveraging research experience for business impact.",
    tags: ["PhD Transition", "Data Science", "Research Background", "Academia to Industry"],
    keyTakeaways: [
      "Translated academic projects into business-relevant case studies",
      "Learned industry-specific tools and frameworks",
      "Networked with data scientists across different industries",
      "Emphasized business impact over academic rigor"
    ]
  },
  {
    id: 4,
    title: "UX Designer Journey: Self-taught to Design Lead",
    person: "Jessica Park",
    previousRole: "Graphic Designer",
    currentRole: "Design Lead at Airbnb",
    salaryIncrease: "145%",
    timeline: "18 months",
    industry: "Travel Tech",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    excerpt: "From print design to digital product design, building user-centered design skills and landing at a top tech company.",
    tags: ["Design", "Self-taught", "Career Pivot", "User Research"],
    keyTakeaways: [
      "Built a strong portfolio through redesign challenges",
      "Learned user research and testing methodologies",
      "Connected with design communities and mentors",
      "Emphasized user empathy and business understanding"
    ]
  },
  {
    id: 5,
    title: "Marketing to Tech Sales: Doubling Income",
    person: "David Thompson",
    previousRole: "Marketing Coordinator",
    currentRole: "Enterprise Sales at Salesforce",
    salaryIncrease: "110%",
    timeline: "6 months",
    industry: "SaaS",
    difficulty: "Beginner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
    excerpt: "Leveraging marketing background to excel in enterprise software sales, with a focus on relationship building and technical understanding.",
    tags: ["Sales", "Marketing Background", "SaaS", "Relationship Building"],
    keyTakeaways: [
      "Leveraged marketing knowledge to understand buyer personas",
      "Learned technical aspects of enterprise software",
      "Built consultative selling skills",
      "Focused on long-term relationship building over quick wins"
    ]
  },
  {
    id: 6,
    title: "Finance Professional's Tech Transformation",
    person: "Emily Zhang",
    previousRole: "Investment Banking Analyst",
    currentRole: "Fintech Product Manager at Square",
    salaryIncrease: "65%",
    timeline: "12 months",
    industry: "Fintech",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop",
    excerpt: "Using finance expertise to excel in fintech product management, bridging traditional finance and modern technology.",
    tags: ["Finance to Tech", "Domain Expertise", "Product Management", "Fintech"],
    keyTakeaways: [
      "Used financial domain expertise as competitive advantage",
      "Learned product management frameworks and methodologies",
      "Built relationships with engineering and design teams",
      "Focused on user experience in financial products"
    ]
  }
];

export function CaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const industries = ['all', 'Technology', 'Fintech', 'Entertainment', 'Travel Tech', 'SaaS'];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];
  const allTags = Array.from(new Set(mockCaseStudies.flatMap(study => study.tags)));
  const tags = ['all', ...allTags];

  const filteredCaseStudies = mockCaseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.person.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesDifficulty = selectedDifficulty === 'all' || study.difficulty === selectedDifficulty;
    const matchesTag = selectedTag === 'all' || study.tags.includes(selectedTag);

    return matchesSearch && matchesIndustry && matchesDifficulty && matchesTag;
  });

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Success Stories</h1>
        <p className="text-muted-foreground text-lg">
          Learn from real career transformations and success stories
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search case studies by name, title, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map(industry => (
                <SelectItem key={industry} value={industry}>
                  {industry === 'all' ? 'All Industries' : industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              {difficulties.map(difficulty => (
                <SelectItem key={difficulty} value={difficulty}>
                  {difficulty === 'all' ? 'All Difficulties' : difficulty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {tags.map(tag => (
                <SelectItem key={tag} value={tag}>
                  {tag === 'all' ? 'All Categories' : tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          Showing {filteredCaseStudies.length} case stud{filteredCaseStudies.length !== 1 ? 'ies' : 'y'}
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCaseStudies.map((study) => (
          <Card key={study.id} className="group hover:shadow-lg transition-all duration-200 overflow-hidden">
            <div className="relative">
              <img
                src={study.image}
                alt={study.person}
                className="w-full h-48 object-cover"
              />
              <Badge className="absolute top-3 right-3" variant={study.difficulty === 'Beginner' ? 'secondary' : study.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                {study.difficulty}
              </Badge>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{study.excerpt}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{study.person}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>{study.industry}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>+{study.salaryIncrease} salary</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{study.timeline}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Career Path:</p>
                  <div className="text-sm text-muted-foreground">
                    <span>{study.previousRole}</span>
                    <span className="mx-2">→</span>
                    <span className="font-medium text-foreground">{study.currentRole}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Takeaways:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {study.keyTakeaways.slice(0, 2).map((takeaway, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {study.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {study.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{study.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Read Full Story
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCaseStudies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">No case studies found matching your criteria</p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchQuery('');
              setSelectedIndustry('all');
              setSelectedDifficulty('all');
              setSelectedTag('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* CTA */}
      <Card className="mt-12 bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to Share Your Success Story?</h3>
          <p className="text-lg opacity-90 mb-6">
            Help inspire others by sharing your career transformation journey
          </p>
          <Button size="lg" variant="secondary">
            Submit Your Story
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}