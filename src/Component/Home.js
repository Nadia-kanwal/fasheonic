import React,{Component} from 'react'
import firebase from '../Firebase';
import Header from './Header'
import Footer from './Footer'
class Home extends Component{

  state={
    name:'',
    email:'',
    password:'',
    message:'',

  }
  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit=(e) =>{
  e.preventDefault();
  console.log(this.state)

  }
  
  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      first_name: '',
      last_name:'',
      email: '',
      message:''
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
   });
  }

  
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  
  }

  onSubmit = (e) => {
    e.preventDefault();
  
    

    const { first_name, last_name,email,message } = this.state;

    this.ref.add({
      first_name,
      last_name,
      email,
      message,
    }).then((docRef) => {
      this.setState({
      first_name,
      email,
      last_name,
      message,
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

//   myFunction = (e) => {
//     if(e.target.onSubmit()==""){
    
//     }
//     else
//     {
  
//    alert('Your message has been sent!')
//     }
//  }
 myFunction() {
  var x = document.forms["myForm"]["first_name"].value;
  if (x == "") {
    alert("must be filled out field");
    return false;
  }
  var x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("must be filled out field");
    return false;
  }
  var x = document.forms["myForm"]["last_name"].value;
  if (x == "") {
    alert("must be filled out field");
    return false;
  }
  var x = document.forms["myForm"]["message"].value;
  if (x == "") {
    alert("must be filled out field");
    return false;
  }
  else{
    alert("your message has been sent!");
    window.open("http://localhost:3000/home");
     
    

  }
}
    render(){
        return(
      
<div>
<Header/>
<section className=" wow fadeIn last-paragraph-no-margin">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12 center-col margin-five-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                <div className="alt-font text-extra-dark-gray font-weight-600">Why to Choose Fasheonic?</div>
                <h5 className="alt-font text-extra-dark-gray font-weight-600">We  provide a common platform for Designers & Customer. </h5>
                <p className="alt-font  font-weight-400">Fasheonic provide a common platform for middle level designers and the customer. This application for the purely based on eastern or western clothing of men, women and kids.
                The Fashion designer can also make customize dress of the fashion which is not even launched if the customer demands.
                </p>
              
              </div>
            </div>
            </div>
          
        </section>
        {/* end section */}
   
        {/* end section */}
        {/* start section */}
        <section className="no-padding-tb wow fadeIn xs-text-center">
          <div className="container-fluid no-padding">
            <div className="row no-margin equalize sm-equalize-auto">
              <div className="col-lg-6 col-md-4 col-sm-12 cover-background no-padding"><img src={require('../images/image_42.jpg')} style={{height:'600px'}} /><div className="sm-height-500px xs-height-350px" /></div>
              <div className="col-lg-3 col-md-4 col-sm-12 bg-white no-padding last-paragraph-no-margin sm-text-center">
                <div className="padding-80px-all md-padding-40px-all sm-padding-60px-all xs-padding-30px-all">
                  <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase">
Customized Dress Making
</h5>
                  <div className="separator-line-horrizontal-medium-thick bg-extra-dark-gray width-70 sm-width-70 margin-25px-bottom sm-margin-20px-bottom sm-center-col xs-width-50 xs-margin-lr-auto xs-margin-15px-bottom" />
                  <p className="width-95 md-width-100">The customer can also purchase designer dress either online or visit shop if they want. Customer can also go for customized purchasing i.e. making some changes like adding or subtracting designs, changing colour, exact customer measurements etc. on designer dress.</p>
                  <a href="/contact" className="btn btn-small btn-dark-gray margin-40px-top sm-margin-30px-top xs-margin-15px-top">Meet Our Team</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 no-padding cover-background"><img src={require('../pimages/13.jpeg')} style={{height:'600px'}} /><div className="sm-height-500px xs-height-350px" /></div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start heading style 01 section */}
 
        {/* end heading style 01 section */}
        {/* start  portfolio section */}

       
     <section className=" parallax wow fadeIn bg-light-pink " data-stellar-background-ratio="0.4" >
        <div className="container">
          <div className="row">
            {/* start feature box item */}
            <div className="col-md-4 last-paragraph-no-margin sm-margin-30px-bottom wow fadeInRight">
              <div className="padding-50px-all md-padding-40px-all xs-padding-30px-all bg-white box-shadow text-center" style={{height:'450px'}}>
                <div className="padding-35px-all display-inline-block border-radius-100 margin-40px-bottom xs-margin-30px-bottom bg-light-gray"><img src={require("../pimages/image-icon4.png")} alt="" /></div>
                <div className="text-small alt-font text-medium-gray text-uppercase">Creative Customer Demand</div>
                <span className="alt-font text-extra-dark-gray font-weight-600 display-block margin-20px-bottom">Creative Dress Making</span>
                <p>The customer can demand custom dress-making to the designer by defining some ideal range </p>
              </div>                    
            </div>
            {/* end feature box block */}
            {/* start feature box item */}
            <div className="col-md-4 last-paragraph-no-margin sm-margin-30px-bottom wow fadeInRight" data-wow-delay="0.2s">
              <div className="padding-50px-all md-padding-40px-all xs-padding-30px-all bg-white box-shadow text-center">
                <div className="padding-35px-all display-inline-block border-radius-100 margin-40px-bottom xs-margin-30px-bottom bg-light-gray" ><img src={require("../pimages/image-icon2.png")} alt="" /></div>
                <div className="text-small alt-font text-medium-gray text-uppercase">Digital Designer Dress Purchasing</div>
                <span className="alt-font text-extra-dark-gray font-weight-600 display-block margin-20px-bottom">Easy Purchasing of Designer Dress</span>
                <p>The customer can also purchase designer dress either online or visit shop if they want. </p>
              </div>                    
            </div>
            {/* end feature box block */}
            {/* start feature box item */}
            <div className="col-md-4 last-paragraph-no-margin wow fadeInRight" data-wow-delay="0.4s">
              <div className="padding-50px-all md-padding-40px-all xs-padding-30px-all bg-white box-shadow text-center">
                <div className="padding-35px-all display-inline-block border-radius-100 margin-40px-bottom xs-margin-30px-bottom bg-light-gray"><img src={require("../pimages/image-icon3.png")} alt="" /></div>
                <div className="text-small alt-font text-medium-gray text-uppercase">Customer Analysis</div>
                <span className="alt-font text-extra-dark-gray font-weight-600 display-block margin-20px-bottom">Genuine Reviews on designer work</span>
                <p>customer with the genuine reviews which will be collected after the customer experiences.</p>
              </div>                    
            </div>
            {/* end feature box block */}
          </div>
        </div>
      </section>
         


     <br></br>
     
     <h3 className="text-extra-dark-gray text-center alt-font font-weight-600">Our Services
                        </h3>
        <section className="no-padding-tb  wow fadeIn">
                    
        <div className="container">
        
          <div className="row">
            {/* start feature box item */}
           </div>
           </div>
        <div className="col-md-4  wow fadeInUp" data-wow-delay="0.6s">
              <div className="feature-box-16 xs-width-100">
                <img src={require("../pimages/enjoy-order.jpg")} style={{height:'400px'}} alt="" />
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
            <div className="col-md-4  wow fadeInUp" data-wow-delay="0.6s">
              <div className="feature-box-16 xs-width-100">
                <img src={require("../images/about-16.jpg")} style={{height:'400px'}} alt="" />
                <div className="feature-box-content text-center text-white">
                  <div className="opacity-full-dark bg-extra-dark-gray" />
                  <div className="display-table height-100 width-100 position-relative">
                    <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                      <div className="text-white alt-font text-medium margin-15px-bottom">Dress measurements</div> 
                      <p className="width-85 center-col text-extra-light-gray">Dress measurements makes the customer bounded. So, now the customer can edit their dress measurements while customize purchase and dress making.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4  wow fadeInUp" data-wow-delay="0.6s">
              <div className="feature-box-16 xs-width-100">
                <img src={require("../pimages/art3.jpg")} style={{height:'400px',width:'98%'}} alt="" />
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

         
      </section>
    

     <section className=" ">
    
            <div className="col-md-4  wow fadeInUp" data-wow-delay="0.6s">
              <div className="feature-box-16 xs-width-100">
                <img src={require("../pimages/new-fashion.jpg")} style={{height:'400px'}} alt="" />
                <div className="feature-box-content text-center text-white">
                  <div className="opacity-full-dark bg-extra-dark-gray" />
                  <div className="display-table height-100 width-100 position-relative">
                    <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                      <div className="text-white alt-font text-medium margin-15px-bottom">
Dress Purchasing within Budget
</div> 
                      <p className="width-85 center-col text-extra-light-gray">Middle-level designers can now sell their clothes online and also refer stores where dress is currently available (for sophisticated customer) and which would be within customer budget.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  wow fadeInUp" data-wow-delay="0.6s">
              <div className="feature-box-16 xs-width-100">
                <img src={require("../pimages/designers2.jpg")} style={{height:'400px'}} alt="" />
                <div className="feature-box-content text-center text-white">
                  <div className="opacity-full-dark bg-extra-dark-gray" />
                  <div className="display-table height-100 width-100 position-relative">
                    <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                      <div className="text-white alt-font text-medium margin-15px-bottom">
Customized Dress Making
</div> 
                      <p className="width-85 center-col text-extra-light-gray"> Designer never stitches customized dress for the customer. But Now the customer can order customized dress making from the middle-level designers who has perfect expertise and is within customer budget.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  wow fadeInUp" data-wow-delay="0.6s">
              <div className="feature-box-16 xs-width-100">
                <img src={require("../images/image_34.jpg")} style={{height:'400px',width:'98%'}} alt="" />             
    

                <div className="feature-box-content text-center text-white">
                  <div className="opacity-full-dark bg-extra-dark-gray" />
                  <div className="display-table height-100 width-100 position-relative">
                    <div className="vertical-align-middle display-table-cell padding-15px-lr padding-25px-tb">
                      <div className="text-white alt-font text-medium margin-15px-bottom">
Lattest fashion
</div> 
                      <p className="width-85 center-col text-extra-light-gray">As our application is for all type of designer. So, the fashion designer can also launch their new fashion. They can also sell it i.e. customized dress purchasing if the customer demands.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
   
                </section>
            

        {/* end counter section */}
        {/* start information section */}
        <section className=" bg-light-gray wow fadeIn">
          <div className="container-fluid no-padding">
            <div className="row no-margin">
              {/* start information item */}
              <div className="col-md-4 no-padding image-hover-style-3 height-100 last-paragraph-no-margin bg-light-gray">
                <div className="feature-box-wrap">
                  <div className="width-100 display-table position-relative cover-background small-screen xs-height-300px"><img src={require('../pimages/2.jpg')} style={{height:'350px'}}/>
                  </div>
                  <div className="width-100 small-screen xs-height-300px display-table arrow-top">
                    <div className="display-table-cell vertical-align-middle padding-eighteen-lr md-padding-twelve-lr text-center sm-padding-ten-lr xs-padding-seven-all">
                      <h6 className="text-extra-dark-gray alt-font width-95 center-col sm-width-100 xs-margin-15px-bottom">We craft beautiful and unique digital experiences.</h6>
                      <p className="no-letter-spacing padding-two-lr line-height-26 xs-line-height-20 xs-no-padding-lr">The Fashion designer can also make customize dress of the fashion which is not even launched if the customer demands.

Dress measurements followed are usually standardized i.e. small, medium, large etc. 
</p>
                      <span className="separator-line-horrizontal-medium-light2 bg-deep-pink display-inline-block margin-40px-top xs-margin-20px-top" />
                    </div>
                  </div>
                </div>
              </div>
              {/* end information item */}
              {/* start information item */}
              <div className="col-md-4 no-padding image-hover-style-3 height-100 last-paragraph-no-margin bg-light-gray">
                <div className="feature-box-wrap sm-swap-block">
                  <div className="width-100 small-screen xs-height-300px display-table arrow-bottom">
                    <div className="display-table-cell vertical-align-middle padding-eighteen-lr md-padding-twelve-lr text-center sm-padding-ten-lr xs-padding-seven-all">
                      <h6 className="text-extra-dark-gray alt-font width-95 center-col sm-width-100 xs-margin-15px-bottom">Unlimited power and customization possibilities.</h6>
                      <p className="no-letter-spacing padding-two-lr line-height-26 xs-line-height-20 xs-no-padding-lr">The Fashion designer can also make customize dress of the fashion which is not even launched if the customer demands.

Dress measurements followed are usually standardized i.e. small, medium, large etc. 
</p>
                      <span className="separator-line-horrizontal-medium-light2 bg-deep-pink display-inline-block margin-40px-top xs-margin-20px-top" />
                    </div>
                  </div>
                  <div className="width-100 display-table position-relative cover-background small-screen xs-height-300px" ><img src={require('../pimages/12.jpeg')} style={{height:'350px',width:'100%'}} />
                </div>
                </div>
              </div>
              {/* end information item */}
              {/* start information item */}
              <div className="col-md-4 no-padding image-hover-style-3 height-100 last-paragraph-no-margin bg-light-gray">
                <div className="feature-box-wrap">
                  <div className="width-100 display-table position-relative cover-background small-screen xs-height-300px"> <img src={require('../pimages/5.jpeg')} style={{height:'350px'}} />
                  </div>
                  <div className="width-100 small-screen xs-height-300px display-table arrow-top">
                    <div className="display-table-cell vertical-align-middle padding-eighteen-lr md-padding-twelve-lr text-center sm-padding-ten-lr xs-padding-seven-all">
                      <h6 className="text-extra-dark-gray alt-font width-95 center-col sm-width-100 xs-margin-15px-bottom">Pixel perfect design &amp; clear code delivered to you.</h6>
                      <p className="no-letter-spacing padding-two-lr line-height-26 xs-line-height-20 xs-no-padding-lr">The Fashion designer can also make customize dress of the fashion which is not even launched if the customer demands.

Dress measurements followed are usually standardized i.e. small, medium, large etc. 
</p>
                      <span className="separator-line-horrizontal-medium-light2 bg-deep-pink display-inline-block margin-40px-top xs-margin-20px-top" />
                    </div>
                  </div>
                </div>
              </div>
              {/* end information item */}
            </div>    
          </div>
        </section>
        <section id="contact" className="wow fadeIn no-padding bg-extra-dark-gray">
        <div className="container-fluid">
          <div className="row equalize sm-equalize-auto">
            <div className="col-md-5 col-sm-12 col-xs-12 cover-background sm-height-550px xs-height-350px wow fadeIn"><img src={require('../pimages/homepage-9-parallax-img6.jpg')} style={{height:'600px'}} />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 wow fadeIn">
              <div className="padding-eleven-all text-center xs-no-padding-lr">
                <div className="text-medium-gray alt-font text-small text-uppercase margin-5px-bottom xs-margin-three-bottom">Fill out the form and we'll be in touch soon!</div>
                <h5 className="margin-55px-bottom text-white alt-font font-weight-600 text-uppercase sm-margin-30px-bottom xs-margin-15px-bottom">Ready to request a quote?</h5>
                <div>


                

                <form id="contact-form"onSubmit={this.onSubmit} onsubmit="return myFunction()"
                  action="javascript:void(0)" method="post" name="myForm">
                    <div>
                      <div id="success-contact-form" className="no-margin-lr" />
                      <input type="first_name"onChange={this.onChange} name="first_name" id="name" placeholder="First Name" className="input-border-bottom" required />
                      <input type="last_name"onChange={this.onChange} name="last_name" id="password" placeholder="Last Name" className="input-border-bottom"required />
                      <input type="email"onChange={this.onChange} id="email" name="email" id="email" placeholder="E-mail" className="input-border-bottom" />
                     
                      <textarea name="message"onChange={this.onChange}type="message" id="comment" placeholder="Your Message" rows={5} className ="input-border-bottom" defaultValue={""} required />
                      
                    <button id="contact-us-button"onChange={this.onChange} onClick={this.myFunction}  type="submit"  className="btn btn-small border-radius-4 btn-dark-gray"> send message
                    {/* <a href="/App" className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-25px-top"></a> */}
                      </button>
                      {/* <a href="https://play.google.com/store/apps" className="btn btn-medium btn-rounded btn-deep-pink wow fadeInUp" data-wow-delay="0.2s">Back to Home</a> */}
                   
                    </div>
                  </form>
                </div>
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
export default Home;