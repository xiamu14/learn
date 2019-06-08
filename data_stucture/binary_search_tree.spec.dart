import 'binary_search_tree.dart';

/********** 应用场景 ***********/
class Ifruit extends Ikey {
  String name;
  num sweetness;
  Ifruit(String name, num sweetness, num key) : super(key) {
    this.name = name;
    this.sweetness = sweetness;
  }
}

main() {
  final fruitSweetness = BinarySearchTree<Ifruit>();
  fruitSweetness.insert(Ifruit('西瓜', 100, 100));
  fruitSweetness.insert(Ifruit('草莓', 80, 80));

  fruitSweetness.orderTraverse(Eorder.pre, (TreeNode<Ifruit> param) => print(param.entity.name));
}
