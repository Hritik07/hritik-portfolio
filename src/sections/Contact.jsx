import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => (
  <div className="max-w-3xl mx-auto py-24 px-6 pb-40 text-center animate-fadeInUp">
    <h2 className="text-6xl font-black text-white mb-8 tracking-tighter uppercase">Let's Connect</h2>
    <p className="text-gray-400 text-xl mb-6 font-semibold">Open for internships and tech collaborations.</p>
    
    <div className="mb-12">
      <a href="mailto:hritikdua.dev@gmail.com" className="inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors text-lg font-mono border-b border-blue-500/20 pb-1">
        <Mail size={20} /> hritikdua.dev@gmail.com
      </a>
    </div>

    <div className="bg-gray-900 border-2 border-gray-800 p-10 rounded-[3rem] shadow-2xl">
      <div className="bg-gray-900 p-4">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" className="w-full bg-black border-2 border-gray-800 rounded-2xl p-4 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Name" />
            <input type="email" className="w-full bg-black border-2 border-gray-800 rounded-2xl p-4 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Email" />
          </div>
          <textarea rows="4" className="w-full bg-black border-2 border-gray-800 rounded-2xl p-4 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Message"></textarea>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl">
            <Send size={20} /> SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;