import { height } from '@mui/system'
import React from 'react'
import back from '../images/landingWW.svg'
import web from '../images/web.svg'
import back2 from '../images/landingWW2.svg'
import fashion from '../images/fashion.svg'
import {useNavigate} from 'react-router-dom' ;
import one from '../images/bodybg.jpg'

function Landing() {
  const navigate = useNavigate();
   
  const goto =() =>{
    navigate('/Login') ;
  }
  const goto2 = () =>{
    navigate('/Signup')
  }
  return (
    // backgroundImage:' url('+back+')'
    <div className='bg-image' style={ {  background: `linear-gradient(190deg, #fa7c30 30%, rgba(0, 0, 0, 0)30%), url(${one})`,backgroundSize: "cover"}}>
    <div className='container p-4'>

 
     <div className='row container ' style={{marginTop:"15vh" , marginBottom:"10vh"}}>
       <div className='text-center col-sm-12 col-md-6 card shadow-lg img-fluid border-2 border-top-0 mb-3  border-start-0 border-warning'> <img src={fashion} className='img-fluid w-50 mb-4 mr-4 ' alt="" /></div>
       <div className='col-sm-12 col-md-6 ms-auto '>
       <h4 className='text-light'>Lorem ipsum dolor sit.</h4>
       <p className='text-light'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sunt deleniti impedit id provident, excepturi neque sequi incidunt debitis explicabo alias eligendi distinctio ullam vel? Nulla atque enim sequi facilis! adipisicing elit. Blanditiis sequi, soluta mollitia delectus aut similique repudiandae, maxime consequatur id ipsam distinctio impedit. Perferendis, excepturi nobis.</p> 
       <p className='text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, iusto debitis nostrum aliquam ipsa unde cum. Fugit, odit? Aperiam enim eius nam consectetur dolore illum vel hic tempore dolorem odit.</p>
       <p className='text-light'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sunt deleniti impedit id provident, excepturi neque sequi incidunt debitis explicabo alias eligendi distinctio ullam vel? Nulla atque enim sequi facilis! adipisicing elit. Blanditiis sequi, soluta mollitia delectus aut similique repudiandae, maxime consequatur id ipsam distinctio impedit. Perferendis, excepturi nobis.</p> 
       </div>
     </div>

     <div className='text-center row container-fluid' style={{verticalAlign:'middle'}}>
      
      <div className='col-sm-12 col-md-3 text-center' >
        <p className=''>New User ? <a href="" className='text-secondary text-decoration-none mx-auto' onClick={()=>goto2()} >Register Now...</a></p>
      </div>
      <div className='col-sm-12 col-md-6 text-center'><h3 className='text-secondary display-3 '>Get In To Snoops...</h3></div>
      <div className='col-sm-12 col-md-3 text-center  '> Already a User ? <a onClick={()=>goto()} className='text-secondary text-decoration-none' href="">Login..</a></div>
       

     </div>

       <div className='row container-fluid p-3' style={{marginTop:"15vh"}}>
       <div className='col-sm-12 col-md-6 ms-auto '>
       <h4 className='text-light '>Lorem ipsum dolor sit.</h4>
       <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis eos libero laudantium error accusamus autem excepturi, officiis officia itaque aperiam necessitatibus maxime hic distinctio suscipit rem accusantium, nam fuga aut. Blanditiis sequi, soluta mollitia delectus aut similique repudiandae, maxime consequatur id ipsam distinctio impedit. Perferendis, excepturi nobis.</p>
       <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rem, corporis minus cum rerum tempora odio dolore iste, adipisci eligendi modi dolorem officiis veritatis facere consequatur! Totam, mollitia quasi. Possimus!</p>
       <p className='text-light'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sunt deleniti impedit id provident, excepturi neque sequi incidunt debitis explicabo alias eligendi distinctio ullam vel? Nulla atque enim sequi facilis! adipisicing elit. Blanditiis sequi, soluta mollitia delectus aut similique repudiandae, maxime consequatur id ipsam distinctio impedit. Perferendis, excepturi nobis.</p> 
       </div>
       <div className='col-sm-12 col-md-6 card shadow-lg img-fluid border-2 border-bottom-0 mb-3 mr-4 border-end-0 border-warning'> 
       <img src={web} className='img-fluid w-75 mb-4 mr-4 ' alt="" />
       </div>
      
      </div>  
      </div> 
    </div> 
    
  )
}

export default Landing 