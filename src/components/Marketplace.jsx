import React from 'react';
import { Link } from 'react-router-dom';

const Marketplace = () => {
  const nfts = [
    {
      id: 1,
      name: 'Digital Art #1',
      price: '0.1 ETH',
      image: 'https://supabase.zapt.ai/storage/v1/render/image/public/demo/nft1.png'
    },
    {
      id: 2,
      name: 'Crypto Collectible',
      price: '0.25 ETH',
      image: 'https://supabase.zapt.ai/storage/v1/render/image/public/demo/nft2.png'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {nfts.map((nft) => (
          <div key={nft.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
              data-image-request="digital art nft"
            />
            <h3 className="text-xl font-semibold text-white mb-2">{nft.name}</h3>
            <p className="text-purple-400 mb-4">{nft.price}</p>
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 text-sm inline-flex items-center"
        >
          Made on ZAPT
          <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default Marketplace;