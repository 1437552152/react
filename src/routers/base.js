import React, { Component } from 'react';
import Header from '../components/public/header';
// import Footer from '../component/public/footer';
class Base extends Component {
  render() {
    return (  
      <div>
       <Header/>
       {/* <Footer/> */}
      </div>
    );
  }
}
export default Base;