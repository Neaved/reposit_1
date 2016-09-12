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
		//var parentNodesTemp = this.parentNodes;
		//for (var i = 0; i < parentNodesTemp.length-1; i++) {
		//	for (var j = i+1; j < parentNodesTemp.length; j++) {
		//		if(parentNodesTemp.priority[i] < parentNodesTemp.priority[j]){
		//		var temp = parentNodesTemp[i]
		//		parentNodesTemp[i] = parentNodesTemp[j]
		//		parentNodesTemp[j] = temp
		//		}
		//	}
		//}
	//	this.parentNodes = parentNodesTemp;
	//	this.parentNodes.priority.sort();
	}

	detachRoot() {
		this.root = null;
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.parentNodesCounter;
		
	}

	isEmpty() {
		if (this.parentNodesCounter == 0) {
			return true;
		}else{
			return false;
		}
	}

	clear() {
		this.root = null;
		//this.parentNodes.length = 0;
		this.parentNodes = [];
	}

	insertNode(node) {
		if(!this.root){
		//	for (var i = 0; i <= node.length; i++) {
				this.root = node
		//	}
		//	this.root = node;	
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
