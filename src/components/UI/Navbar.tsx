
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          User Dashboard
        </Link>
        <div className="flex items-center space-x-6">
          <div className="space-x-4">
            <Link 
              to="/dashboard"
              className={cn(
                "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                location.pathname === '/dashboard' && "text-blue-600 dark:text-blue-400 font-medium"
              )}
            >
              Dashboard
            </Link>
            <Link 
              to="/dashboard/add"
              className={cn(
                "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                location.pathname === '/dashboard/add' && "text-blue-600 dark:text-blue-400 font-medium"
              )}
            >
              Add User
            </Link>
          </div>
          <button
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
