import React, { Component } from 'react';
import Header from './component/Header.js'
import Footer from './component/Footer.js'
import Search from './component/Search.js'
import Blogcontent from './blog/Blogcontent.js'
import Blogmenu from './blog/Blogmenu.js'
import axios from 'axios'

const imgNull = 0;

const baseUrl = "https://newsapi.org/v2/";
const keyApi = "79ea232ad60645a8a122c07c03321932";
const search = "google"
const country = "us"

// endpoint semua berita
const urlHeadline = baseUrl + "everything?q=" + search + "&apiKey=" + keyApi ;
// endopoint headlines
const urlHeadlineNew = baseUrl + "top-headlines?country=" + country + "&apiKey=" + keyApi ;

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      listNews : [],
      listNewsNew : [],
      userName : "",
      isLogin: false
    }
  }

  componentDidMount = () => {
    const self = this;
    axios.all([
      axios.get(urlHeadline),
      axios.get(urlHeadlineNew) 
    ])
    .then(axios.spread(function(response1,response2){
      self.setState({listNews : response1.data.articles})
      self.setState({listNewsNew : response2.data.articles})
    }))
    .catch(function(error){
    });
  }

  render() {
    const {listNews, listNewsNew,username, isLogin } = this.state;

    return (
      <div>
        <Header />
        <Search />
        <div className="container">
            <div class="row">
                <div className="col-md-4 my-4">
                  <h5 className="card-header bg-primary" style={{ color: "white" }}>
                    Berita Terkini
                  </h5>
                  {listNewsNew.map((item, key) => {
                    return <Blogmenu key={key} title={item.title} url={item.url}/>;
                  })}
                </div>
                <div className="col-md-8">
                  {listNews.map((item, key) => {
                    const src_img = item.urlToImage === null ? imgNull : item.urlToImage;
                    const src_content = item.urlToImage !== null ? item.content : "";

                    return <Blogcontent key={key} title={item.title} img={src_img} content={src_content}  author={item.author} publishedAt={item.publishedAt}/>;
                  })}
                </div>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
