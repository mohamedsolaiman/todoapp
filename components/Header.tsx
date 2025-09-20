
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center my-8 md:my-12">
      <h1 className="text-5xl md:text-7xl font-bold text-slate-100 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-500 to-cyan-400">
          Cosmic
        </span>{' '}
        Tasks
      </h1>
      <p className="mt-4 text-slate-300 text-lg tracking-widest animate-pulse">
        YOUR INTERDIMENSIONAL TO-DO LIST
      </p>
    </header>
  );
};

export default Header;
