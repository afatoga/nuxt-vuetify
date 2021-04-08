const APIURL = "https://sw.tode.cz/wp-json/wp/v2/pages";
const axios = require("axios");
export const requestsMixin = {
  methods: {
    getPages() {
      const options = {
        url: `${APIURL}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8"
        }
        // params: {
        //   resourceName: this.resourceName,
        //   limit: 10
        // },
      };
      return axios(options);
      // `/top-headlines?country=${country}&apiKey=${process.env.API_KEY}`
    }
    // getEverything(keyword) {
    //   return axios.get(
    //     `${APIURL}/everything?q=${keyword}&apiKey=${process.env.API_KEY}`
    //   );
    // }
  }
};
