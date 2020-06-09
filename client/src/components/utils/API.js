import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*"
  }
});

api.getEquipment = (callback) => {
  http.get('/equipment', callback);
};

api.getUsers = (callback) => {
  http.get('/users', callback);
};

const http = {

  get: (url, callback) => {
    api.get(url)
    .then((result) => {
      callback(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },

  post: undefined,
  patch: undefined,
  delete: undefined

};



export default api;