import React from 'react';

const AccountCard: React.FC = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="w-64 h-80 bg-white rounded-3xl shadow-lg p-6 relative overflow-hidden">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-gray-800 text-xl font-semibold mb-1">My Account</h2>
        <p className="text-blue-500 text-sm">This Week</p>
      </div>
      
      {/* Wave Graphic */}
      <div className="relative h-32 mb-8 flex items-center justify-center">
        <svg 
          width="200" 
          height="80" 
          viewBox="0 0 200 80" 
          className="absolute"
          style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
          <path
            d="M20 40 Q60 20 100 40 T180 40"
            stroke="url(#waveGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            className="animate-pulse"
          />
        </svg>
      </div>
      
      {/* Days of Week */}
      <div className="flex justify-between items-center mt-auto">
        {days.map((day, index) => (
          <div key={day} className="flex flex-col items-center">
            <span className="text-gray-400 text-xs font-medium">{day}</span>
            <div 
              className={`mt-2 w-1 h-1 rounded-full ${
                index === 2 ? 'bg-purple-500' : 'bg-gray-300'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountCard;