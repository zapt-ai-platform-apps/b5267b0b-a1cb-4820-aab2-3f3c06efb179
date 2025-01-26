import React, { useState } from 'react';
import { useMetaMask } from '../context/MetaMaskContext';
import * as Sentry from '@sentry/browser';
import MintNFTForm from './MintNFTForm/MintNFTForm';

const MintNFT = () => {
  const [nftName, setNftName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const { account } = useMetaMask();

  const handleMint = async (e) => {
    e.preventDefault();
    if (!account) return;
    
    setLoading(true);
    try {
      console.log('Starting mint process...');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      Sentry.addBreadcrumb({
        category: 'nft',
        message: 'Minted new NFT',
        data: { name: nftName }
      });
      
      setNftName('');
      setDescription('');
      alert('NFT minted successfully!');
    } catch (error) {
      Sentry.captureException(error);
      console.error('Minting error:', error);
      alert('Failed to mint NFT');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MintNFTForm
      nftName={nftName}
      description={description}
      loading={loading}
      account={account}
      handleSubmit={handleMint}
      handleNftNameChange={(e) => setNftName(e.target.value)}
      handleDescriptionChange={(e) => setDescription(e.target.value)}
    />
  );
};

export default MintNFT;