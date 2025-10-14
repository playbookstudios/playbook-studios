// SEO utility functions for dynamic page titles and meta descriptions

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

// SEO data for different pages
const seoData: Record<string, SEOData> = {
  'home': {
    title: 'The Career Playbook - Discover Your Dream Career | Career Guidance for High School Students',
    description: 'Empowering high school students to discover their future through personalized career guidance, college major recommendations, and university matching. Explore 500+ careers, 100+ majors, and 50+ universities.',
    keywords: 'career guidance, high school students, college majors, universities, career exploration, job search, career planning, education planning'
  },
  'podcast': {
    title: 'Career Episodes - Real Stories from Professionals | The Career Playbook',
    description: 'Watch real career stories from professionals across different industries. Learn from their journeys, mistakes, and successes to discover your own path.',
    keywords: 'career stories, professional interviews, career advice, job interviews, career inspiration, real career paths'
  },
  'careers': {
    title: 'Explore 500+ Career Paths | Career Guide for Students | The Career Playbook',
    description: 'Browse hundreds of career paths with detailed information including salary ranges, education requirements, job outlook, and growth opportunities.',
    keywords: 'career paths, job search, career options, salary information, job outlook, career planning, professional careers'
  },
  'majors': {
    title: 'College Majors Guide - Find Your Perfect Major | The Career Playbook',
    description: 'Explore college majors and discover which one aligns with your career goals and interests. Get detailed information about core classes and career outcomes.',
    keywords: 'college majors, university majors, academic programs, higher education, degree programs, major selection'
  },
  'universities': {
    title: 'University Guide - Find the Right College for You | The Career Playbook',
    description: 'Discover universities and colleges that match your academic interests and career goals. Compare costs, programs, and campus life.',
    keywords: 'universities, colleges, higher education, college search, university rankings, campus life, college admissions'
  },
  'find-your-path': {
    title: 'Find Your Career Path - Personalized Career Assessment | The Career Playbook',
    description: 'Take our personalized survey to discover career paths, majors, and universities that align with your interests, skills, and goals.',
    keywords: 'career assessment, career quiz, career test, personalized career guidance, career matching, career discovery'
  },
  'about': {
    title: 'About Us - Meet the Team Behind The Career Playbook',
    description: 'Learn about our mission to empower high school students with career guidance. Meet our founders and discover why we created this platform.',
    keywords: 'about us, career guidance mission, educational platform, student support, career counseling'
  },
  'auth': {
    title: 'Create Account or Sign In | The Career Playbook',
    description: 'Create your free account to save your career preferences and get personalized recommendations.',
    keywords: 'sign up, login, create account, user account, personalized recommendations'
  }
};

// Function to update page title and meta description
export function updateSEO(page: string, customData?: Partial<SEOData>) {
  const data = { ...seoData[page], ...customData };
  
  // Update title
  document.title = data.title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', data.description);
  }
  
  // Update meta keywords
  if (data.keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', data.keywords);
    }
  }
  
  // Update Open Graph title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', data.title);
  }
  
  // Update Open Graph description
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', data.description);
  }
  
  // Update Twitter title
  const twitterTitle = document.querySelector('meta[property="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', data.title);
  }
  
  // Update Twitter description
  const twitterDescription = document.querySelector('meta[property="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', data.description);
  }
  
  // Update canonical URL
  if (data.canonical) {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', data.canonical);
    }
  }
}

// Function to generate structured data for specific pages
export function generateStructuredData(type: 'WebPage' | 'EducationalOrganization' | 'Person', data: any) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };
  
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(baseData);
  document.head.appendChild(script);
}

// Function to add breadcrumb structured data
export function addBreadcrumbStructuredData(breadcrumbs: Array<{name: string, url: string}>) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(breadcrumbData);
  document.head.appendChild(script);
}

// Function to add FAQ structured data
export function addFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(faqData);
  document.head.appendChild(script);
}

// Function to add Article structured data for career pages
export function addArticleStructuredData(articleData: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "author": {
      "@type": "Organization",
      "name": articleData.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Career Playbook",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thecareerplaybook.com/logo.png"
      }
    },
    "datePublished": articleData.datePublished,
    "dateModified": articleData.dateModified || articleData.datePublished,
    "image": articleData.image || "https://thecareerplaybook.com/og-image.png",
    "url": articleData.url
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(articleStructuredData);
  document.head.appendChild(script);
}

