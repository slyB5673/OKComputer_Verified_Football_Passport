import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Kwame Asante',
    position: 'Midfielder',
    club: 'FC Porto Academy',
    image: '/testimonial-1.jpg',
    quote: 'VerifyBall Africa connected me with the right agent who believed in my potential. Within 3 months, I was training with FC Porto Academy. The platform made everything possible.',
  },
  {
    name: 'Amara Diallo',
    position: 'Forward',
    club: 'Olympique Lyon',
    image: '/testimonial-2.jpg',
    quote: 'I uploaded my videos and started receiving offers within weeks. The platform made it easy to showcase my skills to clubs across Europe. Dreams do come true!',
  },
  {
    name: 'Samuel Okonkwo',
    position: 'Defender',
    club: 'Manchester City Academy',
    image: '/testimonial-3.jpg',
    quote: 'The verification system gave my family peace of mind. We knew every agent reaching out was legitimate and FIFA-licensed. Safety was our priority.',
  },
];

export default function SuccessStories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        '.stories-header',
        { opacity: 0, y: 30 },
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

      // Progress bar
      gsap.fromTo(
        '.stories-progress',
        { width: '0%' },
        {
          width: '100%',
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // First card
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1DAF68]/20 to-transparent" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="stories-header text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-[#1DAF68] uppercase tracking-wider mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E]">
            Players Who Made It
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="stories-progress h-full bg-gradient-to-r from-[#1DAF68] to-[#3B82F6] rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-card max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-gradient-to-br from-[#F8FAFC] to-white rounded-3xl p-8 lg:p-12 shadow-xl">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Quote icon */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#1DAF68] rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                "{current.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#1DAF68]/10 flex items-center justify-center">
                  <span className="text-[#1DAF68] font-bold text-lg">
                    {current.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[#1A1A2E]">{current.name}</p>
                  <p className="text-gray-500">
                    {current.position} • {current.club}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border-2 border-[#1DAF68] text-[#1DAF68] hover:bg-[#1DAF68] hover:text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border-2 border-[#1DAF68] text-[#1DAF68] hover:bg-[#1DAF68] hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
                <span className="ml-4 text-gray-500">
                  {currentIndex + 1} / {testimonials.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#1DAF68] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
