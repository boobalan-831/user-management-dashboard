
import { Link } from 'react-router-dom';
import MultiStepFormWrapper from '@/components/AddUserForm/MultiStepFormWrapper';

const AddUserPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Add New User</h1>
          <Link 
            to="/dashboard"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Back to Dashboard
          </Link>
        </div>
        <MultiStepFormWrapper />
      </div>
    </main>
  );
};

export default AddUserPage;
