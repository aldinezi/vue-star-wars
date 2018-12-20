export default {
  contains: (array, argument) => {
    if (array.filter(char => parseInt(char.url.match(/(\d*)(?=\/$)/g)[0], 10) === argument).length > 0) {
      return true;
    }
    return false;
  },
};
