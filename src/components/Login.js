import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
// import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import { MdLogin } from 'react-icons/Md';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';
// import   from '../images'
import { userLogin } from '../store/userSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import log from '../images/login.svg' 


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm();

  const state = useSelector((state) => state.user)
  // console.log(state);
  let dispatch = useDispatch();

  let navigate = useNavigate();

  const onFormSubmit = (userCredentialsObj) => {
    dispatch(userLogin(userCredentialsObj));
    //// console.log(userCredentialsObj) ;
  }

  useEffect(() => {
    if (state.isSucces) {
      navigate('/Home');
    }
  }, [state.isSucces, state.isError])

  const goto = () => {
    navigate("/Signup")
  }

  return (
    <div className='container' style={{marginTop:"18ex"}} >
      {/* <div className='text-info text-center display-4 mb-3'>Login</div> */}
      <div className='row'>
        <div className='col-sm-12 col-md-8'>
           <img src={log} className='w-75 img-fluid' alt="" />
        </div>

        <div className='col-sm-12 col-md-4'>
        <div className='mb-3 border-0 border-warning border-bottom'><h3 className='text-warning'>Sign In</h3></div>
          <div>
            <Form className='me-auto w-75 mt-4' onSubmit={handleSubmit(onFormSubmit)}>
              {/* username */}
              <Form.Group className="mb-3 form-outline" >
              <FloatingLabel controlId='floatingInput' label='Username' className='mb-2' aria-setsize={'1x'}>
              <Form.Control type="text" placeholder="Enter the username" {...register("username", { required: true })} />
              </FloatingLabel>
                {/* <Form.Label className=''>UserName</Form.Label> */}
               
                {/*validatiopn error messages  */}
                {errors.username && <p className='text-danger'>*Username is required</p>}
              </Form.Group>
              {/* password */}
              <Form.Group className="mb-3" >
               <FloatingLabel controlId='floatingInput' label='Password' className='mb-2'>
               <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
               </FloatingLabel>
                {/* <Form.Label>Password</Form.Label> */}
               
                {errors.password && <p className='text-danger'>*Password  is required</p>}
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
              <Button variant="warning" type="submit">
                Submit <MdLogin />
              </Button>
            </Form>
          </div>
          <div className='mt-3'>
            <p>Not registered yet ?   <a href="" className='text-decoration-none text-warning text-end' onClick={()=>goto()}>Signup</a> </p>
          
          </div>
        </div>
      </div>


      {/* <div className='w-75 mx-auto text-center d-none d-sm-none d-md-block '>2
      </div>
 */}



    </div>
  )
}

export default Login