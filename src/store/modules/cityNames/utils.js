export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

export const getCityNamesData = (data) => {
  const cityNamesData = [];

  data.forEach((item, index) => {
    const formatted = item.formatted;
    const place = item.components.city || item.components.village || item.components.town;

    if (place) {
      cityNamesData.push({
        formatted,
        place,
        id: index
      })
    }
  });

  return cityNamesData;
};
