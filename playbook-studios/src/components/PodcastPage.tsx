import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Play, Clock, Calendar, User, Search, Filter } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImage from '../assets/images/career-playbook-logo-v3.png';
import { fetchYouTubeFeedWithProxy } from '../utils/youtubeRSS';

interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
  publishedAt: string;
  duration: string;
  author: string;
}

export function PodcastPage() {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'latest' | 'top' | 'discussions'>('latest');
  const [searchQuery, setSearchQuery] = useState('');

  // YouTube RSS feed URL - replace with your actual YouTube channel RSS feed
  // To get your channel ID: Go to your YouTube channel and look at the URL
  // Example: https://www.youtube.com/channel/UCxxxxxxxxxxxxxxxxxx
  const YOUTUBE_CHANNEL_ID = 'YOUR_CHANNEL_ID'; // Replace with your actual channel ID

  useEffect(() => {
    // SETUP INSTRUCTIONS FOR YOUTUBE RSS INTEGRATION:
    // 1. Get your YouTube Channel ID from your channel URL
    // 2. Replace 'YOUR_CHANNEL_ID' above with your actual channel ID
    // 3. Uncomment the fetchYouTubeFeedWithProxy call below
    // 4. Remove or comment out the mock data section
    
    // Uncomment this section when you have your YouTube Channel ID:
    /*
    const loadEpisodes = async () => {
      try {
        setLoading(true);
        const episodes = await fetchYouTubeFeedWithProxy(YOUTUBE_CHANNEL_ID);
        setEpisodes(episodes);
      } catch (error) {
        console.error('Failed to load episodes:', error);
        // Fallback to mock data
        setEpisodes(mockEpisodes);
      } finally {
        setLoading(false);
      }
    };
    loadEpisodes();
    */
    
    // For now, we'll use mock data since we need your actual YouTube channel ID
    // In production, you would fetch from the RSS feed
    const mockEpisodes: PodcastEpisode[] = [
      {
        id: '1',
        title: 'Software Engineer at Google: From Bootcamp to $200k+ Salary',
        description: 'Sarah shares her journey from coding bootcamp to landing a senior role at Google, including interview tips and career growth strategies.',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        publishedAt: '2024-01-15',
        duration: '45:32',
        author: 'The Career Playbook'
      },
      {
        id: '2',
        title: 'Data Scientist at Netflix: How to Break into Data Science',
        description: 'Emily explains her path from statistics major to data scientist at Netflix, covering skills needed and industry insights.',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        publishedAt: '2024-01-10',
        duration: '38:15',
        author: 'The Career Playbook'
      },
      {
        id: '3',
        title: 'UX Designer Career Path: From Art School to Silicon Valley',
        description: 'Alex discusses how his art degree led to a successful UX design career, including portfolio tips and industry trends.',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        publishedAt: '2024-01-05',
        duration: '42:18',
        author: 'The Career Playbook'
      },
      {
        id: '4',
        title: 'Nursing Career: From Pre-Med to Registered Nurse',
        description: 'Michael shares his journey from pre-med student to registered nurse, covering clinical experience and job satisfaction.',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        publishedAt: '2024-01-01',
        duration: '35:42',
        author: 'The Career Playbook'
      }
    ];

    // Simulate loading
    setTimeout(() => {
      setEpisodes(mockEpisodes);
      setLoading(false);
    }, 1000);
  }, []);

  // Function to fetch from YouTube RSS (for future implementation)
  const fetchYouTubeFeed = async () => {
    try {
      // This would be the actual implementation:
      // const response = await fetch(YOUTUBE_RSS_URL);
      // const xmlText = await response.text();
      // Parse XML and extract video information
      console.log('YouTube RSS feed would be fetched here');
    } catch (error) {
      console.error('Error fetching YouTube feed:', error);
    }
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 DAY AGO';
    if (diffDays < 7) return `${diffDays} DAYS AGO`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Filter episodes based on search query
  const filteredEpisodes = episodes.filter(episode =>
    episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#/" className="cursor-pointer">
              <img 
                src={logoImage} 
                alt="The Career Playbook" 
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#/podcast" className="text-gray-900 transition-colors">Episodes</a>
            <a href="#/careers" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a>
            <a href="#/majors" className="text-gray-600 hover:text-gray-900 transition-colors">College Majors</a>
            <a href="#/universities" className="text-gray-600 hover:text-gray-900 transition-colors">Universities</a>
            <a href="#/find-your-path" className="text-gray-600 hover:text-gray-900 transition-colors">Find Your Path</a>
            <a href="#/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            <a href="#/auth" className="text-gray-600 hover:text-gray-900 transition-colors">Account</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <div className="inline-block neomorphic-icon-container-large mb-4">
              <Play className="h-12 w-12 text-purple-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            The Career Playbook Podcast
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Real career stories from professionals across different industries. Learn from their journeys, mistakes, and successes.
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('latest')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'latest' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Latest
              </button>
              <button
                onClick={() => setActiveTab('top')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'top' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Top
              </button>
              <button
                onClick={() => setActiveTab('discussions')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'discussions' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Discussions
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search episodes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full md:w-64"
              />
            </div>
          </div>

          {/* Episodes List */}
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              <p className="mt-4 text-gray-600">Loading episodes...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredEpisodes.map((episode) => (
                <Card key={episode.id} className="neomorphic-card hover:scale-[1.02] transition-transform duration-200">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Episode Info */}
                      <div className="flex-1 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors cursor-pointer">
                          {episode.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {episode.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(episode.publishedAt)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{episode.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span className="font-medium">{episode.author}</span>
                          </div>
                        </div>
                      </div>

                      {/* Video Thumbnail */}
                      <div className="relative md:w-80 h-48 md:h-auto">
                        <img
                          src={episode.thumbnail}
                          alt={episode.title}
                          className="w-full h-full object-cover rounded-r-lg md:rounded-r-lg md:rounded-l-none"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white transition-colors flex items-center justify-center">
                            <Play className="h-6 w-6 text-gray-800 ml-1" />
                          </button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                          {episode.duration}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredEpisodes.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No episodes found</h3>
              <p className="text-gray-500">Try adjusting your search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={logoImage} 
              alt="The Career Playbook" 
              className="h-12 w-auto"
            />
          </div>
          <p className="text-gray-400 mb-4">
            Empowering high school students to discover their future
          </p>
          <p className="text-gray-500 text-sm">
            &copy; 2025 The Career Playbook. All information is for educational purposes.
          </p>
        </div>
      </footer>

      <style jsx>{`
        .neomorphic-card {
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          box-shadow: 20px 20px 40px #d1d1d1, -20px -20px 40px #ffffff;
          border: none;
          border-radius: 20px;
        }
        
        .neomorphic-icon-container-large {
          width: 5rem;
          height: 5rem;
          background: linear-gradient(145deg, #f8f9fa, #e9ecef);
          box-shadow: inset 12px 12px 24px #dcdcdc, inset -12px -12px 24px #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
