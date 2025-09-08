import React from 'react';

interface Payment {
  id: string;
  name: string;
  method: string;
  amount: string;
  avatar: string;
}

const PaymentCard: React.FC = () => {
  const payments: Payment[] = [
    {
      id: '1',
      name: 'Monica Smith',
      method: 'Stripe Deposit',
      amount: '$150',
      avatar: '👩🏻‍💼'
    },
    {
      id: '2',
      name: 'Ernest Smith',
      method: 'Paypal',
      amount: '$100',
      avatar: '👨🏻‍💼'
    }
  ];

  return (
    <div className="w-60 bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#8C83FD] via-[#C39FF5] to-[#F4BAEE] p-3 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 mt-3 bg-yellow-400 rounded-full flex items-center justify-center text-lg">
            👨🏻‍💼
          </div>
          <div className='mt-3'>
            <h2 className="font-semibold text-sm">Thomas Smith</h2>
            <p className="text-purple-100 text-xs">Assistant</p>
          </div>
        </div>
      </div>

      {/* Payments Section */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-800 font-semibold text-sm">Payments</h3>
          <span className="text-gray-500 text-xs">May 10, 2022</span>
        </div>

        <div className="space-y-4">
          {payments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm bg-gray-100">
                  {payment.avatar}
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-800">{payment.name}</p>
                  <p className="text-gray-500 text-xs">{payment.method}</p>
                </div>
              </div>
              <span className="text-green-500 text-xs font-semibold">{payment.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;