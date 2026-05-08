import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Users, Shield, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Headline animation
      tl.fromTo(
        '.hero-line',
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 0.8, stagger: 0.15 }
      );

      // Subheadline
      tl.fromTo(
        '.hero-subheadline',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      );

      // CTA Buttons
      tl.fromTo(
        '.hero-cta-primary',
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.7, ease: 'elastic.out(1, 0.5)' },
        '-=0.2'
      );

      tl.fromTo(
        '.hero-cta-secondary',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.4'
      );

      // Hero Image
      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: 100, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 1 },
        '-=0.8'
      );

      // Stats
      tl.fromTo(
        '.stat-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
        '-=0.5'
      );

      // Floating shapes
      gsap.to('.floating-shape-1', {
        y: -20,
        rotation: 15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.floating-shape-2', {
        y: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });

      // Scroll-triggered parallax
      gsap.to('.hero-content', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
        y: -80,
        opacity: 0.3,
      });

      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
        y: 30,
        scale: 1.05,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#E8F7EF] via-white to-[#F0F9FF]"
    >
      {/* Background Decorative Shapes */}
      <div className="floating-shape-1 absolute top-20 left-10 w-64 h-64 bg-[#1DAF68]/10 rounded-full blur-3xl" />
      <div className="floating-shape-2 absolute bottom-20 right-1/3 w-48 h-48 bg-[#3B82F6]/10 rounded-full blur-3xl" />
      
      {/* Blob Shape */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#1DAF68]/5 blob" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-7rem)]">
          {/* Content */}
          <div ref={headlineRef} className="hero-content relative z-10">
            <div className="space-y-2 mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#1A1A2E] leading-tight">
                <span className="hero-line block">Connect With</span>
                <span className="hero-line block text-[#1DAF68]">Top Football</span>
                <span className="hero-line block">Scouts & Agents</span>
              </h1>
            </div>

            <p className="hero-subheadline text-lg sm:text-xl text-gray-600 max-w-xl mb-8 leading-relaxed">
              The trusted platform linking young African football talents with verified FIFA agents and clubs worldwide. Upload your skills, get discovered, advance your career safely.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                onClick={onRegisterClick}
                className="hero-cta-primary bg-[#1DAF68] hover:bg-[#1D8B54] text-white font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#1DAF68]/30 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="hero-cta-secondary border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap gap-8">
              <div className="stat-item flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1DAF68]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#1DAF68]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1A1A2E]">5,000+</p>
                  <p className="text-sm text-gray-500">Players Connected</p>
                </div>
              </div>
              <div className="stat-item flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1A1A2E]">200+</p>
                  <p className="text-sm text-gray-500">Verified Agents</p>
                </div>
              </div>
              <div className="stat-item flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1A1A2E]">50+</p>
                  <p className="text-sm text-gray-500">Partner Clubs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div ref={imageRef} className="relative lg:h-[600px] flex items-center justify-center">
            {/* Decorative shapes behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[90%] h-[90%] bg-[#1DAF68]/10 rounded-[3rem] transform rotate-6" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[85%] h-[85%] bg-[#E8F7EF] rounded-[2.5rem] transform -rotate-3" />
            </div>
            
            {/* Main Image */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src="/hero-player.jpg"
                alt="Football player in action"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-bounce">
                <div className="w-10 h-10 rounded-full bg-[#1DAF68] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A2E]">FIFA Licensed</p>
                  <p className="text-xs text-gray-500">Verified Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
