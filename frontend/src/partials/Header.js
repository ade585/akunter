import React from 'react';
//import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-white fixed bottom-0 z-20 w-full border-t border-gray-200 flex">
      <a href="/" className="flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500">
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
            <i className="mdi mdi-newspaper-variant-outline"></i>
          </span>
          <span className="block text-xs leading-none">Home</span>
        </div>
      </a>
      <a href="/" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500">
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
            <i className="mdi mdi-table"></i>
          </span>
          <span className="block text-xs leading-none">Sales</span>
        </div>
      </a>
      <a href="/" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500">
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
            <i className="mdi mdi-poll"></i>
          </span>
          <span className="block text-xs leading-none">Charts</span>
        </div>
      </a>
      <a href="/" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500">
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
            <i className="mdi mdi-account"></i>
          </span>
          <span className="block text-xs leading-none">Account</span>
        </div>
      </a>
    </div>
  );
}

export default Header;
