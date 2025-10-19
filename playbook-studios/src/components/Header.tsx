import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onShowAuth: (type: 'login' | 'signup') => void;
  isLoggedIn: boolean;
  userName?: string;
}

export function Header({ currentPage, onNavigate, onShowAuth, isLoggedIn, userName }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Episodes', value: 'episodes' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center">
              <span className="text-[#0B0B0B]" style={{ fontWeight: 700 }}>THE PLAYBOOK</span>
              <span className="text-[#5D5FEF]" style={{ fontWeight: 700 }}>STUDIOS</span>
            </div>
          </button>

          {/* Desktop Navigation and Auth - Right Aligned */}
          <div className="hidden md:flex items-center gap-8">
            {/* Desktop Navigation */}
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => onNavigate(item.value)}
                  className={`transition-colors ${
                    currentPage === item.value
                      ? 'text-[#5D5FEF]'
                      : 'text-[#1A1A1A] hover:text-[#5D5FEF]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Auth Buttons / User Profile */}
            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <Button
                  onClick={() => onNavigate('profile')}
                  className="bg-[#5D5FEF] hover:bg-[#5D5FEF]/90 px-6 rounded-full"
                >
                  {userName || 'Profile'}
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => onShowAuth('signup')}
                    className="border-2 border-[#0B0B0B] text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white px-6 rounded-full"
                  >
                    Sign up
                  </Button>
                  <Button
                    onClick={() => onShowAuth('login')}
                    className="bg-[#5D5FEF] hover:bg-[#4A4CD6] text-white px-6 rounded-full"
                  >
                    Log in
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E4E6EB]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 transition-colors ${
                    currentPage === item.value
                      ? 'text-[#5D5FEF]'
                      : 'text-[#1A1A1A] hover:text-[#5D5FEF]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-[#E4E6EB]">
                {isLoggedIn ? (
                  <Button
                    onClick={() => {
                      onNavigate('profile');
                      setIsMobileMenuOpen(false);
                    }}
                    className="bg-[#5D5FEF] hover:bg-[#5D5FEF]/90 w-full rounded-full"
                  >
                    {userName || 'Profile'}
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => {
                        onShowAuth('signup');
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full border-2 border-[#0B0B0B] text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white rounded-full"
                    >
                      Sign up
                    </Button>
                    <Button
                      onClick={() => {
                        onShowAuth('login');
                        setIsMobileMenuOpen(false);
                      }}
                      className="bg-[#5D5FEF] hover:bg-[#4A4CD6] text-white w-full rounded-full"
                    >
                      Log in
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
