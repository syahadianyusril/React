import React, { Component } from 'react';
import PropTypes from "prop-types";

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