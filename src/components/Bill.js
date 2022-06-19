import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Button,Table } from 'react-bootstrap'
import logo from '../images/snopeslogo_220x.webp'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom' ;

function Bill() {
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();
    const currDate = date;

    const profile = useSelector((state) => state.user);
    // console.log(profile)
    const data = useSelector((state) => state.cart);
    // console.log(data)

    const [price, setprice] = useState(0);

    const total = () => {
      let price = 0;
      if (data.length>0) {
  
        data.map((e) => {
          price += e.price * e.qty;
        });
        setprice(price);
      }
    }

    useEffect(() => {
      total();
    }, [total])
 
    const navigate = useNavigate() ; 
    const goto = () =>{
        navigate("/Home") ;
    }
    return (
        <div>
            <div className='container w-75 align-item-center' style={{ marginTop: "20ex" }}>
               <h3 className='display-6 text-warning mb-4'>Thank for Purchase</h3>
               <div className=''> 
               <Card className='w-75'>
                {/* <Card.Img variant="top" src={logo} style={{width:105}} /> */}
                <Card.Body>
                {/* <Card.Title className='text-center display-5'></Card.Title> */}
                <Card.Text >
                <p>{profile.userObj.username}</p>
                <p>Invoice #12345</p>
                <p>{currDate}</p>           
                <Table striped hover className='text-center'>
                    <thead className='mb-5'>
                    <tr>
                        <td>Description</td>                      
                        <td>Amount</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((e, key) => {
                            return (
                                <>
                                    <tr key={key}>                                     
                                        <td>{e.productImageName1}</td>
                                        <td>${e.price * e.qty}</td>
                                    </tr>

                                </>
                            )
                        }) 
                    }
                    </tbody>
                </Table>       
                </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    <Card.Footer>
                    <div className='float-end border-bottom border-warning  mt-2 mb-3' ><p> SubTotal ({data.length} items ) : <strong>  ${price} </strong>  </p></div> 
                    </Card.Footer>
                </Card>


               </div>      
               <div className='text-end mt-4 '>
               
               <a href="" onClick={()=>goto()} className='text-decoration-none text-warning'> Continue Snooping :) ...</a>

               </div>      
            </div>
        </div>
    )
}

export default Bill