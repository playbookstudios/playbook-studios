import { User, Mail, LogOut, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { mockEpisodes } from '../data/mockData';

interface UserProfileProps {
  userName: string;
  userEmail: string;
  likedVideoIds: string[];
  onLogout: () => void;
  onVideoClick: (id: string) => void;
}

export function UserProfile({ userName, userEmail, likedVideoIds, onLogout, onVideoClick }: UserProfileProps) {
  const likedVideos = mockEpisodes.filter((episode) => likedVideoIds.includes(episode.id));

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-[#E4E6EB] p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-[#5D5FEF] flex items-center justify-center">
                <User size={40} className="text-white" />
              </div>
              <div>
                <h1 className="mb-1">{userName}</h1>
                <div className="flex items-center gap-2 text-[#6B7280]">
                  <Mail size={16} />
                  <span>{userEmail}</span>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={onLogout}
              className="border-[#E4E6EB] hover:bg-red-50 hover:text-red-600 hover:border-red-200"
            >
              <LogOut size={16} className="mr-2" />
              Log Out
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#F9FAFB] rounded-lg p-4">
              <p className="text-[#6B7280] text-sm mb-1">Total Watched</p>
              <p className="text-2xl">{likedVideoIds.length}</p>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg p-4">
              <p className="text-[#6B7280] text-sm mb-1">Liked Videos</p>
              <p className="text-2xl">{likedVideoIds.length}</p>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg p-4">
              <p className="text-[#6B7280] text-sm mb-1">Career Interests</p>
              <p className="text-2xl">
                {new Set(likedVideos.map((v) => v.industry)).size}
              </p>
            </div>
          </div>
        </div>

        {/* Liked Videos Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Heart className="text-[#5D5FEF]" size={24} fill="#5D5FEF" />
            <h2>Liked Videos</h2>
          </div>

          {likedVideos.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-[#E4E6EB] p-12 text-center">
              <Heart size={48} className="text-[#E4E6EB] mx-auto mb-4" />
              <p className="text-[#6B7280] mb-4">You haven't liked any videos yet</p>
              <p className="text-[#6B7280] text-sm">
                Start exploring episodes to build your personalized career library
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {likedVideos.map((episode) => (
                <div
                  key={episode.id}
                  onClick={() => onVideoClick(episode.id)}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={episode.thumbnail}
                      alt={episode.guestName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <div className="bg-white/90 rounded-full p-1.5">
                        <Heart size={16} className="text-[#5D5FEF]" fill="#5D5FEF" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="mb-1 line-clamp-1">{episode.guestName}</h4>
                    <p className="text-[#6B7280] text-sm line-clamp-2">
                      {episode.jobTitle} • {episode.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
