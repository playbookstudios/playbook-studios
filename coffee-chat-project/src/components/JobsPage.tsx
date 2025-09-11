import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, MapPin, Building, DollarSign, Clock, Bookmark, ExternalLink } from 'lucide-react';

const mockJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Stripe',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: 'Entry Level',
    salary: '$120k - $150k',
    posted: '2 days ago',
    description: 'Join our team building the next generation of payment infrastructure. Work with React, TypeScript, and modern web technologies.',
    requirements: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Product Manager - Growth',
    company: 'Notion',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '2-3 years',
    salary: '$140k - $180k',
    posted: '1 week ago',
    description: 'Lead product initiatives to drive user acquisition and engagement. Work closely with design and engineering teams.',
    requirements: ['Product Strategy', 'Analytics', 'A/B Testing', 'User Research'],
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
    featured: false,
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'Spotify',
    location: 'Remote',
    type: 'Full-time',
    experience: '1-2 years',
    salary: '$130k - $160k',
    posted: '3 days ago',
    description: 'Analyze user behavior and build ML models to improve music recommendations. Work with Python, SQL, and big data technologies.',
    requirements: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
    logo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop',
    featured: true,
  },
  {
    id: 4,
    title: 'UX Designer',
    company: 'Figma',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: 'Entry Level',
    salary: '$110k - $140k',
    posted: '5 days ago',
    description: 'Design intuitive user experiences for our design tools. Collaborate with product and engineering teams.',
    requirements: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    logo: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=100&h=100&fit=crop',
    featured: false,
  },
  {
    id: 5,
    title: 'Software Engineer - Backend',
    company: 'Discord',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$150k - $190k',
    posted: '1 day ago',
    description: 'Build scalable backend services for millions of users. Work with Go, Python, and distributed systems.',
    requirements: ['Go', 'Python', 'Distributed Systems', 'API Design'],
    logo: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=100&h=100&fit=crop',
    featured: true,
  },
  {
    id: 6,
    title: 'Marketing Manager',
    company: 'Canva',
    location: 'Austin, TX',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$100k - $130k',
    posted: '1 week ago',
    description: 'Lead digital marketing campaigns and growth initiatives. Experience with performance marketing preferred.',
    requirements: ['Digital Marketing', 'Analytics', 'Content Strategy', 'SEO'],
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
    featured: false,
  },
];

export function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [bookmarkedJobs, setBookmarkedJobs] = useState<number[]>([]);

  const locations = ['all', 'San Francisco, CA', 'New York, NY', 'Remote', 'Los Angeles, CA', 'Austin, TX'];
  const experiences = ['all', 'Entry Level', '1-2 years', '2-3 years', '2-4 years', '3-5 years'];
  const types = ['all', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  const toggleBookmark = (jobId: number) => {
    setBookmarkedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesExperience = selectedExperience === 'all' || job.experience === selectedExperience;
    const matchesType = selectedType === 'all' || job.type === selectedType;

    return matchesSearch && matchesLocation && matchesExperience && matchesType;
  });

  // Sort by featured first, then by posted date
  const sortedJobs = filteredJobs.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Job Board</h1>
        <p className="text-muted-foreground text-lg">
          Discover opportunities from our partner companies
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs by title, company, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map(location => (
                <SelectItem key={location} value={location}>
                  {location === 'all' ? 'All Locations' : location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedExperience} onValueChange={setSelectedExperience}>
            <SelectTrigger>
              <SelectValue placeholder="Select experience" />
            </SelectTrigger>
            <SelectContent>
              {experiences.map(experience => (
                <SelectItem key={experience} value={experience}>
                  {experience === 'all' ? 'All Experience Levels' : experience}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger>
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent>
              {types.map(type => (
                <SelectItem key={type} value={type}>
                  {type === 'all' ? 'All Job Types' : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          Showing {sortedJobs.length} job{sortedJobs.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Job Cards */}
      <div className="space-y-4">
        {sortedJobs.map((job) => (
          <Card key={job.id} className={`hover:shadow-lg transition-all duration-200 ${job.featured ? 'ring-2 ring-primary/20' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex space-x-4 flex-1">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{job.title}</h3>
                          {job.featured && (
                            <Badge variant="default" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Building className="h-3 w-3" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-3 w-3" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{job.posted}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleBookmark(job.id)}
                        className={bookmarkedJobs.includes(job.id) ? 'text-primary' : ''}
                      >
                        <Bookmark className={`h-4 w-4 ${bookmarkedJobs.includes(job.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">{job.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">{job.type}</Badge>
                          <Badge variant="outline" className="text-xs">{job.experience}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {job.requirements.slice(0, 4).map((req, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                          {job.requirements.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{job.requirements.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                        <Button size="sm" className="flex items-center space-x-1">
                          <span>Apply</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {sortedJobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">No jobs found matching your criteria</p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchQuery('');
              setSelectedLocation('all');
              setSelectedExperience('all');
              setSelectedType('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}