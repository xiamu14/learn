var TreeNode = /** @class */ (function () {
    function TreeNode(key, entity) {
        this.key = key;
        this.entity = entity;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
/**
 * @description 二叉搜索树
 */
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (key, entity) {
        var newNode = new TreeNode(key, entity);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    BinarySearchTree.prototype.insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    return BinarySearchTree;
}());
var fruitSweetness = new BinarySearchTree();
fruitSweetness.insert(100, { name: '西瓜', sweetness: 100 });
if (fruitSweetness.root) {
    console.log(fruitSweetness.root);
}
