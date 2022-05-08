import axios from "axios";

class ApiCaller{

    site= 'http://localhost:4000/v1/';
    constructor(){
    }

    postData({ url, data }) {
      return axios.post(this.site + url, data)
        .then(data => {
          console.log(data.data);
          return data.data;
        })
        .catch(err => {
          console.log(err);
        })
    }
}
export default ApiCaller;