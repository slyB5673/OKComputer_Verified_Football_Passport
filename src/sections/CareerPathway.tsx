import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Upload, 
  Star, 
  Users, 
  Building2, 
  Plane, 
  CheckCircle2,
  ArrowRight,
  Lock,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface PathwayStep {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  requirements: string[];
  unlocked: boolean;
}

const pathwaySteps: PathwayStep[] = [
  {
    number: 1,
    title: 'Upload Your Video',
    description: 'Showcase your skills with match footage and training clips. Our AI analyzes your performance.',
    icon: Upload,
    color: '#1DAF68',
    bgColor: '#E8F7EF',
    requirements: ['Minimum 3 video clips', 'Match footage preferred', 'Under 5 minutes each'],
    unlocked: true,
  },
  {
    number: 2,
    title: 'Get Your Rating',
    description: 'Receive a professional assessment from verified scouts. Know your strengths and areas to improve.',
    icon: Star,
    color: '#FF6B35',
    bgColor: '#FFF4EF',
    requirements: ['Video review by scout', 'Skill assessment', 'Performance report'],
    unlocked: true,
  },
  {
    number: 3,
    title: 'Join Local Trials',
    description: 'Get invited to trials and showcases in your region. Compete and get noticed by academy coaches.',
    icon: Users,
    color: '#3B82F6',
    bgColor: '#EFF6FF',
    requirements: ['Rating 6.5+ required', 'Physical fitness test', 'Trial invitation'],
    unlocked: false,
  },
  {
    number: 4,
    title: 'Academy Recommendation',
    description: 'Top performers receive direct recommendations to partner academies and development programs.',
    icon: Building2,
    color: '#8B5CF6',
    bgColor: '#F5F3FF',
    requirements: ['Trial performance review', 'Coach recommendation', 'Academy scout approval'],
    unlocked: false,
  },
  {
    number: 5,
    title: 'Connect with Agent',
    description: 'Verified agents reach out with opportunities. Negotiate contracts and plan your professional career.',
    icon: Plane,
    color: '#1DAF68',
    bgColor: '#E8F7EF',
    requirements: ['Academy graduation', 'Professional readiness', 'FIFA agent verification'],
    unlocked: false,
  },
];

export default function CareerPathway() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [completedSteps] = useState<number[]>([1, 2]);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.pathway-header',
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

      // Steps animation with stagger
      gsap.fromTo(
        '.pathway-step',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Connector lines animation
      gsap.fromTo(
        '.pathway-connector',
        { height: 0 },
        {
          height: '100%',
          duration: 1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA animation
      gsap.fromTo(
        '.pathway-cta',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleStep = (stepNumber: number) => {
    setActiveStep(activeStep === stepNumber ? null : stepNumber);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1DAF68]/20 to-transparent" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#1DAF68]/5 rounded-full blur-3xl" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="pathway-header text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-[#1DAF68] uppercase tracking-wider mb-4">
            Structured Career Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
            Not Just a Platform — A Career System
          </h2>
          <p className="text-gray-600 text-lg">
            We guide you step-by-step from local talent to professional player. Every stage has clear goals, requirements, and support.
          </p>
        </div>

        {/* Pathway Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 lg:left-12 top-0 bottom-0 w-1 bg-gray-200 rounded-full">
              <div 
                className="pathway-connector absolute top-0 left-0 w-full bg-gradient-to-b from-[#1DAF68] to-[#1D8B54] rounded-full"
                style={{ height: `${(completedSteps.length / pathwaySteps.length) * 100}%` }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {pathwaySteps.map((step) => {
                const isCompleted = completedSteps.includes(step.number);
                const isUnlocked = step.unlocked || completedSteps.includes(step.number - 1);
                const isActive = activeStep === step.number;

                return (
                  <div
                    key={step.number}
                    className={`pathway-step relative pl-20 lg:pl-28 ${
                      !isUnlocked ? 'opacity-60' : ''
                    }`}
                  >
                    {/* Step Number/Icon */}
                    <div 
                      className={`absolute left-0 w-16 h-16 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isCompleted 
                          ? 'bg-[#1DAF68] shadow-lg shadow-[#1DAF68]/30' 
                          : isUnlocked 
                            ? 'bg-white shadow-lg border-2 border-[#1DAF68]' 
                            : 'bg-gray-100 border-2 border-gray-200'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                      ) : !isUnlocked ? (
                        <Lock className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400" />
                      ) : (
                        <step.icon 
                          className="w-7 h-7 lg:w-9 lg:h-9" 
                          style={{ color: step.color }} 
                        />
                      )}
                    </div>

                    {/* Content Card */}
                    <div 
                      onClick={() => isUnlocked && toggleStep(step.number)}
                      className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'border-[#1DAF68] shadow-xl' 
                          : 'border-transparent hover:shadow-xl hover:border-gray-100'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span 
                              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                              style={{ backgroundColor: step.bgColor, color: step.color }}
                            >
                              {step.number}
                            </span>
                            <h3 className="text-xl font-bold text-[#1A1A2E]">{step.title}</h3>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                        <ArrowRight 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            isActive ? 'rotate-90' : ''
                          }`} 
                        />
                      </div>

                      {/* Expanded Requirements */}
                      {isActive && (
                        <div className="mt-4 pt-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                          <p className="text-sm font-semibold text-[#1A1A2E] mb-3">Requirements:</p>
                          <div className="flex flex-wrap gap-2">
                            {step.requirements.map((req, i) => (
                              <span 
                                key={i}
                                className="text-sm px-3 py-1 rounded-full"
                                style={{ backgroundColor: step.bgColor, color: step.color }}
                              >
                                {req}
                              </span>
                            ))}
                          </div>
                          {isUnlocked && !isCompleted && (
                            <Button 
                              className="mt-4 w-full sm:w-auto"
                              style={{ backgroundColor: step.color }}
                            >
                              <Play className="w-4 h-4 mr-2" />
                              Start Step {step.number}
                            </Button>
                          )}
                        </div>
                      )}

                      {/* Status Badge */}
                      <div className="mt-4 flex items-center gap-2">
                        {isCompleted ? (
                          <span className="text-sm text-[#1DAF68] font-medium flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            Completed
                          </span>
                        ) : isUnlocked ? (
                          <span 
                            className="text-sm font-medium flex items-center gap-1"
                            style={{ color: step.color }}
                          >
                            <Play className="w-4 h-4" />
                            Ready to Start
                          </span>
                        ) : (
                          <span className="text-sm text-gray-400 font-medium flex items-center gap-1">
                            <Lock className="w-4 h-4" />
                            Complete Previous Step
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="pathway-cta max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-[#1A1A2E] to-[#16213E] rounded-3xl p-8 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Your Progress</h3>
                <p className="text-white/70">
                  You've completed {completedSteps.length} of {pathwaySteps.length} steps. Keep going!
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-3xl font-bold text-[#1DAF68]">
                    {Math.round((completedSteps.length / pathwaySteps.length) * 100)}%
                  </p>
                  <p className="text-sm text-white/70">Complete</p>
                </div>
                <div className="w-20 h-20 relative">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="#1DAF68"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(completedSteps.length / pathwaySteps.length) * 226} 226`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
