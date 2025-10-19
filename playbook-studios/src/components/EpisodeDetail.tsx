import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { mockEpisodes } from '../data/mockData';
import type { Episode } from '../data/mockData';

interface EpisodeDetailProps {
  episodeId: string;
  onBack: () => void;
  onEpisodeClick: (id: string) => void;
}

export function EpisodeDetail({ episodeId, onBack, onEpisodeClick }: EpisodeDetailProps) {
  const episode = mockEpisodes.find((e) => e.id === episodeId);

  if (!episode) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B7280] mb-4">Episode not found</p>
          <Button onClick={onBack}>Go Back</Button>
        </div>
      </div>
    );
  }

  const relatedEpisodes = mockEpisodes
    .filter((e) => e.id !== episodeId && e.industry === episode.industry)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4 hover:bg-[#F9FAFB]"
        >
          <ChevronLeft size={20} className="mr-2" />
          Back to Episodes
        </Button>
      </div>

      {/* Video Section */}
      <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto aspect-video">
          <iframe
            src={episode.videoUrl}
            title={episode.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Episode Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="mb-2">{episode.title}</h1>
              <div className="flex items-center gap-3 text-[#6B7280]">
                <span>{episode.guestName}</span>
                <span>•</span>
                <span>{episode.jobTitle}</span>
                <span>•</span>
                <span>{episode.company}</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[#6B7280]">{episode.description}</p>
            </div>

            {/* Key Takeaways */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E4E6EB]">
              <h3 className="mb-4">Key Takeaways</h3>
              <ul className="space-y-3">
                {episode.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#2A64F8] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1A1A1A]">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E4E6EB] sticky top-24">
              <h4 className="mb-4">Episode Details</h4>
              
              <div className="space-y-4">
                <div>
                  <p className="text-[#6B7280] text-sm mb-1">Industry</p>
                  <p className="text-[#1A1A1A]">{episode.industry}</p>
                </div>
                
                <div>
                  <p className="text-[#6B7280] text-sm mb-1">Salary Range</p>
                  <p className="text-[#1A1A1A]">{episode.salaryRange}</p>
                </div>
                
                <div>
                  <p className="text-[#6B7280] text-sm mb-1">Education Level</p>
                  <p className="text-[#1A1A1A]">{episode.educationLevel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Interviews */}
        {relatedEpisodes.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8">Related Interviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedEpisodes.map((relatedEpisode) => (
                <div
                  key={relatedEpisode.id}
                  onClick={() => onEpisodeClick(relatedEpisode.id)}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={relatedEpisode.thumbnail}
                      alt={relatedEpisode.guestName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="mb-1 line-clamp-1">{relatedEpisode.guestName}</h4>
                    <p className="text-[#6B7280] text-sm line-clamp-2">
                      {relatedEpisode.jobTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
