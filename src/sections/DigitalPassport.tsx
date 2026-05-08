import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Calendar, 
  Trophy, 
  Activity, 
  TrendingUp, 
  Shield, 
  MapPin, 
  Star,
  ChevronRight,
  Award,
  Clock,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface CareerEvent {
  date: string;
  title: string;
  type: 'match' | 'achievement' | 'transfer' | 'injury' | 'training';
  description: string;
  stats?: string;
}

const careerTimeline: CareerEvent[] = [
  { date: 'Jan 2024', title: 'Youth Cup Final', type: 'match', description: 'Scored winning goal', stats: '1 Goal, 2 Assists' },
  { date: 'Dec 2023', title: 'Player of the Month', type: 'achievement', description: 'Best midfielder award' },
  { date: 'Nov 2023', title: 'Joined City Academy', type: 'transfer', description: 'Full scholarship' },
  { date: 'Oct 2023', title: 'Ankle Recovery', type: 'injury', description: 'Fully recovered', stats: 'Out: 3 weeks' },
  { date: 'Sep 2023', title: 'Elite Training Camp', type: 'training', description: 'National team prep' },
];

const performanceStats = [
  { label: 'Matches', value: '48', icon: Calendar, color: '#1DAF68' },
  { label: 'Goals', value: '23', icon: Trophy, color: '#FF6B35' },
  { label: 'Assists', value: '18', icon: Users, color: '#3B82F6' },
  { label: 'Rating', value: '8.4', icon: Star, color: '#8B5CF6' },
];

const achievements = [
  { title: 'Golden Boot', year: '2023', level: 'Regional' },
  { title: 'Best Midfielder', year: '2024', level: 'National' },
  { title: 'Youth Cup Winner', year: '2024', level: 'State' },
];

export default function DigitalPassport() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'timeline' | 'stats' | 'achievements'>('timeline');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.passport-header',
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

      // Passport card animation
      gsap.fromTo(
        '.passport-card',
        { opacity: 0, y: 60, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Features animation
      gsap.fromTo(
        '.passport-feature',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA animation
      gsap.fromTo(
        '.passport-cta',
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'match': return Trophy;
      case 'achievement': return Award;
      case 'transfer': return MapPin;
      case 'injury': return Activity;
      case 'training': return Clock;
      default: return Calendar;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'match': return '#1DAF68';
      case 'achievement': return '#FF6B35';
      case 'transfer': return '#3B82F6';
      case 'injury': return '#EF4444';
      case 'training': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#1DAF68]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="passport-header text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-[#1DAF68] uppercase tracking-wider mb-4">
            Digital Player Passport
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
            Your Football Identity For Life
          </h2>
          <p className="text-gray-600 text-lg">
            A comprehensive digital record of your entire football journey. From your first match to professional contracts — everything verified and documented.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Passport Preview Card */}
          <div className="passport-card" style={{ perspective: '1000px' }}>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-[#1DAF68] to-[#1D8B54] p-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">KA</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">Kwame Asante</h3>
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur px-2 py-1 rounded-full">
                        <Shield className="w-3 h-3 text-white" />
                        <span className="text-xs text-white font-medium">Verified</span>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm">Midfielder • 18 years</p>
                    <p className="text-white/60 text-xs">Accra, Ghana</p>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-100">
                {(['timeline', 'stats', 'achievements'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 text-sm font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? 'text-[#1DAF68] border-b-2 border-[#1DAF68]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 h-[400px] overflow-y-auto">
                {activeTab === 'timeline' && (
                  <div className="space-y-4">
                    {careerTimeline.map((event, index) => {
                      const Icon = getEventIcon(event.type);
                      const color = getEventColor(event.type);
                      return (
                        <div key={index} className="flex gap-4 group">
                          <div className="flex flex-col items-center">
                            <div 
                              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                              style={{ backgroundColor: `${color}15` }}
                            >
                              <Icon className="w-5 h-5" style={{ color }} />
                            </div>
                            {index < careerTimeline.length - 1 && (
                              <div className="w-0.5 h-full bg-gray-200 mt-2" />
                            )}
                          </div>
                          <div className="flex-1 pb-4">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs text-gray-400">{event.date}</span>
                              <span 
                                className="text-xs px-2 py-0.5 rounded-full capitalize"
                                style={{ backgroundColor: `${color}15`, color }}
                              >
                                {event.type}
                              </span>
                            </div>
                            <h4 className="font-semibold text-[#1A1A2E]">{event.title}</h4>
                            <p className="text-sm text-gray-600">{event.description}</p>
                            {event.stats && (
                              <p className="text-sm font-medium text-[#1DAF68] mt-1">{event.stats}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className="grid grid-cols-2 gap-4">
                    {performanceStats.map((stat, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-50 rounded-2xl p-4 text-center hover:shadow-lg transition-shadow"
                      >
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                          style={{ backgroundColor: `${stat.color}15` }}
                        >
                          <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                        </div>
                        <p className="text-3xl font-bold text-[#1A1A2E]">{stat.value}</p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                    <div className="col-span-2 bg-[#E8F7EF] rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#1A1A2E]">Performance Trend</span>
                        <TrendingUp className="w-5 h-5 text-[#1DAF68]" />
                      </div>
                      <div className="h-2 bg-white rounded-full overflow-hidden">
                        <div className="h-full w-[84%] bg-gradient-to-r from-[#1DAF68] to-[#1D8B54] rounded-full" />
                      </div>
                      <p className="text-xs text-gray-600 mt-2">+12% improvement this season</p>
                    </div>
                  </div>
                )}

                {activeTab === 'achievements' && (
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-4 bg-gradient-to-r from-[#FFF8E7] to-[#FFF5D6] rounded-2xl p-4"
                      >
                        <div className="w-14 h-14 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                          <Trophy className="w-7 h-7 text-[#FFD700]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#1A1A2E]">{achievement.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>{achievement.year}</span>
                            <span>•</span>
                            <span>{achievement.level}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    ))}
                    <div className="bg-gray-50 rounded-2xl p-4 text-center">
                      <p className="text-gray-500 text-sm">+ 12 more achievements</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <div className="passport-feature flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1DAF68]/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-7 h-7 text-[#1DAF68]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Career Timeline</h3>
                <p className="text-gray-600">
                  Complete chronological record of every match, transfer, training camp, and milestone in your career.
                </p>
              </div>
            </div>

            <div className="passport-feature flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                <Activity className="w-7 h-7 text-[#3B82F6]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Performance Analytics</h3>
                <p className="text-gray-600">
                  Track goals, assists, ratings, and performance trends over time. Visualize your growth.
                </p>
              </div>
            </div>

            <div className="passport-feature flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-[#FF6B35]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Achievement Gallery</h3>
                <p className="text-gray-600">
                  Showcase every trophy, award, and recognition. Build your legacy with verified accomplishments.
                </p>
              </div>
            </div>

            <div className="passport-feature flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Verified & Tamper-Proof</h3>
                <p className="text-gray-600">
                  All entries are verified by coaches, scouts, and academies. Your passport is your trusted football CV.
                </p>
              </div>
            </div>

            <Button className="passport-cta w-full bg-[#1DAF68] hover:bg-[#1D8B54] text-white font-semibold py-6 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1DAF68]/30">
              Create Your Digital Passport
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
