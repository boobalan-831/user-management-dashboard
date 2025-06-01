
import React from 'react';

interface Props {
  message: string;
}

const ErrorState: React.FC<Props> = ({ message }) => {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-6 py-4 rounded-lg relative my-6">
      <div className="flex items-center">
        <span className="text-red-500 mr-3 text-xl">⚠️</span>
        <div>
          <strong className="font-bold">Error: </strong>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;
