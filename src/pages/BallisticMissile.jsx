import React, { useEffect, useState } from 'react';
import Item from '../components/item';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';

const BallisticMissile = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [filterCategory, setFilterCategory] = useState('category'); 

  useEffect(() => {
    fetch('/MissileArray.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setItems(data);
        setFilteredItems(data);
      })
      .catch(error => console.error('Error fetching missile data:', error));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    
    const filterLower = filter.toLowerCase();

    if (filter === '') {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter(item => {
          const value = item[filterCategory] || '';
          return value.toLowerCase().includes(filterLower);
        })
      );
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center my-auto"
      style={{
        backgroundImage: "url('../images/wallpaper2.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
      <div className="inset-0 bg-black bg-opacity-0">
        <p className="text-center text-4xl font-bold font-serif text-white py-10" data-aos="fade-down">Ballistic Missile</p>
        <div className="container mx-auto p-4">
          <form onSubmit={handleFilterSubmit} className="mb-4 flex flex-col md:flex-row items-center justify-center">
            <select
              value={filterCategory}
              onChange={handleCategoryChange}
              className="p-2 mb-2 md:mb-0 md:mr-4 rounded-lg shadow-md focus:outline-none"
            >
              <option value="name">Name</option>
              <option value="subCategory">Category</option>
              <option value="manufacturer">Manufacturer</option>
              <option value="countryOfOrigin">Country</option>
            
            </select>
            <input
              type="text"
              className="p-2 w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-md focus:outline-none"
              placeholder="Search for..."
              value={filter}
              onChange={handleFilterChange}
            />
            <button
              type="submit"
              className="ml-4 p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Search
            </button>
          </form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="zoom-in-up">
            {filteredItems.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BallisticMissile;
