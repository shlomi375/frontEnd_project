import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const backgroundImage = "url('../images/wallpaper3.jpg')";

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage }}>
      <Header />
      <div className="flex items-center justify-center text-center p-4">
        <div className="bg-black text-white bg-opacity-75 p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label className="block  text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Login
              </button>
            </div>
          </form>
          <div className="mt-4">
            <p >
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:text-blue-700 font-bold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
