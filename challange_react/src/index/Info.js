import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
        <div className="container">
            <div className="row box shadow p-5 mb-5 bg-white rounded">
                <div className="col-md-6 info">
                    <h1>About Me</h1>
                    <br></br>
                    <p>Hi! I am UM Team, I work as a Front-end Developer at Alterra Group.</p>
                    <p>Front-end Developer are constructive work websites use HTML, CSS, and JavaScript.</p>
                    <p>Front-end Developer are the people who make it design and develop the design untuk become a website that can run.</p>
                </div>
                <div className="col-md-6 info">
                    <h1>Information</h1>
                    <br></br>
                    <table className="table table-striped table-bordered col-md-8 table-width">
                        <tbody>
                            <tr>
                                <th scope="row">Age</th>
                                <td>: 1945th</td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>: smaqueenyaqueen@wakanda.af</td>
                            </tr>
                            <tr>
                                <th scope="row">Address</th>
                                <td>: Jl. Tronjal Tronjol No. 10 Wakanda Utara</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
  }
}

export default Info;