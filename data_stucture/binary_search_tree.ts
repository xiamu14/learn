interface IKey {
  key: number;
}

enum Eorder {
  /**
   * @desc 中序遍历
   */
  in,
  /**
   * @desc 先序遍历
   */
  pre,
  /**
   * @desc 后序遍历
   */
  post
}

class TreeNode<T extends IKey> {
  left: null | TreeNode<T>;
  right: null | TreeNode<T>;
  key: number;
  entity: T;
  constructor(entity: T) {
    this.key = entity.key;
    this.entity = entity;
    this.left = null;
    this.right = null;
  }
}

/**
 * @description 二叉搜索树
 */
class BinarySearchTree<T extends IKey> {
  root: null | TreeNode<T>;
  constructor() {
    this.root = null;
  }

  insert(entity: T) {
    const newNode = new TreeNode<T>(entity);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  /**
   * @desc 遍历，包含中序，先序，后序
   */
  orderTraverse(type: Eorder, callback: (param: TreeNode<T>) => void) {
    if (this.root) {
      this.orderTraverseNode(type, this.root, callback);
    }
  }

  private orderTraverseNode(
    type: Eorder,
    node: TreeNode<T>,
    callback: (param: TreeNode<T>) => void
  ) {
    switch (type) {
      case Eorder.in:
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
  }
}

/********** 应用场景 ***********/
type fruit = {
  /**
   * @type {string} name 名称
   */
  name: string;
  /**
   * @type {number} sweetness 甜度
   */
  sweetness: number;

  /**
   * @type {number} 键
   * @desc 用于二叉搜索树时的排序值，值等于 sweetness
   */
  key: number;
};

const fruitSweetness = new BinarySearchTree<fruit>();

fruitSweetness.insert({ name: "西瓜", sweetness: 100, key: 100 });
fruitSweetness.insert({ name: "草莓", sweetness: 80, key: 80 });
fruitSweetness.insert({ name: "苹果", sweetness: 10, key: 10 });

fruitSweetness.orderTraverse(Eorder.in, (fruit: TreeNode<fruit>) => {
  console.log(fruit.entity.name);
});

console.log("-------- /n");

fruitSweetness.orderTraverse(Eorder.pre, (fruit: TreeNode<fruit>) => {
  console.log(fruit.entity.name);
});

console.log("-------- /n");

fruitSweetness.orderTraverse(Eorder.post, (fruit: TreeNode<fruit>) => {
  console.log(fruit.entity.name);
});
