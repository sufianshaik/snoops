import { library } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaPinterestP, FaTwitterSquare, FaInstagram, FaApplePay, FaCcDinersClub } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import { add , remove } from '../store/cartSlice' ;
import { BiPlus,BiMinus } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import EmptyCart from '../images/undraw_empty_cart_co35.svg' ;


function Cart() {

  const dispatch = useDispatch();

  const handle = (obj) => {
    dispatch(add(obj));
  }


  const del = (id) => {
    dispatch(remove(id)) 
  }
 
  const { isSucces } = useSelector((state)=>state.user);
  const navigate = useNavigate() ;
  const goto=()=>{
         navigate("/Login");
  }
  const goto1=()=>{
    navigate("/Bill") ;
  }

  const state = useSelector((state) => state.cart);
  const [price, setprice] = useState(0);

  const total = () => {
    let price = 0;
    if (state.length>0) {

      state.map((e) => {
        price += e.price * e.qty;
      });
      setprice(price);
    }
  }
  useEffect(() => {
    total();
  }, [total])


  return (
    <div>
      <div className=' text-center m-5' style={{ padding: "7ex" }}>
        <h2 className='display-3' >Shopping Cart</h2>
        <div className=' container w-25  text-center'>
          <b><hr className=' bg-warning ' style={{ fontWeight: "bold" }} /></b>
        </div>
      </div>

      <div className=' container text-center '> 
      {
           isSucces != true ?  
           (
             <> 
              <div>
              <h3 className='display-3 text-warning '>Login to continue... </h3>
              <div className='text-end'><a className='text-decoration-none text-warning ' href="" onClick={()=>goto()} >Login...</a></div>
               
              </div>
             
             
                    
             </>
           ) :
           (
             <>
             {
          state.length ?
            <>
              <div className='container w-75 shadow-lg'>
                <Table striped hover  >
                  <thead className='mb-5'>
                    <tr>
                      <th className=''>  <strong>S.No</strong></th>
                      <th className=''>  <strong>Image</strong></th>
                      <th className=''> <strong>Product Description</strong></th>
                      <th className=''> <strong>Qty</strong></th>
                      <th className=''> <strong>Price</strong></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      state.map((e,key) => {
                        return (
                          <>

                            <tr key={e.id}>
                              <td className='text-center'>
                                <p key={key}>{key+1}.</p>
                              </td>
                              <td>
                                <img src={e.productImage1} style={{ width: "10rem", height: "9rem" }} className="img-fluid rounded border-top border-bottom border-warning shadow" alt="COuld not load image" />
                              </td>
                              <td>
                                <p>{e.productImageName1}</p>
                              </td>
                              <td>
                                <p className=''><BiPlus onClick={()=>{ handle(e)}}/> <div className='border rounded img-thumbnail p-1 d-inline m-2 text-center border-warning'>{e.qty}   </div>  <BiMinus onClick={()=>{del(e.id)}}/></p>
                              </td>
                              <td>
                                <p> <strong> ${e.price} </strong> </p>
                              </td>
                              <td>
                                <p onClick={() => del(e.id)}>  </p>
                                {/* <i><AiFillDelete style={{ color: 'red', cursor: 'pointer' }} /></i> */}
                              </td>
                            </tr>
                          </>
                        )
                      })
                    }
                  </tbody>
                </Table>
                <div className='float-end border-bottom border-warning  mt-2 mb-3' ><p> SubTotal ({state.length} items ) : <strong>  ${price} </strong></p></div>
                {/* <div className='float-end border-bottom border-warning  mt-2 mb-3' ><p> <a className='text-warning text-decoration-none' href="" onClick={()=>goto1()}>Click her to download Invoice</a>  </p></div> */}
              </div>

            </>
            :
            <div className='mb-4 '>
              <h3 className='text-warning mb-5'>Your Cart is Empty :( </h3>
              <div className='w-25 mx-auto'><img className='img-fluid' src={EmptyCart} alt="" /></div>
            </div>

        }


             </>
           ) 
         }

        {/* <h1>{JSON.stringify(data.productImageName1)}</h1> */}

      


      </div>

    </div>
  );
}


export default Cart