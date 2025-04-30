import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react'; // Optional icon from lucide-react

const PaymentSuccessPage = () => {
  const { tranId } = useParams();

  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-4">Thank you for your payment. Your transaction was completed successfully.</p>
        <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 mb-4">
          <p><span className="font-medium">Transaction ID:</span> {tranId}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
