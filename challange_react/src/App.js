import React, { Component } from 'react';
import Header from './component/Header.js'
import Footer from './component/Footer.js'
import Banner from './index/Banner.js'
import Info from './index/Info.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;
