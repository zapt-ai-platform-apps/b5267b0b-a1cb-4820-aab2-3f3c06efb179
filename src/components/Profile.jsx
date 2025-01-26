import React from 'react';
import { useMetaMask } from '../context/MetaMaskContext';

const Profile = () => {
  const { account } = useMetaMask();

  return (
    <div className="max-w-2xl mx-auto p-6 mt-20 bg-gray-800 rounded-xl border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6">Your Profile</h2>
      <div className="space-y-4">
        <div>
          <label className="text-gray-300">Wallet Address</label>
          <p className="text-purple-400 break-words">{account || 'Not connected'}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Your NFTs</h3>
          <div className="space-y-2 text-gray-400">
            <p>No NFTs owned yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;