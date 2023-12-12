import axios from "axios"

const port = 8080 // Porta da API
export const api = axios.create({
    baseURL: `http://192.168.0.9:${port}/api-livros/api/v1` // endereço de hospedagem da API
})