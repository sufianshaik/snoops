import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Card from './Card';
import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import { FaFacebookF, FaPinterestP, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const OurTshirts1 = () => {

  let [tshirts1List, settshirts1List] = useState([])

  useEffect(() => {
    getdata();
  }, [])

  const getdata = async () => {
    let res = await axios.get('http://localhost:8000/tshirts1List');
    settshirts1List(res.data)
  }

  return (
    <div className='container'>
      <div className='container-fluid'>
        <div className=' text-center m-5 ' style={{ padding: "8ex" }}>
          <h2 style={{ fontSize: "2.4vw" }} >T-Shirts 1</h2>
        </div>
        {/* flex */}
        {
          tshirts1List.length != 0 &&
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>
            <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>  <Card productObj={tshirts1List[0]}> </Card>   </div>
            <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>  <Card productObj={tshirts1List[1]}> </Card>   </div>
            <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>  <Card productObj={tshirts1List[2]}> </Card>   </div>
            <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>  <Card productObj={tshirts1List[3]}> </Card>   </div>
            <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>  <Card productObj={tshirts1List[4]}> </Card>   </div>
            <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>  <Card productObj={tshirts1List[5]}> </Card>   </div>
            <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>  <Card productObj={tshirts1List[6]}> </Card>   </div>
            <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>  <Card productObj={tshirts1List[7]}> </Card>   </div>
            <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'>  <Card productObj={tshirts1List[8]}> </Card>   </div>
          </div>
        }
      </div>
    </div>
  )
}

export default OurTshirts1