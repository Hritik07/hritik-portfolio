import React from 'react';

const AnimationStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(1deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    @keyframes pulseGlow {
      0% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.05); }
      100% { opacity: 0.3; transform: scale(1); }
    }
    .animate-fadeInUp { animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
    .animate-fadeInLeft { animation: fadeInLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
    .animate-fadeInRight { animation: fadeInRight 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-pulseGlow { animation: pulseGlow 8s ease-in-out infinite; }
    
    .stagger-1 { animation-delay: 0.1s; }
    .stagger-2 { animation-delay: 0.2s; }
    .stagger-3 { animation-delay: 0.3s; }

    .text-gradient {
      background: linear-gradient(to right, #ffffff, #60a5fa, #9ca3af);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}</style>
);

export default AnimationStyles;