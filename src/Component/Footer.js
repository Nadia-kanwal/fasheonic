import React ,{Component} from 'react'
import About from './About'
class Footer extends Component{
    render(){
        return(
            <div>
                  
           
                  <footer className="footer-classic-dark bg-extra-dark-gray padding-five-bottom xs-padding-30px-bottom">
        <div className="bg-dark-footer padding-50px-tb xs-padding-30px-tb">
          <div className="container">
            <div className="row equalize xs-equalize-auto">
              {/* start slogan */}
              <div className="col-md-4 col-sm-5 col-xs-12 text-center alt-font display-table xs-text-center xs-margin-15px-bottom">
                <div className="display-table-cell vertical-align-middle">
                  Designer's clothing &amp; fashion
                </div>
              </div>
              {/* end slogan */}
              {/* start logo */}
              <div className="col-md-4 col-sm-2 col-xs-12 text-center display-table xs-margin-10px-bottom">
                <div className="display-table-cell vertical-align-middle">
                  <a href="index.html"><img className="footer-logo" src={require("../pimages/logo-fasheonic.png" )}data-at2x="images/logo-white@2x.png" alt="Fasheonic" /></a>
                </div>
              </div>
              {/* end logo */}
              {/* start social media */}
              <div className="col-md-4 col-sm-5 col-xs-12 col-xs-12 text-center display-table xs-text-center">
                <div className="display-table-cell vertical-align-middle">
                  <span className="alt-font margin-20px-right">On social networks</span>
                  <div className="social-icon-style-8 display-inline-block vertical-align-middle">
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                    <li className=""><a href="https://www.facebook.com/"> <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" width="20"height="30" viewBox="0 0 320 512" class="svg-inline--fa fa-facebook-f fa-w-10 fa-3x"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" class=""></path></svg></a></li>
                    <li className=""><a href="https://www.instagram.com/">  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" width="20"height="30" viewBox="0 0 448 512" class="svg-inline--fa fa-instagram fa-w-14 fa-3x"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" class=""></path></svg> 
   
                    </a></li>
                    <li className=""><a href="https://twitter.com"> <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"width="20"height="30" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-twitter fa-w-16 fa-3x"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg>
              </a></li>
                  </ul>
                  </div>
                </div>
              </div>
              {/* end social media */}
            </div>
          </div>
        </div>
        <div className="footer-widget-area padding-five-top padding-30px-bottom xs-padding-30px-top">
          <div className="container">
            <div className="row">
              {/* start about */}
              <div className="col-md-3 col-sm-6 col-xs-12 widget sm-margin-30px-bottom xs-text-center">
                <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-15px-bottom font-weight-600">About Fasheonic</div>
                <p className="text-small width-95 xs-width-100 no-margin">Fasheonic is a social media like mobile application which provides a common platform for middle level designers and the customer. This application for the purely based on eastern or western clothing of men, women and kids. </p>
              </div>
              {/* end about */}
              {/* start blog post */}
              <div className="col-md-3 col-sm-6 col-xs-12 widget sm-margin-30px-bottom">
                <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-15px-bottom font-weight-600 xs-text-center">Latest Blog Post</div>
                <ul className="latest-post position-relative top-3">
                  <li className="border-bottom border-color-medium-dark-gray">
                    <figure>
                      <a href="blog-post-layout-01.html"><img src={require("../pimages/latest-blog2.jpg")} alt="" /></a>
                    </figure>
                    <div className="text-small"><a href="blog-post-layout-01.html">Design is not just what looks...</a> <span className="clearfix" />20 April 2017 | by <a href="blog-grid.html">Herman Miller</a></div>
                  </li>
                  <li className="border-bottom border-color-medium-dark-gray">
                    <figure>
                      <a href="blog-post-layout-02.html"><img src={require("../pimages/latest-blog3.jpg")} alt="" /></a>
                    </figure>
                    <div className="text-small"><a href="blog-post-layout-02.html">A lot of care, effort &amp; passion...</a> <span className="clearfix" />20 April 2017 | by <a href="blog-grid.html">Herman Miller</a></div>
                  </li>
                  <li>
                    <figure>
                      <a href="blog-post-layout-03.html"><img src={require("../pimages/latest-blog4.jpg")} alt="" /></a>
                    </figure>
                    <div className="text-small"><a href="blog-post-layout-03.html">I love making the stuff, that's...</a> <span className="clearfix" />20 April 2017 | by <a href="blog-grid.html">Herman Miller</a></div>
                  </li>
                </ul>
              </div>
              {/* end blog post */}
              {/* start newsletter */}
              <div className="col-md-3 col-sm-6 col-xs-12 widget sm-margin-30px-bottom xs-text-center">
                <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-15px-bottom font-weight-600">Subscribe Newsletter</div>
                <p className="text-small width-90 xs-width-100">A Fasheonic is made particularly for the designers, the fashion designers can show off their art of fashion creation before launching and can view the reviews on customer on that fashion.</p>
                <form id="subscribenewsletterform" action="javascript:void(0)" method="post">
                  <div className="position-relative newsletter width-95">
                    <div id="success-subscribe-newsletter" className="no-margin-lr" />
                    <input type="text" id="email" name="email" className="bg-transparent text-small no-margin border-color-medium-dark-gray" placeholder="Enter your email..." />
                    <button id="button-subscribe-newsletter" type="submit" className="btn btn-arrow-small position-absolute border-color-medium-dark-gray"><i className="fa fa-caret-right no-margin-left" /></button>
                  </div>   
                </form>
              </div>
              {/* end newsletter */}
              {/* start instagram */}
              <div className="col-md-3 col-sm-6 col-xs-12 widget xs-margin-5px-bottom xs-text-center">
                <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-20px-bottom font-weight-600">Follow us Instagram</div>
                <div className="instagram-follow-api">
                  
      <ul id="instaFeed-footer"><li><figure><a href="https://www.instagram.com/p/BYXli23FAYf/" target="_blank"><img src="https://scontent.cdninstagram.com/vp/32846832dffca75a0fcf594d9a9e20fb/5E14D5DB/t51.2885-15/e35/21107247_830304240480187_1609163596854460416_n.jpg?_nc_ht=scontent.cdninstagram.com" className="insta-image" /><span className="insta-counts"><i className="ti-heart" /><span>19</span></span></a></figure></li><li><figure><a href="https://www.instagram.com/p/BYXTqRVFVvf/" target="_blank"><img src="https://scontent.cdninstagram.com/vp/75007bc6c351da913f69075367243f0d/5DF312C7/t51.2885-15/e35/21107400_290434371364874_7048769995412602880_n.jpg?_nc_ht=scontent.cdninstagram.com" className="insta-image" /><span className="insta-counts"><i className="ti-heart" /><span>12</span></span></a></figure></li><li><figure><a href="https://www.instagram.com/p/BYXTTC8Fa9c/" target="_blank"><img src="https://scontent.cdninstagram.com/vp/71d8aa094ac134eb33717ab22e6d8af0/5E00906B/t51.2885-15/e35/21148951_160453147839973_3280447062352592896_n.jpg?_nc_ht=scontent.cdninstagram.com" className="insta-image" /><span className="insta-counts"><i className="ti-heart" /><span>14</span></span></a></figure></li><li><figure><a href="https://www.instagram.com/p/BYXSHUklKfJ/" target="_blank"><img src="https://scontent.cdninstagram.com/vp/d59a3fa58be4d8f8b04aab171656372e/5E069E1D/t51.2885-15/e35/21149514_114368955891501_6103739545180700672_n.jpg?_nc_ht=scontent.cdninstagram.com" className="insta-image" /><span className="insta-counts"><i className="ti-heart" /><span>11</span></span></a></figure></li><li><figure><a href="https://www.instagram.com/p/BYXSF5HlR5E/" target="_blank"><img src="https://scontent.cdninstagram.com/vp/b6e277d1369d5dc92c23afaa08933668/5E0AA2F6/t51.2885-15/e35/21042807_1887645504829256_2977655845124308992_n.jpg?_nc_ht=scontent.cdninstagram.com" className="insta-image" /><span className="insta-counts"><i className="ti-heart" /><span>5</span></span></a></figure></li><li><figure><a href="https://www.instagram.com/p/BYXSDLxlWq6/" target="_blank"><img src="https://scontent.cdninstagram.com/vp/b79d78a11b4f3d52145bd55e69cba095/5DFC4EC3/t51.2885-15/e35/21107646_290453618102000_3513542797296664576_n.jpg?_nc_ht=scontent.cdninstagram.com" className="insta-image" /><span className="insta-counts"><i className="ti-heart" /><span>8</span></span></a></figure></li></ul>
                


               
                </div>
              </div>
              {/* end instagram */}
            </div>
          </div>
        </div>
      </footer>


            {/* <footer className="ftco-footer ">
          
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-3">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2 logo"><a href="index.html">Fasheonic</a></h2>
                  <p>Fasheonic is a social media like mobile application which provides a common platform for middle level designers and the customer.</p>
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                    <li className=""><a href="https://www.facebook.com/"> <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" width="30"height="30" viewBox="0 0 320 512" class="svg-inline--fa fa-facebook-f fa-w-10 fa-3x"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" class=""></path></svg></a></li>
                    <li className=""><a href="https://www.instagram.com/">  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" width="30"height="30" viewBox="0 0 448 512" class="svg-inline--fa fa-instagram fa-w-14 fa-3x"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" class=""></path></svg> 
   
                    </a></li>
                    <li className=""><a href="https://twitter.com"> <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"width="30"height="30" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-twitter fa-w-16 fa-3x"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg>
              </a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">About us</h2>
                  <p>Fasheonic is a social media like mobile application which provides a common platform for middle level designers and the customer.</p>
               
                </div>
              </div>
              <div className="col-md-2">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">Site Links</h2>
                  <ul className="list-unstyled">
                    <li><a href="/home" className="py-2 d-block">Home</a></li>
                    <li><a href="/about" className="py-2 d-block">About</a></li>
                    <li><a href="#" className="py-2 d-block">Shop</a></li>
                    <li><a href="/services" className="py-2 d-block">Services</a></li>
                    <li><a href="#" className="py-2 d-block">Blog</a></li>
                    <li><a href="/contact" className="py-2 d-block">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                      <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                      <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <center>
                <p>
                  Copyright © 2019 All rights reserved 
               </p>
               </center>
                 
              </div>
            </div>
          </div>
        </footer> */}

        
        </div>
        

        );
    }
}

export default Footer;