import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    this.data = [];
  }

  push(item){
    this.data.push(item);
  }

  peek(){
    return isEmpty() ? null : this.data[0];
  }

  pop(){
    return isEmpty() ? null : this.data.pop();
  }

  isEmpty(){
    return this.data.length === 0;
  }

  toString(stringifier = x => x){
    return "" + this.data.reverse.map(stringifier).reverse;
  }

  toArray(){
    return this.data;
  }
}
