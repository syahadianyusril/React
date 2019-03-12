import React, { Component } from 'react';
import PropTypes from "prop-types";

// class Blogcontent extends Component {
//   render() {
//     return (
//       <div className="col-md-8">

//         <h1 className="my-4">Category - Sports</h1>

//         <div className="card mb-4">
//           <img className="card-img-top" src={require("../assets/img/blogpost.jpg")} alt="Card image cap"/>
//           <div className="card-body">
//             <h2 className="card-title">Pemain american football mati mengenaskan ketika mendengar suara mantan</h2>
//             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
//             <a href="#" className="btn btn-primary">Read More &rarr;</a>
//           </div>
//           <div className="card-footer text-muted">
//             Posted on January 1, 2019 by
//             <a href="#"> Saya sendiri</a>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

const Blogcontent = props => {
  return (
    <div>
      <div className="card my-4">
        <img className="card-img-top" src={props.img} alt="Card image cap"/>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">{props.content}</p>
          <a href="#" className="btn btn-primary">Read More &rarr;</a>
        </div>
        <div className="card-footer text-muted">
          Posted At: {props.publishedAt}<br></br>
          Pested By: <a>{props.author}</a>
        </div>
      </div>
    </div>
  )
}

Blogcontent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Blogcontent;