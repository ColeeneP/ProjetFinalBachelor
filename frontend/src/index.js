import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Tenants from './pages/Tenants';
import Property from './pages/Property';
import AddTenant from './scenes/AddTenant';
import AddProperty from './scenes/AddProperty';
import AddPayment from './scenes/AddPayment';
import OneProperty from './pages/OneProperty';
import OneTenant from './pages/OneTenant';
import ModifyProperty from './scenes/ModifyProperty';
import ModifyTenant from './scenes/ModifyTenant';
import AddRental from './scenes/AddRental';
import AddInventory from './scenes/AddInventory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route path="/tenants" element={<Tenants />} />
        <Route path="/oneTenant/:id" element={<OneTenant />}/>        
        <Route path="/createTenant" element={<AddTenant />} />
        <Route path="/oneTenant/:id/modifyTenant" element={<ModifyTenant/>} />

        <Route path="/property" element={<Property />} />
        <Route path="/oneProperty/:id" element={<OneProperty />}/>        
        <Route path="/createProperty" element={<AddProperty />} />
        <Route path="/oneProperty/:id/modifyProperty" element={<ModifyProperty />} />
        <Route path="/oneProperty/:id/createInventory" element={<AddInventory />} />

        <Route path="/createPayment" element={<AddPayment />} />

        <Route path="/createRental" element={<AddRental />} />
      </Routes>
    <App /> 
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
