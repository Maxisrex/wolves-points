import axios from "axios";

const baseURL = 'localhost:3000/api'

const wolvesApi  = axios.create({
    baseURL
})


export default wolvesApi
