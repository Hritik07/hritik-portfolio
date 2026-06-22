import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const phrases = [
    "B.Tech Final Year Student",
    "Lead Developer @ Vibezarurihai",
    "Backend Developer",
    "Cyber Security Enthusiast",
    "Learning DevOps"
  ];
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases]);

  return (
    <div className="h-10 flex items-center justify-start overflow-hidden">
      <span className="text-blue-400 font-mono text-xl md:text-2xl font-bold border-r-4 border-blue-500 pr-2">
        {`> ${phrases[index].substring(0, subIndex)}`}
      </span>
    </div>
  );
};

export default Typewriter;