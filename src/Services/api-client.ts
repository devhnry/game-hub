import axios from "axios";
export default axios.create({
    baseURL : 'https://api.rawg.io/api/',
  params: {
    key: "f2595356ab6a4c8f865956b89ea67566",
  },
});
  