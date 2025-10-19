import { Target, Lightbulb, Heart, Users, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#5D5FEF]/20 to-[#5D5FEF]/10 rounded-full flex items-center justify-center">
              <Users className="text-[#5D5FEF]" size={40} />
            </div>
          </div>
          <h1 className="mb-6">About Us</h1>
          <p className="text-[#6B7280] text-lg">
            We're on a mission to help every student discover their path to a fulfilling career.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-[#E4E6EB] p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5D5FEF]/20 to-[#5D5FEF]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="text-[#5D5FEF]" size={32} />
              </div>
              <h2>Our Mission</h2>
            </div>
            <p className="text-[#6B7280] leading-relaxed">
              Every student deserves to feel confident about their future. We started The Career Playbook to help high schoolers discover careers that align with who they are — not just what they think they "should" do. Through free, personalized guidance, we help students find clarity, direction, and motivation for what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-[#E4E6EB] p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5D5FEF]/20 to-[#5D5FEF]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb className="text-[#5D5FEF]" size={32} />
              </div>
              <h2>The Problem</h2>
            </div>
            <p className="text-[#6B7280] leading-relaxed">
              Choosing a career path is one of the biggest decisions students face — but most don't get the support they need early enough. Many schools have limited counseling resources, and online advice is often generic or overwhelming. That's where we come in.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-[#E4E6EB] p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5D5FEF]/20 to-[#5D5FEF]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="text-[#5D5FEF]" size={32} />
              </div>
              <h2>Who We Are</h2>
            </div>
            <div className="space-y-4 text-[#6B7280] leading-relaxed">
              <p>
                Starting your career is scary. We've been there.
              </p>
              <p>
                When we were in high school, no one told us how to turn curiosity into a career. We didn't have mentors in our dream industries. We didn't know what doors to knock on — or even which ones existed. We learned everything the hard way, and we promised ourselves that future students shouldn't have to.
              </p>
              <p>
                We met at the University of Southern California, where we bonded over a shared belief that education should open doors — not leave students guessing about what's next. Years later, after navigating two very different but equally winding career paths, we decided to build something that would make that belief real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Together Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-[#E4E6EB] p-8 sm:p-12 text-center">
            <h2 className="mb-4">
              Together, we founded The Career Playbook to make career discovery accessible, human, and real.
            </h2>
            <p className="text-[#6B7280] leading-relaxed">
              Because students shouldn't need insider connections or luck to figure out what's possible — just a little guidance from people who've been there.
            </p>
          </div>
        </div>
      </section>

      {/* Our Founders Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Our Founders</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tylor Inaba */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E4E6EB] p-8">
              <div className="flex items-center gap-4 mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwbWFufGVufDF8fHx8MTc2MDkwMTk2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Tylor Inaba"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg">Tylor Inaba</h3>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A66C2] hover:text-[#004182] transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                  <p className="text-[#6B7280] text-sm">Director of Strategic Finance at ProsperOps</p>
                </div>
              </div>
              <p className="text-[#6B7280] leading-relaxed">
                Tylor began his career in finance with no connections, no roadmap, and a lot of rejection. After years of persistence, he broke into investment banking at Goldman Sachs — and later went on to work in venture capital at Accel and lead Finance and Strategy at multiple unicorn startups. Today, as Director of Finance and Strategy at ProsperOps, Tylor knows firsthand how transformative early guidance can be. His journey fuels his belief that every student, no matter where they start, deserves access to real-world career insight and opportunity.
              </p>
            </div>

            {/* Kenneth Shih */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E4E6EB] p-8">
              <div className="flex items-center gap-4 mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1706025090996-63717544be2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwbWFufGVufDF8fHx8MTc2MDkwNTg4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Kenneth Shih"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg">Kenneth Shih</h3>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A66C2] hover:text-[#004182] transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                  <p className="text-[#6B7280] text-sm">Senior Product Manager at LinkedIn</p>
                </div>
              </div>
              <p className="text-[#6B7280] leading-relaxed">
                Kenneth is now a Senior Product Manager at LinkedIn, where he's driven by the company's mission of helping people find their dream careers and achieve economic empowerment. But his path wasn't straightforward either. As the son of immigrants with no network in tech, Kenneth struggled to find direction and support while trying to break into the industry. That experience shaped his purpose: to make sure the next generation doesn't have to navigate those same challenges alone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
