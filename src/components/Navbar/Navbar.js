import React from 'react';
import Wallet from './Wallet.js';

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
            {/* Left side - App Name */}
            <div className="text-white text-xl font-bold">consultX</div>

            {/* Middle side - Links */}
            <div className="hidden md:flex space-x-4">
                <a href="#" className="text-white hover:text-blue-200">Home</a>
                <a href="#" className="text-white hover:text-blue-200">Contact</a>
                <a href="#" className="text-white hover:text-blue-200">About</a>
            </div>

            {/* Right side - Connect Wallet Button */}
            <Wallet />
        </nav>
    )
};
