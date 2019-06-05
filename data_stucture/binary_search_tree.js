var Eorder;
(function (Eorder) {
    /**
     * @desc 中序遍历
     */
    Eorder[Eorder["in"] = 0] = "in";
    /**
     * @desc 先序遍历
     */
    Eorder[Eorder["pre"] = 1] = "pre";
    /**
     * @desc 后序遍历
     */
    Eorder[Eorder["post"] = 2] = "post";
})(Eorder || (Eorder = {}));
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
    /**
     * @desc 中序遍历，从根节点开始，从最小值到最大值排序遍历
     * @param callback 回调函数，传入 param:TreeNode<T>
     */
    BinarySearchTree.prototype.inOrderTraverse = function (callback) {
        if (this.root) {
            this.inOrderTraverseNode(this.root, callback);
        }
    };
    BinarySearchTree.prototype.inOrderTraverseNode = function (node, callback) {
        if (node.left) {
            this.inOrderTraverseNode(node.left, callback);
        }
        callback(node);
        if (node.right) {
            this.inOrderTraverseNode(node.right, callback);
        }
    };
    /**
     * @desc 先序遍历，一种优先于后代节点的访问方式
     */
    BinarySearchTree.prototype.preOrderTraverse = function (callback) {
        if (this.root) {
            this.preOrderTraverNode(this.root, callback);
        }
    };
    BinarySearchTree.prototype.preOrderTraverNode = function (node, callback) {
        callback(node);
        if (node.left) {
            this.inOrderTraverseNode(node.left, callback);
        }
        if (node.right) {
            this.inOrderTraverseNode(node.right, callback);
        }
    };
    /**
     * @desc 遍历，包含中序，先序，后序
     */
    BinarySearchTree.prototype.orderTraverse = function (type, callback) {
        if (this.root) {
            this.orderTraverseNode(type, this.root, callback);
        }
    };
    BinarySearchTree.prototype.orderTraverseNode = function (type, node, callback) {
        switch (type) {
            case Eorder["in"]:
                if (node.left) {
                    this.orderTraverseNode(type, node.left, callback);
                }
                callback(node);
                if (node.right) {
                    this.orderTraverseNode(type, node.right, callback);
                }
                break;
            case Eorder.pre:
                callback(node);
                if (node.left) {
                    this.orderTraverseNode(type, node.left, callback);
                }
                if (node.right) {
                    this.orderTraverseNode(type, node.right, callback);
                }
                break;
            case Eorder.post:
                if (node.left) {
                    this.orderTraverseNode(type, node.left, callback);
                }
                if (node.right) {
                    this.orderTraverseNode(type, node.right, callback);
                }
                callback(node);
                break;
            default:
                break;
        }
    };
    return BinarySearchTree;
}());
var fruitSweetness = new BinarySearchTree();
fruitSweetness.insert({ name: "西瓜", sweetness: 100, key: 100 });
fruitSweetness.insert({ name: "草莓", sweetness: 80, key: 80 });
fruitSweetness.insert({ name: "苹果", sweetness: 10, key: 10 });
fruitSweetness.orderTraverse(Eorder["in"], function (fruit) {
    console.log(fruit.entity.name);
});
console.log("-------- /n");
fruitSweetness.orderTraverse(Eorder.pre, function (fruit) {
    console.log(fruit.entity.name);
});
console.log("-------- /n");
fruitSweetness.orderTraverse(Eorder.post, function (fruit) {
    console.log(fruit.entity.name);
});
