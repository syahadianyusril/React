import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <div className="row container-fluid">
            <div className="col-md-6 d-md-block d-none contact-left-container">
                <img className=" contact-logo-position" src={require("../assets/logo/logo-alterra-academy-plain@2x.png")}/>
            </div>
            <div className="col-md-6">
                <div className="container contact-us">
                    <h3>Contact Us</h3>
                    <p>Send us message and we will get back to you as soon as possible</p>
                    <br></br>
                    <form className="col-md-11">
                        Name<span className="red">*</span>
                        <br></br>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1"><img src={require("../assets/ico/ico-user.png")}/></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        Email<span className="red">*</span>
                        <br></br>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1"><img src={require("../assets/ico/ico-email.png")} width="19" height="23"/></span>
                            </div>
                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                        </div>
                        Phone Number<span className="red">*</span>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1"><img src={require("../assets/ico/ico-phone.png")} width="19" height="23"/></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Phone Number" aria-label="Phonenumber" aria-describedby="basic-addon1"/>
                        </div>
                        National
                        <div className="input-group">
                            <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option value="Indonesia" selected>Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Japan">Japan</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="comment">Comment:</label>
                            <textarea className="form-control" rows="5" id="comment"></textarea>
                        </div>
                        <button className="btn btn-lg col-12" id="btn-submit">Submit</button>
                        <br></br>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}

export default Contact;