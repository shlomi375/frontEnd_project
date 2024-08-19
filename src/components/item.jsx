import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ 
  name,
  subCategory,
  range,
  price,
  countryOfOrigin,
  image
}) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    console.log('Navigating to:', `/BallisticMissile/item/${encodeURIComponent(name)}`);
    navigate(`/BallisticMissile/item/${encodeURIComponent(name)}`);
  };

  return (
    <div className="w-[85%] mx-auto text-white bg-black hover:text-black hover:bg-white shadow-xl rounded-lg overflow-hidden p-3 transition-colors duration-500">
      <h2 className="text-2xl font-bold">{name}</h2>
      <h2 className="text-xl font-bold">{subCategory}</h2>
      <p className="font-thin">
        cost: <span className="font-semibold">{price } </span>
      </p>
      <img className="w-full h-48 object-cover m-auto" src={image} alt={name} />
      <div className='flex justify-between p-3'> 
        <div>
          <p >Range: <span className='font-semibold'>{range}</span>  </p>
          <p >Made in: <span className='font-semibold'>{countryOfOrigin}</span></p>
        </div>
        <button
          onClick={handleViewClick}
          className="font-bold px-4 py-2 border border-white bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border-black transition-colors duration-300"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Item;
