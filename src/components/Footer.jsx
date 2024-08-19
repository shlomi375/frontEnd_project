import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTwitter, faFacebook,faGithub} from '@fortawesome/free-brands-svg-icons';
import { faCircleUser,faAt,faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="font-semibold text-white py-4 bottom-2 bg-black bg-opacity-80">
      <div className="container mx-auto text-center">
       
        <div className='text-2xl '>
        <p>Follow us on:
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2 hover:text-blue-500">
            <FontAwesomeIcon icon={faTwitter} />
          </a> |
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2 hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebook} />
          </a> |
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2  hover:text-pink-200">
            <FontAwesomeIcon icon={faInstagram} />
          </a> |
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2 hover:text-red-600">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </p>
        <div className='flex justify-around mt-4'>

          <div className='text-center '>
            <h1 className='font-semibold font-sans text-xl '>THIS SITE CREATED BY:</h1>
            <ul className='p-4 text-base cursor-pointer'>
              <li  className='hover:text-gray-400 py-1'><FontAwesomeIcon icon={faGithub} /> shlomo cohen</li>
              <li className='hover:text-gray-400 py-1'><a href="https://mail.google.com/gmail/about/"><FontAwesomeIcon icon={faAt} /> sc100205@gmail.com</a></li>
              <li className='hover:text-gray-400 py-1'><FontAwesomeIcon icon={faPhone} /> +972-51-5284-178</li>
              <li  className='hover:text-gray-400 py-1'> <a href="https://github.com/shlomi375"><FontAwesomeIcon icon={faCircleUser} /> shlomi375</a></li>
            </ul>
          </div>

          <div className='text-center '>
            <h1 className='font-semibold font-sans text-xl  '>CATEGORIES</h1>
            <ul className='p-4 text-base cursor-pointer'>
            <li className='hover:text-gray-400 py-1'><NavLink to="/BallisticMissile">Ballistic Missile</NavLink></li>
            <li className='hover:text-gray-400 py-1'><NavLink to="/Aircraft">Aircraft</NavLink></li>
            <li className='hover:text-gray-400 py-1'><a href="#">drone</a></li>
            
            </ul>
          </div>

          <div className='text-center '>
            <h1 className='font-semibold font-sans text-xl '>AERO STRIKE</h1>
            <ul className='p-4 text-base cursor-pointer'>
            <li className='hover:text-gray-400 py-1'><a href="#">who we are</a></li>
            <li className='hover:text-gray-400 py-1'><a href="#">history</a></li>
            <li className='hover:text-gray-400 py-1'><a href="#">careers</a></li>
            <li className='hover:text-gray-400 py-1'><a href="#">values</a></li>
            </ul>
          </div>
        </div>
        </div>
         <p>&copy; 2024 Aero strike. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
