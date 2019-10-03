
import React, { Component } from 'react';
class Header2 extends Component {
  render() {
    return (
       <div>
      {/* //   <div id="colorlib-page"> */}
          <header>
            <div className="container">
       {/* <a href="/home" className="js-colorlib-nav-toggle colorlib-nav-toggle "><i /></a>    */}
                
                 <a href="/home" className=" js-colorlib-nav-toggle colorlib-nav-toggle active "style={{backgroundColor:'white',width:'3%',height:'40px'}}><i></i></a>
                
            </div>
            <img src={require('../pimages/blog-page-03-img1.jpg')} style={{ width: '50%', height: '600px' }} />

          </header>
          <section className=" ftco-no-pb  ftco-about-section " style={{ backgroundColor: 'black' ,height:'700px'}}>
         
            {/* <div className="container-fluid px-0"> */}
              {/* <div className="row d-md-flex text-wrapper"> */}
      
               
                <div className="one-half half-text d-flex justify-content-end align-items-center">
                  <div className="text-inner pl-md-4">
                    <span className="subheading">Fasheonic</span>
                    <h5 className="">Designer’s Clothing & Fashion</h5>
                    <ul className="my-4">
                      <li className=""><a href="/home"><span><h6>Home</h6></span></a></li>
                      <li><a href="/about"><span><h6>About</h6></span></a></li> 
                      <li><a href="/Services"><span><h6>Services</h6></span></a></li> 
                      <li><a href="/Shop"><span><h6>Shops</h6></span></a></li>
                      <li><a href="/blog"><span><h6>Blog</h6></span></a></li> 
                      <li><a href="/contact"><span><h6>Contact</h6></span></a></li>
                      
                    </ul>
                  </div>
                </div>
              
        
          </section>
      </div>
    );
  }
}
export default Header2;