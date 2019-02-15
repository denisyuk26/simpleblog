import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { selectPost, getPosts, getPost } from "../actions";

import styles from './app.module.css'

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getPosts();
  }

  getActivePost = () => {
    this.props.getPost();
  };

  showPostsList = () => {
    return this.props.posts.map(post => (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <li className = {styles.post_item} onClick={() => this.props.selectPost(post)}>
          <p className={styles.author}>Author: {post.author}</p> 
          <p className={styles.title}>Title: {post.title}</p>
        </li>
      </Link>
    ));
  };
  render() {
    return (
      <div className={styles.app}>
        <ul className={styles.container}>{this.showPostsList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    post: state.post,
    active: state.active
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { getPosts: getPosts, selectPost: selectPost, getPost: getPost() },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(PostsList);
