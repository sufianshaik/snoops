import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { FaFacebookF, FaPinterestP, FaTwitterSquare, FaInstagram } from "react-icons/fa";

function HotFactsSummer() {

  let [hotsummer, sethotsummer] = useState([])
  useEffect(() => {
    getdata()
  }, [])

  const getdata = async () => {
    let res = await axios.get('http://localhost:8000/hotsummer')
    sethotsummer(res.data)
  }

  return (
    <div>
      <div className='text-center ' style={{ padding: "10vw", margin: "0", position: "relative" }}>
        <h2 >Hot Facts Summer</h2>
        {/* <div className=' container w-25  text-center'>
      <b><hr className=' bg-warning ' style={{fontWeight:"bold"}} /></b> 
       </div> */}
        <div className='container mx-auto'>
          <p className='lh-sm'>Vax, snacks, and facts — it's going to be a whole new summer. Celebrate with new
            apparel from Snopes.</p>
        </div>
      </div>

      {/* flex */}
      {
        hotsummer.length != 0 &&


        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>
            <div><Card productObj={hotsummer[0]}><span>Product</span> </Card></div>
            <div><Card productObj={hotsummer[1]}><span>Product</span> </Card></div>
            <div><Card productObj={hotsummer[2]}><span>Product</span> </Card></div>
            <div><Card productObj={hotsummer[3]}><span>Product</span> </Card></div>


          </div>

        </div>
      }

      <hr />
    </div>
  );
}

export default HotFactsSummer