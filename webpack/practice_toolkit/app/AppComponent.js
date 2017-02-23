let React = require('react');
let InputControl = require('./InputControl');
let CountryDropdown = require('./CountryDropdown');
// 组件类继承 React.Component
class AppComponent  extends React.Component{
    render() {
        return (
            <div>
                <InputControl text='你好'/>
                <CountryDropdown />
            </div>
        );
    }
}

// 将定义的组件类导出
module.exports = AppComponent;
