
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddressSchema, AddressForm } from '@/utils/validationSchemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props {
  defaultValues: AddressForm;
  onNext: (data: AddressForm) => void;
  onBack: () => void;
}

const Step2Address: React.FC<Props> = ({ defaultValues, onNext, onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressForm>({
    resolver: zodResolver(AddressSchema),
    defaultValues,
  });

  const submitHandler = (data: AddressForm) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Step 2: Address</h2>

      <div className="space-y-2">
        <Label htmlFor="street" className="text-gray-700 dark:text-gray-300">Street</Label>
        <Input
          id="street"
          {...register('street')}
          placeholder="Enter street address"
        />
        {errors.street && <p className="text-red-600 text-sm">{errors.street.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="city" className="text-gray-700 dark:text-gray-300">City</Label>
        <Input
          id="city"
          {...register('city')}
          placeholder="Enter city"
        />
        {errors.city && <p className="text-red-600 text-sm">{errors.city.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="zipcode" className="text-gray-700 dark:text-gray-300">Zip Code</Label>
        <Input
          id="zipcode"
          {...register('zipcode')}
          placeholder="Enter zip code"
        />
        {errors.zipcode && <p className="text-red-600 text-sm">{errors.zipcode.message}</p>}
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" onClick={onBack} variant="outline">
          Back
        </Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default Step2Address;
