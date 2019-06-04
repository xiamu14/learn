interface IKey {
  key: number
}

class TreeNode<T extends IKey> {
  left: null | TreeNode<T>;
  right: null | TreeNode<T>;
  key: number;
  entity: T;
  constructor(entity: T ) {
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

}

const fruitSweetness = new BinarySearchTree<fruit>()

fruitSweetness.insert({name: '西瓜', sweetness: 100, key: 100});
fruitSweetness.insert({name: '苹果', sweetness: 10, key: 10});

if (fruitSweetness.root) {
  console.log(fruitSweetness.root);
}
