/*
  Implement the following operations of a queue using stacks.

  push(x) -- Push element x to the back of queue.
  pop() -- Removes the element from in front of queue.
  peek() -- Get the front element.
  empty() -- Return whether the queue is empty.

  Notes:

  You must use only standard operations of a stack -- which means only:
    push to top, peek/pop from top, size, and is empty operations are valid.
  Depending on your language, stack may not be supported natively.
    You may simulate a stack by using a list or deque (double-ended queue),
    as long as you use only standard operations of a stack.
  You may assume that all operations are valid (for example,
    no pop or peek operations will be called on an empty queue).
*/

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

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack = new Stack();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const numElements = this.stack.values.length;
  let counter = 0;
  const tempArray = [];

  while (counter < numElements) {
    tempArray.push(this.stack.pop());
    counter++;
  }

  const firstElement = tempArray[counter - 1];
  counter--;

  while (counter > 0) {
    this.stack.push(tempArray[counter - 1]);
    counter--;
  }

  return firstElement;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const numElements = this.stack.values.length;
  console.log(numElements);
  let counter = 0;
  const tempArray = [];

  while (counter < numElements) {
    tempArray.push(this.stack.pop());
    counter++;
  }

  const firstElement = tempArray[counter - 1];

  while (counter > 0) {
    this.stack.push(tempArray[counter - 1]);
    counter--;
  }

  return firstElement;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * const obj = new MyQueue()
 * obj.push(x)
 * const param_2 = obj.pop()
 * const param_3 = obj.peek()
 * const param_4 = obj.empty()
 */

const queue = new MyQueue();

queue.push(1);
queue.push(2);
console.log(queue.peek()); // returns 1
console.log(queue.pop()); // returns 1
console.log(queue.empty()); // returns false

/*
  Python solution for enqueue and dequeue

  class Queue(object):
  def __init__(self):
    self.s1 = []
    self.s2 = []

  def enqueue(self, val):
    self.s1.append(val)

  def dequeue(self):
    if self.s2:
      return self.s2.pop()

    if self.s1:
      while self.s1:
        self.s2.append(self.s1.pop())
      return self.s2.pop()

    return None
*/
