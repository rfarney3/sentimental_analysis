const API_ROOT = `http://localhost:3000/api/v1`;
const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
};

const getWithToken = url => {
  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`);
};

const login = data => {
  return fetch(`${API_ROOT}/login/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
};

export const adapter = {
  auth: {
    login,
    getCurrentUser
  }
};
