import React,{Component} from 'react';
import Fire from '../Config/Fire'
import Header from './Header'
import Footer from './Footer'
// import { thisExpression } from '@babel/types';
class Contact extends Component{
  constructor(props){
    super(props);
    this.contact=this.contact.bind(this);
    this.handleChange=this.handleChange.bind(this)
  
  
  this.state={
    name:'',
    email:'',
    password:'',
    message:'',

  }
}
  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value

      
    })
   
  }
  contact(e){
    e.preventDefault();
    Fire.auth().createUserWithEmailAndPassword(this.state.email,this.state. password).then((u)=>{

    })
    
    .catch(function(error) {
      console.log(error)
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  handleSubmit=(e) =>{
  e.preventDefault();
  console.log(this.state)

  }
    render(){
        return(
<div>
<header>
                    <div className="container">
                        <div className="colorlib-navbar-brand">
                        </div>
                        <a href="/Header2" className="js-colorlib-nav-toggle colorlib-nav-toggle" style={{backgroundColor:'gray',width:'3%',height:'30px'}}><i /></a>
                    </div>
                </header>

                <section className="wow fadeIn big-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12 text-center center-col">
              <span className="alt-font text-small text-uppercase">We would love to work with you</span>
              <h2 className="alt-font font-weight-700 letter-spacing-minus-1 text-extra-dark-gray">How we can help</h2>
              <p className="width-75 center-col xs-width-100">Fasheonic is a social media like mobile application which provides a common platform for middle level designers and the customer. This application for the purely based on eastern or western clothing of men, women and kids.</p>
              <a href="https://play.google.com/store/apps" className="btn btn-large btn-transparent-dark-gray margin-10px-top inner-link">Download the app</a>
            </div>
          </div>
        </div>
      </section>
            
      <section className="no-padding-tb bg-light-gray wow fadeIn">
          <div className="container-fluid no-padding">
            <div className="row no-margin">
              {/* start info box item */}
              <div className="col-md-4 no-padding image-hover-style-3 height-100 last-paragraph-no-margin">
                <div className="feature-box-wrap">
                  <div className="width-100 display-table position-relative cover-background small-screen xs-height-300px">
                  <img src={require('../images/image_50.jpg')}style={{width:'100%',height:'300px'}} />
                  <div className="width-100 small-screen xs-height-300px display-table arrow-top">
                    <div className="display-table-cell vertical-align-middle padding-eighteen-lr md-padding-twelve-lr text-center sm-padding-ten-lr xs-padding-seven-all">
                    <img src="https://image.flaticon.com/icons/svg/1034/1034153.svg" width="40" height="70" alt="Contact free icon" title="Contact free icon"/>
                      <div className="text-extra-dark-gray text-uppercase alt-font font-weight-600 margin-5px-bottom">Contact Address</div>
                      <p className="width-55 center-col text-medium md-width-100">301 The Greenhouse, Custard Factory, London, E2 8DY.</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end info box item */}
              {/* start info box item */}
              <div className="col-md-4 no-padding image-hover-style-3 height-100 last-paragraph-no-margin">
                <div className="feature-box-wrap sm-swap-block">
                  <div className="width-100 small-screen xs-height-300px display-table arrow-bottom">
                    <div className="display-table-cell vertical-align-middle padding-eighteen-lr md-padding-twelve-lr text-center sm-padding-ten-lr xs-padding-seven-all">
                    <img src="https://image.flaticon.com/icons/svg/1078/1078011.svg" width="40" height="70" alt="Speech bubble free icon" title="Speech bubble free icon"/>
 <br></br>

                      <div className="text-extra-dark-gray text-uppercase alt-font font-weight-600 margin-5px-bottom">Let's Talk</div>
                      <p className="center-col text-medium no-margin">Phone: 1-800-222-000</p>
                      <p className="center-col text-medium">Fax: 1-800-222-002</p>
                    </div>
                  </div>
                  <div className="width-100 display-table position-relative cover-background small-screen xs-height-300px" ><img src={require('../pimages/d11.jpg')} style={{height:'300px'}}/>
                </div>
                </div>
              </div>
              {/* end info box item */}
              {/* start info box item */}
              <div className="col-md-4 no-padding image-hover-style-3 height-100 last-paragraph-no-margin">
                <div className="feature-box-wrap">
                  <div className="width-100 display-table position-relative cover-background small-screen xs-height-300px"> <img src={require('../images/image_67.jpg')}style={{height:'300px'}} />
                  <div className="width-100 small-screen xs-height-300px display-table arrow-top">
                    <div className="display-table-cell vertical-align-middle padding-eighteen-lr md-padding-twelve-lr text-center sm-padding-ten-lr xs-padding-seven-all">
                    <img src="https://image.flaticon.com/icons/svg/133/133667.svg" width="40" height="70" alt="Contact free icon" title="Contact free icon"/>
                      <div className="text-extra-dark-gray text-uppercase alt-font font-weight-600 margin-5px-bottom">Email Us</div>
                      <p className="center-col text-medium no-margin"><a href="mailto:info@domain.com">info@domain.com</a></p>
                      <p className="center-col text-medium"><a href="mailto:hire@domain.com">hire@domain.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end info box item */}
            </div>    
          </div>
        </section>
{/*                   
        <section className="ftco-section contact-section">
          <div className="container mt-5">
            <div className="row block-9">
              <div className="col-md-4 order-last contact-info ">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <h2>Contact Information</h2>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p><span>Website:</span> <a href="#">yoursite.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-1" />
              <div className="col-md-6 order-first ">
                <form action="#" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input type="name"onChange={this.handleChange} className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="email"onChange={this.handleChange}  className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <input type="password"onChange={this.handleChange}  className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <textarea name id cols={30} rows={7} onChange={this.handleChange}   type="message"className="form-control" placeholder="Message" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <input type="submit" onChange={this.handleChange}  defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                  </div>
                </form>
              </div>
            </div>
          </div>

       
        </section>  */}
          <section className="wow fadeIn big-section" id="section-down">
          <div className="container">
            <div className="row equalize sm-equalize-auto">
              <div className="col-md-6 col-sm-12 col-xs-12 sm-margin-30px-bottom wow fadeInLeft">
                <div className="padding-fifteen-all bg-light-gray border-radius-6 md-padding-seven-all xs-padding-30px-all height-100">
                  <span className="text-extra-dark-gray alt-font text-large font-weight-600 margin-25px-bottom display-block">Ready to get started?</span> 
                  <form id="contact-form"onSubmit={this.handleSubmit}action="javascript:void(0)" method="post">
                    <div>
                      <div id="success-contact-form" className="no-margin-lr" />
                      <input type="name"onChange={this.handleChange} name="name" id="name" placeholder="Name*" className="border-radius-4 bg-white medium-input" />
                      <input type="email"onChange={this.handleChange} name="email" id="email" placeholder="E-mail*" className="border-radius-4 bg-white medium-input" />
                      <input type="password"onChange={this.handleChange} name="password" id="password" placeholder="Password" className="border-radius-4 bg-white medium-input" />
                      <textarea name="comment"onChange={this.handleChange}type="message" id="comment" placeholder="Your Message" rows={5} className="border-radius-4 bg-white medium-textarea" defaultValue={""} />
                      <button id="contact-us-button"onChange={this.handleChange} onClick={this.contact} type="submit"  className="btn btn-small border-radius-4 btn-dark-gray">send message</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 last-paragraph-no-margin wow fadeInRight">
                <div className="padding-ten-all bg-light-gray border-radius-6 md-padding-seven-all xs-padding-30px-all height-100 sm-text-center">
                  <img src={require("../pimages/about-img1.jpg")} alt="" className="border-radius-6 margin-35px-bottom xs-margin-30px-bottom" />
                  <span className="text-large font-weight-600 alt-font text-extra-dark-gray margin-5px-bottom display-block">Let's plan for a new project?</span>
                  <p>Fasheonic is a social media like mobile application which provides a common platform for middle level designers and the customer. This application for the purely based on eastern or western clothing of men, women and kids. </p>
                  <a href="/about" className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-25px-top">About Company</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end contact form section */}
        {/* start information section */}
       
        {/* start information section */}        
        {/* start call to action section */}
        <section className="wow fadeIn">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12 center-col text-center">
                <h6 className="alt-font text-extra-dark-gray text-uppercase font-weight-500 width-80 center-col margin-35px-bottom md-width-100 wow fadeInUp">We would love to hear about start your new project?</h6>
                <a href="https://play.google.com/store/apps" className="btn btn-medium btn-rounded btn-deep-pink wow fadeInUp" data-wow-delay="0.2s">Download the app</a>
              </div>
            </div>
          </div>
        </section>


           
        <Footer/>
        </div>
        );
    }
}
export default Contact;