import React, { Component } from 'react';
import Header from './component/Header.js'
import Footer from './component/Footer.js'
import Search from './component/Search.js'
import Blogcontent from './blog/Blogcontent.js'
import Blogmenu from './blog/Blogmenu.js'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <div class="container">
            <div class="row">
                <Blogmenu />
                <Blogcontent />
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
