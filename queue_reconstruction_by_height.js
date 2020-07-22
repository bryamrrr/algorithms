/*
# Queue Reconstruction by Height

Suppose you have a random list of people standing in a queue.
Each person is described by a pair of integers (h, k),
where h is the height of the person and k is the number of people in front of this person
who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

 
Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function (people) {
  const peoplesortedByHeight = people.sort((a, b) => {
    if (a[0] === b[0]) {
      // If heights are equal
      return a[1] - b[1]; // Sort from smaller to greater # people in front eg. [[7, 0], [7, 1]]
    }
    return b[0] - a[0]; // If heights are different, put taller people first [[6, 1], [5, 0]]
  });

  /*
    We ended up with an array sorte by height first (DESC), and people in front (ASC).
    For the example above:

    People input:
    [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

    Output:
    [[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]
  */

  const newArray = [];

  peoplesortedByHeight.forEach((person) => {
    // Iterate over the sorted array of people
    newArray.splice(person[1], 0, person); // inserting each person, using # of people in front (person[1]) as index
  });

  return newArray;
};
