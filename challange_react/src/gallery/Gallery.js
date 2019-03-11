import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div>
        <div class="container col-10">
            <a class="navbar-brand marginlogo" href="#"><img src={require('../assets/ico/ico-gallery.png')}/></a>
            <span id="galery">GALLERY</span><hr></hr>
        </div>
        <div class="container">    
            <div class="row">    
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <img src={require("../assets/img/exp-gallery/jake-allison-1322894-unsplash.jpg")} class="image1"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12">         
                    <img src={require("../assets/img/exp-gallery/jay-lee-1323073-unsplash.jpg")} class="image1"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12">            
                    <img src={require("../assets/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg")} class="image1"/></div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <img src={require("../assets/img/exp-gallery/ryan-1321510-unsplash.jpg")} class="image1"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <img src={require("../assets/img/exp-gallery/nic-yee-1321843-unsplash.jpg")} class="image1"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <img src={require("../assets/img/exp-gallery/phil-desforges-1322844-unsplash.jpg")} class="image1"/></div>  
            </div>
        </div>
      </div>
    )
  }
}

export default Gallery;