export const mapDataArray = (data) => {
  let newArray = data.map((item1, index1) => {
    return item1.map((item2, index2) => {
      if (index2 === 0) {
        return `Baris${index1 + 1}`;
      } else if (item2 === item1[index2 - 1]) {
        return 'before';
      } else {
        return item2;
      }
    });
  });
  return newArray;
};
