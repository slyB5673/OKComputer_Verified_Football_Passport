import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Verified FIFA agent network',
  'Secure video upload system',
  'Anti-fraud protection measures',
  'Direct club connections',
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label typewriter effect
      gsap.fromTo(
        '.about-label',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Heading words reveal
      gsap.fromTo(
        '.about-heading',
        { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
        {
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          duration: 0.7,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Body paragraphs
      gsap.fromTo(
        '.about-body',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Features
      gsap.fromTo(
        '.about-feature',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA Button
      gsap.fromTo(
        '.about-cta',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, clipPath: 'circle(0% at 50% 50%)' },
        {
          opacity: 1,
          clipPath: 'circle(100% at 50% 50%)',
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Parallax effect on image
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
        y: -60,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Decorative dots */}
      <div className="absolute bottom-20 right-20 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {[...Array(5)].map((_, i) =>
            [...Array(5)].map((_, j) => (
              <circle
                key={`${i}-${j}`}
                cx={10 + j * 20}
                cy={10 + i * 20}
                r="3"
                fill="#1DAF68"
              />
            ))
          )}
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about-player.jpg"
                alt="Young football player"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/30 to-transparent" />
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
              <p className="text-4xl font-bold text-[#1DAF68]">98%</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="about-label inline-block text-sm font-semibold text-[#1DAF68] uppercase tracking-wider mb-4">
              About Us
            </span>
            
            <h2 className="about-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-6 leading-tight">
              Bridging The Gap Between Talent & Opportunity
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="about-body text-gray-600 leading-relaxed">
                VerifyBall Africa is a revolutionary platform designed to connect young African football talents with verified FIFA agents, scouts, and professional clubs worldwide. We understand the challenges aspiring footballers face in getting discovered and the risks of fraud in the scouting industry.
              </p>
              <p className="about-body text-gray-600 leading-relaxed">
                Our mission is to create a safe, transparent, and efficient ecosystem where players can showcase their skills, and agents can discover the next generation of football stars with confidence.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="about-feature flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#1DAF68]/10 flex items-center justify-center group-hover:bg-[#1DAF68] transition-colors duration-300">
                    <Check className="w-4 h-4 text-[#1DAF68] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-[#1DAF68] transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button className="about-cta bg-[#1DAF68] hover:bg-[#1D8B54] text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1DAF68]/30 group">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
