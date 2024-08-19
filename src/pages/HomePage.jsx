import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const backgroundImage = "url('../images/wallpaper3.jpg')";

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage }}>
      <Header />
      <div className="flex flex-col items-center justify-center p-4 text-center">
        <div className="text-white mb-12">
          <h1 className="text-4xl font-extrabold mb-4" data-aos="fade-down">
            Welcome to Aero Strike
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8" data-aos="fade-up">
            Discover detailed information about various aircraft and ICBMs developed by different countries around the world.
          </p>
        </div>

        <section
          className="bg-gray-900 bg-opacity-60 text-white py-12 px-6 w-full md:w-4/5 lg:w-3/4 mx-auto rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-6">Aircraft Overview</h2>
          <p className="text-lg mb-6">
            Our comprehensive overview covers various aircraft models from around the globe. Learn about their design, capabilities, and the role they play in modern aviation.
          </p>
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6 px-3">
              <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Stealth Fighters</h3>
                <p className="text-sm mb-4">
                  Explore stealth fighters developed by leading countries. These aircraft are designed for advanced combat operations with minimal radar visibility.
                </p>
                <img
                  src="/images/stealth_fighter.jpg" // Replace with an actual image URL
                  alt="Stealth Fighter"
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6 px-3">
              <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Transport Aircraft</h3>
                <p className="text-sm mb-4">
                  Learn about transport aircraft used globally for cargo and personnel. These aircraft support logistical operations and humanitarian missions.
                </p>
                <img
                  src="/images/transport_aircraft.jpeg" // Replace with an actual image URL
                  alt="Transport Aircraft"
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6 px-3">
              <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Reconnaissance Drones</h3>
                <p className="text-sm mb-4">
                  Discover reconnaissance drones equipped with the latest technology for surveillance and intelligence gathering.
                </p>
                <img
                  src="/images/Reconnaissance_Drones.jpeg" // Replace with an actual image URL
                  alt="Reconnaissance Drone"
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-gray-800 bg-opacity-60 text-white py-12 px-6 w-full md:w-4/5 lg:w-3/4 mx-auto mt-12 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-6">ICBM Capabilities</h2>
          <p className="text-lg mb-6">
            Get insights into the capabilities of Intercontinental Ballistic Missiles (ICBMs) from various nations. Learn about their strategic roles and technological advancements.
          </p>
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6 px-3">
              <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Long-Range Missiles</h3>
                <p className="text-sm mb-4">
                  Explore long-range missiles capable of striking targets across continents, ensuring strategic deterrence.
                </p>
                <img
                  src="/images/ICBM.webp" // Replace with an actual image URL
                  alt="Long-Range Missile"
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6 px-3">
              <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Multiple Warhead Systems</h3>
                <p className="text-sm mb-4">
                  Review missile systems capable of delivering multiple warheads, enhancing their strategic impact.
                </p>
                <img
                  src="/images/Multiple_Warhead.jpeg" // Replace with an actual image URL
                  alt="Multiple Warhead System"
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6 px-3">
              <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Advanced Guidance Systems</h3>
                <p className="text-sm mb-4">
                  Discover advanced guidance systems that ensure precise targeting and high success rates for ICBMs.
                </p>
                <img
                  src="/images/AdvancedGuidanceSystems.jpeg" // Replace with an actual image URL
                  alt="Advanced Guidance System"
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
