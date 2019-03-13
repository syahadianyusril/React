import React, { Component } from "react";
import PropTypes from "prop-types";

const Blogmenu = props => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item" id="no-border">
          <a href={props.url}>{props.title}</a>
        </li>
      </ul>
    </div>
  );
};

Blogmenu.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Blogmenu;
