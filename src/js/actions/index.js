export const selectPost = post => {
  const url  = localStorage.setItem("post", `/posts/${post.id}`);
  return {
    type: "SELECT_POST",
    data: url
  };
};

export const getPosts = () => async dispatch => {
  try {
    const response = await fetch("https://simple-blog-api.crew.red/posts");
    const posts = await response.json();
    const postsState = dispatch({ type: "FETCHING_POST_SUCCESS", data: posts });
    return postsState;
  } catch (error) {
    console.log('Oops, we can\'t get posts, try reload the page',error);
  }
};

export const getPost = () => async dispatch => {
  let id = localStorage.getItem("post");
  try {
    const response = await fetch(
      `https://simple-blog-api.crew.red${id}?_embed=comments`
    );
    const post = await response.json();
    const postState = dispatch({ type: "GET_POST", data: post });
    return postState;
  } catch (error) {
    console.log(error);
  }
};
