import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <div>
        <div id="colorlib-page bg-light-pink">
          <header>
            <div className="container">
              <div className="colorlib-navbar-brand" >
              {/* <div class="opacity-medium bg-extra-dark-gray"></div> */}
                <img src={require("../images/bg_21.png")} style={{ width: '60%', height: '80px' }} />
                <br></br>
                <span style={{color:'black'}}>Designer’s Clothing & Fashion</span>
              </div>
              <a href="/Header2" className="js-colorlib-nav-toggle colorlib-nav-toggle" style={{width:'3%',height:'30px'}}><i /></a>

              <button type="button" className="navbar-toggle pull-right" data-toggle="collapse" data-target="#navbar-collapse-toggle-1" aria-expanded="true">
                            <span className="sr-only">toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
            </div>
          </header>
        </div>
        <a className="player" data-property="{videoURL:'https://www.youtube.com/watch?v=ITUid-bDsl8',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"></a>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={require("../pimages/32.jpg")} style={{height:'600px'}}  alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../pimages/33.jpg")} style={{height:'600px'}} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../pimage/slider-service3.jpg")}style={{height:'600px'}}  alt="Third slide" />
          </div>
         
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../images/image_43.jpg")} style={{height:'600px'}} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../images/image_44.jpg")}style={{height:'600px'}}  alt="Third slide" />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Header;






