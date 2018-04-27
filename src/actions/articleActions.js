import config from "../constants.js"

const NYT_URL = "https://api.nytimes.com/svc/topstories/v2/home.json?&api-key=";

export function fetchArticles() {
  return dispatch => {
    dispatch({ type: "LOADING_ARTICLES"});
      return fetch(NYT_URL + config.NYT_API_KEY)
        .then(res => res.json())
        .then(json => dispatch({
          type: "ADD_ARTICLES", payload: json
        }))
    }
  }
