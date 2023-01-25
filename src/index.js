import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from '../src/components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import TripDetails from './components/TripDetails';
import BookYourTrip from './components/BookYourTrip';
import Teton from './components/rivers/Teton';
import SouthFork from './components/rivers/SouthFork';
import HenrysFork from './components/rivers/HenrysFork';
import Guides from './components/Guides';
import GlobalStyles from './components/styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book-now' element={<BookYourTrip />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/trip-details' element={<TripDetails />} />
        <Route path='/teton' element={<Teton />} />
        <Route path='/south-fork' element={<SouthFork />} />
        <Route path='/henrys-fork' element={<HenrysFork />} />
        <Route path='/guides' element={<Guides />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
