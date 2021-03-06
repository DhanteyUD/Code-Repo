class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  contructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first Node...
  insertFirst(data) {
    let newHead = new Node(data, this.head);
    this.head = newHead;
  }
  // Insert last node...
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make the head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at index...
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    // If first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const node = new Node(data);
    let current, previous;

    // Set current to first index
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  // Get data at index...
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
  }

  // Remove at index...
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // Clear list...
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data...
  printListData() {
    let output = '';
    let current = this.head;
    while (current) {
      output = `${output}${current.data} -> `;
      current = current.next;
    }
    console.log(`${output} null`);
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(50);
ll.insertAt(500, 2);
ll.getAt(4);
ll.removeAt(4);
ll.removeAt(3);
ll.removeAt(0);
ll.clearList();

ll.printListData();
