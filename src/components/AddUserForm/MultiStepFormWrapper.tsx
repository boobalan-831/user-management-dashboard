
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Step1BasicInfo from './Step1BasicInfo';
import Step2Address from './Step2Address';
import Step3Review from './Step3Review';
import { BasicInfoForm, AddressForm } from '@/utils/validationSchemas';
import { toast } from '@/components/ui/use-toast';

export interface FormData {
  basicInfo: BasicInfoForm;
  address: AddressForm;
}

const MultiStepFormWrapper: React.FC = () => {
  const [step, setStep] = useState(1);
  const [basicInfo, setBasicInfo] = useState<BasicInfoForm>({
    name: '',
    email: '',
  });
  const [address, setAddress] = useState<AddressForm>({
    street: '',
    city: '',
    zipcode: '',
  });

  const navigate = useNavigate();

  // Restore saved progress (optional)
  useEffect(() => {
    const saved = localStorage.getItem('addUserFormProgress');
    if (saved) {
      try {
        const { savedStep, savedBasic, savedAddress } = JSON.parse(saved);
        setStep(savedStep);
        setBasicInfo(savedBasic);
        setAddress(savedAddress);
      } catch (err) {
        // Invalid saved data, ignore
      }
    }
  }, []);

  // Save progress on any change
  useEffect(() => {
    localStorage.setItem(
      'addUserFormProgress',
      JSON.stringify({
        savedStep: step,
        savedBasic: basicInfo,
        savedAddress: address,
      })
    );
  }, [step, basicInfo, address]);

  const handleNextFromBasic = (data: BasicInfoForm) => {
    setBasicInfo(data);
    setStep(2);
  };

  const handleNextFromAddress = (data: AddressForm) => {
    setAddress(data);
    setStep(3);
  };

  const handleSubmitAll = () => {
    const finalData: FormData = { basicInfo, address };
    console.log('New User Data:', finalData);
    localStorage.removeItem('addUserFormProgress');
    
    toast({
      title: "Success!",
      description: "User added successfully!",
    });
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Step1BasicInfo defaultValues={basicInfo} onNext={handleNextFromBasic} onBack={handleBack} />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Step2Address defaultValues={address} onNext={handleNextFromAddress} onBack={handleBack} />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Step3Review basicInfo={basicInfo} address={address} onSubmit={handleSubmitAll} onBack={handleBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MultiStepFormWrapper;
