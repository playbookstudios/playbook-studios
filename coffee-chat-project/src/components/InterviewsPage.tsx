import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, Play, Clock, Users, Star } from 'lucide-react';

const mockInterviews = [
  {
    id: 1,
    title: 'Software Engineering Mock Interview',
    interviewer: 'Sarah Johnson',
    company: 'Google',
    role: 'Senior Software Engineer',
    duration: '45 min',
    participants: 234,
    rating: 4.9,
    difficulty: 'Intermediate',
    topics: ['Data Structures', 'Algorithms', 'System Design'],
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=225&fit=crop',
  },
  {
    id: 2,
    title: 'Product Manager Interview Simulation',
    interviewer: 'Mike Chen',
    company: 'Meta',
    role: 'Product Manager',
    duration: '60 min',
    participants: 189,
    rating: 4.8,
    difficulty: 'Advanced',
    topics: ['Product Strategy', 'Analytics', 'User Research'],
    thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=225&fit=crop',
  },
  {
    id: 3,
    title: 'Data Science Technical Interview',
    interviewer: 'Dr. Emily Rodriguez',
    company: 'Netflix',
    role: 'Data Scientist',
    duration: '50 min',
    participants: 156,
    rating: 4.7,
    difficulty: 'Advanced',
    topics: ['Machine Learning', 'Statistics', 'Python'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
  },
  {
    id: 4,
    title: 'UX Designer Portfolio Review',
    interviewer: 'Jessica Park',
    company: 'Airbnb',
    role: 'Senior UX Designer',
    duration: '40 min',
    participants: 298,
    rating: 4.9,
    difficulty: 'Beginner',
    topics: ['Design Process', 'User Research', 'Prototyping'],
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=225&fit=crop',
  },
  {
    id: 5,
    title: 'Marketing Manager Case Study',
    interviewer: 'Alex Thompson',
    company: 'HubSpot',
    role: 'Marketing Director',
    duration: '55 min',
    participants: 167,
    rating: 4.6,
    difficulty: 'Intermediate',
    topics: ['Growth Marketing', 'Analytics', 'Strategy'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop',
  },
  {
    id: 6,
    title: 'Financial Analyst Interview',
    interviewer: 'David Kim',
    company: 'Goldman Sachs',
    role: 'VP of Finance',
    duration: '35 min',
    participants: 203,
    rating: 4.8,
    difficulty: 'Advanced',
    topics: ['Financial Modeling', 'Valuation', 'Markets'],
    thumbnail: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=225&fit=crop',
  },
];

export function InterviewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCompany, setSelectedCompany] = useState('all');

  const roles = ['all', 'Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer', 'Marketing Manager', 'Financial Analyst'];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];
  const companies = ['all', 'Google', 'Meta', 'Netflix', 'Airbnb', 'HubSpot', 'Goldman Sachs'];

  const filteredInterviews = mockInterviews.filter(interview => {
    const matchesSearch = interview.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         interview.interviewer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         interview.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         interview.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRole = selectedRole === 'all' || interview.role.includes(selectedRole);
    const matchesDifficulty = selectedDifficulty === 'all' || interview.difficulty === selectedDifficulty;
    const matchesCompany = selectedCompany === 'all' || interview.company === selectedCompany;

    return matchesSearch && matchesRole && matchesDifficulty && matchesCompany;
  });

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Mock Interview Library</h1>
        <p className="text-muted-foreground text-lg">
          Practice with real industry professionals and get personalized feedback
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search interviews by title, interviewer, company, or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              {roles.map(role => (
                <SelectItem key={role} value={role}>
                  {role === 'all' ? 'All Roles' : role}
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

          <Select value={selectedCompany} onValueChange={setSelectedCompany}>
            <SelectTrigger>
              <SelectValue placeholder="Select company" />
            </SelectTrigger>
            <SelectContent>
              {companies.map(company => (
                <SelectItem key={company} value={company}>
                  {company === 'all' ? 'All Companies' : company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          Showing {filteredInterviews.length} interview{filteredInterviews.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Interview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInterviews.map((interview) => (
          <Card key={interview.id} className="group hover:shadow-lg transition-all duration-200 overflow-hidden">
            <div className="relative">
              <img
                src={interview.thumbnail}
                alt={interview.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button size="lg" className="rounded-full h-16 w-16 p-0">
                  <Play className="h-8 w-8 fill-current" />
                </Button>
              </div>
              <Badge className="absolute top-3 right-3" variant={interview.difficulty === 'Beginner' ? 'secondary' : interview.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                {interview.difficulty}
              </Badge>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">{interview.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    with {interview.interviewer} • {interview.company}
                  </p>
                  <p className="text-xs text-muted-foreground">{interview.role}</p>
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{interview.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{interview.participants}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current text-yellow-500" />
                    <span>{interview.rating}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm">Topics covered:</p>
                  <div className="flex flex-wrap gap-1">
                    {interview.topics.map((topic, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full">
                  Watch Interview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredInterviews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">No interviews found matching your criteria</p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchQuery('');
              setSelectedRole('all');
              setSelectedDifficulty('all');
              setSelectedCompany('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}