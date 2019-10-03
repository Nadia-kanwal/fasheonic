import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './App.css'
import Header2 from './Component/Header2'
import Contact from './Component/Contact'

import About from './Component/About'
import Shop from './Component/Shop'
import Blog from './Component/Blog'






import './index.css';


import * as serviceWorker from './serviceWorker';
import Services from './Component/Services';
import Home from './Component/Home';


const routing = (
  <Router>

    <div className="">



      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />

      <Route path="/services" component={Services} />
      <Route path="/shop" component={Shop} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/header2" component={Header2} />
    
     




    </div>
  </Router>




)







ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
