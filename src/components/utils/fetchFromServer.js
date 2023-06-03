import axios from 'axios'

const OUR_KEY = '48d0452c0emsh32da2ddbfb121b8p137bf4jsnab4c9ffb08f8'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': OUR_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromServer = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data
}