// components/UserMenu.jsx
import React from 'react';

const UserMenu = () => {
  return (
    <div className="flex items-center space-x-4">
      <button className="text-gray-300 hover:text-white">
        🔔
      </button>
      <img
        src="/avatar.jpg"
        alt="User"
        className="w-8 h-8 rounded-full border-2 border-green-500"
      />
    </div>
  );
};

export default UserMenu;