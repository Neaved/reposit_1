class Node {
 

	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;

	}

	appendChild(node) {
		if (this.left && this.right){
			return;
		}
		node.parent = this;
		if(this.data > node.data){
			this.left = node;
		} else{
			this.right = node; 
		}
		
	}

	removeChild(node) {
		if ((this.left != node && this.right != node)){
			throw new Error('err');
		}
		node.parent = null;
		if(this.data > node.data){
			this.left = null;
		} else{
			this.right = null; 
		}
	}

	remove() {
		if(this.parent){
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if(this.parent){
			var pra = this.parent.parent 
			this.parent.parent = this;
			this.parent = pra;

			// var me = this.parent.right;
			// var left =  this.parent.left;
			// var parent = this.parent;
			// this.right = parent;
			// left.parent = me;
		}
	}
}

module.exports = Node;
