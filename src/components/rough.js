let productList = [
    {
      id: 1,
      productImageName1: "Snopes Logo T-Shirt (Color)",
      price: 25.00,
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/snopes-products-logo-outlined-shirt-BC-2_540x.jpg?v=1555009969"
    },
    {
      id: 2,
      productImageName1: "Only You! T-Shirt ",
      price: 28.00,
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/snopes-only-you-army-bc_540x.jpeg?v=1555695087"
    },
    {
      id: 3,
      productImageName1: "#DidYouSnopesThat T-Shirt",
      price: 21.00,
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/snopesthat-bc_540x.jpg?v=1554859152"
    },
    {
      id: 4,
      productImageName1: "#facts T-Shirts",
      price: 26.00,
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/facts-tee-bella-canvas_540x.jpg?v=1555695323"
    },
    {
      id: 5,
      productImageName1: "Facts on Facts T-Shirts",
      price: 12.00,
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/snopes-shirt-facts-on-facts-BC-3_540x.jpg?v=1555040814"
    },
    {
      id: 6,
      productImageName1: "Snopes Icon T-shirt",
      price: 15.00,
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/snopes-product-shirt-brand-work-black-BC-2_540x.jpg?v=1554923068"
    },
    {
      id: 7,
      productImageName1: "Check Your Sources T-Shirt",
      price: 19.00,
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/snopes-shirt-check-your-sources-BC-5_360x.jpg?v=1555635204"
    },
    {
      id: 8,
      productImageName1: "Future Fact Checker Onesie",
      price: 20.00,
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/snopes-future-fact-checker-onesie-mockup-yellow_360x.jpg?v=1607104571"
    },
    {
      id: 9,
      productImageName1: "Snopes Tote",
      price: 31.00,
      productImage1: "https://cdn.shopify.com/s/files/1/0006/4189/2410/products/large-eco-tote-black-5fcf6b91df0bb_360x.jpg?v=1607429012"
    }
  ]


<div className='container '>
      <div className='card border-0 rounded bg-light' >
        <div className='mx-auto'>
          <img className='img-responsive w-100' src={productObj.productImage1} alt="" /></div>
        <div className='card-footer' style={{ color: "" }}>
          <NavLink style={{ textDecoration: "None", color: "Black" }} to={<BuyNow />} onClick={handleShow} > <h6 style={{ fontSize: "1.5vw" }}>{productObj.productImageName1}</h6></NavLink>
          {/* <NavLink style={{ textDecoration: "None", color: "Black" }} to=""> <h5 style={{ fontSize: "1.5vw" }} >{productObj.price}</h5> </NavLink> */}


          <Modal show={show} onHide={handleClose} className="bg-danger" >
            <Modal.Header closeButton>
              <Modal.Title>{bookObj.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='container'>
                <div className='row'>
                  <div className='col text-center'>
                    <img className='how mb-2 img' style={{ height: "15rem" }} src={bookObj.image} alt="Image Couldn't be load" />
                    <div className='text-center'>
                      <h4 >${bookObj.price}</h4>
                      <h4 >${bookObj.pages}</h4>
                    </div>
                  </div>
                  <div className='col'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deserunt nobis recusandae, exercitationem quis harum, repellat hic fugit architecto vel sit tempora nisi at, veniam numquam neque consequatur dolore illum.</p>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
            {/* onClick={() => handle(productObj) } */}
              <Button variant="success" >
                Add to Cart 
              </Button>
              </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>