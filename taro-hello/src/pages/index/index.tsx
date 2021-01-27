import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.css";

const indexCss = css`
  background-color: rgb(0, 0, 255);
`;

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View css={indexCss}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
