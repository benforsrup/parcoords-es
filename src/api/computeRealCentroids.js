const computeRealCentroids = (dimensions, position) => (row, yourDim) =>
  Object.keys(yourDim).map(d => {
    const x = position(d);
    const y = yourDim[d].yscale(row[d]);
    return [x, y];
  });

export default computeRealCentroids;
