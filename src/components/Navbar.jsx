import React from 'react';
import { Home as HomeIcon, Briefcase, User, Mail } from 'lucide-react';

const Navbar = ({ activePage, setActivePage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <HomeIcon size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/90 backdrop-blur-xl border-2 border-gray-800 px-6 py-4 rounded-full z-50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-6 sm:gap-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`flex flex-col sm:flex-row items-center gap-2 transition-all duration-300 ${
              activePage === item.id ? 'text-blue-400 scale-110' : 'text-gray-500 hover:text-white'
            }`}
          >
            <div className={activePage === item.id ? 'transform scale-110' : ''}>{item.icon}</div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;