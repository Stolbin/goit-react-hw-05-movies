import { PropTypes } from "prop-types";
import axios from "axios";
const API_KEY = "af36a8e543b2cdf1ea4b27ac643d9907";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const getMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getMovieByName = async (query) => {
  const { data } = await axios.get(`search/movie?api_key=${API_KEY}`, {
    params: {
      query,
    },
  });
  return data;
};

getTrendMovies.propTypes = {
  query: PropTypes.string.isRequired,
};

getMovieById.propTypes = {
  id: PropTypes.number.isRequired,
};

getMovieByName.propTypes = {
  query: PropTypes.number.isRequired,
};
