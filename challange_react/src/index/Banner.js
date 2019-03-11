import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="bg">
          <div className="container text-center">
              <div>
                  <div className="row">
                      <div className="text-center col-md-12">
                          <img src={require('../assets/img/nur.large')} className="rounded-circle marginprofil pp" alt=""/>
                      </div>
                      <div className="text-center col-md-12 jarakprofil">
                          <h4><span className="red blink-me">NURHADI</span><span className="blink-me-red">ALDO</span><span className="red blink-me">1</span><span>0</span></h4>
                          <a><img src={require('../assets/ico/ico-location.png')}/>Malang, East Java, Indonesia</a>
                          <h5>Frontend Dev, UI/UX and Design</h5>
                          <h5>#SmaqueenYaqueen</h5>
                          <button className="btn btn-primary" id="btn-download">Download CV</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Banner;