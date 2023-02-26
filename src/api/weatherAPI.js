import axios from "axios";

const WEATHER_API_KEY = '635c26e3461ef61f99f1645e783fcdd3';
const GEO_API_KEY = 'c711c3806bdf4d18a853392fb735988b';
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather`
const GEO_URL = `https://api.opencagedata.com/geocode/v1/json`;
const cityNamesLimit = 5;

export const fetchTodayWeather = async (cityName) => {
  return await axios.get(WEATHER_URL, {
    params: {
      q: cityName,
      appid: WEATHER_API_KEY
    }
  });
};

export const fetchCityNames = async (cityName) => {
  return await axios.get(GEO_URL, {
    params: {
      key: GEO_API_KEY,
      q: cityName,
      limit: cityNamesLimit,
      abbrv: 1,
      no_annotations: 1
    }
  });
};
