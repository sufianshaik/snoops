import React from 'react'
import Card from './Card';
import { FaFacebookF, FaPinterestP, FaTwitterSquare, FaInstagram } from "react-icons/fa";

function HateMailForGood() {
  let productsList = [
    {
      productImageName1: "product 1 ",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/womens-relaxed-t-shirt-white-front-60d64c6a0091e_540x.jpg?v=1624657004",

    },
    {
      productImageName1: "product 2",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/unisex-premium-t-shirt-white-front-60d64d92ed8b1_540x.jpg?v=1624657400",

    },
    {
      productImageName1: "product 3",
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/unisex-premium-t-shirt-white-front-60d64d92ed8b1_540x.jpg?v=1624657400",

    },
  ]
  return (
    <div>
      <div className=' text-center m-5 ' style={{ padding: "12ex" }}>
        <h2 >Limited Edition: Hate Mail for Good</h2>
        <div className=' container w-25  text-center'>
          <b><hr className=' bg-warning ' style={{ fontWeight: "bold" }} /></b>
        </div>
        <p>Reprints of authentic hate mail sent to celebrity Andy Richter, not on behalf of Snopes. All proceeds go toward Snopes mission to fight misinformation in all its forms.</p>
        <p>And a huge thank you to Andy Richter for helping Snopes turn lemons into lemonade.</p>
      </div>


      {/* flex */}
      <div className='d-flex mt-5 container-fluid'>
        <Card productObj={productsList[0]}> <span>Product</span> </Card>
        <Card productObj={productsList[1]}> <span>Product</span> </Card>
        <Card productObj={productsList[2]}> <span>Product</span> </Card>
      </div>
      <hr />
    </div>
  );
}

export default HateMailForGood