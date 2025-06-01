
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            User Management
            <span className="block text-blue-600 dark:text-blue-400">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            A modern, responsive dashboard for managing users with a beautiful multi-step form, 
            real-time search, and dark mode support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">👥</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              User Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              View, search, and filter through user profiles with real-time updates
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">📝</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Multi-Step Forms
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Add new users through a guided 3-step form with validation
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">🌙</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Dark Mode
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Beautiful light and dark themes with persistent preferences
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/dashboard"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200 font-medium text-lg"
          >
            <span className="mr-2">🚀</span>
            View Dashboard
          </Link>
          <Link 
            to="/dashboard/add"
            className="inline-flex items-center px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 font-medium text-lg"
          >
            <span className="mr-2">+</span>
            Add New User
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Built with</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
              React
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
              React Hook Form
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
              Zod
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
