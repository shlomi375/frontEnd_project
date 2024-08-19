import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AircraftCard from '../components/item';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Item from '../components/item';

const ItemDetails = () => {
  const { itemName } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]); 


  useEffect(() => {
    console.log('Fetching data for:', itemName);
    fetch('/MissileArray.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        const foundItem = data.find(i => i.name === itemName);
        if (foundItem) {
          setItem(foundItem);
        } else {
          setError('Item not found');
        }
        setItems(data);
      })
      .catch(error => {
        console.error('Error fetching aircraft data!', error);
        setError('Error fetching aircraft data');
      });
  }, [itemName]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!item) {
    return <div>Loading...</div>;
  }
  AOS.init()

  const {
    name,
    category,
    subCategory,
    countryOfOrigin,
    nuclearCapable,
    weight,
    length,
    warhead,
    yearIntroduced,
    price,
    manufacturer,
    speed,
    usingCountries,
    image,
    range,
  } = item;

  const filteredItems = items
    .filter(i => (i.manufacturer == manufacturer && i.name !== name)||(i.category == category && i.name !== name))
    .slice(0, 3);

  return (
    <div
  className="relative min-h-screen bg-cover bg-center bg-fixed"
  style={{ backgroundImage: `url(${image})` }}
>
     

    <Header/>
    <div className='"absolute inset-0 bg-gray-400 bg-opacity-60'>
      <h1 className='text-5xl text-center font-serif py-8'>{name} </h1>


      <div className=" mx-auto px-4 py-8 ">
  <h1 className="text-3xl font-bold mb-6 text-center">DETAILS</h1>
  <div className="grid grid-cols-1 md:grid-cols-1 gap-6 ">
    {/* <!-- First Grid --> */}
    <div className='text-center w-1/2 mr-auto py-12' data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="100">
    <h1 className='text-2xl font-semibold'>INFO</h1>
    <div className="grid grid-cols-1 md:grid-cols-2  bg-gray-200 rounded-lg font-semibold">
      
      <div className=" p-4  border border-gray-300 shadow-lg">type: {subCategory} ({category})</div>
      <div className=" p-4  border border-gray-300 shadow-lg">enter servise in {yearIntroduced}</div>
      <div className=" p-4  border border-gray-300 shadow-lg"> {length} </div>
      <div className=" p-4  border border-gray-300 shadow-lg"> {weight} </div>
    </div>
    </div>
    {/* <!-- secend Grid --> */}
    <div className='text-center w-1/2 ml-auto py-12' data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="100">
    <h1 className='text-2xl font-semibold'>CAPABLITIES:</h1>
    <div className="grid grid-cols-1 md:grid-cols-2  bg-gray-200 rounded-lg font-semibold">
      <div className=" p-4  border border-gray-300 shadow-lg">range: {range} KM</div>
      <div className=" p-4  border border-gray-300 shadow-lg">fly at: {speed}</div>
      <div className=" p-4  border border-gray-300 shadow-lg">can carry up to { warhead}</div>
      <div className=" p-4  border border-gray-300 shadow-lg">{nuclearCapable} thrust to weight ratio</div>
    </div>
    </div>
    {/* <!-- third Grid --> */}
    <div className='text-center w-1/2 mr-auto py-12' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="200">
    <h1 className='text-2xl font-semibold '>BUILD AND USE:</h1>
    <div className="grid grid-cols-1 md:grid-cols-2  bg-gray-200 rounded-lg font-semibold">
      <div className=" p-4  border border-gray-300 shadow-lg">made in {countryOfOrigin}</div>
      <div className=" p-4  border border-gray-300 shadow-lg">build by: {manufacturer}</div>
      <div className=" p-4  border border-gray-300 shadow-lg">use by: {usingCountries}</div>
      <div className=" p-4  border border-gray-300 shadow-lg">cost per unit: {price}</div>
    </div>
    </div>
    <div className="w-full py-12">
              <h1 className="text-2xl font-semibold text-center">More missile</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map((filteredItem, index) => (
                  <Item key={index} {...filteredItem} />
                ))}
              </div>
            </div>
  </div>
</div>


    </div>


    <Footer/>
    </div>
  );
};

export default ItemDetails;