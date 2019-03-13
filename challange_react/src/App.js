import React, {Component}from 'react';
import Footer from './component/Footer.js'
import Banner from './index/Banner.js'
import Info from './index/Info.js'
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";

class App extends Component {
  render () {
    if (!this.props.is_login) {
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
}

export default connect(
  "is_login"
)(withRouter(App));
