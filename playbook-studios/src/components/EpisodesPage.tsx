import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { mockEpisodes } from '../data/mockData';
import type { Episode } from '../data/mockData';

interface EpisodesPageProps {
  onEpisodeClick: (id: string) => void;
}

export function EpisodesPage({ onEpisodeClick }: EpisodesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [salaryFilter, setSalaryFilter] = useState('all');
  const [educationFilter, setEducationFilter] = useState('all');

  const industries = ['all', ...Array.from(new Set(mockEpisodes.map(e => e.industry)))];
  const salaryRanges = ['all', ...Array.from(new Set(mockEpisodes.map(e => e.salaryRange)))];
  const educationLevels = ['all', ...Array.from(new Set(mockEpisodes.map(e => e.educationLevel)))];

  const filteredEpisodes = mockEpisodes.filter((episode) => {
    const matchesSearch =
      searchQuery === '' ||
      episode.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      episode.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      episode.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      episode.industry.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesIndustry = industryFilter === 'all' || episode.industry === industryFilter;
    const matchesSalary = salaryFilter === 'all' || episode.salaryRange === salaryFilter;
    const matchesEducation = educationFilter === 'all' || episode.educationLevel === educationFilter;

    return matchesSearch && matchesIndustry && matchesSalary && matchesEducation;
  });

  const handleClearFilters = () => {
    setSearchQuery('');
    setIndustryFilter('all');
    setSalaryFilter('all');
    setEducationFilter('all');
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" size={20} />
            <Input
              type="text"
              placeholder="Search for careers or guests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 bg-white border-[#E4E6EB] text-lg"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Select value={industryFilter} onValueChange={setIndustryFilter}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              {industries.slice(1).map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={salaryFilter} onValueChange={setSalaryFilter}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Salary Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Salaries</SelectItem>
              {salaryRanges.slice(1).map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={educationFilter} onValueChange={setEducationFilter}>
            <SelectTrigger className="w-[200px] bg-white">
              <SelectValue placeholder="Education Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Education Levels</SelectItem>
              {educationLevels.slice(1).map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(searchQuery || industryFilter !== 'all' || salaryFilter !== 'all' || educationFilter !== 'all') && (
            <Button
              variant="outline"
              onClick={handleClearFilters}
              className="border-[#E4E6EB]"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Results Count */}
        <p className="text-[#6B7280] text-center mb-8">
          {filteredEpisodes.length} {filteredEpisodes.length === 1 ? 'episode' : 'episodes'} found
        </p>

        {/* Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEpisodes.map((episode) => (
            <EpisodeCard
              key={episode.id}
              episode={episode}
              onClick={() => onEpisodeClick(episode.id)}
            />
          ))}
        </div>

        {filteredEpisodes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#6B7280]">No episodes found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

interface EpisodeCardProps {
  episode: Episode;
  onClick: () => void;
}

function EpisodeCard({ episode, onClick }: EpisodeCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden">
        <ImageWithFallback
          src={episode.thumbnail}
          alt={episode.guestName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
      </div>
      
      <div className="p-4">
        <h3 className="mb-1 line-clamp-1">{episode.guestName}</h3>
        <p className="text-[#6B7280] text-sm mb-3 line-clamp-2">
          {episode.jobTitle} • {episode.company}
        </p>
        
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className="px-2 py-1 bg-[#F9FAFB] text-[#5D5FEF] text-xs rounded">
            {episode.industry}
          </span>
          <span className="px-2 py-1 bg-[#F9FAFB] text-[#6B7280] text-xs rounded">
            {episode.salaryRange}
          </span>
        </div>

        <button className="text-[#5D5FEF] hover:text-[#5D5FEF]/80 transition-colors">
          Watch Interview →
        </button>
      </div>
    </div>
  );
}
