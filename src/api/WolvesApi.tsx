import axios from "axios";

const baseURL = 'localhost:4000'

const wolvesApi  = axios.create({
    baseURL
})


export default wolvesApi
