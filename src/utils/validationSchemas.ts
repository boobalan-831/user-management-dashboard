
import { z } from 'zod';

// Step 1: Basic Info
export const BasicInfoSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});
export type BasicInfoForm = z.infer<typeof BasicInfoSchema>;

// Step 2: Address
export const AddressSchema = z.object({
  street: z.string().min(1, 'Street is required'),
  city: z.string().min(1, 'City is required'),
  zipcode: z.string().min(1, 'Zip code is required'),
});
export type AddressForm = z.infer<typeof AddressSchema>;
