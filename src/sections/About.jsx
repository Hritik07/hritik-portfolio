import React from 'react';
import { GraduationCap } from 'lucide-react';

const About = () => (
  <div className="max-w-4xl mx-auto py-24 px-6 pb-40">
    <h2 className="text-5xl font-black text-white tracking-tighter mb-12 flex items-center gap-4 animate-fadeInLeft uppercase tracking-widest">
      <GraduationCap className="text-blue-600 animate-pulseGlow" size={48} /> Background
    </h2>
    <div className="bg-gray-900 border-2 border-gray-800 p-10 md:p-14 rounded-[3rem] shadow-2xl space-y-8 animate-fadeInUp">
      <p className="text-gray-200 text-2xl leading-relaxed font-bold">
        I am <span className="text-blue-400 underline decoration-4 underline-offset-8 decoration-blue-500/50">Hritik Dua</span>, 
        a B.Tech 3rd-year Computer Science student with hands-on experience across software development, hardware integration, and AI-driven systems.
      </p>
      <div className="space-y-6 text-gray-400 text-lg font-medium leading-relaxed">
        <p className="opacity-0 animate-fadeInUp stagger-1">
          As the lead developer at <span className="text-white font-bold">Vibezarurihai.in</span>, 
          I’ve designed and delivered production-ready platforms, handling frontend architecture, backend systems, and deployment. Alongside this, I actively work on hardware-based projects using Raspberry Pi, ESP32, sensors, and biometric modules, integrating them with cloud services, REST APIs, and machine learning models.
        </p>
        <p className="opacity-0 animate-fadeInUp stagger-2">
          My work spans AI-powered health kiosks, biometric authentication systems, IoT-enabled devices, and offline-first applications designed for low-resource environments. I enjoy bridging the gap between hardware and software—turning physical data into intelligent, scalable digital solutions.
        </p>
      </div>
    </div>
  </div>
);

export default About;