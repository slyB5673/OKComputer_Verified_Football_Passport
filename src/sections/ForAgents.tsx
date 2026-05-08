import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  'Verified player profiles',
  'Advanced search filters',
  'Direct player contact',
  'Video performance library',
  'Fraud protection system',
];

interface ForAgentsProps {
  onRegisterClick: () => void;
}

export default function ForAgents({ onRegisterClick }: ForAgentsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal (mirrored diagonal)
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
        {
          opacity: 1,
          clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)',
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Label
      gsap.fromTo(
        '.agents-label',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Heading
      gsap.fromTo(
        '.agents-heading',
        { opacity: 0, clipPath: 'inset(0 0 0 100%)' },
        {
          opacity: 1,
          clipPath: 'inset(0 0 0 0%)',
          duration: 0.7,
          delay: 0.45,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Body
      gsap.fromTo(
        '.agents-body',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.65,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Benefits from right
      gsap.fromTo(
        '.agents-benefit',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.09,
          delay: 0.85,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA
      gsap.fromTo(
        '.agents-cta',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)',
          delay: 1.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
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
      id="agents"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative lg:h-[600px] hidden lg:block order-2 lg:order-1"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img
                src="/agents-section.jpg"
                alt="Coach with young player"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F8FAFC]/20" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 order-1 lg:order-2">
            <span className="agents-label inline-block text-sm font-semibold text-[#1DAF68] uppercase tracking-wider mb-4">
              For Agents & Scouts
            </span>
            
            <h2 className="agents-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-6 leading-tight">
              Discover The Next Generation Of Talent
            </h2>
            
            <p className="agents-body text-gray-600 leading-relaxed mb-8">
              Access a curated database of promising young footballers from across Africa. Our verification system ensures you're connecting with genuine talent, saving you time and reducing risk.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="agents-benefit flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center transform group-hover:rotate-[360deg] transition-transform duration-500">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:translate-x-2 group-hover:text-[#3B82F6] transition-all duration-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              onClick={onRegisterClick}
              className="agents-cta bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/30 group"
            >
              Register as Agent
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
