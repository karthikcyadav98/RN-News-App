import {url, country_code, api_key} from '../config/apiConfig';
import axios from 'axios';

export const getArticles = async category => {
  try {
    let articles = await axios.get(`${url}`, {
      params: {
        country: country_code,
        category: category,
        apiKey: api_key,
      },
    });

    const results = articles;
    articles = null;
    return results.data.articles;
  } catch (error) {
    throw error;
  }
};
