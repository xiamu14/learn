import 'package:flutter/material.dart';

/// 全屏背景图部件
class FullImageBackground extends StatelessWidget {
  final String backgroundImage;
  final Widget child;

  FullImageBackground({this.backgroundImage, this.child});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          image: Image.asset(this.backgroundImage).image,
          fit: BoxFit.cover,
        ),
      ),
      child: this.child,
    );
  }
}
