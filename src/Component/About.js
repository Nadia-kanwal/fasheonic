import React,{Component} from 'react';
import Footer from './Footer';
class About extends Component{
    render(){
        return(
<div className="About">
<header>
            <div className="container">
              <div className="colorlib-navbar-brand">  
              </div>
              <a href="/Header2" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
            </div>
          </header>
           <img src={require('../images/about-12.jpg')} style={{height:'400px',width:'100%'}}/>
       
    
      <section className=" no-padding-tb wow fadeIn last-paragraph-no-margin">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12 center-col margin-five-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
              <br></br>
              <div className="alt-font text-medium-gray margin-5px-bottom text-uppercase text-small">Who we are?</div>
                <h5 className="alt-font text-extra-dark-gray font-weight-600">About Us</h5> 
                <p className="col-md-15">Fasheonic is a social media like mobile application which provides a common platform for middle level designers and the customer. This application for the purely based on eastern or western clothing of men, women and kids.
                  Here the customer can demand custom dress-making to the designer by defining some ideal range if the designer finds it up-to mark or by satisfied mutual dealing of cost he/she will accept the order, they can even purchase cloth for the ideal customer dress if they want and then the Dress-making activities will begin. 
                  
 The customer can also purchase designer dress either online or visit shop if they want. Customer can also go for customized purchasing i.e. making some changes like adding or subtracting designs, changing colour, exact customer measurements etc. on designer dress. </p>
              
              </div>
            </div>
            <div className="row">
            {/* start feature box item */}
            <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-25px-bottom wow fadeInUp">
              <div className="feature-box-16 xs-width-100">
              
                <div className="feature-box-content text-center">
                  <div className="opacity-full-dark bg-extra-dark-gray" />
                  <div className="display-table height-100 width-100 position-relative">
                    <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                      <div className="text-white alt-font text-medium margin-15px-bottom">We believe in creativity</div> 
                      <p className="width-85 center-col text-extra-light-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    </div>
                  </div>
                </div>
              </div>  
              </div>
              </div>
              </div>
              </section>

          <div>
          
            
        
          </div>

<section className=" no-padding-tb wow fadeIn animated animated">
        <div className="container"> 
          <div className="row equalize sm-equalize-auto">
            <div className="col-md-5 col-sm-12 col-xs-12 text-center sm-margin-30px-bottom wow fadeInLeft">
              <div className="display-table width-100 height-100">
                <div className="display-table-cell vertical-align-middle width-100 height-100">
                  <img src={require("../pimages/d1.jpg" )}alt="" className="border-radius-6 width-100" />
                </div>
              </div>
            </div> 
            <div className="col-md-7 col-sm-12 col-xs-12 wow fadeInRight" data-wow-delay="0.2s">
              <div className="display-table width-100 height-100">
                <div className="display-table-cell vertical-align-middle padding-twelve-lr sm-text-center sm-no-padding width-100">
                  <span className="text-deep-pink alt-font margin-10px-bottom display-inline-block text-medium">Don’t worry, you’re in safe hands.</span>
                  <h6 className="alt-font text-extra-dark-gray">We are committed to our customers’ success from start to finish. Our input helps make their solutions.</h6>
                  <p>The customer can order customized dress making from the middle-level designers who has perfect expertise and is within customer budget. These designer can also buy cloth, design, make embroidery etc. for the customer as well.</p>
                  <a href="/services" className="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top"><i className="fa fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true" /> Our Services</a>
                </div>
              </div>
            </div>
          </div>
          <div className="divider-full bg-extra-light-gray margin-seven-bottom margin-eight-top" />
          {/* start feature box */}
          <div className="row">
            {/* start feature box item */}
            <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-15px-bottom xs-text-center wow fadeInUp">
              <div className="col-md-3 col-sm-4 col-xs-12 no-padding-left xs-no-padding-lr pull-left xs-margin-15px-bottom">
                <i className="icon-desktop text-medium-gray icon-extra-medium top-6" />
              </div>
              <div className="col-md-9 col-sm-8 col-xs-12 no-padding">
                <span className="margin-5px-bottom text-extra-dark-gray alt-font display-block font-weight-600">
Biding on Order
</span>
                <p className="width-75 md-width-100">The Customer while ordering for customized dress making will set the range of dress, Now the designer can bid the order. </p>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-15px-bottom xs-text-center wow fadeInUp" data-wow-delay="0.2s">
              <div className="col-md-3 col-sm-4 col-xs-12 no-padding-left xs-no-padding-lr pull-left xs-margin-15px-bottom">
                <i className="icon-book-open text-medium-gray icon-extra-medium top-6" />
              </div>
              <div className="col-md-9 col-sm-8 col-xs-12 no-padding">
                <span className="margin-5px-bottom text-extra-dark-gray alt-font display-block font-weight-600">Genuine Reviews</span>
                <p className="width-75 md-width-100">We will guarantee the customer with the genuine reviews which will be collected after the customer experiences.</p>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div className="col-md-4 col-sm-4 col-xs-12 xs-text-center wow fadeInUp" data-wow-delay="0.4s">
              <div className="col-md-3 col-sm-4 col-xs-12 no-padding-left xs-no-padding-lr pull-left xs-margin-15px-bottom">
                <i className="icon-gift text-medium-gray icon-extra-medium top-6" />
              </div>
              <div className="col-md-9 col-sm-8 col-xs-12 no-padding">
                <span className="margin-5px-bottom text-extra-dark-gray alt-font display-block font-weight-600">Customized Dress Purchasing</span>
                <p className="width-75 md-width-100">The customer can demand remove or add any design, change length etc. according to his demand.</p>
              </div>
            </div>
            {/* end feature box item */}
          </div>
          {/* start feature box */}
        </div>
      </section>
      <section className=" bg-extra-dark-gray wow fadeIn md-padding-two-lr">
          <div className="container">
            <div className="row">
              {/* feature box item*/}
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 feature-box-1 xs-margin-30px-bottom wow fadeInRight">
                <div className="col-md-12 col-sm-12 no-padding margin-15px-bottom alt-font">
                  <h3 className="char-value letter-spacing-minus-1 text-medium-gray font-weight-300">01.</h3>
                  <span className="text-large line-height-22 padding-20px-left sm-padding-15px width-100 display-table-cell vertical-align-middle">
Fashion Designer
<br />  launch fashion.</span>
                </div>
                <p className="width-90 md-width-100">As our application is for all type of designer. So, the fashion designer can also launch their new fashion. They can also sell it i.e. customized dress purchasing if the customer demands.</p>
                <div className="clearfix" />
                <div className="separator-line-horrizontal-medium-light3 bg-deep-pink margin-5px-top" />
              </div>
              {/* end feature box item*/}
              {/* start feature box item*/}
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 feature-box-1 xs-margin-30px-bottom  wow fadeInRight" data-wow-delay="0.2s">
                <div className="col-md-12 col-sm-12 no-padding margin-15px-bottom alt-font">
                  <h3 className="char-value letter-spacing-minus-1 text-medium-gray font-weight-300">02.</h3>
                  <span className="text-large line-height-22 padding-20px-left width-100 display-table-cell vertical-align-middle">Editable Dress <br /> Measurements</span>
                </div>
                <p className="width-90 md-width-100">Standard dress measurements makes the customer bounded. So, now the customer can edit their dress measurements while customize purchase and dress making.</p>
                <div className="clearfix" />
                <div className="separator-line-horrizontal-medium-light3 bg-deep-pink margin-5px-top" />
              </div>
              {/* end feature box item*/}
              {/* start feature box item*/}
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 feature-box-1  wow fadeInRight" data-wow-delay="0.4s">
                <div className="col-md-12 col-sm-12 no-padding margin-15px-bottom alt-font">
                  <h3 className="char-value letter-spacing-minus-1 text-medium-gray font-weight-300">03.</h3>
                  <span className="text-large line-height-22 padding-20px-left width-100 display-table-cell vertical-align-middle">Manual and Online<br />  Receiving Methods</span>
                </div>
                <p className="width-90 md-width-100">Online receiving methods but trusting this facility in terms of clothing will not just be enough.We will provide both manual and online receiving methods depending upon customer choice.</p>
                <div className="clearfix" />
                <div className="separator-line-horrizontal-medium-light3 bg-deep-pink margin-5px-top" />
              </div>
              {/* end feature box item*/}
            </div>
          </div>
        </section>
        {/* end feature box */}
        {/* start section */}
        <section className=" wow fadeIn last-paragraph-no-margin">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12 text-center center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom">
                <span className="alt-font text-deep-pink text-medium margin-5px-bottom display-block">We are delivering beautiful Dresses</span>
               
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 no-padding margin-eight-bottom sm-margin-30px-bottom">
                <div className="col-md-4 col-sm-8 col-xs-12 xs-margin-15px-bottom wow fadeInLeft" data-wow-delay="0.2s">
                  <img src={require("../pimages/25.jpg")} style={{height:'500px'}} alt="" className="border-radius-6" />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 wow fadeInRight" data-wow-delay="0.4s">
                  <img src={require("../pimages/dress2.jpg")}style={{height:'500px'}} alt="" className="border-radius-6 xs-width-100" />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 wow fadeInRight" data-wow-delay="0.4s">
                  <img src={require("../pimages/24.jpg")}style={{height:'500px'}} alt="" className="border-radius-6 xs-width-100" />
                </div>
              
              </div>
            </div>
            <div className="row equalize sm-equalize-auto">
              <div className="col-md-4 display-table sm-margin-15px-bottom">
                <div className="display-table-cell vertical-align-middle">
                  <span className="text-extra-large text-extra-dark-gray alt-font width-90 display-block">We're fortunate to work with fantastic clients from across the globe in over 11 countries on design and branding.</span>
                </div>
              </div>
              <div className="col-md-4 display-table sm-margin-15px-bottom">
                <div className="display-table-cell vertical-align-middle">
                  <strong className="font-weight-600 text-extra-dark-gray margin-5px-bottom display-block alt-font">Our approach</strong>
                  <p>The customer can purchase designer dress with in the range/ either online or visit shop if they want. Customer can also go for customized purchasing i.e. making some changes like adding or subtracting designs, changing colour, exact customer measurements etc. on designer dress.The Fashion designer can also make customize dress of the fashion which is not even launched if the customer demands.</p>
                </div>
              </div>
              <div className="col-md-4 display-table">
                <div className="display-table-cell vertical-align-middle">
                  <strong className="font-weight-600 text-extra-dark-gray margin-5px-bottom display-block alt-font">Our Mission</strong>
                  <p>The customer can order an ideal dress to stitch and can demand some designing innovations by the designer.The designer will bid it.The customer will accept the most satisfying bid and then the order will be processed and traced.
                    Not just this the designer can also sell their clothes online and  if the customer demand some changes in styling it will be done too.
                  </p>
                </div>
              </div>                    
            </div>
          </div>
        </section>

 
   
 
  <Footer/>
</div>

        );
    }
}
export default About;