import axios from "axios";

const API_KEY = '635c26e3461ef61f99f1645e783fcdd3';
const BASE_URL = 'https://api.openweathermap.org';
const WEATHER_URL = `${BASE_URL}/data/2.5/weather`
const GEO_URL = `${BASE_URL}/geo/1.0/direct`;
const fetchedCitiesLimit = 5;

export const fetchWeather = async (cityName) => {
  return await axios.get(WEATHER_URL, {
    params: {
      q: cityName,
      appid: API_KEY
    }
  });
};

export const fetchCityNames = async (cityName) => {
  return await axios.get(GEO_URL, {
    params: {
      q: cityName,
      limit: fetchedCitiesLimit,
      appid: API_KEY
    }
  });
};
