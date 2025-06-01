
import React from 'react';
import { Input } from '@/components/ui/input';

interface Props {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4">
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name or city..."
        className="w-full"
      />
    </div>
  );
};

export default SearchBar;
