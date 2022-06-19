import React from 'react'
import { Routes, Route, Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Redirect from 'react-router-dom'
import Card from './Card';
import { FaFacebookF, FaPinterestP, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import OurTshirts1 from './OurTshirts1';
import OurTshirts2 from './OurTshirts2';
import OurTshirts3 from './OurTshirts3';

const OurTshirts = () => {
  let productsList = [
    {
      productImageName1: "product 1 ",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/womens-relaxed-t-shirt-white-front-60d64c6a0091e_540x.jpg?v=1624657004",

    },
    {
      productImageName1: "product 2",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/unisex-premium-t-shirt-white-front-60d64d92ed8b1_540x.jpg?v=1624657400",

    },
    {
      productImageName1: "product 3",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/unisex-premium-t-shirt-white-front-60d64d92ed8b1_540x.jpg?v=1624657400",

    },
    {
      productImageName1: "product 3",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/unisex-premium-t-shirt-white-front-60d64d92ed8b1_540x.jpg?v=1624657400",

    },
    {
      productImageName1: "product 1 ",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/womens-relaxed-t-shirt-white-front-60d64c6a0091e_540x.jpg?v=1624657004",

    },
    {
      productImageName1: "product 1 ",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/womens-relaxed-t-shirt-white-front-60d64c6a0091e_540x.jpg?v=1624657004",

    },
    {
      productImageName1: "product 1 ",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/womens-relaxed-t-shirt-white-front-60d64c6a0091e_540x.jpg?v=1624657004",

    },
    {
      productImageName1: "product 1 ",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/womens-relaxed-t-shirt-white-front-60d64c6a0091e_540x.jpg?v=1624657004",

    },
    {
      productImageName1: "product 1 ",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/womens-relaxed-t-shirt-white-front-60d64c6a0091e_540x.jpg?v=1624657004",

    },


  ]

  const Navigate = useNavigate()
  function navi() {
    Navigate("OurTshirts1")
  }

  return (
    <div>
      <div className='container'> </div>
      <Outlet />
      <ul className='nav nav-pills'>
        <li className='nav-item mx-auto'>
          <Link className="nav-link active" to="">1</Link>
        </li>
        <li className='nav-item mx-auto'>
          <Link className="nav-link" to="OurTshirts2">2 </Link>
        </li>
        <li className='nav-item mx-auto'>
          <Link className="nav-link" to="OurTshirts3">3</Link>
        </li>
      </ul>
      <hr />
    </div>
  )
}

export default OurTshirts