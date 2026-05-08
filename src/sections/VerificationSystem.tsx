import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  CheckCircle, 
  BadgeCheck, 
  Award,
  Users,
  Building2,
  Search,
  FileCheck,
  Lock,
  Eye,
  Star,
  TrendingUp
} from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

interface VerificationBadge {
  icon: React.ElementType;
  title: string;
  description: string;
  verifiedBy: string;
  color: string;
  bgColor: string;
}

const playerBadges: VerificationBadge[] = [
  {
    icon: Users,
    title: 'Coach Verified',
    description: 'Endorsed by certified football coaches',
    verifiedBy: 'Licensed Coaches',
    color: '#1DAF68',
    bgColor: '#E8F7EF',
  },
  {
    icon: Search,
    title: 'Scout Verified',
    description: 'Recognized by professional scouts',
    verifiedBy: 'FIFA Scouts',
    color: '#3B82F6',
    bgColor: '#EFF6FF',
  },
  {
    icon: Building2,
    title: 'Academy Verified',
    description: 'Affiliated with registered academies',
    verifiedBy: 'Partner Academies',
    color: '#FF6B35',
    bgColor: '#FFF4EF',
  },
];

const agentBadges: VerificationBadge[] = [
  {
    icon: FileCheck,
    title: 'FIFA Licensed',
    description: 'Valid FIFA agent license verified',
    verifiedBy: 'FIFA Database',
    color: '#8B5CF6',
    bgColor: '#F5F3FF',
  },
  {
    icon: Shield,
    title: 'ID Verified',
    description: 'Government ID and background check passed',
    verifiedBy: 'KYC Process',
    color: '#1DAF68',
    bgColor: '#E8F7EF',
  },
  {
    icon: Award,
    title: 'Premium Agent',
    description: 'Top-rated with proven track record',
    verifiedBy: 'Player Reviews',
    color: '#FFD700',
    bgColor: '#FFFBE6',
  },
];

const verificationProcess = [
  {
    step: 1,
    title: 'Document Upload',
    description: 'Submit licenses, IDs, and credentials',
    icon: FileCheck,
  },
  {
    step: 2,
    title: 'Background Check',
    description: 'We verify all documents with authorities',
    icon: Search,
  },
  {
    step: 3,
    title: 'Badge Awarded',
    description: 'Verified badge appears on your profile',
    icon: BadgeCheck,
  },
];

export default function VerificationSystem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'players' | 'agents'>('players');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.verify-header',
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

      // Badge cards animation
      gsap.fromTo(
        '.verify-badge',
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Process steps animation
      gsap.fromTo(
        '.verify-process',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        '.verify-stat',
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentBadges = activeTab === 'players' ? playerBadges : agentBadges;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1DAF68]/20 to-transparent" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#1DAF68]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#3B82F6]/5 rounded-full blur-3xl" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="verify-header text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-[#1DAF68] uppercase tracking-wider mb-4">
            Verification System
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
            Trust Through Verification
          </h2>
          <p className="text-gray-600 text-lg">
            Every profile is verified. Every badge is earned. Zero tolerance for fraud — that's our promise.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('players')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'players'
                ? 'bg-[#1DAF68] text-white shadow-lg shadow-[#1DAF68]/30'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Player Verification
          </button>
          <button
            onClick={() => setActiveTab('agents')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'agents'
                ? 'bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/30'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Agent Verification
          </button>
        </div>

        {/* Verification Badges Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {currentBadges.map((badge, index) => (
            <div
              key={index}
              className="verify-badge group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Badge Header */}
              <div className="flex items-center justify-between mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: badge.bgColor }}
                >
                  <badge.icon className="w-8 h-8" style={{ color: badge.color }} />
                </div>
                <div 
                  className="flex items-center gap-1 px-3 py-1 rounded-full"
                  style={{ backgroundColor: badge.bgColor }}
                >
                  <CheckCircle className="w-4 h-4" style={{ color: badge.color }} />
                  <span className="text-xs font-semibold" style={{ color: badge.color }}>
                    Verified
                  </span>
                </div>
              </div>

              {/* Badge Content */}
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-2 group-hover:text-[#1DAF68] transition-colors">
                {badge.title}
              </h3>
              <p className="text-gray-600 mb-4">{badge.description}</p>
              
              {/* Verified By */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-400 mb-1">Verified by</p>
                <p className="text-sm font-semibold" style={{ color: badge.color }}>
                  {badge.verifiedBy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Verification Process */}
          <div>
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">
              How Verification Works
            </h3>
            <div className="space-y-4">
              {verificationProcess.map((process, index) => (
                <div
                  key={index}
                  className="verify-process flex gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1DAF68]/10 flex items-center justify-center flex-shrink-0">
                    <process.icon className="w-6 h-6 text-[#1DAF68]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-full bg-[#1DAF68] text-white text-xs flex items-center justify-center font-bold">
                        {process.step}
                      </span>
                      <h4 className="font-bold text-[#1A1A2E]">{process.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Stats */}
          <div>
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">
              Trust Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="verify-stat bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-14 h-14 rounded-full bg-[#1DAF68]/10 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-7 h-7 text-[#1DAF68]" />
                </div>
                <p className="text-3xl font-bold text-[#1A1A2E]">100%</p>
                <p className="text-sm text-gray-600">Agents Verified</p>
              </div>
              <div className="verify-stat bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-14 h-14 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-7 h-7 text-[#3B82F6]" />
                </div>
                <p className="text-3xl font-bold text-[#1A1A2E]">50K+</p>
                <p className="text-sm text-gray-600">Profiles Checked</p>
              </div>
              <div className="verify-stat bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-14 h-14 rounded-full bg-[#FF6B35]/10 flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-7 h-7 text-[#FF6B35]" />
                </div>
                <p className="text-3xl font-bold text-[#1A1A2E]">0</p>
                <p className="text-sm text-gray-600">Fraud Cases</p>
              </div>
              <div className="verify-stat bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-14 h-14 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-7 h-7 text-[#8B5CF6]" />
                </div>
                <p className="text-3xl font-bold text-[#1A1A2E]">4.9</p>
                <p className="text-sm text-gray-600">Trust Score</p>
              </div>
            </div>

            {/* Trust Banner */}
            <div className="mt-6 bg-gradient-to-r from-[#1A1A2E] to-[#16213E] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-[#1DAF68]" />
                </div>
                <div>
                  <p className="font-bold text-lg">Fraud Prevention Guarantee</p>
                  <p className="text-white/70 text-sm">
                    If you encounter any verified fraud, we offer full protection and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
