const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize < 30){
			this.maxSize = maxSize;
		} else{
			this.maxSize = 30;
		}
		this.heap = new MaxHeap();

	}

	push(data, priority) {
		var countSize = 1;
		if(this.maxSize > countSize){
			this.heap.push(data,priority);
			countSize ++;
		}else{
			throw new Error('err');

		}
	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
