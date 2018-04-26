//urls
const NYT_URL = "https://api.nytimes.com/svc/topstories/v2/home.json?&api-key=";
const INDICO_URL = "https://apiv2.indico.io/emotion/batch"



export function fetchArticles() {
  return dispatch => {
    dispatch(fetchArticlesBegin());
      return fetch(NYT_URL + API_KEY)
        .then(handleErrors)
        .then(resp => resp.json())
        .then(json => {
          dispatch(fetchProductSuccess(json.results));
          return json.results
        })
        .catch(error => dispatch(fetchProductFailure(error)));
    }
  }

function handleErrors(response) {
  if(!response.ok) {
    throw Error(response.statusText);
  }
  return response
}
  // , () => (this.postFeels(this.state.headlines))

//   this.setState({
//   articles: json.results,
//   headlines: this.grabHeadlines(json.results)
// }))
