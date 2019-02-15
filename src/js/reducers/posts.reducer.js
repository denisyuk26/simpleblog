const initialState = [];

export function postsFetch(state = initialState, action) {
  switch (action.type) {
    case "FETCHING_POST_SUCCES":
      return [...action.data];
    default:
      return state;
  }
}

export function selectPost(state = initialState, action) {
  switch (action.type) {
    case "SELECT_POST":
      return [action.data];
    default:
      return state;
  }
}

export function getPost(state = null, action) {
  switch (action.type) {
    case "GET_POST":
      return [action.data];
    default:
      return state;
  }
}
