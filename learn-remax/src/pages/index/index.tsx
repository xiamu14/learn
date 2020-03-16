import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import './index.module.scss';

export default () => {
  return (
    <View styleName="app">
      <View styleName="header">
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          styleName="logo"
        />
        <View styleName="text">
          编辑 <Text styleName="path">src/pages/index/index.tsx</Text> 开始
        </View>
      </View>
    </View>
  );
};
