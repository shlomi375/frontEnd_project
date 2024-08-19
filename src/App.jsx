import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './pages/ItemDetail';
import HomePage from './pages/HomePage';
import BallisticMissile from './pages/BallisticMissile';
import Aircraft from './pages/Aircraft';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import AircraftDetail from './pages/AircraftDetail';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        

        <Route path="/" element={<HomePage />} />
        <Route path="/BallisticMissile" element={<BallisticMissile />} />
        <Route path="/Aircraft" element={<Aircraft />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
       
        <Route path="/BallisticMissile/item/:itemName" element={<ItemDetail />} />
        <Route path="/Aircraft/aircraftCard/:itemName" element={<AircraftDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
