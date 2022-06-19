import React from 'react'
import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import { FaFacebookF, FaPinterestP, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';


const Toddlers = () => {

  let [toddlers, settoddlers] = useState([])

  useEffect(() => {
    getdata()
  }, [])

  const getdata = async () => {
    let res = await axios.get('http://localhost:8000/toddlers')
    settoddlers(res.data);
  }

  return (
    <div>
      <div className=' text-center m-5 ' style={{ padding: "12ex" }}>
        <h2 >Toddly Snoop</h2>
        <div className=' container w-25  text-center'>
          <b><hr className=' bg-warning ' style={{ fontWeight: "bold" }} /></b>
        </div>

      </div>
      {
        toddlers.length != 0 &&

        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>
            <div> <Card productObj={toddlers[0]}> <span>Product</span> </Card></div>
            <div> <Card productObj={toddlers[1]}> <span>Product</span> </Card></div>
            <div> <Card productObj={toddlers[2]}> <span>Product</span> </Card></div>
            <div> <Card productObj={toddlers[3]}> <span>Product</span> </Card></div>
          </div>
        </div>
      }
      <hr />
    </div>

  )
}

export default Toddlers