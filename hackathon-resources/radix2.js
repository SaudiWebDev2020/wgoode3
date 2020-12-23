function QNode(val) {
  this.val = val;
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  enqueue(val) {
    let temp = new QNode(val);
    if(!this.head) {
      this.head = temp;
      this.tail = temp;
    } else {
      this.tail.next = temp;
      this.tail = this.tail.next;
    }
  }
  
  dequeueAllInto(arr) {
    while(this.head) {
      arr.push(this.head.val);
      this.head = this.head.next;
    }
  }
}

function radix2(arr) {
  let highestPower = Math.ceil(Math.log2(Math.max(...arr)));
  let queues = [new Queue(), new Queue()];
  for(let power=0; power<=highestPower; power++) {
    for(let i=0; i<arr.length; i++) {
      let index = (arr[i] & Math.pow(2, power)) >> power;
      queues[index].enqueue(arr[i]);
    }
    arr = []
    queues[0].dequeueAllInto(arr);
    queues[1].dequeueAllInto(arr);
  }
  return arr;
}

console.log(radix2([10, 2, 1, 6, 38, 19, 56, 11]));
