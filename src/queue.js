const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize < 30){
			this.maxSize = maxSize;
		} else{
			this.maxSize = 30;
		}
		this.heap = new MaxHeap();
		this.countSize = 0;

	}

	push(data, priority) {
		
		this.heap.push(data,priority);
		this.countSize ++;
		if(this.maxSize < this.countSize){
			throw new Error('err');
		}
	}

	shift() {
		if(this.isEmpty()){
			throw new Error('err');
		}
		var removedNode = this.heap.pop();
		this.countSize --;
		return removedNode;
	}

	size() {
		return this.countSize;

	}

	isEmpty() {
		if (this.countSize == 0) {
			return true;
		}else{
			return false;
		}
		
	}
}

module.exports = PriorityQueue;
