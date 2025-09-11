import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, Building } from 'lucide-react';

export function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@coffeechatproject.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation St, San Francisco, CA 94107",
      description: "Open for scheduled meetings"
    }
  ];

  const faqs = [
    {
      question: "How does the Coffee Chat Project work?",
      answer: "We connect students with industry professionals for informal conversations about careers, providing guidance, insights, and networking opportunities."
    },
    {
      question: "Is the platform free to use?",
      answer: "Basic features are completely free. We offer premium memberships with additional resources and priority matching."
    },
    {
      question: "How do you match students with mentors?",
      answer: "Our algorithm considers industry, experience level, career goals, and availability to create meaningful connections."
    },
    {
      question: "Can employers post jobs directly?",
      answer: "Yes, we partner with companies to post exclusive opportunities for our community members."
    }
  ];

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have questions about our platform? Want to partner with us? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">I am a...</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="recent-grad">Recent Graduate</SelectItem>
                    <SelectItem value="professional">Working Professional</SelectItem>
                    <SelectItem value="employer">Employer/Recruiter</SelectItem>
                    <SelectItem value="educator">Educator</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="What can we help you with?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="mentorship">Become a Mentor</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="feedback">Feedback/Suggestions</SelectItem>
                    <SelectItem value="press">Press/Media</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                />
              </div>

              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>For Professionals</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Join our community of mentors and make a real impact on the next generation of professionals.
            </p>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span>Flexible time commitment</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span>Build your professional network</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span>Give back to your industry</span>
              </li>
            </ul>
            <Button className="w-full">Become a Mentor</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building className="h-5 w-5" />
              <span>For Companies</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Partner with us to access top talent and build your employer brand with the next generation.
            </p>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span>Access to pre-screened candidates</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span>Employer branding opportunities</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span>Diversity & inclusion initiatives</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">Partner With Us</Button>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="pb-6 border-b last:border-b-0">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}