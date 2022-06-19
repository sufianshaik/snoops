import React from 'react'
import Card from './Card';
import { FaFacebookF, FaPinterestP, FaTwitterSquare, FaInstagram, FaApplePay, FaCcDinersClub } from "react-icons/fa";
import { GrAmex } from "react-icons/gr";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faUnderline } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getDefaultNormalizer } from '@testing-library/react';
import { useSelector,useDispatch } from 'react-redux';


function Home() {

  let [productsList, setproductsList] = useState([])

  useEffect(() => {
    getdata();
  }, [])
 
  const getdata = async () => {
    let res = await axios.get('http://localhost:8000/productsList');
    setproductsList(res.data);
  }    

  
 
 


  return (
      <div className='container'>

        <div className=' text-center container-fluid m-5 ' style={{ padding: "3vw"}}>
          {/* style={{textDecoration:"Underline",textDecorationColor:"orange",textUnderlineOffset:""}} */}
          <div>
            
          <h2 className='' >The Truth Never Felt So Good</h2>
          </div>
         
       

          <p>All proceeds from this store help support Snopes.
          </p>
          <h2 className='mt-5'>Snopes Merch</h2>
          <div className=' container w-25  text-center'>
          <b><hr className=' bg-warning ' style={{ fontWeight: "bold" }} /></b>
        </div>
        </div>


        {/* flex */}
        {productsList.length != 0 &&

          <div className='container home'  >

           
              <div className='row row-cols-1 me-auto row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>

                <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={productsList[0]}>  </Card></div>
                <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={productsList[1]}>  </Card></div>
                <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={productsList[3]}>  </Card></div>
                <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={productsList[3]}>  </Card></div>
                <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={productsList[4]}>  </Card></div>
                <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={productsList[5]}>  </Card></div>
                <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={productsList[6]}>  </Card></div>
                <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={productsList[7]}>  </Card></div>
                <div className='col-sm-4 cols-md-4 mt-3 mb-3 how'><Card productObj={productsList[8]}>  </Card></div>
              </div>
            


            <hr />

          </div>
        }
      </div>
   
  );
}

export default Home;