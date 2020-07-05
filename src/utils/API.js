import axios from "axios";

export default {
  search: function (breed) {
    let url = "https://dog.ceo/api/breeds/image/random";
    if (breed) url = `https://dog.ceo/api/breed/${breed}/images`;

    return axios.get(url);
  },
};
