
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BasicInfoSchema, BasicInfoForm } from '@/utils/validationSchemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props {
  defaultValues: BasicInfoForm;
  onNext: (data: BasicInfoForm) => void;
  onBack: () => void;
}

const Step1BasicInfo: React.FC<Props> = ({ defaultValues, onNext, onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicInfoForm>({
    resolver: zodResolver(BasicInfoSchema),
    defaultValues,
  });

  const submitHandler = (data: BasicInfoForm) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Step 1: Basic Info</h2>

      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Enter full name"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
        <Input
          id="email"
          {...register('email')}
          type="email"
          placeholder="Enter email address"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
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

export default Step1BasicInfo;
