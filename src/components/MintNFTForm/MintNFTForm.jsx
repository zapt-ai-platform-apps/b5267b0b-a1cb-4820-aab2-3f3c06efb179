import React from 'react';

const MintNFTForm = ({
  nftName,
  description,
  loading,
  account,
  handleSubmit,
  handleNftNameChange,
  handleDescriptionChange
}) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-xl border border-gray-700 mt-20">
      <h2 className="text-2xl font-bold text-white mb-6">Mint New NFT</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">NFT Name</label>
          <input
            type="text"
            value={nftName}
            onChange={handleNftNameChange}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white box-border"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Description</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white box-border h-32"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading || !account}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            loading || !account
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700 text-white cursor-pointer'
          }`}
        >
          {loading ? 'Minting...' : 'Mint NFT'}
        </button>
      </form>
    </div>
  );
};

export default MintNFTForm;