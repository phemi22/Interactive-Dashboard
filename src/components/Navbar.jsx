import React from 'react';

const Navbar = ({ toggleTheme, theme }) => (
  <nav className={`p-4 shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'}`}>
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">Interactive Dashboard</h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-300 text-gray-800 p-2 rounded-md hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
      >
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  </nav>
);

export default Navbar;
