import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6bd417a106da40d0a30e1ca3bd845c36'
  }
})