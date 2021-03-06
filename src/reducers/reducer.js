let defaultState = {
  articles: [],
  loading: false,
  emotions: [],
  currentUser: {}
}

export function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_ARTICLES":
      return {...state,
        articles: {
          loading: true,
          articles: action.payload,
          emotions: action.payload.map((article) => {
            return {anger: article.anger, joy: article.joy, fear: article.fear, surprise: article.surprise, sadness: article.sadness}
            })
          },
        }
    case "LOADING_ARTICLES":
      return {...state,
        articles: {
          loading: {
            ...!state.articles.loading
          }
        }
      }
    case 'SET_CURRENT_USER':
      const { id, username } = action.user;
      return { ...state, currentUser: { id, username } };
    case 'LOGOUT_USER':
      return { ...state, currentUser: {} };
    default:
      return state
  }
}

//
// export function authReducer(state = defaultState, action) {
//   switch (action.type) {
//     case 'SET_CURRENT_USER':
//       const { id, username } = action.user;
//       return { ...state, currentUser: { id, username } };
//     case 'LOGOUT_USER':
//       return { ...state, currentUser: {} };
//     default:
//       return state;
//   }
// };
