import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserPlus, Video, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Profile',
    description: 'Sign up as a player, upload your details, playing position, and career history. Build your digital football identity.',
    color: '#1DAF68',
  },
  {
    icon: Video,
    title: 'Upload Your Videos',
    description: 'Showcase your skills with video clips of your best performances. Let your talent speak for itself.',
    color: '#3B82F6',
  },
  {
    icon: Globe,
    title: 'Get Discovered',
    description: 'Connect with verified FIFA agents and scouts. Receive offers and take your career to the next level.',
    color: '#FF6B35',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations
      gsap.fromTo(
        '.hiw-label',
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

      gsap.fromTo(
        '.hiw-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.hiw-subtext',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards 3D unfold animation
      const cards = cardsRef.current?.querySelectorAll('.hiw-card');
      if (cards) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 60,
            rotateY: -15,
            transformPerspective: 1000,
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Icon bounce animations
      gsap.fromTo(
        '.hiw-icon',
        { scale: 0 },
        {
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1DAF68]/20 to-transparent" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="hiw-label inline-block text-sm font-semibold text-[#1DAF68] uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="hiw-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
            Your Path To Professional Football
          </h2>
          <p className="hiw-subtext text-gray-600 text-lg">
            Simple steps to showcase your talent and connect with opportunities
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
          style={{ perspective: '1200px' }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="hiw-card group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
            >
              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#1DAF68] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className="hiw-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${step.color}15` }}
              >
                <step.icon
                  className="w-8 h-8"
                  style={{ color: step.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#1DAF68] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Hover border effect */}
              <div
                className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#1DAF68] transition-colors duration-300 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
