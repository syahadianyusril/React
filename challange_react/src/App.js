import React, { Component } from 'react';
import Header from './component/Header.js'
import Footer from './component/Footer.js'
import Search from './component/Search.js'
import Banner from './index/Banner.js'
import Info from './index/Info.js'
import Navigation from './component/Navigation.js';
import { Redirect } from "react-router-dom";

const App = props => {
  const is_login = JSON.parse(localStorage.getItem("is_login"));

    if (is_login === null) {
      return <Redirect to={{pathname: "/signin"}}/>;
    }
    else {
      return (
        <div>
          <Banner />
          <Info />
          <Footer />
        </div>
      );
    }  
  }


export default App;
