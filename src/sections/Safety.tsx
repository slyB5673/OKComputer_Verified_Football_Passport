import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, CheckCircle, Lock, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const badges = [
  { icon: Shield, label: 'FIFA Licensed', color: '#1DAF68' },
  { icon: CheckCircle, label: 'ID Verified', color: '#3B82F6' },
  { icon: Lock, label: 'Secure Platform', color: '#FF6B35' },
  { icon: Eye, label: 'Anti-Fraud Protected', color: '#8B5CF6' },
];

const stats = [
  { value: '100%', label: 'Agent Verification' },
  { value: '0', label: 'Fraud Tolerance' },
  { value: '24/7', label: 'Support Team' },
];

export default function Safety() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background gradient shift
      gsap.to('.safety-bg', {
        backgroundPosition: '100% 50%',
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Label
      gsap.fromTo(
        '.safety-label',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Heading
      gsap.fromTo(
        '.safety-heading',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Body
      gsap.fromTo(
        '.safety-body',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Badges float in with bounce
      gsap.fromTo(
        '.safety-badge',
        { opacity: 0, scale: 0, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats
      gsap.fromTo(
        '.safety-stat',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA
      gsap.fromTo(
        '.safety-cta',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Floating animation for badges
      gsap.to('.safety-badge', {
        y: -15,
        duration: 4,
        stagger: {
          each: 0.5,
          from: 'random',
        },
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div 
        className="safety-bg absolute inset-0 bg-gradient-to-br from-[#E8F7EF] via-white to-[#F0F9FF]"
        style={{ backgroundSize: '200% 200%', backgroundPosition: '0% 50%' }}
      />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#1DAF68]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#3B82F6]/5 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="safety-label inline-block text-sm font-semibold text-[#1DAF68] uppercase tracking-wider mb-4">
            Safety First
          </span>
          
          <h2 className="safety-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-6">
            Your Security Is Our Priority
          </h2>
          
          <p className="safety-body text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            We've built a comprehensive verification system to protect both players and agents. Every profile is verified, every agent is validated, and every interaction is monitored for your safety.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="safety-badge group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${badge.color}15` }}
                >
                  <badge.icon
                    className="w-8 h-8"
                    style={{ color: badge.color }}
                  />
                </div>
                <span className="text-sm font-semibold text-[#1A1A2E]">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="safety-stat text-center">
                <p className="text-4xl lg:text-5xl font-bold text-[#1DAF68] mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <Button className="safety-cta bg-[#1DAF68] hover:bg-[#1D8B54] text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1DAF68]/30 group">
            Learn About Our Safety Measures
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
