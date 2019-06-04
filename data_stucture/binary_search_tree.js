var TreeNode = /** @class */ (function () {
    function TreeNode(entity) {
        this.key = entity.key;
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
    BinarySearchTree.prototype.insert = function (entity) {
        var newNode = new TreeNode(entity);
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
fruitSweetness.insert({ name: '西瓜', sweetness: 100, key: 100 });
if (fruitSweetness.root) {
    console.log(fruitSweetness.root);
}
