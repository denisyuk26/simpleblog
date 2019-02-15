import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPost } from "../actions";

class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getPost();
  }

  getComments = () => {
    if (this.props.post) {
      return this.props.post.map(postItem =>
        postItem.comments.map(comment => {
          return (
            <div key={comment.id}>
              <hr />
              <p>{comment.body}</p>
              <p>{comment.date}</p>
              <hr />
            </div>
          );
        })
      );
    }
    return;
  };
  render() {
    return (
      <>
        <h2>Comments</h2>
        {this.getComments()}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    post: state.post
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getPost }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CommentsList);
