import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Episode } from '../data/mockData';

interface VideoTeaserCardProps {
  episode: Episode;
  onWatchClick: (id: string) => void;
}

export function VideoTeaserCard({ episode, onWatchClick }: VideoTeaserCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[9/16] overflow-hidden">
        <ImageWithFallback
          src={episode.thumbnail}
          alt={episode.guestName}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-white mb-1">{episode.guestName}</h3>
          <p className="text-white/90 text-sm mb-3">
            {episode.jobTitle} at {episode.company}
          </p>
          
          <button
            onClick={() => onWatchClick(episode.id)}
            className="flex items-center gap-2 bg-[#5D5FEF] hover:bg-[#5D5FEF]/90 text-white px-4 py-2 rounded transition-colors w-fit"
          >
            <Play size={16} fill="white" />
            Watch Full Episode
          </button>
        </div>

        {/* Play Icon (centered) */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
              <Play size={32} className="text-white" fill="white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
