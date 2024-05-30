const showRandomNumber = (min = 0, max = 100) => {
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
};

export default showRandomNumber;
