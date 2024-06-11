import axios from "axios";

const fetchData = axios.create({
    baseURL: "https://dummyjson.com",
});

export default fetchData;