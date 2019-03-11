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
        <div className="container">
            <div class="row">
                <Blogcontent />
                <Blogmenu />
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
