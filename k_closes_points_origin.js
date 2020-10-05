var kClosest = function (points, K) {
  let sorted = points.sort((a, b) => {
    let distanceA = Math.sqrt(a[0] ** 2 + a[1] ** 2);
    let distanceB = Math.sqrt(b[0] ** 2 + b[1] ** 2);
    return distanceA - distanceB;
  }); // nlogn
  console.log("sorted", sorted);
  return sorted.slice(0, K);
};

console.log(
  kClosest(
    [
      [-2, -6],
      [-7, -2],
      [-9, 6],
      [10, 3],
      [-8, 1],
      [2, 8],
    ],
    5
  )
);
