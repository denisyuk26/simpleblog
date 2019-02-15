import { createStore, combineReducers, applyMiddleware } from "redux";
import { postsFetch, selectPost, getPost } from "./reducers/posts.reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    posts: postsFetch,
    post: getPost,
    active: selectPost
  }),
  {},
  applyMiddleware(logger, thunk)
);

export default store;
