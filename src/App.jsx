import React, { useState, useEffect } from 'react';
import AnimationStyles from './components/AnimationStyles';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
      <AnimationStyles />
      
      {/* BACKGROUND GRID & GLOWS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.06]" 
          style={{ 
            backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        ></div>
        
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full animate-pulseGlow"></div>
        <div className="absolute bottom-[-10%] left-[-20%] w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full animate-pulseGlow" style={{animationDelay: '-4s'}}></div>
      </div>

      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="relative z-10 w-full">
        {activePage === 'home' && <Home onNavigate={setActivePage} />}
        {activePage === 'projects' && <Projects />}
        {activePage === 'about' && <About />}
        {activePage === 'contact' && <Contact />}
      </main>
      
      <footer className="py-20 text-center text-gray-700 text-xs tracking-[0.4em] font-black border-t border-gray-900 relative z-10 bg-black/50 font-mono">
        HRITIK DUA // 2026 // KANPUR
      </footer>
    </div>
  );
}