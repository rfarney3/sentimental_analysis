//urls
import config from "../constants.js"

const NYT_URL = "https://api.nytimes.com/svc/topstories/v2/home.json?&api-key=";
const INDICO_URL = "https://apiv2.indico.io/emotion/batch"

export function fetchArticles() {
  return dispatch => {
    dispatch({ type: "LOADING_ARTICLES"});
      return fetch(NYT_URL + config.NYT_API_KEY)
        .then(res => res.json())
        .then(json => dispatch({ type: "ADD_ARTICLES", payload: json}));
    }
  }
  // , () => (this.postFeels(this.state.headlines))

  // grabHeadlines(data) {
  //   let art = data.map((article) => article.title)
  //   return art
  // }
  //
  // postFeels(headline) {
  //   fetch(INDICO_URL, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       'api_key': INDICO_API_KEY,
  //       'data': headline,
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  // }
