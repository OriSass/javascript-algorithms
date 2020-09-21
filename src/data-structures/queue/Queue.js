import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor(){
    this.index = 0;
    this.data = new Array(50);
  }
  enqueue(item){
    //this.data.push(item);
    //this.data = [...this.data, item];
    this.data[this.index++] = item;
  }
  dequeue(){
    if(this.isEmpty()){
      return null;
    }
    const [first, ...restOfData] = this.data;
    this.data = restOfData;
    return first;
    //return this.data.shift();
  }

  peek(){
    return this.isEmpty() ? null : this.data[0];
  }

  isEmpty(){
    return this.data.length === 0;
  }
}
