import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface CTASectionProps {
  onPlayerClick: () => void;
  onAgentClick: () => void;
}

export default function CTASection({ onPlayerClick, onAgentClick }: CTASectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background clip reveal
      gsap.fromTo(
        '.cta-bg',
        { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
        {
          clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)',
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Heading
      gsap.fromTo(
        '.cta-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Subtext
      gsap.fromTo(
        '.cta-subtext',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Buttons
      gsap.fromTo(
        '.cta-btn-primary',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'elastic.out(1, 0.5)',
          delay: 0.7,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.cta-btn-secondary',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.85,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 55%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Floating footballs
      gsap.to('.cta-football', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('.cta-football', {
        y: -20,
        duration: 4,
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
      {/* Background */}
      <div 
        className="cta-bg absolute inset-0 bg-gradient-to-br from-[#1DAF68] to-[#1D8B54]"
        style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)' }}
      />

      {/* Floating football decorations */}
      <div className="cta-football absolute top-20 left-[10%] w-16 h-16 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="white" />
          <path d="M50 15 L65 35 L50 50 L35 35 Z" fill="none" stroke="#1A1A2E" strokeWidth="3" />
          <path d="M50 50 L65 65 L50 85 L35 65 Z" fill="none" stroke="#1A1A2E" strokeWidth="3" />
          <path d="M20 35 L35 35" stroke="#1A1A2E" strokeWidth="3" />
          <path d="M65 35 L80 35" stroke="#1A1A2E" strokeWidth="3" />
          <path d="M20 65 L35 65" stroke="#1A1A2E" strokeWidth="3" />
          <path d="M65 65 L80 65" stroke="#1A1A2E" strokeWidth="3" />
        </svg>
      </div>
      <div className="cta-football absolute bottom-32 right-[15%] w-12 h-12 opacity-20" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="white" />
          <path d="M50 15 L65 35 L50 50 L35 35 Z" fill="none" stroke="#1A1A2E" strokeWidth="3" />
          <path d="M50 50 L65 65 L50 85 L35 65 Z" fill="none" stroke="#1A1A2E" strokeWidth="3" />
        </svg>
      </div>
      <div className="cta-football absolute top-40 right-[25%] w-10 h-10 opacity-15" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="white" />
          <path d="M50 15 L65 35 L50 50 L35 35 Z" fill="none" stroke="#1A1A2E" strokeWidth="3" />
        </svg>
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="cta-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready To Start Your Football Journey?
          </h2>
          
          <p className="cta-subtext text-white/90 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of players and agents already connecting on VerifyBall Africa. Your next opportunity is just a click away.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={onPlayerClick}
              className="cta-btn-primary bg-white text-[#1DAF68] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Create Player Profile
            </Button>
            <Button
              onClick={onAgentClick}
              variant="outline"
              className="cta-btn-secondary border-2 border-white text-white hover:bg-white hover:text-[#1DAF68] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Register as Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
