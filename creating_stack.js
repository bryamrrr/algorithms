class Stack {
  constructor(data) {
    this.values = data || [];
  }

  push(value) {
    this.values.push(value);
  }

  pop() {
    return this.values.pop();
  }

  top() {
    return this.values[this.values.length - 1];
  }

  pick() {
    if (this.values[0] === undefined) {
      return undefined;
    }

    let maxNumber = this.values[0];
    this.values.forEach((value) => {
      if (value > maxNumber) {
        maxNumber = value;
      }
    });

    return maxNumber;
    /*
      Time complexity: O(n)
      Space complexity: O(n) - Because of the values stack array

      This could be improved in time - O(1) - if we create another array that
      adds the maximum value each time we push into the stack or pops it. This will
      remain O(n) in space (actually O(2n) because there's another data structure)
    */
  }
}

const stack = new Stack([0, 2, 3, 4]);
console.log(stack);
