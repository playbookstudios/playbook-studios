import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Heart, Target, Users, Lightbulb, Linkedin } from 'lucide-react';
import logoImage from '../assets/images/career-playbook-logo-v2.png';
import kennethHeadshot from '../assets/images/kenneth-headshot.jpeg';
import tylorHeadshot from '../assets/images/tylor-headshot.jpeg';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="The Career Playbook" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#/careers" className="text-gray-600 hover:text-gray-900 transition-colors">Explore Careers</a>
            <a href="#/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <div className="inline-block neomorphic-icon-container-large mb-4">
              <Users className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're on a mission to help every student discover their path to a fulfilling career.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="neomorphic-card mb-12">
            <CardContent className="p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="neomorphic-icon-container">
                  <Target className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="text-4xl">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every student deserves to feel confident about their future. We started The Career Playbook to help high schoolers discover careers that align with who they are — not just what they think they "should" do. Through free, personalized guidance, we help students find clarity, direction, and motivation for what comes next.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <Card className="neomorphic-card mb-12">
            <CardContent className="p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="neomorphic-icon-container">
                  <Lightbulb className="h-8 w-8 text-yellow-500" />
                </div>
                <h2 className="text-4xl">The Problem</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Choosing a career path is one of the biggest decisions students face — but most don't get the support they need early enough. Many schools have limited counseling resources, and online advice is often generic or overwhelming. That's where we come in.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <Card className="neomorphic-card mb-12">
            <CardContent className="p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="neomorphic-icon-container">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <h2 className="text-4xl">Who We Are</h2>
              </div>
              
              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Starting your career is scary. We've been there.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  When we were in high school, no one told us how to turn curiosity into a career. We didn't have mentors in our dream industries. We didn't know what doors to knock on — or even which ones existed. We learned everything the hard way, and we promised ourselves that future students shouldn't have to.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  We met at the University of Southern California, where we bonded over a shared belief that education should open doors — not leave students guessing about what's next. Years later, after navigating two very different but equally winding career paths, we decided to build something that would make that belief real.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mission Statement */}
          <Card className="neomorphic-card mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-100">
            <CardContent className="p-8 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  Together, we founded <span className="text-blue-600 font-extrabold">The Career Playbook</span> to make career discovery accessible, human, and real.
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  Because students shouldn't need <span className="font-bold text-gray-900">insider connections</span> or <span className="font-bold text-gray-900">luck</span> to figure out what's possible — just a little <span className="font-bold text-blue-600">guidance from people who've been there</span>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-center text-gray-800">Our Founders</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tylor Inaba */}
            <Card className="neomorphic-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={tylorHeadshot} 
                    alt="Tylor Inaba" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold">Tylor Inaba</h3>
                      <button 
                        onClick={() => window.open('https://www.linkedin.com/in/tylor-inaba-2b005862/', '_blank')}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        title="Connect on LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-blue-600 font-medium">Director of Strategic Finance at ProsperOps</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Tylor began his career in finance with no connections, no roadmap, and a lot of rejection. After years of persistence, he broke into investment banking at Goldman Sachs — and later went on to work in venture capital at Accel and lead Finance and Strategy at multiple unicorn startups. Today, as Director of Finance and Strategy at ProsperOps, Tylor knows firsthand how transformative early guidance can be. His journey fuels his belief that every student, no matter where they start, deserves access to real-world career insight and opportunity.
                </p>
              </CardContent>
            </Card>

            {/* Kenneth Shih */}
            <Card className="neomorphic-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={kennethHeadshot} 
                    alt="Kenneth Shih" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold">Kenneth Shih</h3>
                      <button 
                        onClick={() => window.open('https://www.linkedin.com/in/kenneth-shih-ks1/', '_blank')}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        title="Connect on LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-blue-600 font-medium">Senior Product Manager at LinkedIn</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Kenneth is now a Senior Product Manager at LinkedIn, where he's driven by the company's mission of helping people find their dream careers and achieve economic empowerment. But his path wasn't straightforward either. As the son of immigrants with no network in tech, Kenneth struggled to find direction and support while trying to break into the industry. That experience shaped his purpose: to make sure the next generation doesn't have to navigate those same challenges alone.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="neomorphic-card p-12">
            <h2 className="text-4xl mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore careers, discover your path, and take the next step toward your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="neomorphic-button-primary"
                onClick={() => window.location.hash = '#/careers'}
              >
                Explore Careers
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.hash = '#/'}
              >
                Back to Home
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={logoImage} 
              alt="The Career Playbook" 
              className="h-12 w-auto"
            />
          </div>
          <p className="text-gray-400 mb-4">
            Empowering high school students to discover their future
          </p>
          <p className="text-gray-500 text-sm">
            &copy; 2025 The Career Playbook. All information is for educational purposes.
          </p>
        </div>
      </footer>

      <style jsx>{`
        .neomorphic-card {
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          box-shadow: 20px 20px 40px #d1d1d1, -20px -20px 40px #ffffff;
          border: none;
          border-radius: 20px;
        }
        
        .neomorphic-icon-container {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(145deg, #f8f9fa, #e9ecef);
          box-shadow: inset 8px 8px 16px #dcdcdc, inset -8px -8px 16px #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .neomorphic-icon-container-large {
          width: 5rem;
          height: 5rem;
          background: linear-gradient(145deg, #f8f9fa, #e9ecef);
          box-shadow: inset 12px 12px 24px #dcdcdc, inset -12px -12px 24px #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .neomorphic-button-primary {
          background: linear-gradient(145deg, #667eea, #764ba2);
          color: white;
          box-shadow: 8px 8px 16px #5a6fd8, -8px -8px 16px #7c5fae;
          border: none;
          border-radius: 12px;
        }
        
        .neomorphic-button-primary:hover {
          box-shadow: 4px 4px 8px #5a6fd8, -4px -4px 8px #7c5fae;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
