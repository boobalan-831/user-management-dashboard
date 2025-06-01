
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '@/lib/api';
import { User } from '@/types/user';
import UserList from '@/components/Dashboard/UserList';
import SearchBar from '@/components/Dashboard/SearchBar';
import LoadingState from '@/components/Dashboard/LoadingState';
import ErrorState from '@/components/Dashboard/ErrorState';

const DashboardPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err: any) {
        setError('Failed to fetch users. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  // Filter whenever searchTerm changes
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = users.filter(user => {
      return (
        user.name.toLowerCase().includes(term) ||
        user.address.city.toLowerCase().includes(term)
      );
    });
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">User Dashboard</h1>
          <Link 
            to="/dashboard/add"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Add User
          </Link>
        </header>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {loading && <LoadingState />}
        {error && <ErrorState message={error} />}

        {!loading && !error && (
          <UserList users={filteredUsers} />
        )}
      </div>
    </main>
  );
};

export default DashboardPage;
