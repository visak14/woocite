'use client';

import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    'Home', 'About us', 'Team', 'Knowledge Centre', 'Blog', 'FAQ', 'Contact Us', 'Login'
  ];

  return (
    <div className="w-full bg-white">
    
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center space-x-1">
          <img src="/images/logo.png" alt="Logo" className="w-16 h-16" />
          
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-4 text-black text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
          <div className="md:hidden">
            <FiMenu onClick={() => setMobileMenuOpen(true)} className="text-2xl" />
          </div>
        </div>
      </div>

      
      <div className="hidden md:flex justify-center space-x-6 lg:space-x-10 py-3 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
        {navItems.map((item, idx) => (
          <a key={idx} href="#" className="text-black hover:text-teal-700 text-sm lg:text-base">
            {item}
          </a>
        ))}
      </div>

    
      {mobileMenuOpen && (
        <div className="md:hidden bg-white fixed w-full z-50 top-0 left-0 h-screen px-6 py-6 overflow-y-auto">
          <div className="flex justify-end">
            <RxCross1 onClick={() => setMobileMenuOpen(false)} className="text-2xl" />
          </div>
          <div className="flex flex-col space-y-6 mt-10">
            {navItems.map((item, idx) => (
              <a key={idx} href="#" className="text-black text-lg border-b pb-2">
                {item}
              </a>
            ))}
            <div className="flex space-x-4 text-black text-xl mt-6">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>
        </div>
      )}

      
      <div className="bg-black overflow-hidden relative h-10">
        <div
          style={{
            display: 'inline-block',
            color: 'white',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            animation: 'scrollRight 20s linear infinite',
            position: 'absolute',
            padding: '0.75rem 0',
          }}
        >
          {[
            { label: 'NIFTY', color: 'red' },
            { label: 'NIFTY AUTO', color: 'green' },
            { label: 'NIFTY PHARMA', color: 'red' },
            { label: 'NIFTY ENERGY', color: 'green' },
            { label: 'NIFTY METAL', color: 'red' },
            { label: 'BANK NIFTY', color: 'green' },
          ].map((item, idx) => (
            <span key={idx} style={{ color: item.color, margin: '0 1rem' }}>
              {item.label}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes scrollRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Navbar;
