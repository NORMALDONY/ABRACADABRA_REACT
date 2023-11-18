import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './styles/App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Masters from './pages/Masters/Masters';
import Price from './pages/Price/Price'
import Courses from './pages/Courses/Courses';
import Correction from './pages/Correction/Correction';
import CreateTattoo from './pages/CreateTattoo/CreateTattoo';
import Permanent from './pages/Permanent/Permanent';
import Design from './pages/Design/Design';
import Piercing from './pages/Piercing/Piercing';
import Brows from './pages/Brows/Brows';
import Certificate from './pages/Certificate/Certificate';
import Yura from './pages/Works/Yura/Yura';
import Nastya from './pages/Works/Nastya/Nastya';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/masters" element={<Masters />} />
					<Route path="/price" element={<Price />} />
					<Route path="/courses" element={<Courses />} />

					<Route path="/correction" element={<Correction />} />
					<Route path="/createTattoo" element={<CreateTattoo />} />
					<Route path="/permanent" element={<Permanent />} />
					<Route path="/design" element={<Design />} />
					<Route path="/piercing" element={<Piercing />} />
					<Route path="/certificate" element={<Certificate />} />

					<Route path="/brow" element={<Brows />} />
					<Route path="/yura" element={<Yura />} />
					<Route path="/nastya" element={<Nastya />} />


				</Routes>

				<Footer />
			</BrowserRouter>
    </div>
  );
}

export default App;
