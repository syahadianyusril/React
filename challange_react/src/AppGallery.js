import React, { Component } from 'react';
import Header from './component/Header.js'
import Footer from './component/Footer.js'
import Gallery from './gallery/Gallery.js'

class AppGallery extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default AppGallery;
