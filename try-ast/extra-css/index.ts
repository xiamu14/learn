/**
 * @description 将 css function 提取到单独的 .css 文件
 */

// Marked: 示例代码

const source = `
import React from 'react';
import css, {size} from 'rapier/css';
export default function App() {
  return <div css={css(size('100px,100px'))}></div>
}
`
