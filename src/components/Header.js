import { useState } from 'react';
import React from 'react'
import { Routes, Route, Link, Router, NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import OurTshirts from './OurTshirts';
import Snoopskids from './Snoopskids';
import HotFactsSummer from './HotFactsSummer';
import HateMailForGood from './HateMailForGood';
import AboutSnoops from './AboutSnoops';
import Signup from './Signup';
import Home from './Home';
import Cart from './Cart'
import logo from '../images/snopeslogo_220x.webp'
import OurTshirts1 from './OurTshirts1';
import OurTshirts2 from './OurTshirts2';
import OurTshirts3 from './OurTshirts3';
import Babies from './Babies';
import Toddlers from './Toddlers';
import Youths from './Youths';
import Welcome from './Landing'
import Login from './Login';
import { Helmet } from 'react-helmet'
import BuyNow from './BuyNow';
import { FaTimes, FaOpencart } from "react-icons/fa";
import { Button, Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import Card from './Card';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import Landing from './Landing';
import Bill from './Bill' ;

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const data = useSelector((state) => state.cart)

  const { userObj, isError, isLoading, isSucces, errMsg } = useSelector((state) => state.user);
  // console.log(isSucces)




  return (
    <div>
      <div className='sidebar-nav' id="sidebar">
        <nav className=" navbar navbar-light bg-warning fixedtop " style={{ height: ".1vw" }}>
          <div className="container-fluid"  >
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              
              <span className="burger six text-center navbar-toggler-icon"></span>
              
              
            </button>

            {/*  */}
            <div className='text-center'>
            <NavLink className="nav-link" to="Welcome"> <img src={logo} style={{ width: 105, textAlign: "center" }} /></NavLink>             
            </div>
            <div className=" p-4 ">
              <NavLink style={{ color: "black" }} className="nav-link active" to="Cart" >
                <Badge badgeContent={data.length} color="primary">
                  <i className=''><FaOpencart /></i>
                </Badge>
              </NavLink>
            </div>
            <div className="offcanvas offcanvas-start show" data-bs-scroll="true"  id="offcanvasNavbar" aria-labelledby='offcanvasNavbarLabel'>
              <div className='offcanvas-header'>
                <button className='btn btn-close' id="" data-bs-dismiss="offcanvas" aria-label='close' ></button>
              </div>
              <div className='offcanvas-body container sidebar'>
                <ul className="navbar-nav " id=''  aria-expanded="false">
                  {
                    isSucces != true ? (
                      <>
                        <li className='nav-item' >
                          <NavLink className="nav-link "  to="" aria-selected="true"> <h5>Welcome</h5> <hr /> </NavLink>
                        </li>

                        <li className='nav-item'>
                          <NavLink className="nav-link"   to="AboutSnoops" aria-selected="false"> <h5>About Snoops</h5> <hr /></NavLink>
                        </li>

                        <li className='nav-item'>
                          <NavLink className="nav-link"  to="Login" aria-selected="false"> <h5>Login</h5><hr /> </NavLink>
                        </li>

                        {/* <li className='nav-item'>
                          <NavLink className="nav-link" to="Login"> <h5>Login</h5><hr /> </NavLink>
                        </li> */}
                      </>
                    ) :
                      (
                        <>
                          <li className='nav-item' aria-current="page" >
                            <NavLink className="nav-link active" to="Home" > <h5> Home</h5> <hr /> </NavLink>
                          </li>

                          <li className='nav-item'>
                            <NavLink className="nav-link " to="OurTshirts"> <h5> Our T-shirts </h5>  <hr /></NavLink>
                          </li>

                          <li className='nav-item '>
                            <NavLink className="nav-link" data-bs-toggle="collapse" to="#Snoopcollapse" aria-expanded="false" aria-controls="collapseWidthExample" role="button" > <h5> Snoops kids </h5> <hr /></NavLink>

                            <div className='collapse' id='Snoopcollapse'  >
                              <ul className=' container  btn-toggle-nav list-unstyled'>
                                <li className='nav-item'><NavLink className="nav-link active" to="Babies" > <p> Babies  </p> <hr /> </NavLink></li>
                                <li className='nav-item'><NavLink className="nav-link " to="Toddlers" > <p>Toddlers  </p> <hr /> </NavLink></li>
                                <li className='nav-item'><NavLink className="nav-link " to="Youths" > <p>  Youths</p> <hr /> </NavLink></li>
                              </ul>
                            </div>

                          </li>

                          <li className='nav-item'>
                            <NavLink className="nav-link" to="HotFactsSummer"> <h5>Hot facts summer</h5><hr /></NavLink>
                          </li>

                          <li className='nav-item'>
                            <NavLink className="nav-link" to="HateMailForGood"> <h5>Hate Mail For Good</h5><hr /></NavLink>
                          </li>
                          <li className='nav-item'>
                            <NavLink className="nav-link" to=""><a className='text-decoration-none text-dark' href=""><h5>Logout</h5></a><hr /></NavLink>
                          </li>
                          <li className='nav-item'>
                            <NavLink className="nav-link" to="Bill"> <h5>Bill</h5><hr /></NavLink>
                          </li>
                        </>
                      )
                  }
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="Home" element={<Home />} />
        <Route exact path='OurTshirts' element={<OurTshirts />} >
          <Route path='' element={<OurTshirts1 />} />
          <Route path='OurTshirts2' element={<OurTshirts2 />} />
          <Route path='OurTshirts3' element={<OurTshirts3 />} />
        </Route>
        <Route path="Snoopkids" element={<Snoopskids />} />
        <Route path='Babies' element={<Babies />} />
        <Route path='Toddlers' element={<Toddlers />} />
        <Route path='Youths' element={<Youths />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="HotFactsSummer" element={<HotFactsSummer />} />
        <Route path="HateMailForGood" element={<HateMailForGood />} />
        <Route path="AboutSnoops" element={<AboutSnoops />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="Bill" element={<Bill />} />
        <Route path="Welcome" element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default Header