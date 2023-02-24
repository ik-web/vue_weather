export const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('en-Us', {month: 'long'});
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const getCelsiusFromKelvin = (temp) => {
  const tempByCelsius = Math.round(temp - 273.15);

  if (tempByCelsius > 0) {
    return `+${tempByCelsius}°`
  }
  
  return `${tempByCelsius}°`
};

export const getNewItemId = (data) => {
  return data[data.length - 1].id + 1;
};