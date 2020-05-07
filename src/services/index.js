import axios from 'axios'


export const performRequest = (method, url,headers, params, auth) => {
 const body = method === 'get' ? 'params' : 'data'

 const config = {
   method,
   url,
   headers:headers,
   baseURL: "https://dev-api.alldaydr.com",
   [body]: params || {}
 }
 return  axios.request(config);
}