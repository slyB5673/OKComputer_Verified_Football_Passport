import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import HowItWorks from './sections/HowItWorks';
import DigitalPassport from './sections/DigitalPassport';
import CareerPathway from './sections/CareerPathway';
import VerificationSystem from './sections/VerificationSystem';
import ForPlayers from './sections/ForPlayers';
import ForAgents from './sections/ForAgents';
import Safety from './sections/Safety';
import SuccessStories from './sections/SuccessStories';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';
import RegistrationModal from './components/RegistrationModal';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerType, setRegisterType] = useState<'player' | 'agent'>('player');
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize scroll animations
    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger on load
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const openRegistration = (type: 'player' | 'agent') => {
    setRegisterType(type);
    setIsRegisterOpen(true);
  };

  return (
    <div ref={mainRef} className="min-h-screen bg-white overflow-x-hidden">
      <Navbar onRegisterClick={() => openRegistration('player')} />
      <Hero onRegisterClick={() => openRegistration('player')} />
      <About />
      <HowItWorks />
      <DigitalPassport />
      <CareerPathway />
      <VerificationSystem />
      <ForPlayers onRegisterClick={() => openRegistration('player')} />
      <ForAgents onRegisterClick={() => openRegistration('agent')} />
      <Safety />
      <SuccessStories />
      <CTASection 
        onPlayerClick={() => openRegistration('player')} 
        onAgentClick={() => openRegistration('agent')} 
      />
      <Footer />
      
      <RegistrationModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
        type={registerType}
      />
    </div>
  );
}

export default App;
