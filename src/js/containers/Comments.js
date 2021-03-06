import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPost } from "../actions";
import styles from "./app.module.css";

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
      return this.props.post.comments.map(comment => (
        <div className={styles.comment} key={comment.id}>
          <p>{comment.body}</p>
          <p>{comment.date}</p>
        </div>
      ));
    }
    return null;
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
