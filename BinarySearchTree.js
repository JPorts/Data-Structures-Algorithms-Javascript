/* Binary Search Trees! */
/*Author: Jordan Porter */
/*Data Structures & Algorithms */

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    // BST Constructor
    constructor() {
        this.root = null
    }
    //This method is used to add a new element to the tree
    add(data) {
        const node = this.root;

        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    //This method returns the minimum value in the binary search tree
    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    //This method returns the maximum value in the binary search tree
    findMax(){
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }


    //This method returns the node value if it is in the tree
    find(data){
        let current = this.root;
        while(current.data !== data){
            if(data < current.data){
                current = current.left;
            } else {
                current = current.right;
            }
            if(current === null){
                return null;
            }
        }
        return current;
    }

    //This method performs a check to verify if node value is in tree
    isPresent(data){
        let current = this.root;
        while(current){
            if( data === current.data){
                return true;
            }
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    //This method is used to remove a node in the tree
    remove(data){
        const removeNode = function(node, data){
            if(node == null){
                return null;
            }
            if(data == node.data){
                //If node has no children
                if(node.left == null && node.right == null){
                    return null;
                }
                //Node has no left child
                if(node.left == null) {
                    return node.right;
                }
                //Node has no right child
                if(node.right ==null){
                    return node.left;
                }

                //Node has two children
                var tempNode = node.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data){
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

    //This method checks if tree is balanced
    isBalanced(){
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    //This Method finds the minimum height of the tree
    findMinHeight(node = this.root){

    }

    //This method finds the maximum height of the tree
    findMaxHeight(node = this.root){

    }

    //This method returns the tree in order
    inOrder(){

    }
    //This method returns the tree 
    preOrder(){

    }
    //This method returns the tree
    postOrder(){

    }
    //This method returns the nodes on each level of the tree
    levelOrder(){

    }
}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(4));