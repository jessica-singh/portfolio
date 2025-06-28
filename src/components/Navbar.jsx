import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-10">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        NEURAL.PORTFOLIO
      </h1>
      <div className="space-x-4">
        {['Home', 'Projects', 'Skills', 'About', 'Contact'].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-400 hover:text-purple-400 transition"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;