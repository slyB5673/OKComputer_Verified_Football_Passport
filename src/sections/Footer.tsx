import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  platform: [
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#' },
    { label: 'Success Stories', href: '#' },
  ],
  players: [
    { label: 'Create Profile', href: '#players' },
    { label: 'Upload Videos', href: '#' },
    { label: 'Safety Tips', href: '#' },
    { label: 'FAQs', href: '#' },
  ],
  agents: [
    { label: 'Register', href: '#agents' },
    { label: 'Browse Players', href: '#' },
    { label: 'Verification', href: '#' },
    { label: 'Contact Us', href: '#contact' },
  ],
  legal: [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Anti-Fraud Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top border gradient
      gsap.fromTo(
        '.footer-border',
        { width: '0%' },
        {
          width: '100%',
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Logo
      gsap.fromTo(
        '.footer-logo',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Newsletter
      gsap.fromTo(
        '.footer-newsletter',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.3,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Link columns
      gsap.fromTo(
        '.footer-column',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.4,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Social icons
      gsap.fromTo(
        '.footer-social',
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          delay: 0.8,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Bottom bar
      gsap.fromTo(
        '.footer-bottom',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          delay: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative w-full bg-[#1A1A2E] text-white overflow-hidden"
    >
      {/* Animated top border */}
      <div className="footer-border h-1 bg-gradient-to-r from-[#1DAF68] via-[#3B82F6] to-[#FF6B35]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
        {/* Top section - Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          {/* Logo */}
          <div className="footer-logo">
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src="/verifyball-logo.png" 
                alt="VerifyBall Africa"
                className="w-14 h-14 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-bold text-2xl">
                VerifyBall <span className="text-[#1DAF68]">Africa</span>
              </span>
            </a>
            <p className="mt-4 text-gray-400 max-w-sm">
              Connecting African football talents with global opportunities through a safe and verified platform.
            </p>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter w-full lg:w-auto">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest scouting news and success stories</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full px-6 py-5 min-w-[250px] focus:ring-[#1DAF68] focus:border-[#1DAF68]"
                required
              />
              <Button 
                type="submit"
                className="bg-[#1DAF68] hover:bg-[#1D8B54] text-white rounded-full px-6 py-5 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="footer-column">
            <h4 className="font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="font-semibold text-lg mb-4">For Players</h4>
            <ul className="space-y-3">
              {footerLinks.players.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="font-semibold text-lg mb-4">For Agents</h4>
            <ul className="space-y-3">
              {footerLinks.agents.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="footer-social w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1DAF68] transition-all duration-300 hover:scale-110 group"
            >
              <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 VerifyBall Africa. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with passion for African football
          </p>
        </div>
      </div>
    </footer>
  );
}
