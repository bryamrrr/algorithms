/**
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = function (dominoes) {
  const arr = dominoes.split("");
  const maxForce = arr.length;

  let rightForces = [];
  let rightMaxForce = maxForce;
  arr.forEach((item) => {
    if (item === "L") {
      rightForces.push(0);
      rightMaxForce = maxForce;
    } else if (item === "R") {
      rightMaxForce = maxForce;
      rightForces.push(rightMaxForce);
      rightMaxForce--;
    } else if (item === ".") {
      if (rightMaxForce === maxForce) {
        rightForces.push(0);
      } else {
        rightForces.push(rightMaxForce);
        rightMaxForce--;
      }
    }
  });

  let leftForces = [];
  let leftMaxForce = -maxForce;
  for (let i = maxForce - 1; i >= 0; i--) {
    item = arr[i];
    if (item === "L") {
      leftMaxForce = -maxForce;
      leftForces.unshift(leftMaxForce);
      leftMaxForce++;
    } else if (item === "R") {
      leftForces.unshift(0);
      leftMaxForce = -maxForce;
    } else if (item === ".") {
      if (leftMaxForce === -maxForce) {
        leftForces.unshift(0);
      } else {
        leftForces.unshift(leftMaxForce);
        leftMaxForce++;
      }
    }
  }

  const result = [];
  rightForces.forEach((item, index) => {
    const resultantForce = item + leftForces[index];
    if (resultantForce > 0) {
      result.push("R");
    } else if (resultantForce < 0) {
      result.push("L");
    } else {
      result.push(".");
    }
  });

  return result.join("");
};

console.log(pushDominoes(".L.R...LR..L..")); // Should returns 'LL.RR.LLRRLL..'
