
import axios from 'axios';
import { User } from '@/types/user';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export async function fetchUsers(): Promise<User[]> {
  const response = await api.get<User[]>('/users');
  return response.data;
}
