import axios from "axios";

const fetchData = axios.create({
    baseURL: "https://dummyjson.com",
    method: "GET",
});

export default fetchData;