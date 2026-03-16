import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Heart, 
  Zap, 
  Globe, 
  MessageSquare, 
  ShieldCheck, 
  Star, 
  ArrowRight,
  Monitor,
  Calendar,
  Layers
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-700 px-6 py-3 rounded-full flex items-center gap-8 ${
        scrolled 
          ? 'bg-primary/60 backdrop-blur-xl border border-ghost/10 w-[90%] md:w-auto shadow-2xl' 
          : 'bg-transparent w-full max-w-6xl'
      }`}
    >
      <div className="text-2xl font-black tracking-tighter text-accent">KPOP WORLD</div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
        <a href="#features" className="hover:text-accent transition-colors">Neural Sync</a>
        <a href="#philosophy" className="hover:text-accent transition-colors">Manifesto</a>
        <a href="#pricing" className="hover:text-accent transition-colors">Protocols</a>
      </div>
      <button className="btn-magnetic bg-accent text-white px-5 py-2 text-sm ml-auto">
        <span className="bg-layer" />
        <span className="relative z-10">Join Protocol</span>
      </button>
    </nav>
  );
};

const FeatureCard1 = () => {
  // Diagnostic Shuffler: 3 overlapping cards that cycle
  const [items, setItems] = useState([
    { id: 1, title: 'DNA Analysis', value: 'ID-99.2%' },
    { id: 2, title: 'Vocal Stem', value: 'SYNC-88.5%' },
    { id: 3, title: 'Visual Matrix', value: 'CALIBRATED' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const next = [...prev];
        const last = next.pop()!;
        next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 w-full flex items-center justify-center pt-8">
      {items.map((item, i) => {
        const isCenter = i === 1;
        return (
          <div 
            key={item.id}
            className={`absolute w-[85%] h-20 glass-card p-4 flex flex-col justify-center transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${!isCenter ? 'blur-[2px]' : 'ring-1 ring-accent/50 shadow-[0_0_30px_rgba(123,97,255,0.2)]'}`}
            style={{ 
              transform: `translateY(${(i - 1) * 55}px) scale(${isCenter ? 1 : 0.85})`,
              zIndex: isCenter ? 10 : 5 - i,
              opacity: isCenter ? 1 : 0.3
            }}
          >
            <div className={`text-[9px] font-mono text-accent uppercase tracking-[0.2em] transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
              {item.title}
            </div>
            <div className={`text-xl font-bold tracking-tight transition-all duration-500 ${isCenter ? 'opacity-100 scale-100' : 'opacity-40 scale-90'}`}>
              {item.value}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const FeatureCard2 = () => {
  // Telemetry Typewriter: live text feed
  const [text, setText] = useState('');
  const fullText = "INCOMING SIGNAL: MULTI-REGION BROADCAST SYNCHRONIZED... FAN-HUB NEURAL LINK ESTABLISHED... GLOBAL VOYAGE COMMENCING...";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText('');
        setIndex(0);
      }, 5000);
    }
  }, [index]);

  return (
    <div className="bg-black/40 rounded-2xl p-4 h-48 font-mono text-[10px] relative overflow-hidden">
      <div className="flex items-center gap-2 mb-2 text-accent">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span>LIVE TELEMETRY</span>
      </div>
      <div className="text-ghost/60 lowercase leading-relaxed">
        {text}
        <span className="inline-block w-2 h-3 bg-accent animate-ping ml-1" />
      </div>
    </div>
  );
};

const FeatureCard3 = () => {
  // Cursor Protocol Scheduler
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(cursorRef.current, { x: 40, y: 40, duration: 1.5, ease: 'power2.inOut' })
          .to(cursorRef.current, { scale: 0.8, duration: 0.2 })
          .call(() => setActiveDay(2))
          .to(cursorRef.current, { scale: 1, duration: 0.2 })
          .to(cursorRef.current, { x: 100, y: 80, duration: 1.2, ease: 'power2.inOut' })
          .to(cursorRef.current, { scale: 0.8, duration: 0.2 })
          .call(() => setActiveDay(null))
          .to(cursorRef.current, { scale: 1, duration: 0.2 })
          .to(cursorRef.current, { x: 0, y: 0, duration: 1.5, ease: 'power2.inOut' });
      });
      return () => ctx.revert();
    };
    animate();
  }, []);

  return (
    <div className="relative h-48 w-full p-4 glass-card overflow-hidden">
      <div className="grid grid-cols-7 gap-2 h-full content-center opacity-40">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
          <div 
            key={i} 
            className={`h-8 flex items-center justify-center rounded-lg border border-ghost/10 text-[10px] transition-colors ${activeDay === i ? 'bg-accent/40 border-accent text-white' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
      <div 
        ref={cursorRef}
        className="absolute top-0 left-0 pointer-events-none text-accent"
      >
        <Star size={16} fill="currentColor" />
      </div>
    </div>
  );
};

const ProtocolCard = ({ step, title, desc, icon: Icon, id }: any) => {
  return (
    <div className={`protocol-card sticky top-0 h-screen w-full flex items-center justify-center bg-primary p-8`} id={`protocol-${id}`}>
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="font-mono text-accent text-sm">STEP_{step}</div>
          <h3 className="text-4xl md:text-6xl">{title}</h3>
          <p className="text-ghost/60 text-lg leading-relaxed">{desc}</p>
        </div>
        <div className="relative aspect-square glass-card flex items-center justify-center overflow-hidden">
          <Icon size={120} className="text-accent/20 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
          {id === 1 && <div className="absolute w-40 h-40 border border-accent/30 rounded-full animate-[spin_10s_linear_infinite]" />}
          {id === 2 && <div className="absolute w-full h-[1px] bg-accent/50 animate-[scan_3s_ease-in-out_infinite]" />}
          {id === 3 && (
             <svg className="absolute w-full h-40" viewBox="0 0 400 100">
               <path d="M0 50 L40 50 L50 20 L60 80 L70 50 L400 50" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent stroke-[dashoffset] animate-[dash_2s_linear_infinite]" style={{ strokeDasharray: 400, strokeDashoffset: 400 }} />
             </svg>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();
      tl.from(".hero-line-1", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out" })
        .from(".hero-line-2", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out" }, "-=1")
        .from(".hero-cta", { scale: 0.8, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.8");

      // Protocol Stacking
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card: any, i) => {
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            filter: 'blur(20px)',
            opacity: 0.5,
            scrollTrigger: {
              trigger: cards[i + 1] as any,
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          });
        }
      });

      // Philosophy Reveal
      gsap.from(".phi-reveal", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".philosophy-section",
          start: "top 70%",
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-primary overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-end p-8 md:p-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514525253361-b92474476602?q=80&w=2670&auto=format&fit=crop" 
            className="w-full h-full object-cover filter brightness-[0.4] contrast-125"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl space-y-4">
          <h1 className="hero-line-1 text-5xl md:text-8xl leading-none">
            Tech beyond <br />
            <span className="text-drama text-accent text-6xl md:text-9xl">Synchronicity.</span>
          </h1>
          <p className="hero-line-2 text-ghost/60 text-lg md:text-2xl max-w-lg">
            KPOP World is the ultimate neural hub for the next generation of global fandom. Connect, sync, and evolve.
          </p>
          <div className="hero-cta pt-8">
            <button className="btn-magnetic btn-primary text-xl px-12 py-5 group">
              <span className="bg-layer" />
              <div className="relative z-10 flex items-center gap-2">
                Join the Protocol
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                <Layers size={24} />
              </div>
              <h3 className="text-3xl">Identity Sync</h3>
              <p className="text-ghost/60">Real-time bi-directional interface with your favorite artists through secure neural channels.</p>
            </div>
            <FeatureCard1 />
          </div>

          <div className="glass-card p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                <Globe size={24} />
              </div>
              <h3 className="text-3xl">Global Pulse</h3>
              <p className="text-ghost/60">A living, breathing stream of global fan activity, synchronized across every dimension.</p>
            </div>
            <FeatureCard2 />
          </div>

          <div className="glass-card p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                <Calendar size={24} />
              </div>
              <h3 className="text-3xl">Live Protocol</h3>
              <p className="text-ghost/60">Automated enrollment in exclusive events and comeback milestones before they happen.</p>
            </div>
            <FeatureCard3 />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="philosophy-section relative py-48 px-8 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-110"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <p className="phi-reveal text-ghost/40 text-xl md:text-3xl">Most platforms focus on consumption.</p>
          <h2 className="phi-reveal text-5xl md:text-8xl leading-tight">
            We focus on <br />
            <span className="text-drama text-accent">Neural Evolution.</span>
          </h2>
        </div>
      </section>

      {/* Protocol Section (Stacking) */}
      <section className="relative">
        <ProtocolCard 
          id={1}
          step="01" 
          title="Initialization" 
          desc="Map your interest profile and synchronize your preferences with the global KPOP World grid."
          icon={Monitor}
        />
        <ProtocolCard 
          id={2}
          step="02" 
          title="Resonance" 
          desc="Engage in multi-modal interactions through secure, high-fidelity channels established with idol avatars."
          icon={Zap}
        />
        <ProtocolCard 
          id={3}
          step="03" 
          title="Ascension" 
          desc="Unlock tier-locked content and governance rights within the KPOP World administrative layer."
          icon={ShieldCheck}
        />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl mb-16">Select Your Protocol</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 space-y-6">
            <div className="text-sm font-mono text-accent">ESSENTIAL</div>
            <div className="text-4xl">$0 <span className="text-sm text-ghost/40">/mo</span></div>
            <ul className="text-left text-sm space-y-4 text-ghost/60">
              <li className="flex items-center gap-2 font-black">✓ Basic Sync Channels</li>
              <li className="flex items-center gap-2 font-black">✓ Global Telemetry</li>
              <li className="flex items-center gap-2 font-black">✓ Public Events</li>
            </ul>
            <button className="btn-magnetic btn-glass w-full">
              <span className="bg-layer" />
              <span className="relative z-10">Initialize</span>
            </button>
          </div>

          <div className="glass-card p-8 space-y-6 bg-accent border-accent text-white scale-105">
            <div className="text-sm font-mono opacity-80">PERFORMANCE</div>
            <div className="text-4xl">$12 <span className="text-sm opacity-60">/mo</span></div>
            <ul className="text-left text-sm space-y-4 opacity-90">
              <li className="flex items-center gap-2 font-black">✓ Neural Link Pro</li>
              <li className="flex items-center gap-2 font-black">✓ Exclusive Archive Access</li>
              <li className="flex items-center gap-2 font-black">✓ Early Event Enrollment</li>
            </ul>
            <button className="btn-magnetic bg-white text-accent w-full font-bold">
              <span className="bg-layer bg-accent/10 translate-y-full" />
              <span className="relative z-10">Resonate Now</span>
            </button>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="text-sm font-mono text-accent">ENTERPRISE</div>
            <div className="text-4xl">$49 <span className="text-sm text-ghost/40">/mo</span></div>
            <ul className="text-left text-sm space-y-4 text-ghost/60">
              <li className="flex items-center gap-2 font-black">✓ Governance Protocol</li>
              <li className="flex items-center gap-2 font-black">✓ VIP Neural Nodes</li>
              <li className="flex items-center gap-2 font-black">✓ 1:1 Bio-Sync Alpha</li>
            </ul>
            <button className="btn-magnetic btn-glass w-full">
              <span className="bg-layer" />
              <span className="relative z-10">Ascend</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-graphite rounded-t-4xl px-8 py-24 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div className="text-3xl font-black text-accent">KPOP WORLD</div>
              <p className="text-ghost/40 max-w-sm">
                Leading the global transition into the post-human fandom era. 
                Neural-first, community-driven, idol-centric.
              </p>
            </div>
            <div className="space-y-6">
              <div className="font-bold">Protocol</div>
              <ul className="space-y-4 text-sm text-ghost/40">
                <li><a href="#" className="hover:text-accent">Security</a></li>
                <li><a href="#" className="hover:text-accent">API Access</a></li>
                <li><a href="#" className="hover:text-accent">Neural Nodes</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="font-bold">Connect</div>
              <ul className="space-y-4 text-sm text-ghost/40">
                <li><a href="#" className="hover:text-accent">X (Twitter)</a></li>
                <li><a href="#" className="hover:text-accent">Discord</a></li>
                <li><a href="#" className="hover:text-accent">Station</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-ghost/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 font-mono text-[10px]">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              SYSTEM OPERATIONAL // REGION-GLOBAL
            </div>
            <div className="text-[10px] text-ghost/20 font-mono">
              © 2026 KPOP WORLD PROTOCOL. ALL RIGHTS SYNCHRONIZED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
