import React from 'react';
import { GraduationCap, Download, Github, Linkedin, Twitter } from 'lucide-react';
import Typewriter from '../components/Typewriter';
import RestApiBox from '../components/RestApiBox';

const Home = ({ onNavigate }) => (
  <div className="max-w-7xl mx-auto min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 py-20 gap-16 overflow-hidden">
    <div className="flex-1 text-left space-y-8 order-2 lg:order-1 animate-fadeInLeft">
      <div className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black tracking-widest uppercase">
        <GraduationCap size={16} className="mr-2" /> B.Tech 3rd Year
      </div>
      <div>
        <h1 className="text-6xl md:text-8xl font-black mb-4 text-gradient tracking-tighter leading-tight drop-shadow-2xl text-white">
          HRITIK <br className="hidden md:block" /> DUA
        </h1>
        <Typewriter />
      </div>
      <p className="text-gray-400 max-w-lg text-lg leading-relaxed font-semibold">
        Crafting scalable web solutions and exploring AI/ML. 
        Currently Lead Developer for <span className="text-blue-400">Vibezarurihai</span>.
      </p>
      <div className="flex flex-wrap gap-4 pt-4">
        <button 
          onClick={() => onNavigate('projects')}
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-blue-500 transition-all shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-blue-500/50 active:scale-95"
        >
          VIEW PROJECTS
        </button>
        <a 
          href="/HritikDua_Resume.pdf" 
          download
          className="bg-white/5 border-2 border-gray-800 text-white px-10 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-white/10 transition-all"
        >
          <Download size={20} /> RESUME
        </a>
      </div>
      <div className="flex items-center gap-10 pt-8 opacity-0 animate-fadeInUp stagger-3">
        {/* <Github className="text-gray-500 hover:text-white cursor-pointer transition w-7 h-7 hover:scale-110" /> */}
        <a
        href="https://www.linkedin.com/in/hritikbash"
        target="_blank"
        rel="noopener noreferrer"
  >
  <Linkedin className="text-gray-500 hover:text-white cursor-pointer transition w-7 h-7 hover:scale-110" />
</a>
        {/* <Twitter className="text-gray-500 hover:text-white cursor-pointer transition w-7 h-7 hover:scale-110" /> */}
      </div>
    </div>
    <div className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2">
      <RestApiBox />
    </div>
  </div>
);

export default Home;