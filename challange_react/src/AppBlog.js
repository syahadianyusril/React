import React, { Component } from 'react';
import Header from './component/Header.js'
import Footer from './component/Footer.js'
import Search from './component/Search.js'
import Blogcontent from './blog/Blogcontent.js'
import Blogmenu from './blog/Blogmenu.js'
import axios from 'axios'
import Navigation from './component/Navigation.js';
import { Redirect } from "react-router-dom";

const imgNull = 0;

const baseUrl = "https://newsapi.org/v2/";
const keyApi = "79ea232ad60645a8a122c07c03321932";
const search = "google"
const country = "us"


// endpoint semua berita
const urlHeadline = baseUrl + "everything?q=" + search + "&apiKey=" + keyApi ;
// endpoint headlines
const urlHeadlineNew = baseUrl + "top-headlines?country=" + country + "&apiKey=" + keyApi ;
// 

class AppBlog extends Component {
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

  handleInputChange = e => {
    console.log("event", e.target.value);
    let value = e.target.value;

    this.setState(
      {
        search : value
      },
      () => {
        this.searchNews(value)
      }
    );
  };

  handleClick1 = e => {
    console.log("event", e);
    let Sports = "Sports"
    this.setState(
      () => {
        this.searchCategory(Sports);
      }
    )
  }
  handleClick2 = e => {
    console.log("event", e);
    let Lifestyle = "Lifestyle"
    this.setState(
      () => {
        this.searchCategory(Lifestyle);
      }
    )
  }
  handleClick3 = e => {
    console.log("event", e);
    let Health = "Health"
    this.setState(
      () => {
        this.searchCategory(Health);
      }
    )
  }

  searchCategory = async value => {
    console.log("searchCategory", value);
    const self = this ;
    try {
      const response = await axios.get(
        baseUrl + "everything?q=" + value + "&apiKey=" + keyApi
      )
      console.log(response);
      self.setState({listNews: response.data.articles})
    }catch (error){
      console.log(error);
    }
  }

  searchNews = async keyword => {
    console.log("search News", keyword)
    const self = this;

    if (keyword.length > 2){
      try {
        const response = await axios.get(
          baseUrl + "everything?q=" + keyword + "&apiKey=" + keyApi
        );
        console.log(response);
        self.setState({listNews:response.data.articles})        
      }
      catch (error) {
        console.error(error);
      }
    } 
  }

  render() {
    const {listNews, listNewsNew, username, isLogin } = this.state;
    const is_login = JSON.parse(localStorage.getItem("is_login"));

    if (is_login === null) {
      return <Redirect to={{pathname: "/signin"}}/>;
    }
    return (
      <div>
        <Search doSearch={this.handleInputChange} doClick1={this.handleClick1} doClick2={this.handleClick2} doClick3={this.handleClick3}/>
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

export default AppBlog;
