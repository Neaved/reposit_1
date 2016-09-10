const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodesCounter = 0;
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if(!this.root){
			this.root = node;	
		}
		if(this.parentNodesCounter == 2){
			this.parentNodesCounter = 0
			this.parentNodes.shift();
		}
		this.parentNodesCounter ++
		this.parentNodes.push(node)

	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
