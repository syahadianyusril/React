import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

class Profil extends Component  {
  render(){
    if (!this.props.is_login) {
      return <Redirect to={{pathname: "/signin"}}/>;
    }
    else {
      return (
        <section>
          <h1>PROFILE</h1>
          <p>
            <label>Full Name:</label> {this.props.full_name}
          </p>
          <p>
            <label>Email:</label> {this.props.email}
          </p>
        </section>
      )
    }
  }  
};

export default connect(
  "is_login,email, full_name",
  actions
)(withRouter(Profil));