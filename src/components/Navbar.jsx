import React from 'react';
import { useMetaMask } from '../context/MetaMaskContext';
import { Link } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { account, connectWallet, loading } = useMetaMask();
  
  const truncatedAddress = account 
    ? `${account.slice(0, 6)}...${account.slice(-4)}`
    : '';

  return (
    <nav className="bg-gray-900 border-b border-gray-800 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-purple-500">NFT Marketplace</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/create" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Create
            </Link>
            <Link
              to="/mint"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Mint
            </Link>
            
            <button
              onClick={connectWallet}
              disabled={loading || account}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                account 
                  ? 'bg-gray-800 text-gray-400 cursor-default'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              {loading ? 'Loading...' : account ? truncatedAddress : 'Connect Wallet'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;