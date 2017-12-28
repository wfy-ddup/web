var root = '../../data/';
var axios = require('axios');

function apiAxios (method, url, params, success, failure){
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  }).then(function (res) {
    if (res.data.success === true) {
      if (success) {
        success(res.data)
      }
    } else {
      if (failure) {
        failure(res.data)
      } else {
        window.alert('error: ' + JSON.stringify(res.data))
      }
    }
  })
}

export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  }
}