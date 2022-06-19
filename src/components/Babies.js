import React from 'react'
import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import { FaFacebookF, FaPinterestP, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import Card from './Card';

const Babies = () => {
  let babies = [
    {
      productImageName1: "Birdie Short Sleeve Tee",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/baby-premium-tee-black-front-60c82ce807e8c_540x.jpg?v=1623731437"

    },
    {
      productImageName1: "Kitty Short Sleeve Tee",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/baby-premium-tee-black-front-60c82dafdaec7_540x.jpg?v=1623731636"

    },
    {
      productImageName1: "Dino Short Sleeve Tee",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/baby-premium-tee-heather-columbia-blue-front-60c82c3fc641b_540x.jpg?v=1623731268"

    },
    {
      productImageName1: "Alien Short Sleeve Tee",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/baby-premium-tee-black-front-60c82e4daacf0_540x.jpg?v=1623731793"

    },




  ]

  return (
    <div>
      <div className=' text-center m-5 ' style={{ padding: "12ex" }}>
        <h2 >Snopes kids</h2>
        <div className=' container w-25  text-center'>
          <b><hr className=' bg-warning ' style={{ fontWeight: "bold" }} /></b>
        </div>
      </div>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>
        <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>    <Card productObj={babies[0]}> <span>Product</span> </Card> </div>
        <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>    <Card productObj={babies[1]}> <span>Product</span> </Card> </div>
        <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>    <Card productObj={babies[2]}> <span>Product</span> </Card> </div>
        <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>    <Card productObj={babies[3]}> <span>Product</span> </Card> </div>
      </div>
    </div>
  )
}

export default Babies