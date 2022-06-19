import React from 'react'
import { FaFacebookF, FaPinterestP, FaTwitterSquare, FaInstagram, FaApplePay, FaCcDinersClub } from "react-icons/fa";
import { GrAmex } from "react-icons/gr";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faUnderline } from '@fortawesome/free-solid-svg-icons'
import amazon from '../images/amazon-pay.png'
import gpay from '../images/google-pay.png'
import apay from '../images/apple-pay.png'
import visa from '../images/visa.png'
import paypal from '../images/paypal.png'
import ae from '../images/american-express.png'

function Footer() {
  return (
      <footer className='bg-light p-2'>
        <div className='wrapper p-4 mt-5 container-fluid'>
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
                <div className='' style={{ justifyContent: "space-between" }}>
                  <a className='ml-2 rounded-button' href=""><FaFacebookF color='black' />  </a>
                  <a className='ml-2 rounded-button' href=""> <FaTwitterSquare color='black' />  </a>
                  <a className='ml-2 rounded-button' href="">  <FaPinterestP color='black' /> </a>
                  <a className='ml-2 rounded-button' href=""> <FaInstagram color='black' /> </a>


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
        <hr />
        <div className=' container-fluid mt-4'>
          <p> <small>  © 2022,Snopes </small>  </p>
            <p> <small>Theme by Safe As Milk, Powered by Shopify </small> </p>
        </div>
        
        <div className='footer-bottom '  >
           <div className='container-fluid mx-auto' >
            <a href="#"> <img src={amazon} className="" style={{width:"5rem",marginRight:"1rem"}} alt="" /></a>
             <img src={gpay} style={{width:"3rem",marginRight:"1rem"}} alt="" />
             <img src={apay} style={{width:"3rem",marginRight:"1rem"}} alt="" />
             <img src={visa} style={{width:"3rem",marginRight:"1rem"}} alt="" />
             <img src={paypal} style={{width:"3rem",marginRight:"1rem"}} alt="" />
             <img src={ae} style={{width:"3.4rem",marginRight:"1rem"}} alt="" />

             
                       
        
  
            </div>
          {/* <div className='container' style={{ justifyContent: "space-between" }}>
            <i className='footer'> <a className='ml-2  ' href="">< GrAmex size={"6ex"} color={"black"} />  </a></i>
            <i><a className='ml-2  ' href="">< FaApplePay size={"6ex"} color={"black"} />  </a></i>
            <a className='ml-2 ' href=""><FaCcDinersClub size={"6ex"} color={"black"} />  </a>
            <i><a href=""> </a></i>
            <br />
          </div> */}
        </div>

      </footer>
  
  )
}

export default Footer 