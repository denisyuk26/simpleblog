import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostsList from "./containers/PostsList";
import { HashRouter, Route, Switch } from "react-router-dom";
import Post from "./containers/Post";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={PostsList} />
            <Route exact path="/posts/:postId" component={Post} />
          </Switch>
        </HashRouter>
        <Footer />
      </Provider>
    );
  }
}

export default App;
