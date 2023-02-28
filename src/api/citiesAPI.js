import axios from "axios";

const API_KEY = 'c711c3806bdf4d18a853392fb735988b';
const BASE_URL = 'https://api.opencagedata.com';
const GEO_URI = `${BASE_URL}/geocode/v1/json`;
const cityNamesLimit = 5;

export const fetchCityNames = async (cityName) => {
  return await axios.get(GEO_URI, {
    params: {
      key: API_KEY,
      q: cityName,
      limit: cityNamesLimit,
      abbrv: 1,
      no_annotations: 1
    }
  });
};
