import React from 'react'
import Card from './Card';
import { useEffect,useState } from 'react';
import axios from 'axios';
import {Routes,Route,Link,NavLink,Navigate} from 'react-router-dom';
import {FaFacebookF,FaPinterestP,FaTwitterSquare,FaInstagram} from "react-icons/fa";

const OurTshirts2 = () => {

let [tshirts2List,settshirts2List]=useState([])

useEffect(()=>{
getdata();
},[])

const getdata =async ()=>{
  let res= await axios.get('http://localhost:8000/tshirts2List');
  settshirts2List(res.data);
}

  return (
    <div>
    <div className=' text-center m-5 ' style={{padding:"12ex"}}>
       <h2 >T-Shirts 2</h2>
       <p>This is page 2</p>
       <div className=' container w-25  text-center'>
      <b><hr className=' bg-warning ' style={{fontWeight:"bold"}} /></b> 
       </div>
      
     </div>
     

    {/* flex */}

    {
      tshirts2List.length!=0 &&
   
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts2List[0]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts2List[1]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts2List[2]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts2List[3]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts2List[4]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts2List[5]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts2List[6]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts2List[7]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts2List[8]}> </Card></div>
    </div>
  }
    {/* counter page */}       
    </div>
  )
}

export default OurTshirts2