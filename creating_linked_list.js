class Node {
  constructor(data) {
    this.data = data || null;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data || null);
  }

  append(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = new Node(data);
    return;
  }

  prepend(data) {
    const next = this.head;
    this.head = new Node(data);
    this.head.next = next;
  }

  deleteWithValue(value) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }

    if (current.next === null) {
      return;
    }
    current.next = current.next.next;
  }

  print() {
    let message = "";
    if (this.head.data === null) {
      return console.log("Linked list is empty");
    }

    let current = this.head;
    message += current.data;
    while (current.next !== null) {
      message += ` ~> ${current.next.data}`;
      current = current.next;
    }
    return console.log(message);
  }
}

const myLinkedList = new LinkedList(3);
myLinkedList.append(2);
myLinkedList.append(6);
myLinkedList.prepend(8);
myLinkedList.deleteWithValue(2);
myLinkedList.print();
