// import React from 'react';
// import { Layers, Shield, Smartphone, ExternalLink } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     {
//       title: "Vibezarurihai Platform",
//       desc: "Architected and developed a full-scale creative ecosystem for artist management and event booking in Kanpur.",
//       icon: <Layers className="text-purple-400" />,
//       tags: ["React", "Node.js", "Tailwind"],
//       link: "https://vibezarurihai.in"
//     },
//     {
//       title: "Steganography Detection",
//       desc: "ML model implementation for detecting hidden data within image carriers using deep learning techniques.",
//       icon: <Shield className="text-blue-400" />,
//       tags: ["Python", "TensorFlow", "ML"],
//       link: "https://github.com/Hritik07/stg.forensics"
//     },

//     {
//   title: "PhishShield",
//   desc: "AI-powered Chrome extension that detects phishing sites in real time — scores domains 0–100 using WHOIS intelligence, URL analysis, and Gemini AI. Blocks clipboard actions and warns users before sensitive data is entered.",
//   icon: <Shield className="text-green-400" />,
//   tags: ["Chrome MV3", "Node.js", "Gemini AI", "Snowflake", "Render", "WHOIS API"],
//   link: "https://phish-shield-sigma-roan.vercel.app/index.html"
//  },

//     {
//       title: "Offline-First Learning PWA",
//       desc: "A resilient educational app with specialized Hindi voice instructions, optimized for low-bandwidth zones.",
//       icon: <Smartphone className="text-green-400" />,
//       tags: ["PWA", "Supabase", "React"],
//       link: "#"
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-24 px-6 pb-40">
//       <div className="mb-16 animate-fadeInLeft">
//         <h2 className="text-5xl font-black text-white tracking-tighter uppercase tracking-widest">Selected Works</h2>
//         <div className="h-2 w-32 bg-blue-600 mt-4 rounded-full"></div>
//       </div>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((p, i) => (
//           <div key={i} className={`group bg-gray-900 border-2 border-gray-800 p-8 rounded-3xl hover:border-blue-500 transition-all flex flex-col h-full shadow-xl opacity-0 animate-fadeInUp stagger-${i+1}`}>
//             <div className="flex justify-between items-start mb-8">
//               <div className="p-4 bg-gray-800 w-fit rounded-2xl border border-gray-700 group-hover:scale-110 transition-transform duration-500">
//                 {p.icon}
//               </div>
//               <a href={p.link} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-xl transition-all hover:rotate-12">
//                 <ExternalLink size={20} />
//               </a>
//             </div>
//             <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors tracking-tight leading-tight">{p.title}</h3>
//             <p className="text-gray-400 text-sm mb-10 leading-relaxed flex-grow font-medium">{p.desc}</p>
//             <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-800">
//               {p.tags.map(tag => (
//                 <span key={tag} className="text-[10px] font-black bg-black border border-gray-700 text-gray-400 px-3 py-1.5 rounded-lg uppercase tracking-widest font-mono">{tag}</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React from 'react';
import { Layers, Shield, Smartphone, ExternalLink, Cpu } from 'lucide-react';

const Projects = ({ onNavigate }) => {
  const projects = [
    {
      title: "Vibezarurihai Platform",
      desc: "Architected and developed a full-scale creative ecosystem for artist management and event booking in Kanpur.",
      icon: <Layers className="text-purple-400" />,
      tags: ["React", "Node.js", "Tailwind"],
      link: "https://vibezarurihai.in"
    },
    {
      title: "Steganography Detection",
      desc: "ML model implementation for detecting hidden data within image carriers using deep learning techniques.",
      icon: <Shield className="text-blue-400" />,
      tags: ["Python", "TensorFlow", "ML"],
      link: "https://steganalysis.vercel.app/"
    },
    {
      title: "PhishShield",
      desc: "AI-powered Chrome extension that detects phishing sites in real time — scores domains 0–100 using WHOIS intelligence, URL analysis, and Gemini AI. Blocks clipboard actions and warns users before sensitive data is entered.",
      icon: <Shield className="text-green-400" />,
      tags: ["Chrome MV3", "Node.js", "Gemini AI", "Snowflake", "Render", "WHOIS API"],
      link: "https://phish-shield-sigma-roan.vercel.app/index.html"
    },
    {
      title: "Offline-First Learning PWA",
      desc: "A resilient educational app with specialized Hindi voice instructions, optimized for low-bandwidth zones.",
      icon: <Smartphone className="text-green-400" />,
      tags: ["PWA", "Supabase", "React"],
      link: "https://digital-saathi-client.vercel.app/"
    },
    {
      title: "AI Rural Health Kiosk",
      desc: "IoT-powered health screening kiosk for rural areas — collects SpO₂, heart rate & temperature via Raspberry Pi, syncs to Supabase, and connects patients with doctors and pharmacies through dedicated web portals.",
      icon: <Cpu className="text-cyan-400" />,
      tags: ["Raspberry Pi", "Python", "Supabase", "I2C", "React"],
      link: null,           
      detailPage: 'project-health-kiosk'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-24 px-6 pb-40">
      <div className="mb-16 animate-fadeInLeft">
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase tracking-widest">Selected Works</h2>
        <div className="h-2 w-32 bg-blue-600 mt-4 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => p.detailPage && onNavigate(p.detailPage)}
            className={`group bg-gray-900 border-2 border-gray-800 p-8 rounded-3xl hover:border-blue-500 transition-all flex flex-col h-full shadow-xl opacity-0 animate-fadeInUp stagger-${i+1} ${p.detailPage ? 'cursor-pointer' : ''}`}
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-4 bg-gray-800 w-fit rounded-2xl border border-gray-700 group-hover:scale-110 transition-transform duration-500">
                {p.icon}
              </div>

              {/* Show external link icon OR "View Details" badge */}
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-xl transition-all hover:rotate-12"
                >
                  <ExternalLink size={20} />
                </a>
              ) : (
                <span className="text-[10px] font-black bg-blue-600/15 border border-blue-500/30 text-blue-400 px-3 py-1.5 rounded-lg uppercase tracking-widest font-mono">
                  View Details →
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors tracking-tight leading-tight">
              {p.title}
            </h3>
            <p className="text-gray-400 text-sm mb-10 leading-relaxed flex-grow font-medium">{p.desc}</p>
            <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-800">
              {p.tags.map(tag => (
                <span key={tag} className="text-[10px] font-black bg-black border border-gray-700 text-gray-400 px-3 py-1.5 rounded-lg uppercase tracking-widest font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;