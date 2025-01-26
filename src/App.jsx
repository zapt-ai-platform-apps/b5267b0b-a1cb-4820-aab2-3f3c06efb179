import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Marketplace from './components/Marketplace';
import MintNFT from './components/MintNFT';
import Profile from './components/Profile';
import { MetaMaskProvider } from './context/MetaMaskContext';

const App = () => {
  return (
    <Router>
      <MetaMaskProvider>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <div className="pt-16 h-full">
            <Routes>
              <Route path="/" element={<Marketplace />} />
              <Route path="/mint" element={<MintNFT />} />
              <Route path="/create" element={<div>Create Listing</div>} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </MetaMaskProvider>
    </Router>
  );
};

export default App;