import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  'Free profile creation',
  'Unlimited video uploads',
  'Direct agent messaging',
  'Career progress tracking',
  'Verified opportunity alerts',
];

interface ForPlayersProps {
  onRegisterClick: () => void;
}

export default function ForPlayers({ onRegisterClick }: ForPlayersProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label
      gsap.fromTo(
        '.players-label',
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
        '.players-heading',
        { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        {
          opacity: 1,
          clipPath: 'inset(0 0% 0 0)',
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
        '.players-body',
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

      // Benefits
      gsap.fromTo(
        '.players-benefit',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.09,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA
      gsap.fromTo(
        '.players-cta',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image diagonal reveal
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
        {
          opacity: 1,
          clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 15% 100%)',
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Parallax
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
        y: -80,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="players"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="relative z-10">
            <span className="players-label inline-block text-sm font-semibold text-[#1DAF68] uppercase tracking-wider mb-4">
              For Players
            </span>
            
            <h2 className="players-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-6 leading-tight">
              Showcase Your Talent To The World
            </h2>
            
            <p className="players-body text-gray-600 leading-relaxed mb-8">
              Create a professional profile that highlights your skills, achievements, and potential. Upload unlimited video clips of your best performances and let scouts discover what makes you special.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="players-benefit flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#1DAF68] flex items-center justify-center transform group-hover:rotate-[360deg] transition-transform duration-500">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:translate-x-2 group-hover:text-[#1DAF68] transition-all duration-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              onClick={onRegisterClick}
              className="players-cta bg-[#1DAF68] hover:bg-[#1D8B54] text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1DAF68]/30 group"
            >
              Create Free Profile
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className="relative lg:h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img
                src="/players-section.jpg"
                alt="Football player showcasing skills"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
