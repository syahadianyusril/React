import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div class="container">
        <nav class="navbar navbar-light bg-transparent">
          <a class="navbar-item" href="#">Sports</a>
          <a class="navbar-item" href="#">Lifestyle</a>
          <a class="navbar-item" href="#">Health</a>
          <a class="navbar-item" href="#">Entertainment</a>
          <a class="navbar-item" href="#">Comic</a>
          <a class="navbar-item" href="#">Art</a>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </div>  
    )
  }
}

export default Search;