import React, { Component, Suspense } from "react";
import {  Switch, Route, Redirect } from "react-router-dom";
// import history from "./history";
import Home from "./components/Home/Home";
import Work from "./components/Home/Work/Work";
import Portfolio from "./components/Home/Portfolio/Portfolio";
import About from "./components/Home/About/About";
import Intro from "./components/Home/Intro/Intro";
import Contact from "./components/Home/Contact/Contact";
import PostDetails from "./components/Blog/PostDetails/PostDetails";
import notFound from "./components/Layout/Common/Notfound/Notfound";
// import Blog from "./components/Blog/Blog";
const Blog = React.lazy(()=>import('./components/Blog/Blog'));

export default class Routes extends Component {
  render() {
    return (
      
        <Switch >
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Intro} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/blog/" component={Blog} /> */}
          <Route path="/blog/posts/:id" component={PostDetails} />

          <Route
            path="/blog"
            render={() => (
              <Suspense fallback={<div>Loading ... </div>}>
                <Blog />
              </Suspense>
            )}
          />
          <Route path="/notFound" component={notFound} />
          <Redirect from="*" to="/notFound" />
        </Switch>
     
    );
  }
}
