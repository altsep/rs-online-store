export const getStartingIndices = (len: number, limit: number): number[] => {
  const startingIndices = [];

  for (let i = 0; i < len; i += 1) {
    if (i % limit === 0) {
      startingIndices.push(i);
    }
  }

  return startingIndices;
};
