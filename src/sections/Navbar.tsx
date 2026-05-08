import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onRegisterClick: () => void;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Players', href: '#players' },
  { label: 'Agents', href: '#agents' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-3 group"
          >
            <img 
              src="/verifyball-logo.png" 
              alt="VerifyBall Africa"
              className="w-12 h-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
            <span className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-[#1A1A2E]' : 'text-[#1A1A2E]'
            }`}>
              VerifyBall <span className="text-[#1DAF68]">Africa</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-[#1DAF68] group ${
                  isScrolled ? 'text-[#1A1A2E]' : 'text-[#1A1A2E]'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#1DAF68] transition-all duration-250 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-[#1A1A2E]' : 'text-[#1A1A2E]'
              }`}
            >
              Sign In
            </Button>
            <Button
              onClick={onRegisterClick}
              className="bg-[#1DAF68] hover:bg-[#1D8B54] text-white font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1DAF68]/30"
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1A1A2E]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1A1A2E]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="block px-4 py-3 text-[#1A1A2E] font-medium rounded-xl hover:bg-[#E8F7EF] hover:text-[#1DAF68] transition-all duration-200"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 space-y-2">
              <Button variant="outline" className="w-full justify-center">
                Sign In
              </Button>
              <Button 
                onClick={onRegisterClick}
                className="w-full justify-center bg-[#1DAF68] hover:bg-[#1D8B54] text-white"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
