import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { CareerPathsPage } from './components/CareerPathsPage';
import { MajorsPage } from './components/MajorsPage';
import { CollegesPage } from './components/CollegesPage';
import { InterviewsPage } from './components/InterviewsPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { ResourcesPage } from './components/ResourcesPage';
import { AssessmentPage } from './components/AssessmentPage';
import { JobsPage } from './components/JobsPage';
import { SalariesPage } from './components/SalariesPage';
import { ContactPage } from './components/ContactPage';
import { LoginPage } from './components/LoginPage';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    // Handle dynamic routing for specific items
    if (activeSection.startsWith('career-paths-')) {
      const careerPathId = activeSection.replace('career-paths-', '');
      return <CareerPathsPage onSectionChange={setActiveSection} selectedCareerPath={careerPathId} />;
    }
    if (activeSection.startsWith('majors-')) {
      const majorId = activeSection.replace('majors-', '');
      return <MajorsPage onSectionChange={setActiveSection} selectedMajor={majorId} />;
    }
    if (activeSection.startsWith('colleges-')) {
      const collegeId = activeSection.replace('colleges-', '');
      return <CollegesPage onSectionChange={setActiveSection} selectedCollege={collegeId} />;
    }

    switch (activeSection) {
      case 'home':
        return <HomePage onSectionChange={setActiveSection} />;
      case 'about':
        return <AboutPage onSectionChange={setActiveSection} />;
      case 'career-paths':
        return <CareerPathsPage onSectionChange={setActiveSection} />;
      case 'majors':
        return <MajorsPage onSectionChange={setActiveSection} />;
      case 'colleges':
        return <CollegesPage onSectionChange={setActiveSection} />;
      case 'interviews':
        return <InterviewsPage />;
      case 'case-studies':
        return <CaseStudiesPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'assessment':
        return <AssessmentPage />;
      case 'jobs':
        return <JobsPage />;
      case 'salaries':
        return <SalariesPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
      case 'signup':
        return <LoginPage onSectionChange={setActiveSection} />;
      default:
        return <HomePage onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        {renderSection()}
      </main>
    </div>
  );
}