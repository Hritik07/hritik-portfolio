import React from 'react';
import { Globe, CheckCircle } from 'lucide-react';

const RestApiBox = () => (
  <div className="animate-fadeInRight animate-float">
    <div className="bg-gray-900 border-2 border-gray-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-sm sm:text-base w-full max-w-lg transition-all">
      <div className="bg-gray-800 px-5 py-4 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-3 flex-1 overflow-hidden mr-2">
          <span className="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-1 rounded border border-green-500/20 uppercase">GET</span>
          <span className="text-gray-400 text-xs truncate">https://api.portfolio.dev/v1/hritik_dua</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
      </div>
      <div className="bg-[#1a1a1a] px-5 py-2 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          <Globe size={12} /> Response Body
        </div>
        <div className="flex items-center gap-1.5 text-green-400 font-bold text-[10px]">
           <CheckCircle size={10} /> 20 OK
        </div>
      </div>
      <div className="p-8 space-y-2 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/10">
        <div className="opacity-0 animate-fadeInUp stagger-1 flex items-start gap-2">
          <span className="text-gray-600">1</span>
          <span>{'{'}</span>
        </div>
        <div className="pl-6 opacity-0 animate-fadeInUp stagger-1 flex items-start gap-2">
          <span className="text-gray-600">2</span>
          <span><span className="text-blue-400">"name"</span>: <span className="text-green-400">"Hritik Dua"</span>,</span>
        </div>
        <div className="pl-6 opacity-0 animate-fadeInUp stagger-2 flex items-start gap-2">
           <span className="text-gray-600">3</span>
           <span><span className="text-blue-400">"role"</span>: <span className="text-green-400">"Lead Developer"</span>,</span>
        </div>
        <div className="pl-6 opacity-0 animate-fadeInUp stagger-2 flex items-start gap-2">
          <span className="text-gray-600">4</span>
          <span><span className="text-blue-400">"stack"</span>: [</span>
        </div>
        <div className="pl-12 opacity-0 animate-fadeInUp stagger-3 text-green-400">
          <span className="text-gray-600">5</span>
          <span>"Backend", "IoT", "Embedded Systems"</span>
        </div>
        <div className="pl-6 opacity-0 animate-fadeInUp stagger-3 flex items-start gap-2">
          <span className="text-gray-600">6</span>
          <span>],</span>
        </div>
        <div className="pl-6 opacity-0 animate-fadeInUp stagger-3 flex items-start gap-2">
          <span className="text-gray-600">7</span>
          <span><span className="text-blue-400">"location"</span>: <span className="text-green-400">"Kanpur, IN"</span></span>
        </div>
        <div className="opacity-0 animate-fadeInUp stagger-3 flex items-start gap-2">
          <span className="text-gray-600">8</span>
          <span>{'}'}</span>
        </div>
      </div>
    </div>
  </div>
);

export default RestApiBox;