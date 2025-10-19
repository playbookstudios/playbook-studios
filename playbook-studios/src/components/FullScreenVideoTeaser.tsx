import { useState, useRef, useEffect } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Episode } from '../data/mockData';

interface FullScreenVideoTeaserProps {
  episode: Episode;
  onWatchClick: (id: string) => void;
  isActive?: boolean;
}

export function FullScreenVideoTeaser({ episode, onWatchClick, isActive = false }: FullScreenVideoTeaserProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.75 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={videoRef}
      className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg"
      style={{ aspectRatio: '9/16' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={episode.thumbnail}
          alt={episode.guestName}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isInView ? 'scale-100' : 'scale-105'
          }`}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6">
        <div className="mb-6">
          {/* Guest Info */}
          <div className="mb-4">
            <h3 className="text-white mb-1 text-2xl" style={{ fontWeight: 700 }}>
              {episode.guestName}
            </h3>
            <p className="text-white/90 text-lg mb-2">
              {episode.jobTitle}
            </p>
            <p className="text-white/80">
              {episode.company}
            </p>
          </div>

          {/* Industry Badge */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/30">
              {episode.industry}
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/30">
              {episode.salaryRange}
            </span>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onWatchClick(episode.id)}
            className="group flex items-center gap-2 bg-[#5D5FEF] hover:bg-[#4A4CD6] text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full justify-center"
          >
            <Play size={18} fill="white" />
            <span style={{ fontWeight: 600 }}>Watch Full Interview</span>
          </button>
        </div>
      </div>

      {/* Mute Toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      {/* Hover Play Icon */}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 transform scale-100 animate-pulse">
            <Play size={40} className="text-white" fill="white" />
          </div>
        </div>
      )}
    </div>
  );
}
