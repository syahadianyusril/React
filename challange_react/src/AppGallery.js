import React, { Component } from 'react';
import Header from './component/Header.js'
import Footer from './component/Footer.js'
import Gallery from './gallery/Gallery.js'
import Navigation from './component/Navigation.js';

class AppGallery extends Component {
  render() {
    return (
      <div>
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default AppGallery;
