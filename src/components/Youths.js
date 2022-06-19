import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import { FaFacebookF, FaPinterestP, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import Card from './Card';


const Youths = () => {

  let [youth, setyouth] = useState([])
  useEffect(() => {
    getdata();
  }, [])

  const getdata = async () => {
    let res = await axios.get('http://localhost:8000/youth')
    setyouth(res.data);
  }

  return (
    <div>
      <div className=' text-center m-5 ' style={{ padding: "12ex" }}>
        <h2 >Snoopy Youth</h2>
        <div className=' container w-25  text-center'>
          <b><hr className=' bg-warning ' style={{ fontWeight: "bold" }} /></b>
        </div>

      </div>

      {
        youth.length != 0 &&


        <div className='contianer'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>
            <div> <Card productObj={youth[0]}> <span>Product</span> </Card></div>
            <div> <Card productObj={youth[0]}> <span>Product</span> </Card></div>
            <div> <Card productObj={youth[0]}> <span>Product</span> </Card></div>
            <div> <Card productObj={youth[0]}> <span>Product</span> </Card></div>

          </div>

        </div>
      }
      <hr />
    </div>
  )
}

export default Youths