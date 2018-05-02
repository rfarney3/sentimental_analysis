const NYT_BACKEND_URL = "http://localhost:3000/api/v1/articles"
const BBC_BACKEND_URL = "http://localhost:3000/api/v1/broadcastings"


export function fetchArticles() {
  return dispatch => {
    dispatch({ type: "LOADING_NYT_ARTICLES"});
      return fetch(NYT_BACKEND_URL)
        .then(res => res.json())
        .then(json => dispatch({
          type: "ADD_NYT_ARTICLES", payload: json
        }))
    }
  }

export function fetchBBCArticles() {
    return dispatch => {
      dispatch({ type: "LOADING_BBC_ARTICLES"});
        return fetch(BBC_BACKEND_URL)
          .then(res => res.json())
          .then(json => dispatch({
            type: "ADD_BBC_ARTICLES", payload: json
          }))
      }
    }
