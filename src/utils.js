export const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('en-Us', {month: 'long'});
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const getCelsiusFromKelvin = (temp) => {
  return Math.round(temp - 273.15) + '°C';
};
