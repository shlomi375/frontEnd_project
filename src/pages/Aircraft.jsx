import React, { useEffect, useState } from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import AircraftCard from '../components/AircraftCard';
import Aos from 'aos';

const Aircraft = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [filter, setFilter] = useState("");
    const [filterCategory, setFilterCategory] = useState("type");

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        fetch('/AircraftArray.json')
        .then((response) => response.json())
        .then(data => {
            console.log('Fetched aircraft data:', data);
            setItems(data);
            setFilteredItems(data);
        })
        .catch((error) => console.error('Error fetching aircraft data:', error));
    }, []);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setFilterCategory(e.target.value);
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        if (filter === "") {
            setFilteredItems(items);
        } else {
            setFilteredItems(items.filter(item => 
                item[filterCategory].toLowerCase().includes(filter.toLowerCase())
            ));
        }
        setCurrentPage(1); 
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return ( 
        <div
            className="relative min-h-screen bg-cover bg-center my-auto"
            style={{
                backgroundImage: "url('../images/wallpaper1.jpg')",
                backgroundAttachment: 'fixed',
            }}
        >   
            <Header />
            <div className="inset-0 bg-black bg-opacity-0">
                <p className="text-center text-4xl font-bold font-serif text-white py-10" data-aos="fade-down">Aircraft</p>
                <div className="container mx-auto p-4" data-aos="zoom-in-up">
                    <form onSubmit={handleFilterSubmit} className="mb-4 flex flex-col md:flex-row items-center justify-center">
                        <select 
                            value={filterCategory} 
                            onChange={handleCategoryChange}
                            className="p-2 mb-2 md:mb-0 md:mr-4 rounded-lg shadow-md focus:outline-none"
                        >
                            <option value="name">Name</option>
                            <option value="category">Type</option>
                            <option value="countryOfOrigin">Country</option>
                            <option value="manufacturer">Manufacturer</option>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentItems.map((item, index) => (
                            <AircraftCard key={index} {...item} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-4 items-center">
                        <button
                            onClick={handleBack}
                            disabled={currentPage === 1}
                            className="px-3 py-1 mx-1 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 disabled:opacity-50"
                        >
                            Back
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={`px-3 py-1 mx-1 rounded-md ${
                                    currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 mx-1 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Aircraft;
