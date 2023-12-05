  import React from 'react';
  import './App.css'; // Updated import path
  import Navbar from './components/Navbar';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Home from './components/pages/Home';
  import Product from './components/pages/Product';
  import SignUp from './components/pages/SignUp';
  import Aboutus from './components/pages/Aboutus';
  import Medinformation from './components/pages/Medinformation';
  import Medicineform from './components/Medicineform';


  function App() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutus" element={<Aboutus />} />
            <Route exact path="/products" element={<Product />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/med-info" element={<Medinformation />} />
            <Route exact path="/medicine-form" element={<Medicineform/>} />
          </Routes>
        </Router>
      </>
    );
}

export default App;
