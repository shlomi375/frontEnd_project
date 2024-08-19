import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

 

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <header className=" text-white p-4 navbar bg-black bg-opacity-60">
      <nav className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">
          <img src="/images/logo.webp" alt="logo" className='w-20'/>
        </NavLink>
        <div className="flex items-center space-x-4 text-xl italic">
          <NavLink to="/" className="underline-custom font-semibold">Home</NavLink>
          <NavLink to="/BallisticMissile" className="underline-custom font-semibold">Ballistic Missile</NavLink>
          <NavLink to="/Aircraft" className="underline-custom font-semibold">Aircraft</NavLink>
          
        </div>
        <div>
        <NavLink to="/login" className="text-2xl underline-custom font-semibold">log in</NavLink>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
