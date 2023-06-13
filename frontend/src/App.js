// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import styles, media
import './App.css';
//data
import products from './data/products.js'

// Import Components and Pages
import Nav from './components/Nav';
import HomePage from './pages/HomePage.js';
import AddRepairPage from './pages/AddRepairPage.js';
import EditRepairPage from './pages/EditRepairPage.js';
import RepairPage from './pages/RepairPage.js';
import TopicsPage from './pages/TopicsPage.js';
import GalleryPage from './pages/ImagesPage.js';
import StaffingPage from './pages/StaffingPage.js';
import OrderingPage from './pages/OrderingPage.js';

// Define the function that renders the content in routes using State.
function App() {

  const [repair, setRepairToEdit] = useState([])

  return (
    <div className="App">
      <BrowserRouter>

      <header className="App-header">
          <h1>Clinton Merritt Website Demo
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
           </h1>
        </header>

          <Nav />

          <main>
          <section className="App-article">
                <Routes> 
                    <Route path="/" element={<HomePage />} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/gallery" element={<GalleryPage />} /> 
                    <Route path="/ordering" element={<OrderingPage products={products} />} /> 
                    <Route path="/staffing" element={<StaffingPage />} /> 
                    <Route path="/repair" element={<RepairPage setRepair={setRepairToEdit}/>} />
                    <Route path="/create-repair" element={<AddRepairPage />} /> 
                    <Route path="/update-repair" element={<EditRepairPage repairToEdit={repair} />} />
                </Routes>
              </section>
          </main>

          <footer>
          <p><cite>&copy; 2023 Clinton Merritt</cite></p>
        </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;