import { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { updateSEO } from './utils/seo';
import { AllCareersPage } from './components/AllCareersPage';
import { CareerPathPage } from './components/CareerPathPage';
import { MajorPage } from './components/MajorPage';
import { CollegePage } from './components/CollegePage';
import { AboutPage } from './components/AboutPage';
import { CollegeMajorsPage } from './components/CollegeMajorsPage';
import { UniversitiesPage } from './components/UniversitiesPage';
import { PodcastPage } from './components/PodcastPage';
import { AuthPage } from './components/AuthPage';
import { FindYourPathPage } from './components/FindYourPathPage';

export default function App() {
  const [route, setRoute] = useState<{
    page: 'home' | 'careers' | 'career' | 'major' | 'college' | 'about' | 'majors' | 'universities' | 'podcast' | 'auth' | 'find-your-path';
    id?: string;
  }>({ page: 'home' });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      let newRoute = { page: 'home' as const };
      
      if (!hash || hash === '/') {
        newRoute = { page: 'home' };
      } else if (hash === '/careers') {
        newRoute = { page: 'careers' };
      } else if (hash === '/about') {
        newRoute = { page: 'about' };
      } else if (hash === '/majors') {
        newRoute = { page: 'majors' };
      } else if (hash === '/universities') {
        newRoute = { page: 'universities' };
      } else if (hash === '/podcast') {
        newRoute = { page: 'podcast' };
      } else if (hash === '/auth') {
        newRoute = { page: 'auth' };
      } else if (hash === '/find-your-path') {
        newRoute = { page: 'find-your-path' };
      } else if (hash.startsWith('/career/')) {
        const id = hash.replace('/career/', '');
        newRoute = { page: 'career', id };
      } else if (hash.startsWith('/major/')) {
        const id = hash.replace('/major/', '');
        newRoute = { page: 'major', id };
      } else if (hash.startsWith('/college/')) {
        const id = hash.replace('/college/', '');
        newRoute = { page: 'college', id };
      }

      setRoute(newRoute);

      // Scroll to top when route changes
      window.scrollTo(0, 0);
      
      // Update SEO based on current route
      updateSEO(newRoute.page);
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
      {route.page === 'find-your-path' && <FindYourPathPage />}
      {route.page === 'career' && route.id && <CareerPathPage careerId={route.id} />}
      {route.page === 'major' && route.id && <MajorPage majorId={route.id} />}
      {route.page === 'college' && route.id && <CollegePage collegeId={route.id} />}
    </>
  );
}
