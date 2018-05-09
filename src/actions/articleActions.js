import { adapter } from '../components/auth.js';

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

  export const fetchUser = () => dispatch => {
    adapter.auth.getCurrentUser().then(user => {
      dispatch({ type: 'SET_CURRENT_USER', user });
    });
  };

  export const loginUser = (email, password, history) => dispatch => {
    adapter.auth.login({ email, password })
    .then(user => {
      localStorage.setItem('token', user.jwt);
      dispatch({ type: 'SET_CURRENT_USER', user });
      history.push('/home');
    });
  };

  export const logoutUser = () => {
    localStorage.removeItem('token');
    return { type: 'LOGOUT_USER' };
  };
