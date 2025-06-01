
import React from 'react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400 text-lg">Loading users...</p>
    </div>
  );
};

export default LoadingState;
