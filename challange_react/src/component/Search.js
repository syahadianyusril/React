import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-transparent">
          <a className="navbar-item" href="#">Sports</a>
          <a className="navbar-item" href="#">Lifestyle</a>
          <a className="navbar-item" href="#">Health</a>
          <a className="navbar-item" href="#">Entertainment</a>
          <a className="navbar-item" href="#">Comic</a>
          <a className="navbar-item" href="#">Art</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </div>  
    )
  }
}

export default Search;