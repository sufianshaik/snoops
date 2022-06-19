import React from 'react'
import Card from './Card';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import {Routes,Route,Link,NavLink,Navigate} from 'react-router-dom';
import {FaFacebookF,FaPinterestP,FaTwitterSquare,FaInstagram} from "react-icons/fa";

const OurTshirts3 = () => {


  let [tshirts3List,settshirts3List]=useState([])
  useEffect(()=>{
   getdata();
  },[])

  const getdata = async ()=>{
    let res = await axios.get('http://localhost:8000/tshirts3List');
    settshirts3List(res.data);
  }

  return (
    <div>
    <div className=' text-center m-5 ' style={{padding:"12ex"}}>
       <h2 >T-Shirts 3</h2>
       <div className=' container w-25  text-center'>
      <b><hr className=' bg-warning ' style={{fontWeight:"bold"}} /></b> 
       </div>
      
     </div>
     
     {
      tshirts3List.length!=0 &&
   
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts3List[0]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts3List[1]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts3List[2]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts3List[3]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts3List[4]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts3List[5]}> </Card></div>

    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts3List[6]}> </Card></div>
    <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={tshirts3List[7]}> </Card></div>

    </div>
  }

    {/* flex */}
    {/* <div className='d-flex mt-5 container-fluid'>
    <Card productObj={productsList[0]}> <span>Product</span> </Card>
    <Card productObj={productsList[1]}> <span>Product</span> </Card>
    <Card productObj={productsList[2]}> <span>Product</span> </Card>
    </div>
    <div className='d-flex mt-5 container-fluid'>
    <Card productObj={productsList[3]}> <span>Product</span> </Card>
    <Card productObj={productsList[4]}> <span>Product</span> </Card>
    <Card productObj={productsList[5]}> <span>Product</span> </Card> */}
    
    {/* <div className='d-flex mt-5 container-fluid'>
    <Card productObj={productsList[6]}> <span>Product</span> </Card>
    <Card productObj={productsList[7]}> <span>Product</span> </Card>
    <Card productObj={productsList[8]}> <span>Product</span> </Card>
    </div> */}
    {/* <div className='container-fluid mt-5' >
      <div className=''>
        <div className='col-sm-4'>
        <Card productObj={productsList[6]}> <span>Product</span> </Card>
          </div>
          <div className='col-sm-4'>
        <Card productObj={productsList[7]}> <span>Product</span> </Card>
          </div>
          </div>                 
      </div>  */}
    {/* counter page */}
    {/* <div className='d-flex container mt-4'> 
     <div className='row border-1 mx-auto'>
       <div className='col-sm-3' >1</div>
       <div className='col-sm-3' >2</div>
       <div className='col-sm-3' >3</div>
       <div className='col-sm-3' >4</div>
     </div>

    </div> */}
   
     {/* <div className='row border-1 mx-auto'>
       <div className='col-sm-3' > <NavLink className="Nav-link" aria-current="page" to="OurTshirts1">1</NavLink> </div>
       <div className='col-sm-3' ><NavLink className="Nav-link" aria-current="page" to="OurTshirts2">2 </NavLink></div>
       <div className='col-sm-3' ><NavLink className="Nav-link" aria-current="page" to="OurTshirts3">3</NavLink></div>
       <div className='col-sm-3' ><NavLink className="Nav-link" aria-current="page" to="">4</NavLink></div>
     </div> */}

{/* 

     <ul className='nav nav-pills'>
      <li className='nav-item mx-auto'>
        <Link className="nav-link active" to="">1</Link>
      </li>
      <li className='nav-item mx-auto'>
      <Link className="nav-link"  to="OurTshirts2">2 </Link>a
      </li>
      <li className='nav-item mx-auto'>
      <Link className="nav-link"  to="OurTshirts3">3</Link>
      </li>
      
    </ul> */}

    


      
  {/* Footer notes  */}
    
    {/* <div className=' p-4 mt-5 container-fluid'>
      <div className='row me-auto'>        
      <div className='col-sm-4 '>          
          <h5> Snopes.com</h5>
          <p>The internet's most trusted fact-checking resource</p>
        </div>
        <div className='col-sm-4'>    
        <h5>Contact</h5>
        <div>
          <p>shop@snopes.com</p>
          <p>(858) 859-0156</p>
          <p>864 Grand Ave,#256</p>
          <p>San Diaego California</p>
          <p>92109 United States</p>
          <div className='' style={{justifyContent:"space-between"}}>
          <a className='ml-2 rounded-button' href=""><FaFacebookF color='black' />  </a>
          <a className='ml-2 rounded-button' href=""> <FaTwitterSquare color='black' />  </a>
          <a className='ml-2 rounded-button' href="">  <FaPinterestP color='black'/> </a>
          <a className='ml-2 rounded-button' href=""> <FaInstagram color='black'/> </a>
          
         
          </div>
        </div>    
        </div>
        <div className='col-sm-4'>
          <h5>Legal</h5>
         <div>
           <p>Privacy Policy</p>
           <p>Terms of Use</p>
           <p>Refund Policy</p>
         </div>        
        </div>
        </div>
    </div>
<div className='p-4 mt-2  container-fluid mt-4'>
<p><small>  © 2022,Snopes</small>
<p> <small>Theme by Safe As Milk, Powered by Shopify </small> </p></p>
 

</div> */}
{/* 
<div className='footer-bottom bg-info' >
  <div className='container'><h1>Hello</h1> </div>
  
 </div>
     */}

    
    </div>
  )
}

export default OurTshirts3