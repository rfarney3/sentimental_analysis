let defaultState = {
  articles: [],
  loading: false,
  // headlines: []
}

export function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_ARTICLES":
      return {...state,
        articles: {
          loading: true,
          articles: action.payload
          }
        }
    case "LOADING_ARTICLES":
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
