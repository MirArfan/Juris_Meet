import React from 'react';
import { useParams } from 'react-router-dom';
import { XCircle } from 'lucide-react'; 

const PaymentFail = () => {
  const { tranId } = useParams();

  return (
    <div className="min-h-screen bg-red-50 flex flex-col justify-center items-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">Payment Failed</h1>
        <p className="text-gray-600 mb-4">Unfortunately, your payment was not successful.</p>
        <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 mb-4">
          <p><span className="font-medium">Transaction ID:</span> {tranId}</p>
        </div>
        <p className="text-gray-600 mb-4">Please try again or contact support if the issue persists.</p>
      </div>
    </div>
  );
};

export default PaymentFail;
