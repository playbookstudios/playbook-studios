import { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { AllCareersPage } from './components/AllCareersPage';
import { CareerPathPage } from './components/CareerPathPage';
import { MajorPage } from './components/MajorPage';
import { CollegePage } from './components/CollegePage';

export default function App() {
  const [route, setRoute] = useState<{
    page: 'home' | 'careers' | 'career' | 'major' | 'college';
    id?: string;
  }>({ page: 'home' });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      
      if (!hash || hash === '/') {
        setRoute({ page: 'home' });
      } else if (hash === '/careers') {
        setRoute({ page: 'careers' });
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
      {route.page === 'career' && route.id && <CareerPathPage careerId={route.id} />}
      {route.page === 'major' && route.id && <MajorPage majorId={route.id} />}
      {route.page === 'college' && route.id && <CollegePage collegeId={route.id} />}
    </>
  );
}
