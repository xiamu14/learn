class Ikey {
  num key;
  Ikey(this.key);
}

enum Eorder {
  /// @desc 中序遍历
  meddle,
  /// @desc 先序遍历
  pre,
  /// @desc 后序遍历
  post,
}

class TreeNode<T extends Ikey> {
  TreeNode left;
  TreeNode right;
  num key;
  T entity;
  TreeNode(T entity) {
    this.entity = entity;
    this.key = entity.key;
  }
}

/**
 * @desc 二叉搜索树
 */

class BinarySearchTree<T extends Ikey> {
  TreeNode<T> root;

  insert(T entity) {
    final newNode = TreeNode<T>(entity);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }
  _insertNode(TreeNode<T> node, TreeNode<T> newNode) {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  orderTraverse(Eorder type, callback(TreeNode<T> param)) {
    if (this.root != null) {
      this._orderTraverseNode(type, this.root, callback);
    }
  }

  _orderTraverseNode(
    Eorder type,
    TreeNode<T> node,
    Function callback,
  ) {
    switch(type) {
      case Eorder.meddle:
        if (node.left != null) {
          this._orderTraverseNode(type, node.left, callback);
        }
        callback(node);
        if (node.right != null) {
          this._orderTraverseNode(type, node.right, callback);
        }
        break;
      case Eorder.pre:
        callback(node);
        if (node.left != null) {
          this._orderTraverseNode(type, node.left, callback);
        }
        if (node.right != null) {
          this._orderTraverseNode(type, node.right, callback);
        }
        break;
      case Eorder.post:
        if (node.left != null) {
          this._orderTraverseNode(type, node.left, callback);
        }
        if (node.right != null) {
          this._orderTraverseNode(type, node.right, callback);
        }
        callback(node);
        break;
      default:
        break;
    }
  }

}


