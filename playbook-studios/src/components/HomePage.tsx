import { FullScreenVideoTeaser } from './FullScreenVideoTeaser';
import { mockEpisodes } from '../data/mockData';
import logo from 'figma:asset/fe5d14ca0d42277717ccea576595a51a3a0f1285.png';

interface HomePageProps {
  onNavigate: (page: string, episodeId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const handleWatchClick = (episodeId: string) => {
    onNavigate('episode', episodeId);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Intro Section */}
      <div className="pt-8 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <img 
            src={logo} 
            alt="The Career Playbook" 
            className="w-full max-w-[280px] mx-auto mb-10 object-contain"
          />
          <p className="text-xl md:text-2xl text-[#6B7280] mb-12" style={{ fontWeight: 500 }}>
            The Playbook For Your Dream Career
          </p>
          <button
            onClick={() => onNavigate('episodes')}
            className="bg-[#5D5FEF] hover:bg-[#4A4CD6] text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
            style={{ fontWeight: 600 }}
          >
            Explore Careers
          </button>
        </div>
      </div>

      {/* Vertical Scrolling Video Feed */}
      <div className="pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Video Teasers */}
          <div className="space-y-12">
            {mockEpisodes.slice(0, 8).map((episode, index) => (
              <FullScreenVideoTeaser
                key={episode.id}
                episode={episode}
                onWatchClick={handleWatchClick}
                isActive={index === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-5xl md:text-6xl" style={{ fontWeight: 700 }}>
            Find your playbook.
          </h1>
          <p className="text-[#6B7280] text-xl mb-10 max-w-2xl mx-auto">
            Explore hundreds of career paths and hear from professionals who've walked the path you're considering.
          </p>
          <button
            onClick={() => onNavigate('episodes')}
            className="bg-[#5D5FEF] hover:bg-[#4A4CD6] text-white px-10 py-5 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg"
            style={{ fontWeight: 600 }}
          >
            Explore Careers
          </button>
        </div>
      </div>
    </div>
  );
}
