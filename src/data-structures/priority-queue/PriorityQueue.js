
// It is the same as min heap except that when comparing two elements
// we take into account its priority instead of the element's value.
export default class PriorityQueue{
  constructor(){
    this.data = [];
  }
  peek(){
    if(this.data.length > 0){
      return this.data[0].value;
    }
    return null;
  }
  add(value, priority){
    let added = false;
    let item = {value: value, priority: priority};
    let edgeCaseStart = this.data.length === 0; // empty array
    let edgeCaseEnd;
    this.data.length > 0 ?
      edgeCaseEnd = priority >= this.data[this.data.length - 1].priority : edgeCaseEnd = false; // added is in the lowest priority
    let edgeCaseMid = this.data.length === 1; // 1 value in array
    
    // edge cases
    if(edgeCaseStart || edgeCaseEnd){
        this.data.push(item);
        added = true;
    }
    if(edgeCaseMid && added === false){
      priority <= this.data[0].priority ? 
        this.data.unshift(item):
        this.data.push(item);
      added = true;
    }    
    // all other cases
    else{ 
      if(added === false){
        for(let i = this.data.length - 1; i > 0; i--){
          if(priority <= this.data[i].priority && 
             priority >= this.data[i-1].priority){
                this.data.splice(i,0,item);
                added = true;
             }
        }
      }
    }
    // if added item has the highest prority
    if(added === false){
      this.data.unshift(item);
    }
  }
  hasValue(value){
    return this.data.some(arrItem => arrItem.value === value);
  }
  poll(){
    let item = this.data.shift();
    return item.value;
  }
  changePriority(whereValue, newPriority){
    let deleteIndex;
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i].value === whereValue){
        deleteIndex = i;
        break;
      }
    }
    this.data.splice(deleteIndex, 1);
    this.add(whereValue, newPriority);
  }
}