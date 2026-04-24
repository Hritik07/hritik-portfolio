import React from 'react';
import { GraduationCap, Download, Github, Linkedin, Twitter } from 'lucide-react';
import Typewriter from '../components/Typewriter';
import RestApiBox from '../components/RestApiBox';

// LeetCode SVG icon (not available in lucide-react)
const LeetCodeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

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
        <a
          href="https://github.com/hritikduaaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="text-gray-500 hover:text-white cursor-pointer transition w-7 h-7 hover:scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/hritikbash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="text-gray-500 hover:text-white cursor-pointer transition w-7 h-7 hover:scale-110" />
        </a>
        <a
          href="https://leetcode.com/u/hritik-bash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LeetCodeIcon className="text-gray-500 hover:text-white cursor-pointer transition w-7 h-7 hover:scale-110" />
        </a>
      </div>
    </div>
    <div className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2">
      <RestApiBox />
    </div>
  </div>
);

export default Home;