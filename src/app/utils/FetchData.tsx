import axios from "axios";

const fetchData = axios.create({
  baseURL: "https://staging.mazaady.com/api/v1/",
  headers: { 
    Accept: "application/json",
    "Private-Key":`${process.env.PRIVATE_KEY}`
   },
});
export default fetchData;
