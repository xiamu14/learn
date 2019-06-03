
class TreeNode<T> {
  left: null | TreeNode<T>;
  right: null | TreeNode<T>;
  key: number;
  entity: T;
  constructor(key:number, entity: T ) {
    this.key = key;
    this.entity = entity;
    this.left = null;
    this.right = null;
  }
}

/**
 * @description 二叉搜索树
 */
class BinarySearchTree<T> {
  root: null | TreeNode<T>;
  constructor() {
    this.root = null;
  }

  insert(key: number, entity: T) {
    const newNode = new TreeNode<T>(key, entity);
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

}

const fruitSweetness = new BinarySearchTree<fruit>()

fruitSweetness.insert(100, {name: '西瓜', sweetness: 100});

if (fruitSweetness.root) {
  console.log(fruitSweetness.root);
}
