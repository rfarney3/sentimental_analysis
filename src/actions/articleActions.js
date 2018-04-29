const BACKEND_URL = "http://localhost:3000/api/v1/articles"

export function fetchArticles() {
  return dispatch => {
    dispatch({ type: "LOADING_ARTICLES"});
      return fetch(BACKEND_URL)
        .then(res => res.json())
        .then(json => dispatch({
          type: "ADD_ARTICLES", payload: json
        }))
    }
  }
