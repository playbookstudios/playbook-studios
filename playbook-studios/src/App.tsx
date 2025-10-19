import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { EpisodesPage } from './components/EpisodesPage';
import { EpisodeDetail } from './components/EpisodeDetail';
import { AuthModal } from './components/AuthModal';
import { UserProfile } from './components/UserProfile';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import './styles/globals.css';

type Page = 'home' | 'episodes' | 'episode' | 'about' | 'contact' | 'profile';
type AuthType = 'login' | 'signup' | null;

interface User {
  name: string;
  email: string;
  phone: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<string | null>(null);
  const [showAuth, setShowAuth] = useState<AuthType>(null);
  const [user, setUser] = useState<User | null>(null);
  const [likedVideoIds, setLikedVideoIds] = useState<string[]>(['1', '3', '5']); // Mock liked videos

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedEpisodeId]);

  const handleNavigate = (page: string, episodeId?: string) => {
    if (page === 'episode' && episodeId) {
      setSelectedEpisodeId(episodeId);
      setCurrentPage('episode');
    } else {
      setCurrentPage(page as Page);
      setSelectedEpisodeId(null);
    }
  };

  const handleAuthSubmit = (data: { name?: string; email: string; phone?: string; password: string }) => {
    // Mock authentication
    setUser({
      name: data.name || 'User',
      email: data.email,
      phone: data.phone || '',
    });
    setShowAuth(null);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const handleSwitchAuthType = () => {
    setShowAuth(showAuth === 'login' ? 'signup' : 'login');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onShowAuth={(type) => setShowAuth(type)}
        isLoggedIn={!!user}
        userName={user?.name}
      />

      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      
      {currentPage === 'episodes' && (
        <EpisodesPage onEpisodeClick={(id) => handleNavigate('episode', id)} />
      )}
      
      {currentPage === 'episode' && selectedEpisodeId && (
        <EpisodeDetail
          episodeId={selectedEpisodeId}
          onBack={() => setCurrentPage('episodes')}
          onEpisodeClick={(id) => handleNavigate('episode', id)}
        />
      )}
      
      {currentPage === 'about' && <AboutPage />}
      
      {currentPage === 'contact' && <ContactPage />}
      
      {currentPage === 'profile' && user && (
        <UserProfile
          userName={user.name}
          userEmail={user.email}
          likedVideoIds={likedVideoIds}
          onLogout={handleLogout}
          onVideoClick={(id) => handleNavigate('episode', id)}
        />
      )}

      {showAuth && (
        <AuthModal
          type={showAuth}
          onClose={() => setShowAuth(null)}
          onSubmit={handleAuthSubmit}
          onSwitchType={handleSwitchAuthType}
        />
      )}
    </div>
  );
}
