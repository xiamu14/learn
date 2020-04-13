import 'package:flutter/material.dart';

List<Widget> widgetMapBuilder({List list, Function render}) {


  final List<Widget> tiles = []; // 用于存放循环生成的 widget

    for (var item in list) {
      tiles.add(render(item));
    }
    return tiles;
}
