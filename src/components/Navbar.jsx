import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex flex-col md:flex-row justify-between items-center p-4 md:p-6 bg-black bg-opacity-60 backdrop-blur-md z-10">
      <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2 md:mb-0">
        Jessica Singh
      </h1>
      <div className="space-x-4 flex flex-wrap justify-center">
        {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-400 hover:text-purple-400 transition text-sm md:text-base"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
