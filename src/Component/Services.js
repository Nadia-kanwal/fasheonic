import React,{Component} from 'react'
import Header from './Header';
import '../Animate.css'
import '../Responsive.css'
import Footer from './Footer';
class Services extends Component{
render(){
  return(
<div>

<header>
            <div className="container">
              <div className="colorlib-navbar-brand">
            
              </div>
              <a href="/Header2" className="js-colorlib-nav-toggle colorlib-nav-toggle" style={{width:'3%',height:'30px'}}><i /></a>
            </div>
          </header>
        
      <section className="no-padding one-third-screen position-relative wow fadeIn">
        <div className=" z-index-0" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 display-table one-third-screen page-title-large">
              <div className="display-table-cell vertical-align-middle text-center">
                {/* start sub title */}
                <span className="display-block text-white opacity6 margin-10px-bottom alt-font">Order Customized Dress making to designers for women, men and kids</span>
                {/* end sub title */}
                {/* start page title */}
                <h1 className="alt-font text-white font-weight-600 width-55 sm-width-80 xs-width-100 center-col no-margin-bottom">Purchasing Designer's dress at your footstep</h1>
                {/* end page title */}
              </div>
            </div>
            <div className="down-section text-center"><a href="#section-down" className="inner-link"><i className="" /></a></div>
          </div>
        </div>
        <div className="swiper-auto-fade swiper-container z-index-minus2 position-absolute top-0 width-100 height-100">
          <div className="swiper-wrapper">
        

          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={require("../pimages/2.jpg")} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../pimages/homepage-9-parallax-img2.jpg")}  alt="Second slide" />
          </div>
        
          </div>
          </div>
          </div>
         
        </div>
      </section>

      <section className=" no-padding-bottom wow fadeIn  bg-light-pink" id="section-down bg-dark ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 center-col margin-six-bottom text-center last-paragraph-no-margin">
              <div className="alt-font text-deep-pink margin-10px-bottom text-uppercase text-small">We combine Designers and Customers at one Platform</div>
              <h5 className="alt-font text-extra-dark-gray font-weight-600">Beautiful &amp; Attractive Fashion Art</h5>
              <p className="width-80 center-col display-inline-block xs-width-100">The customer can demand custom dress-making to the designer by defining some ideal range if the designer finds it up-to mark or by satisfied mutual dealing of cost he/she will accept the order.</p>
            </div>
          </div>
        </div>
        <div className="container-fluid wow fadeIn">
          <div className="row">
            <div className="col-md-12 text-center">
              <img src={require("../pimages/arttt.jpg")} alt="" />
            </div>
          </div>
        </div>
      </section>
        <section className=" no-padding-tb   wow fadeIn last-paragraph-no-margin">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-8 col-md-9 center-col margin-eight-bottom text-center last-paragraph-no-margin">
            <br></br>
              <div className="alt-font text-deep-pink margin-10px-bottom text-uppercase text-small">Our Services</div>
              <h5 className="alt-font text-extra-dark-gray font-weight-600">We provide high quality and cost effective Designer & Customer services</h5>                        
            </div>
          </div>
          <div className="row">
            {/* start feature box item */}
            <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-25px-bottom wow fadeInUp">
              <div className="feature-box-16 xs-width-100">
                <img src={require("../pimages/shop3.jpg")} alt="" />
                <div className="feature-box-content text-center">
                  <div className="opacity-full-dark bg-extra-dark-gray" />
                  <div className="display-table height-100 width-100 position-relative">
                    <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                      <div className="text-white alt-font text-medium margin-15px-bottom">Customized Dress Making</div> 
                      <p className="width-85 center-col text-extra-light-gray">Designer never stitches customized dress for the customer. But Now the customer can order customized dress making from the middle-level designers who has perfect expertise and is within customer budget.</p>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-25px-bottom wow fadeInUp" data-wow-delay="0.25s">
              <div className="feature-box-16 xs-width-100">
                <img src={require("../pimages/quality.jpg")} alt="" />
                <div className="feature-box-content text-center text-white">
                  <div className="opacity-full-dark bg-extra-dark-gray" />
                  <div className="display-table height-100 width-100 position-relative">
                    <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                      <div className="text-white alt-font text-medium margin-15px-bottom">Embroidery work</div> 
                      <p className="width-85 center-col text-extra-light-gray">Customer can also go for customized purchasing i.e. making some changes like adding or subtracting designs, changing colour, exact customer measurements etc. on designer dress.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div className="col-md-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
              <div className="feature-box-16 xs-width-100">
                <img src={require("../pimages/relation.jpg")} alt="" />
                <div className="feature-box-content text-center text-white">
                  <div className="opacity-full-dark bg-extra-dark-gray" />
                  <div className="display-table height-100 width-100 position-relative">
                    <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                      <div className="text-white alt-font text-medium margin-15px-bottom">View Lattest fashion</div> 
                      <p className="width-85 center-col text-extra-light-gray">As our application is for all type of designer. So, the fashion designer can also launch their new fashion. They can also sell it i.e. customized dress purchasing if the customer demands.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end feature box item */}
          </div> 
        </div>
      </section>
      <section className=" wow fadeIn md-padding-two-lr"  >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 center-col margin-eight-bottom text-center last-paragraph-no-margin">
              <div className="alt-font text-deep-pink margin-10px-bottom text-uppercase text-small" style={{color:'black'}}>Find more creative ideas for your dress</div>
              <h5 className="alt-font text-extra-dark-gray font-weight-600">We Care For Your Clothing</h5>                        
            </div>
          </div>
          <div className="row equalize">
            {/* start feature box item */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 margin-six-bottom md-margin-six-bottom xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin">
              <div className="feature-box-5 position-relative">
                <div className="feature-content">
                  
                  <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600"> Easy Dress-Making from Designers</div>
                  <p>The customer can order customized dress making from the middle-level designers who has perfect expertise and is within customer budget. These designer can also buy cloth, design, make embroidery etc. for the customer as well.</p>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 margin-six-bottom md-margin-six-bottom xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.2s">
              <div className="feature-box-5 position-relative">
                <i className="icon-pricetags text-medium-gray icon-medium" />
                <div className="feature-content">
                  <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Purchase Designer Dress</div>
                  <p>Middle-level designers can now sell their clothes online and also refer stores where dress is currently available (for sophisticated customer) and which would be within customer budget.</p>
                </div>
              </div>
            </div>
            {/* end feature box item*/}
            {/* start feature box item*/}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 margin-six-bottom md-margin-six-bottom xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.4s">
              <div className="feature-box-5 position-relative">
                <i className="icon-pictures text-medium-gray icon-medium" />
                <div className="feature-content">
                  <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Demand Changes on Designer Dress</div>
                  <p>The customer likes the dress he/she purchases exactly the way it is. For this reason a concept of customized dress purchasing arises .i.e. the customer can demand remove or add any design, change length etc. according to his demand.</p>
                </div>
              </div>
            </div>
            {/* end feature box item*/}
            {/* start feature box item*/}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 sm-margin-six-bottom md-margin-six-bottom xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin">
              <div className="feature-box-5 position-relative ">
                <i className="icon-mobile text-medium-gray icon-medium" />
                <div className="feature-content">
                  <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">View Latest Fashion </div>
                  <p>The fashion designer can also launch their new fashion. They can also sell it i.e. customized dress purchasing if the customer demands.Standard dress measurements makes the customer bounded. </p>
                </div>
              </div>
            </div>
            {/* end feature box item*/}
            {/* start feature box item*/}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.2s">
              <div className="feature-box-5 position-relative">
                <i className="icon-target text-medium-gray icon-medium" />
                <div className="feature-content">
                  <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Genuine Reviews</div>
                  <p>Fake reviews are found on many online products. In order to avoid this we will guarantee the customer with the genuine reviews which will be collected after the customer experiences the designer at dress-making, purchasing and custom purchasing.</p>
                </div>
              </div>
            </div>
            {/* end feature box item*/}
            {/* start feature box item*/}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.4s">
              <div className="feature-box-5 position-relative">
                <i className="icon-tools text-medium-gray icon-medium" />
                <div className="feature-content">
                  <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Dress Measures and Delivery Flexibility</div>
                  <p>Standard dress measurements makes the customer bounded. So, now the customer can edit their dress measurements while customize purchase and dress making.</p>
                </div>
              </div>
            </div>
            {/* end feature box item*/}
          </div>
        </div>
        
      </section>

                 
      
      <section className=" no-padding-tb wow fadeIn ">
   
          <div className="row">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div class="col-md-12 hover-option4 margin-5px-bottom">
                        <div class="swiper-multy-row-container overflow-hidden">
                            <div class="swiper-wrapper">
                            
                                <div class="swiper-slide grid-item">
                                    <a href="single-project-page-01.html">
                                        <figure>
                                            <div class="portfolio-img bg-extra-dark-gray">
                                              {/* <img src={require("../pimages/shop1.jpg")} style={{width:'25%',height:'600px'}}/>
                                              
                                               <img src={require("../pimage/shop2.jpg")} style={{width:'25%',height:'600px'}}/> 
                                               <img src={require("../pimage/shop444.jpg")} style={{width:'25%',height:'600px'}}/>
                                               <img src={require("../pimages/shop666.jpg")} style={{width:'25%',height:'600px'}}/>
                                           */}
                                               <div className="col-md-3  wow fadeInUp" data-wow-delay="0.6s">
                          <div className="feature-box-16 xs-width-100">
                            <img src={require("../pimages/shop1.jpg")} style={{height:'500px'}} alt="" />
                            <div className="feature-box-content text-center text-white">
                              <div className="opacity-full-dark bg-extra-dark-gray" />
                              <div className="display-table height-100 width-100 position-relative">
                                <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                                  <div className="text-white alt-font text-medium margin-15px-bottom">Dress quality</div> 
                                  <p className="width-85 center-col text-extra-light-gray">Middle-level designers can now sell their clothes online and also refer stores where dress is currently available (for sophisticated customer) and which would be within customer budget.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3  wow fadeInUp" data-wow-delay="0.6s">
                          <div className="feature-box-16 xs-width-100">
                            <img src={require("../pimages/4 (16).jpeg")} style={{height:'500px'}} alt="" />
                            <div className="feature-box-content text-center text-white">
                              <div className="opacity-full-dark bg-extra-dark-gray" />
                              <div className="display-table height-100 width-100 position-relative">
                                <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                                  <div className="text-white alt-font text-medium margin-15px-bottom">Fashion Art</div> 
                                  <p className="width-85 center-col text-extra-light-gray">The customer can demand custom dress-making to the designer by defining some ideal range if the designer finds it up-to mark or by satisfied mutual dealing of cost he/she will accept the order.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3  wow fadeInUp" data-wow-delay="0.6s">
                          <div className="feature-box-16 xs-width-100">
                            <img src={require("../pimages/shop7.jpg")} style={{height:'500px'}} alt="" />
                            <div className="feature-box-content text-center text-white">
                              <div className="opacity-full-dark bg-extra-dark-gray" />
                              <div className="display-table height-100 width-100 position-relative">
                                <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                                  <div className="text-white alt-font text-medium margin-15px-bottom">Unstitch dresses</div> 
                                  <p className="width-85 center-col text-extra-light-gray">The customer can also purchase designer dress either online or visit shop if they want.  making some changes like adding or subtracting designs, changing colour, exact customer measurements etc. on designer dress.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3  wow fadeInUp" data-wow-delay="0.6s">
                          <div className="feature-box-16 xs-width-100">
                            <img src={require("../pimage/shop444.jpg")} style={{height:'500px'}} alt="" />
                            <div className="feature-box-content text-center text-white">
                              <div className="opacity-full-dark bg-extra-dark-gray" />
                              <div className="display-table height-100 width-100 position-relative">
                                <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                                  <div className="text-white alt-font text-medium margin-15px-bottom">Handmade work</div> 
                                  <p className="width-85 center-col text-extra-light-gray">The Fashion designer can also make customize dress of the fashion which is not even launched if the customer demands</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                                          </div>
                                       
                                        </figure>
   </a>
   </div>
   </div>
   </div>
   </div>
   </div>

          <div className="carousel-item">
          <div class="col-md-12 hover-option4 margin-5px-bottom">
                        <div class="swiper-multy-row-container overflow-hidden">
                            <div class="swiper-wrapper">
                            
                                <div class="swiper-slide grid-item">
                                    <a href="single-project-page-01.html">
                                        <figure>
                                            <div class="portfolio-img bg-extra-dark-gray">
                                            <div className="col-md-3  wow fadeInUp" data-wow-delay="0.6s">
                          <div className="feature-box-16 xs-width-100">
                            <img src={require("../pimages/shop666.jpg")} style={{height:'500px'}} alt="" />
                            <div className="feature-box-content text-center text-white">
                              <div className="opacity-full-dark bg-extra-dark-gray" />
                              <div className="display-table height-100 width-100 position-relative">
                                <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                                  <div className="text-white alt-font text-medium margin-15px-bottom">Designer show Creativity</div> 
                                  <p className="width-85 center-col text-extra-light-gray">Standard dress measurements makes the customer bounded. So, now the customer can edit their dress measurements while customize purchase and dress making</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3  wow fadeInUp" data-wow-delay="0.6s">
                          <div className="feature-box-16 xs-width-100">
                            <img src={require("../pimages/shop8.jpg")} style={{height:'500px'}} alt="" />
                            <div className="feature-box-content text-center text-white">
                              <div className="opacity-full-dark bg-extra-dark-gray" />
                              <div className="display-table height-100 width-100 position-relative">
                                <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                                  <div className="text-white alt-font text-medium margin-15px-bottom">Customized Dress Purchasing
</div> 
                                  <p className="width-85 center-col text-extra-light-gray">Customer likes the dress he/she purchases exactly the way it is. For this reason a concept of customized dress purchasing arises .i.e. the customer can demand remove or add any design, change length etc. according to his demand.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3  wow fadeInUp" data-wow-delay="0.6s">
                          <div className="feature-box-16 xs-width-100">
                            <img src={require("../pimages/dress2.jpg")} style={{height:'500px'}} alt="" />
                            <div className="feature-box-content text-center text-white">
                              <div className="opacity-full-dark bg-extra-dark-gray" />
                              <div className="display-table height-100 width-100 position-relative">
                                <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">

                                  <div className="text-white alt-font text-medium margin-15px-bottom">Dress Purchasing within Budget</div> 
                                  <p className="width-85 center-col text-extra-light-gray">Middle-level designers can now sell their clothes online and also refer stores where dress is currently available (for sophisticated customer) and which would be within customer budget.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3  wow fadeInUp" data-wow-delay="0.6s">
                          <div className="feature-box-16 xs-width-100">
                            <img src={require("../pimages/shop5.jpg")} style={{height:'500px'}} alt="" />
                            <div className="feature-box-content text-center text-white">
                              <div className="opacity-full-dark bg-extra-dark-gray" />
                              <div className="display-table height-100 width-100 position-relative">
                                <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                                  <div className="text-white alt-font text-medium margin-15px-bottom">Customized Dress Making</div> 
                                  <p className="width-85 center-col text-extra-light-gray">Designer never stitches customized dress for the customer. But Now the customer can order customized dress making from the middle-level designers who has perfect expertise and is within customer budget.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                                              {/* <img src={require("../pimages/shop7.jpg")} style={{width:'25%',height:'600px'}}/>
                                               <img src={require("../pimage/shop8.jpg")} style={{width:'25%',height:'600px'}}/> 
                                               <img src={require("../pimages/shop5.jpg")} style={{width:'25%',height:'600px'}}/>
                                               <img src={require("../pimages/shop2.jpg")} style={{width:'25%',height:'600px'}}/>
                                           */}
                                          </div>
                                        
                                        </figure>
   </a>
   </div>
   </div>
   </div>
   </div>
   </div>
                                
  </div></div>
  </div>
 
          
    </section>
    <section className="wow fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 center-col margin-eight-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
              <div className="alt-font text-medium-gray margin-10px-bottom text-uppercase text-small">The best digital solutions</div>
              <h5 className="alt-font text-extra-dark-gray font-weight-600">Trendy and stylish Customized Dress Making By Designer</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 center-col text-center no-padding tab-style1" id="animated-tab">
              {/* start tab navigation */}
              <ul className="nav nav-tabs margin-50px-bottom xs-no-margin-bottom"> 
              <li className="nav">
            <img src="https://image.flaticon.com/icons/svg/809/809507.svg" width="30" height="50" alt="Discussion free icon" title="Discussion free icon"/>
               
                <a href="#tab6_sec1" data-toggle="tab" className="xs-min-height-inherit xs-no-padding"><span></span><span className="alt-font text-medium-gray text-uppercase text-small">01. Discussion</span></a></li>
                <li className="nav">
                <img src="https://image.flaticon.com/icons/svg/2060/2060534.svg" width="30" height="50" alt="Rocket free icon" title="Rocket free icon"/>
   <a href="#tab6_sec2" data-toggle="tab" className="xs-min-height-inherit xs-no-padding"><span><i className="icon-tools icon-medium text-medium-gray margin-10px-bottom display-block" /></span><span className="alt-font text-medium-gray text-uppercase text-small">02. Creative Concept</span></a></li>
                <li className="nav">
                <img src="https://image.flaticon.com/icons/svg/1246/1246234.svg" width="30" height="50" alt="Gift free icon" title="Gift free icon"/>
                  <a href="#tab6_sec3" data-toggle="tab" className="xs-min-height-inherit xs-no-padding"><span><i className="icon-megaphone icon-medium text-medium-gray margin-10px-bottom display-block" /></span><span className="alt-font text-medium-gray text-uppercase text-small">03. Measurements</span></a></li>
                <li className="nav">
                <img src="https://image.flaticon.com/icons/png/128/149/149217.png"width="30" height="50" srcset="https://image.flaticon.com/icons/png/256/149/149217.png 4x"/>
                  <a href="#tab6_sec4" data-toggle="tab" className="xs-min-height-inherit xs-no-padding"><span><i className="icon-heart icon-medium text-medium-gray margin-10px-bottom display-block" /></span><span className="alt-font text-medium-gray text-uppercase text-small">04. Happy Customers</span></a></li>
              </ul>
              <br></br>
              <br></br>
              {/* end tab navigation */}
              <div className="tab-content">
                {/* start tab content */}
                <div id="tab6_sec1" className="center-col tab-pane fade in active"> 
                  <div className="tab-pane fade in">
                    <div className="equalize sm-equalize-auto">
                      <div className="col-md-4 text-left sm-margin-30px-bottom">
                        <img src={require("../pimages/discusiion.jpg")} style={{height:'300px'}} alt=""/>
                      </div>
                      <div className="col-md-4 text-left sm-margin-30px-bottom">
                        <div className="position-relative padding-45px-all sm-padding-30px-all height-100 width-100 border-all border-width-2 border-color-extra-light-gray display-table">
                          <div className="display-table-cell vertical-align-middle">
                            <span className="text-medium font-weight-600 alt-font text-uppercase margin-10px-bottom display-block text-extra-dark-gray">01. Discussion</span>
                            <span className="alt-font text-medium-gray text-medium">Designers can easily interact with the direct customer response on the particular fashion and will help them to know the customer choice by getting likes and reviews etc.</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-left">
                        <div className="position-relative padding-45px-all sm-padding-30px-all height-100 width-100 bg-light-gray display-table">
                          <div className="display-table-cell vertical-align-middle">
                            <span className="text-extra-dark-gray alt-font margin-10px-bottom display-inline-block text-medium">Don’t worry, you’re in safe hands</span>
                            <p>Middle-level designers can now sell their clothes online and also refer stores where dress is currently available (for sophisticated customer) and which would be within customer budget
</p>
                            <a href="/about" className="btn btn-dark-gray btn-very-small text-extra-small">About Company</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end tab content */}
                {/* start tab content */}
                <div id="tab6_sec2" className="center-col tab-pane fade in"> 
                  <div className="tab-pane fade in"> 
                    <div className="equalize sm-equalize-auto">
                      <div className="col-md-4 text-left sm-margin-30px-bottom">
                        <img src={require("../pimages/dressmaking.jpg")} alt="" />
                      </div>
                      <div className="col-md-4 text-left sm-margin-30px-bottom">
                        <div className="position-relative padding-45px-all sm-padding-30px-all height-100 width-100 border-all border-width-2 border-color-extra-light-gray display-table">
                          <div className="display-table-cell vertical-align-middle">
                            <span className="text-medium font-weight-600 alt-font text-uppercase margin-10px-bottom display-block text-extra-dark-gray">02. Creative Concept</span>
                            <span className="alt-font text-medium-gray text-medium">Fashion designers can show off their art of fashion creation before launching and can view the reviews on customer on that fashion.</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-left">
                        <div className="position-relative padding-45px-all sm-padding-30px-all height-100 width-100 bg-light-gray display-table">
                          <div className="display-table-cell vertical-align-middle">
                            <span className="text-extra-dark-gray alt-font margin-10px-bottom display-inline-block text-medium">We are a fasheonic service </span>
                            <p>Fashion designers can show off their art of fashion creation before launching and can view the reviews on customer on that fashion..</p>
                            <a href="/about" className="btn btn-dark-gray btn-very-small text-extra-small">About Company</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end tab content */}
                {/* start tab content */}
                <div id="tab6_sec3" className="center-col tab-pane fade in"> 
                  <div className="tab-pane fade in"> 
                    <div className="equalize sm-equalize-auto">
                      <div className="col-md-4 text-left sm-margin-30px-bottom">
                        <img src={require("../pimages/production3.jpg")}style={{height:'300px'}} alt="" />
                      </div>
                      <div className="col-md-4 text-left sm-margin-30px-bottom">
                        <div className="position-relative padding-45px-all sm-padding-30px-all height-100 width-100 border-all border-width-2 border-color-extra-light-gray display-table">
                          <div className="display-table-cell vertical-align-middle">
                            <span className="text-medium font-weight-600 alt-font text-uppercase margin-10px-bottom display-block text-extra-dark-gray">03.Measurements</span>
                            <span className="alt-font text-medium-gray text-medium">Dress measurements followed are usually standardized i.e. small, medium, large etc. But we will make it dynamic i.e. editing measurement for small or other sizes will be possible now.</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-left">
                        <div className="position-relative padding-45px-all sm-padding-30px-all height-100 width-100 bg-light-gray display-table">
                          <div className="display-table-cell vertical-align-middle">
                            <span className="text-extra-dark-gray alt-font margin-10px-bottom display-inline-block text-medium">Delivering beautiful Dresses</span>
                            <p>Delivery Methods are not just static the customer can either go for home delivery or can also visit shop as not all the customer rely on online clothing.</p>
                            <a href="/about" className="btn btn-dark-gray btn-very-small text-extra-small">About Company</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end tab content */}
                {/* start tab content */}
                <div id="tab6_sec4" className="center-col tab-pane fade in"> 
                  <div className="tab-pane fade in"> 
                    <div className="equalize sm-equalize-auto">
                      <div className="col-md-4 text-left sm-margin-30px-bottom">
                        <img src={require("../pimages/services-img7.jpg")}style={{height:'320px'}} alt="" />
                      </div>
                      <div className="col-md-4 text-left sm-margin-30px-bottom">
                        <div className="position-relative padding-45px-all sm-padding-30px-all height-100 width-100 border-all border-width-2 border-color-extra-light-gray display-table">
                          <div className="display-table-cell vertical-align-middle">
                            <span className="text-medium font-weight-600 alt-font text-uppercase margin-10px-bottom display-block text-extra-dark-gray">04. Happy Customer</span>
                            <span className="alt-font text-medium-gray text-medium">
Genuine reviews is what the customer wants. After the customer has received his order of dress-making or purchasing or custom purchase, it is necessary for him to give reviews in order to help other customers as well.
</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-left">
                        <div className="position-relative padding-45px-all sm-padding-30px-all height-100 width-100 bg-light-gray display-table">
                          <div className="display-table-cell vertical-align-middle">
                            <span className="text-extra-dark-gray alt-font margin-10px-bottom display-inline-block text-medium">We believe in growth</span>
                            <p>Return Policy will be available. Free return services will be provided in case of dress-customization can be made several of times i.e. to satisfy customer at all cost.

Customer can enjoy promo code offers through spin wheel. 
</p>
                            <a href="/about" className="btn btn-dark-gray btn-very-small text-extra-small">About Company</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end tab content */}
              </div>
              {/* end tab content section */}
            </div>
            {/* end tab */}
          </div>
        </div>
      </section>
   

  
    
     
      <Footer/>
      </div>

    

  );
}
}
export default Services;