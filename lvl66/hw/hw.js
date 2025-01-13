function getUniqueElements(array) {
  const elementCounts = array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});

  return array.filter(item => elementCounts[item] === 1)