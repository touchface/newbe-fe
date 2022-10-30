import axios from "axios"
import pkg from '~/package.json'

export const request = axios.create({
    baseURL: pkg.config.baseURL
})

export default request