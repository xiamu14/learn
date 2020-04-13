import 'package:flutter/material.dart';

class ParentsModel extends StatefulWidget {
  @override
  _ParentsModelState createState() => _ParentsModelState();
}

class _ParentsModelState extends State {
// 定义列表数据
  List listData = [];
  @override
  Widget build(BuildContext context) {
    return Container(
// 将listData传递到childModel子组件
      child: ChildModel(
        childListData: listData,
      ),
    );
  }
}

class ChildModel extends StatefulWidget {
  final List childListData;
// 接收父组件以childListData为参数传递来的数据，例如父组件这样调用：childModel(childListData: [])
  ChildModel({Key key, this.childListData}) : super(key: key);
  @override
  _ChileModelState createState() => _ChileModelState();
}

class _ChileModelState extends State<ChildModel> {
  @override
  Widget build(BuildContext context) {
// 通过childListData数据生成列表数据
    return ListView.builder(
// 通过widget获取父组件的数据
      itemCount: widget.childListData.length,
      itemBuilder: (BuildContext context, int index) {
        return new Container(
          padding: const EdgeInsets.all(8.0),
          child: new Text('$index'),
        );
      },
    );
  }
}
