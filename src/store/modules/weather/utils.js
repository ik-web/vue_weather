export const getTodayWeather = (data) => {
  return {
    temp: Math.round(data.main.temp),
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    precipitation: data.weather[0].description,
    icon: data.weather[0].icon,
  }
}
