import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route, Link, Router, NavLink, Navigate, Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className='min-vh-100'> <Header /> </header>
      <footer className='mt-auto'> <Footer /> </footer>
    </div>
  );
}

export default App;
