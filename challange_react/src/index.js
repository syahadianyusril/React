import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppGallery from './AppGallery';
import AppContact from './AppContact';
import AppBlog from './AppBlog';
import AppRouter from './AppRouter';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

const rootEl = document.getElementById("root");

const render = Component => 
  ReactDOM.render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    rootEl
  );

render(AppRouter);


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<AppGallery />, document.getElementById('root'));
// ReactDOM.render(<AppContact />, document.getElementById('root'));
// ReactDOM.render(<AppBlog />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
