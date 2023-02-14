import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import BuyNow from './BuyNow';
import { Modal, Button , Toast } from 'react-bootstrap'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';


function Card( { productObj } ) {

  // const handleClick = (userObj,img)=>{
  //    console.log(userObj,img)
  //    }
  // console.log(productObj);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handle = (obj) => {
    dispatch(add(obj));
    // toggleShowA();
    handleClose();
  }
  // const [showA, setShowA] = useState(true);
  // const toggleShowA = () => setShowA(!showA);



  return (
    <div className='container '>
      <div className='card border-0 rounded bg-light' >
        <div className='mx-auto'>

          <img className='img-responsive w-100' src={productObj.productImage1} alt="" /></div>
        {/* <div className='card-head'>
      {/* <span>{props.productObj.productImageName1}</span> 
     </div> */}
        {/* <div className='card-body '>
  
     </div> */}
        <div className='card-footer' style={{ color: "" }}>
          <NavLink style={{ textDecoration: "None", color: "Black" }} to={<BuyNow />} onClick={handleShow} > <h6 style={{ fontSize: "1.5vw" }}>{productObj.productImageName1}</h6></NavLink>
          {/* <NavLink style={{ textDecoration: "None", color: "Black" }} to=""> <h5 style={{ fontSize: "1.5vw" }} >{productObj.price}</h5> </NavLink> */}


          <Modal show={show} onHide={handleClose} className="bg-danger" >
            <Modal.Header closeButton>
              <Modal.Title>{productObj.productImageName1}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='container'>
                <div className='row'>
                  <div className='col text-center'>
                    <img className='how mb-2 img' style={{ height: "15rem" }} src={productObj.productImage1} alt="Image Couldn't be load" />
                    <div className='text-center'>
                      <h4 >${productObj.price}</h4>
                    </div>
                  </div>
                  <div className='col'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deserunt nobis recusandae, exercitationem quis harum, repellat hic fugit architecto vel sit tempora nisi at, veniam numquam neque consequatur dolore illum.</p>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={() => handle(productObj) }   >
                Add to Cart 
              </Button>
              </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Card