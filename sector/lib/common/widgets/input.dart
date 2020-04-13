import "package:flutter/material.dart";
import 'package:sector/common/utils/utils.dart';
import 'package:sector/common/values/radii.dart';
import 'package:sector/common/values/values.dart';

class InputTextFiled extends StatefulWidget {
  @required
  final TextEditingController controller;
  final TextInputType keyboardType;
  final bool Function(String) validator;
  final String hintText;
  final String warnMsg;
  final bool isPassword;
  final double marginTop;

  InputTextFiled({
    Key key,
    this.controller,
    this.validator,
    this.hintText,
    this.warnMsg,
    this.keyboardType = TextInputType.text,
    this.isPassword = false,
    this.marginTop = 15,
  }) : super(key: key);

  @override
  _InputTextFiledState createState() => _InputTextFiledState();
}

class _InputTextFiledState extends State<InputTextFiled> {
  bool _visible = false;

  FocusNode focusNode = FocusNode();

  @override
  initState() {
    super.initState();
    focusNode.addListener(() {
      if (!focusNode.hasFocus) {
        if (!widget.validator(widget.controller.value.text)) {
          setState(() {
            _visible = true;
          });
        } else {
          setState(() {
            _visible = false;
          });
        }
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Container(
          height: duSetHeight(44),
          margin: EdgeInsets.only(
            top: duSetHeight(widget.marginTop), // 通过 widget 获取 stateful 父组件的数据
          ),
          decoration: BoxDecoration(
            color: AppColors.secondaryElement,
            borderRadius: Radii.k6pxRadius,
          ),
          child: TextField(
            controller: widget.controller,
            focusNode: focusNode,
            keyboardType: widget.keyboardType,
            decoration: InputDecoration(
              hintText: widget.hintText,
              contentPadding: EdgeInsets.fromLTRB(20, 10, 0, 9),
              border: InputBorder.none,
            ),
            style: TextStyle(
              color: AppColors.primaryText,
              fontFamily: "Avenir",
              fontWeight: FontWeight.w400,
              fontSize: duSetFontSize(18),
            ),
            maxLines: 1,
            autocorrect: false, // 自动纠错
            obscureText: widget.isPassword, // 隐藏输入内容，密码框
          ),
        ),
        Container(
          alignment: Alignment.topLeft,
          padding: EdgeInsets.only(left: 20),
          // decoration: BoxDecoration(
          // border: Border.all(color: Colors.redAccent),
          // ),
          child: AnimatedOpacity(
            opacity: _visible ? 1.0 : 0.0,
            duration: Duration(milliseconds: 300),
            child: Text(
              widget.warnMsg,
              textAlign: TextAlign.left,
              style: TextStyle(
                color: Colors.redAccent,
                fontSize: duSetFontSize(14),
              ),
            ),
          ),
        ),
      ],
    );
  }
}

// Widget inputTextEdit({
//   @required TextEditingController controller,
//   TextInputType keyboardType = TextInputType.text,
//   String hintText,
//   String warnMsg,
//   bool isPassword = false,
//   double marginTop = 15,
// }) {
//   FocusNode focusNode = FocusNode();
//   focusNode.addListener(() {
//     print('$hintText:$focusNode.hasFocus');
//   });
//   return Column(
//     children: <Widget>[
//       Container(
//         height: duSetHeight(44),
//         margin: EdgeInsets.only(
//           top: duSetHeight(marginTop),
//         ),
//         decoration: BoxDecoration(
//           color: AppColors.secondaryElement,
//           borderRadius: Radii.k6pxRadius,
//         ),
//         child: TextField(
//           controller: controller,
//           focusNode: focusNode,
//           keyboardType: keyboardType,
//           decoration: InputDecoration(
//             hintText: hintText,
//             contentPadding: EdgeInsets.fromLTRB(20, 10, 0, 9),
//             border: InputBorder.none,
//           ),
//           style: TextStyle(
//             color: AppColors.primaryText,
//             fontFamily: "Avenir",
//             fontWeight: FontWeight.w400,
//             fontSize: duSetFontSize(18),
//           ),
//           maxLines: 1,
//           autocorrect: false, // 自动纠错
//           obscureText: isPassword, // 隐藏输入内容，密码框
//         ),
//       ),
//       Container(
//         alignment: Alignment.topLeft,
//         padding: EdgeInsets.only(left: 20),
//         // decoration: BoxDecoration(
//         // border: Border.all(color: Colors.redAccent),
//         // ),
//         child: Opacity(
//           opacity: 0.0,
//           child: Text(
//             "请输入正确邮箱地址！",
//             textAlign: TextAlign.left,
//             style: TextStyle(
//               color: Colors.redAccent,
//               fontSize: duSetFontSize(14),
//             ),
//           ),
//         ),
//       ),
//     ],
//   );
// }
