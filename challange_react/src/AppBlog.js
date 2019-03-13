import React, { Component } from "react";
import Footer from "./component/Footer.js";
import Search from "./component/Search.js";
import Blogcontent from "./blog/Blogcontent.js";
import Blogmenu from "./blog/Blogmenu.js";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./Store";

const imgNull = 0;

const baseUrl = "https://newsapi.org/v2/";
const keyApi = "79ea232ad60645a8a122c07c03321932";

class AppBlog extends Component {
  state = {
    listNews : [],
    search2: ''
  }
  
  componentDidMount = () => {
    this.props.newsBlog().then(
      () => {
        console.log(this)
      }
    )
  }

  handleInputChange = e => {
    const value = e.target.value;
    this.props.searchNews(value)
  };
  
  handleClick1 = e => {
    const sports = "sports"
    this.props.searchCategory(sports)
  };
  handleClick2 = e => {
    const lifestyle = "lifestyle"
    this.props.searchCategory(lifestyle)
  };
  handleClick3 = e => {
    const health = "health"
    this.props.searchCategory(health)
  };

  render() {
    return (
      <div>
        <Search
          doSearch={this.handleInputChange}
          doClick1={this.handleClick1}
          doClick2={this.handleClick2}
          doClick3={this.handleClick3}
        />
        <div className="container">
          <div class="row">
            <div className="col-md-4 my-4">
              <h5 className="card-header bg-primary" style={{ color: "white" }}>
                Berita Terkini
              </h5>
              {this.props.listNewsNew.map((item, key) => {
                return <Blogmenu key={key} title={item.title} url={item.url} />;
              })}
            </div>
            <div className="col-md-8">
              {this.props.listNews.map((item, key) => {
                  const src_img =
                    item.urlToImage === null ? imgNull : item.urlToImage;
                  const src_content =
                    item.urlToImage !== null ? item.content : "";
              
                  return (
                    <Blogcontent
                      key={key}
                      title={item.title}
                      img={src_img}
                      content={src_content}
                      author={item.author}
                      publishedAt={item.publishedAt}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(
  "listNews, listNewsNew",
  actions
)(withRouter(AppBlog));
