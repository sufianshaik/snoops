import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { MdLogin } from 'react-icons/Md'
import {  RiUser3Fill } from 'react-icons/ri' ;
import { MdEmail } from 'react-icons/md' ;
import { RiLockPasswordFill } from 'react-icons/ri' ;
import { GiModernCity } from 'react-icons/gi' ;
import sign from '../images/signup.svg' 


function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm();

  const navigate = useNavigate() ;

  const goto = () => {
        navigate("/Login") ;
  }
  
  const onFormSubmit = (userObj) => {

   axios
   .post("http://localhost:9002/user-api/create-user", userObj)  
      .then(response => {
        console.log(response) ;
  
        // console.log(response.data.message)
        alert(response.data.message);
        if (response.data.message === "The new user object succesfully inserted in to db") {
          // using navigate to move from signup page to login page
          navigate('/Login');
          // console.log('Successfull');
        }
      })
      .catch( (error) => {
        // console.log(error)
        alert("Something went wrong in creating a user");
      } )
  }

  return (
    <div className='container mb-5' style={{marginTop:"15ex"}}>
      <div className='row mb-3 mt-2' >
      <div className='col-md-4 col-sm-4 border-0 border-right border-bottom border-warning  '>
          <Form className='w-75 mx-auto' onSubmit={handleSubmit(onFormSubmit)} >
          {/* username */}
          {/* <Form.Title> SignUp </Form.Title> */}
          <div className='border-0 border-bottom border-warning mb-4 text-center  '>
           <h3 className='text-warning mb-3'>Sign Up</h3>
          </div>
          
          <Form.Group className='mb-4 ' >
            <div className="d-flex">
            <Form.Label ><RiUser3Fill size={"1.14vw"} style={{marginRight:".52vw"}}/></Form.Label>
            <Form.Control type="text" placeholder="Your name" {...register("username", { required: true })} />
            </div>
            {/*validatiopn error messages  */}
            {errors.username && <p className='text-warning'>*Username is required</p>}
          </Form.Group>
          {/* password */}
          <Form.Group className='mb-4' >
            <div className=" d-flex">
            <Form.Label><RiLockPasswordFill size={"1.14vw"} style={{marginRight:".52vw"}}/></Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
            </div>            
            {errors.password && <p className='text-warning'>*Password  is required</p>}
            {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-4 " >
            <div className='d-flex'>
            <Form.Label><MdEmail size={"1.14vw"} style={{marginRight:".52vw"}}/></Form.Label>
            <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
            </div>           
            {errors.email && <p className='text-warning'>*Email is required</p>}
            <Form.Text className="text-muted ml-4">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          {/* <Form.Group className="mb-3" >
            <Form.Label>Select image</Form.Label>
            <Form.Control type="file" placeholder="image" {...register("image", { required: true })}
              onChange={(event) => onImageSelect(event)} />
            {errors.image && <p className='text-danger'>*image is Required</p>}
          </Form.Group> */}

          {/* Form image upload */}
          <Form.Group className="mb-4" >
              <div className='d-flex'>
              <Form.Label><GiModernCity size={"1.14vw"} style={{marginRight:".52vw"}}/></Form.Label>
            <Form.Control type="text" placeholder="City" {...register("city", { required: true })} />
              </div>
           
            {errors.city && <p className='text-warning'>*City is required</p>}
          </Form.Group>
         <div className='text-center'>
         <Button variant="warning" type="submit">
            Register <MdLogin />
          </Button> 
         </div>
       
        </Form>
       </div> 
       <div className='col-sm-8 col-md-8 '>
          <img className='w-100  img-fluid' src={sign} alt="Error Occured in Loading image..." />
       </div>
      </div>
      <div>
        <p>Already a user ? <a href='' onClick={ ()=>goto() }  >Login</a></p>
      </div>
    </div>
  );
}

export default Signup