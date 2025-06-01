
import React from 'react';
import { Button } from '@/components/ui/button';
import { BasicInfoForm, AddressForm } from '@/utils/validationSchemas';

interface Props {
  basicInfo: BasicInfoForm;
  address: AddressForm;
  onSubmit: () => void;
  onBack: () => void;
}

const Step3Review: React.FC<Props> = ({ basicInfo, address, onSubmit, onBack }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Step 3: Review & Confirm</h2>

      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">Basic Info</h3>
          <div className="space-y-1 text-gray-700 dark:text-gray-300">
            <p><strong>Name:</strong> {basicInfo.name}</p>
            <p><strong>Email:</strong> {basicInfo.email}</p>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">Address</h3>
          <div className="space-y-1 text-gray-700 dark:text-gray-300">
            <p><strong>Street:</strong> {address.street}</p>
            <p><strong>City:</strong> {address.city}</p>
            <p><strong>Zip Code:</strong> {address.zipcode}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" onClick={onBack} variant="outline">
          Back
        </Button>
        <Button type="button" onClick={onSubmit}>
          Confirm & Submit
        </Button>
      </div>
    </div>
  );
};

export default Step3Review;
