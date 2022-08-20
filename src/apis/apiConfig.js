import axios from "axios";

const BASE_URL = 'https://rickandmortyapi.com/api';

export const coreAPI = axios.create({
    baseURL: `${BASE_URL}`,
})