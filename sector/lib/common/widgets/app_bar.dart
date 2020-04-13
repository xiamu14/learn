import 'package:flutter/material.dart';
import 'package:sector/common/values/values.dart';

Widget transparentAppbar({
  @required BuildContext context,
  List<Widget> actions,
}){
  return AppBar(
    backgroundColor: Colors.transparent,
    elevation: 0,
    title: Text(''),
    leading: IconButton(
      icon: Icon(
        Icons.arrow_back,
        color: AppColors.primaryText,
      ),
      onPressed: () {
        Navigator.pop(context);
      },
    ),
    actions: actions,
  );
}
