import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3300',
    headers: {'Content-Type': 'application/json'}
})