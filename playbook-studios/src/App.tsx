import { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { AllCareersPage } from './components/AllCareersPage';
import { CareerPathPage } from './components/CareerPathPage';
import { MajorPage } from './components/MajorPage';
import { CollegePage } from './components/CollegePage';
import { AboutPage } from './components/AboutPage';
import { CollegeMajorsPage } from './components/CollegeMajorsPage';
import { UniversitiesPage } from './components/UniversitiesPage';
import { PodcastPage } from './components/PodcastPage';
import { AuthPage } from './components/AuthPage';

export default function App() {
  const [route, setRoute] = useState<{
    page: 'home' | 'careers' | 'career' | 'major' | 'college' | 'about' | 'majors' | 'universities' | 'podcast' | 'auth';
    id?: string;
  }>({ page: 'home' });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      
      if (!hash || hash === '/') {
        setRoute({ page: 'home' });
      } else if (hash === '/careers') {
        setRoute({ page: 'careers' });
      } else if (hash === '/about') {
        setRoute({ page: 'about' });
      } else if (hash === '/majors') {
        setRoute({ page: 'majors' });
      } else if (hash === '/universities') {
        setRoute({ page: 'universities' });
      } else if (hash === '/podcast') {
        setRoute({ page: 'podcast' });
      } else if (hash === '/auth') {
        setRoute({ page: 'auth' });
      } else if (hash.startsWith('/career/')) {
        const id = hash.replace('/career/', '');
        setRoute({ page: 'career', id });
      } else if (hash.startsWith('/major/')) {
        const id = hash.replace('/major/', '');
        setRoute({ page: 'major', id });
      } else if (hash.startsWith('/college/')) {
        const id = hash.replace('/college/', '');
        setRoute({ page: 'college', id });
      }

      // Scroll to top when route changes
      window.scrollTo(0, 0);
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {route.page === 'home' && <LandingPage />}
      {route.page === 'careers' && <AllCareersPage />}
      {route.page === 'about' && <AboutPage />}
      {route.page === 'majors' && <CollegeMajorsPage />}
      {route.page === 'universities' && <UniversitiesPage />}
      {route.page === 'podcast' && <PodcastPage />}
      {route.page === 'auth' && <AuthPage />}
      {route.page === 'career' && route.id && <CareerPathPage careerId={route.id} />}
      {route.page === 'major' && route.id && <MajorPage majorId={route.id} />}
      {route.page === 'college' && route.id && <CollegePage collegeId={route.id} />}
    </>
  );
}
