import axios from "axios";

const API_KEY = '635c26e3461ef61f99f1645e783fcdd3';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER_URI = `${BASE_URL}/weather`

export const fetchTodayWeather = async (cityName) => {
  return await axios.get(WEATHER_URI, {
    params: {
      q: cityName,
      units: 'metric',
      appid: API_KEY
    }
  });
};
