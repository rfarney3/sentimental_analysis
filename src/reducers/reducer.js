let defaultState = {
  articles: [],
  loading: false,
  emotions: []
}

export function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_NYT_ARTICLES":
      return {...state,
        articles: {
          loading: true,
          articles: action.payload,
          emotions: action.payload.map((article) => {
            return {anger: article.anger, joy: article.joy, fear: article.fear, surprise: article.surprise, sadness: article.sadness}
            })
          },
        }
    case "LOADING_NYT_ARTICLES":
      return {...state,
        articles: {
          loading: {
            ...!state.articles.loading
          }
        }
      }
    case "ADD_BBC_ARTICLES":
      return {...state,
        articles: {
          loading: true,
          articles: action.payload,
          emotions: action.payload.map((article) => {
            return {anger: article.anger, joy: article.joy, fear: article.fear, surprise: article.surprise, sadness: article.sadness}
            })
          },
        }
    case "LOADING_BBC_ARTICLES":
      return {...state,
        articles: {
          loading: {
            ...!state.articles.loading
          }
        }
      }
    case "ADD_FOX_ARTICLES":
      return {...state,
        articles: {
          loading: true,
          articles: action.payload,
          emotions: action.payload.map((article) => {
            return {anger: article.anger, joy: article.joy, fear: article.fear, surprise: article.surprise, sadness: article.sadness}
            })
          },
        }
    case "LOADING_FOX_ARTICLES":
      return {...state,
        articles: {
          loading: {
            ...!state.articles.loading
          }
        }
      }
    default:
      return state
  }
}
