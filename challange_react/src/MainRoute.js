import React from "react";
import {Route, Switch} from "react-router-dom";

import App from "./App"
import Signin from "./signin/Signin";
import AppBlog from "./AppBlog"
import AppGallery from "./AppGallery"
import AppContact from "./AppContact"
import Profil from "./profil/Profil"

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/signin" component={Signin}></Route>
      <Route exact path="/news" component={AppBlog}></Route>
      <Route exact path="/gallery" component={AppGallery}></Route>
      <Route exact path="/contact" component={AppContact}></Route>
      <Route exact path="/profil" component={Profil}></Route>
    </Switch>
  )
}

export default MainRoute;