import axios from 'axios'

const isDev = !(process.env.NODE_ENV === 'production')
const baseURL = isDev ? process.env.devBaseUrl : process.env.baseUrl

export default axios.create({ baseURL })
