import { SHOW_ID } from './constants';

const API_URL = 'http://api.tvmaze.com';

// API helper
const api = {
  getShow: () => {
    return fetch(`${API_URL}/shows/${SHOW_ID}?embed=episodes`)
      .then(data => data.json());
  },
  
  getEpisodeDetails: (season, number) => {
    return fetch(`${API_URL}/shows/${SHOW_ID}/episodebynumber?season=${season}&number=${number}`)
      .then(data => data.json());
  }
};

export default api;
