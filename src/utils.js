export const getNewItemId = (data) => {
  return (data[data.length - 1]?.id + 1) || 1;
};
