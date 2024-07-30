import Node from "./Node.js";

class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this.root !== null;
        } else {
            return this.insertNode(this.root, value);
        }
    }
    
    insertNode(node, value) {
        if (value.sabor === node.value.sabor) {
            return false;
        }
    
        if (value.sabor < node.value.sabor) {
            if (node.left === null) {
                node.left = new Node(value);
                return node.left !== null;
            } else {
                return this.insertNode(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = new Node(value);
                return node.right !== null;
            } else {
                return this.insertNode(node.right, value);
            }
        }
    }

    search(sabor) {
        return this.searchNode(this.root, sabor);
    }

    searchNode(node, sabor) {
        if (node === null || node.value.add === sabor) {
            return node;
        } else if (sabor < node.value.add) {
            return this.searchNode(node.left, sabor);
        } else {
            return this.searchNode(node.right, sabor);
        }
    }

    min() {
        if (this.root === null) {
            return null;
        }
        return this.minNode(this.root).value;
    }
    
    minNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.minNode(node.left);
        }
    }
    
    max() {
        if (this.root === null) {
            return null;
        }
        return this.maxNode(this.root).value;
    }
    
    maxNode(node) {
        if (node.right === null) {
            return node;
        } else {
            return this.maxNode(node.right);
        }
    }
    

    imprimir(callback) {
        this.inOrderTraversal(this.root, callback);
    }

    inOrderTraversal(node, callback) {
        if (node !== null) {
            this.inOrderTraversal(node.left, callback);
            callback(node.value);
            this.inOrderTraversal(node.right, callback);
        }else{
            return
        }
    }
}

export default BST;
