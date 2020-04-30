import 'package:flutter/material.dart';
// import 'package:sector/common/values/values.dart';

// 透明背景 appBar
Widget transparentAppbar({
  @required BuildContext context,
  Widget title,
  Widget leading,
  List<Widget> actions,
}) {
  return AppBar(
    backgroundColor: Colors.transparent,
    elevation: 0,
    title: title != null
        ? Center(
            child: title,
          )
        : Text(''),
    leading: leading,
    actions: actions,
  );
}
