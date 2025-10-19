import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-[#F9FAFB] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="mb-6">
          Discover real career stories. Learn from those who've done it.
        </h1>
        
        <p className="text-[#6B7280] max-w-2xl mx-auto mb-8">
          Watch bite-sized career interviews designed for students exploring their future.
        </p>

        <Button
          onClick={onExploreClick}
          className="bg-[#5D5FEF] hover:bg-[#5D5FEF]/90 px-8 py-6 h-auto group"
        >
          Explore Careers
          <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
