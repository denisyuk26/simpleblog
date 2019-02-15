import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectPost, getPosts, getPost } from "../actions";
import CommentList from "./Comments";
import styles from './app.module.css'


class Post extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getPost();
  }

  getActivePost = () => {
    const activeId = localStorage.getItem("post");
    return this.props.posts
      .filter(i => `/posts/${i.id}` === activeId)
      .map(post => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{post.author}</p>
            <p>{post.date}</p>
          </div>
        );
      });
  };

  render() {
    return (
      <div className={styles.post}>
        {this.getActivePost()}
        <CommentList post={this.props.post} />
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
    { getPosts: getPosts, selectPost: selectPost, getPost: getPost },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Post);
