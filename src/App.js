import React, { Component } from 'react';
import Fire from './Config/Fire'
import './App.css'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Footer from './Component/Footer'
class App extends Component {
  constructor(props){
    super(props);
      this.state={
        user:{},
      
    }
  }
  componentDidMount(){
    this.authListener();
  }

  authListener(){
  Fire.auth().onAuthStateChanged((user)=>{
    console.log(user)
   if(user){
     this.setState({user});
     localStorage.setItem('user',user.uid);}
     else{
       this.setState({user:null});
       localStorage.removeItem('user');

     }
  });
  }
  render() {
    console.log(Fire,"fire") 
    return (
        <div className="App">
          {this.state.user ?(<Home/>): (<Contact/>)}

        
    
        </div>
        
    );
  }
}


export default App;
