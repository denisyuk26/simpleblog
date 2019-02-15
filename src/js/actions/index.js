export const selectPost = post => {
  localStorage.setItem("post", `/posts/${post.id}`);
  return {
    type: "SELECT_POST",
    data: post.id
  };
};

export const getPosts = () => {
  return dispatch => {
    fetch("https://simple-blog-api.crew.red/posts")
      .then(response => response.json())
      .then(posts => {
        dispatch({ type: "FETCHING_POST_SUCCES", data: posts });
      });
  };
};

export const getPost = () => {
  let id = localStorage.getItem("post");
  return dispatch => {
    fetch(`https://simple-blog-api.crew.red${id}?_embed=comments`)
      .then(response => response.json())
      .then(post => {
        dispatch({ type: "GET_POST", data: post });
      });
  };
};
