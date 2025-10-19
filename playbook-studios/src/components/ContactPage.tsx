import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-4">Get in Touch</h1>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Have a question, feedback, or interested in partnering with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-[#E4E6EB] p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="text-[#5D5FEF]" size={24} />
              <h2>Send us a message</h2>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-green-600" size={32} />
                </div>
                <h3 className="mb-2">Message sent!</h3>
                <p className="text-[#6B7280]">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1 bg-white border-[#E4E6EB]"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1 bg-white border-[#E4E6EB]"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what's on your mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="mt-1 bg-white border-[#E4E6EB] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#5D5FEF] hover:bg-[#5D5FEF]/90"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mail className="text-[#5D5FEF]" size={24} />
                <h3>Email Us</h3>
              </div>
              <p className="text-[#6B7280] mb-4">
                For partnerships, collaborations, or media inquiries, reach out at:
              </p>
              <a
                href="mailto:hello@theplaybookstudios.com"
                className="text-[#5D5FEF] hover:underline inline-block"
              >
                hello@theplaybookstudios.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#5D5FEF]/10 to-[#5D5FEF]/5 rounded-lg p-8">
              <h3 className="mb-4">Why reach out?</h3>
              <ul className="space-y-3 text-[#6B7280]">
                <li className="flex items-start gap-2">
                  <span className="text-[#5D5FEF] mt-1">•</span>
                  <span>Partner with us to feature your story</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5D5FEF] mt-1">•</span>
                  <span>Collaborate on educational initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5D5FEF] mt-1">•</span>
                  <span>Sponsor career exploration content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5D5FEF] mt-1">•</span>
                  <span>Share feedback or suggestions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-[#E4E6EB] p-6">
              <h4 className="mb-3">Response Time</h4>
              <p className="text-[#6B7280] text-sm">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
