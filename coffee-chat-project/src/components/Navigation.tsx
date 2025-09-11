import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, User, LogIn } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Career Paths', href: '#career-paths' },
  { name: 'Majors', href: '#majors' },
  { name: 'Colleges', href: '#colleges' },
  { name: 'Interviews', href: '#interviews' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Resources', href: '#resources' },
  { name: 'Assessment', href: '#assessment' },
  { name: 'Jobs', href: '#jobs' },
  { name: 'Salaries', href: '#salaries' },
  { name: 'Contact', href: '#contact' },
];

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const section = href.replace('#', '');
    onSectionChange(section);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <button
            onClick={() => onSectionChange('home')}
            className="mr-6 flex items-center space-x-2"
          >
            <div className="h-6 w-6 rounded bg-primary"></div>
            <span className="font-medium">Coffee Chat Project</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-between space-x-2">
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`transition-colors hover:text-foreground/80 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-foreground'
                    : 'text-foreground/60'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              onClick={() => onSectionChange('login')}
              className="flex items-center space-x-2"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Button>
            <Button onClick={() => onSectionChange('signup')}>Get Started</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="px-7">
                <button
                  onClick={() => handleNavClick('#home')}
                  className="flex items-center space-x-2"
                >
                  <div className="h-6 w-6 rounded bg-primary"></div>
                  <span className="font-medium">Coffee Chat Project</span>
                </button>
              </div>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`flex w-full items-center py-2 text-left transition-colors hover:text-foreground/80 ${
                        activeSection === item.href.replace('#', '')
                          ? 'text-foreground'
                          : 'text-foreground/60'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="flex flex-col space-y-2 pt-4">
                    <Button
                      variant="ghost"
                      onClick={() => handleNavClick('#login')}
                      className="justify-start"
                    >
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Button>
                    <Button onClick={() => onSectionChange('signup')}>
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}