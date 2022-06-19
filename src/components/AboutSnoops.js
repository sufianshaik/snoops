import React from 'react'
import picture from '../images/picture.jpg'
import { Carousel } from 'react-bootstrap';
import { useState} from 'react'
import about1 from '../images/about1.png'
import one from '../images/bodybg.jpg'

function AboutSnoops() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='app'>
      <div className='container text-center mb-4' style={{ marginTop: "16ex" }}>
        <h3> This is about page </h3>
        <h4 className='display-3'>Meet our team </h4>
        <p className='text-secondary mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolor dolores doloribus veritatis iste reprehenderit amet suscipit libero sunt, accusamus perferendis, voluptas nostrum alias? Modi, repellendus. Facilis, officiis odit placeat error provident deleniti ducimus.</p>
        <button type='submit border-4 mt-3 mb-5 border-warning p-2'> contact us </button>
      </div>


      <div className='container p-3'>
        <div className=' row mb-4'>
          <div className='col-sm-12 col-md-4'>
            <div className='card text-center border-0'>
              <div className='text-center mb-3'> <img src={picture} style={{ width: "20%", height: "14%", borderRadius: "50%" }} alt="" /></div>
              <div ><p>World Wide</p></div>
              <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, at quidem. Iusto, ea excepturi cum possimus sunt exercitationem maiores maxime!</p></div>
            </div>
          </div>

          <div className='col-sm-12 col-md-4'>
            <div className='card text-center border-0'>
              <div className='text-center mb-3'><img src={picture} style={{ width: "20%", height: "14%", borderRadius: "50%" }} alt="" /></div>
              <div><p>Unique styles</p></div>
              <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, at quidem. Iusto, ea excepturi cum possimus sunt exercitationem maiores maxime!</p></div>
            </div>
          </div>

          <div className='col-sm-12 col-md-4'>
            <div className='card text-center border-0'>
              <div className='text-center mb-3'><img src={picture} style={{ width: "20%", height: "14%", borderRadius: "50%" }} alt="" /></div>
              <div><p>Creativity</p></div>
              <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, at quidem. Iusto, ea excepturi cum possimus sunt exercitationem maiores maxime!</p></div>
            </div>
          </div>
        </div>

      </div>
     
      <div className='container-fluid' style={{ background: `linear-gradient(190deg, #fa7c30 30%, rgba(0, 0, 0, 0)30%), url(${one})`,backgroundSize:"cover" , height:"50%"}}>
        <div className='text-center mb-5 mt-2 ' style={{margin:"3%"}}>
        <h3 className='display-4'> Our Clients</h3>
        <h3>Thanks For Choosing Us</h3>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} className='mb-5'>
          <Carousel.Item>
          <div className='mx-auto text-center' style={{margin:"8%"}}>
          <img className="center-block" src={about1}  style={{width:"10%" , height:"8%" , borderRadius:"50%"}} alt="Second slide"/>
          </div>
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
             
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
          <div className='mx-auto text-center' style={{margin:"8%"}}>
          <img className="center-block" src={about1}  style={{width:"10%" , height:"8%" , borderRadius:"50%"}} alt="Second slide"/>

          </div>
           
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
          <div className='mx-auto text-center' style={{margin:"8%"}} >
             <img className="center-block" src={about1}  style={{width:"10%" , height:"8%" , borderRadius:"50%"}} alt="Second slide"/>
          </div>
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>

      </div>

      <div className='container text-center'>
       <h3 className='display-4'>Contact Us</h3>

      </div>

    </div>
  );
}

export default AboutSnoops