import axios from "axios";

const baseURL = 'http://localhost:4000'

const wolvesApi  = axios.create({
    baseURL
})


export default wolvesApi
