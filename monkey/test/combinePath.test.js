// add.test.js
import { combinePath } from './combinePath.js'
import { expect } from 'chai'

describe('合并入口文件路径函数', function() {
    it('添加初始路径后', function() {
        expect(combinePath(['index.js', 'test.js'], 'web')).to.have.deep.members(['./static/src/web/js/index.js', './static/src/web/js/test.js'])
    });
});