import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Sentry from '@sentry/browser';

const MetaMaskContext = createContext();

export const MetaMaskProvider = ({ children }) => {
  const [account, setAccount] = useState('');
  const [loading, setLoading] = useState(true);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        throw new Error('MetaMask not installed');
      }
      
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      setAccount(accounts[0]);
      localStorage.setItem('nftMarketConnected', 'true');
      Sentry.addBreadcrumb({
        category: 'wallet',
        message: 'Connected MetaMask wallet',
        level: 'info'
      });
    } catch (error) {
      Sentry.captureException(error);
      console.error('Wallet connection error:', error);
    }
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum && localStorage.getItem('nftMarketConnected')) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (error) {
          Sentry.captureException(error);
          console.error('Account check error:', error);
        }
      }
      setLoading(false);
    };

    checkConnection();
  }, []);

  return (
    <MetaMaskContext.Provider value={{ account, connectWallet, loading }}>
      {children}
    </MetaMaskContext.Provider>
  );
};

export const useMetaMask = () => useContext(MetaMaskContext);