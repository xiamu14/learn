 # React 实践

参考：《React 入门实例教程--阮一峰》、《React 学习教程--众成翻译》

日期：2016.10.31

## 搭建开发环境
React 的学习曲线相当陡峭，即使入门阶段也是各种坑。  
本篇开头从搭建学习用的开发环境入手。React 很多时候使用 JSX 编写。JSX是一门混合编写 JS 和 HTML 的 JS 语法糖。所以，首先我们必须编译 JSX 为浏览器能够识别的 JS。在学习之初，我是在页面中直接引用 React 的关键库和编译用的 babel 库文件。
```
<script src="./libs/react.min.js"></script>
<script src="./libs/react-dom.min.js"></script>
<script src="./libs/browser.min.js"></script>
```
前面两个文件可以在官网中下载，也可以使用 npm 下载。建议使用 npm 下载，以方便之后结合 webpack 、gulp 工具来处理 JSX。
```
cnpm install --save-dev react react-dom
```
注意，最后的一个文件是 babel 提供的在浏览器环境使用的 babel 工具。babel 既能将 ES6 转换为 ES5,同时也支持编译 JSX。这个文件我是从  [browser.min.js](https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js)下载再拷贝到本地（实践证明，从npm下载的 babel-core 里不包含这个文件）。  
最后贴出这里的 HTML 模板：
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>React Tutorial</title>
    <script src="./libs/react.min.js"></script>
    <script src="./libs/react-dom.min.js"></script>
    <script src="./libs/browser.min.js"></script>
</head>

<body>
    <div id="content"></div>
    <script type="text/babel">
        // JSX
    </script>
</body>

</html>
```

## 体验 JSX 语法

HTMl 语言直接写在 JavaScript 中，*不加任何引号*，就是 JSX 语法。JSX 的另一个基本语法规则：遇到 HTML 标签的（以 <></> 标签对包裹），就用 HTML 规则解析；遇到代码块（以 {} 包裹），就用 JavaScript 解析。如以下代码（如无特殊说明，之后的代码块都是写在`<scirpt type="text/bable"></script>`中的）：
```
var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
  <div>
  {
    names.map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('example')
);
```
## 简单搭建学习用的 gulp 工具箱
现在只使用 gulp 工具和 browser-sync 来实现文件的热加载。
```
cnpm install --save-dev gulp browser-sync
```
安装完成后，在项目目录下面添加 gulpfile.js 文件。里面的代码如下：
```
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
    gulp.watch('./src/*.html', function(file){
        console.log(file.path + 'is changed __');
        browserSync.reload(); // 一旦监视文件修改，就刷新浏览器
    })
});
```
## 组件
React 的组件是网页或 spa 里完成最小功能的一部分代码，这部分代码会包含该组件的基本功能，视觉样式和交互能力。使用 React 开发，首先就需要将产品切割成一个又一个组件，然后，将它们拼装成产品。下面的代码定义了一个 HelloMessage 组件。
```
var HelloMessage = React.creatClass({
    render: function(){
        return <h1>Hello,{this.props.name}</h1>
    }
});
```
接下来看怎么使用这个组件：
```
ReactDOM.render(
    <HelloMessage name="John" />, document.getElementById("content")
);
```
然后在 power shell(window 10 ) 运行 `gulp server`。在打开的网页中应该显示 “Hello,John”。
注意，组件类的命名使用双驼峰方式，并且每一个组件类只能有一个顶层的标签。

### React 创建组件的三种方法
stateless function VS creatClass VS ES6 Class  
出于不同的原因，React 先后出现了三种定义 react 组件的方式。分别是：
1. 函数式定义的无状态组件(stateless function)
2. es5 原生的 React.creatClass 定义的组件
3. es6 形式的 extends React.Componet 定义的组件

#### 1. 无状态函数式组件
无状态函数式组件式为了创建纯展示组件，这类组件只负责根据传入的 props 来展示，不涉及到要 state 的操作。无状态函数式组件表现为一个只带有 render 方法的组件类，通过函数形式或 ES6 arrow function 的形式创建。代码如下：
```
function HelloComponent(props, context){
    return <div>Hello, {props.name}</div>
}

ReactDOM.render(<HelloComponent name="John") />, document.getElementById('content'));
```
细节待续……
#### 2.React.creatClass 定义的组件
`React.createClass` 是 react 刚开始推荐的创建组件的方式，也是 es5 原生的 javascript 实现 React 组件，代码如下：
```
var InputControl = React.createClass({
    propTypes: {  // 定义传入 props 中的属性各种类型
        initialValue: React.PropTypes.string
    },
    defaultPorps: {  // 组件默认的 props 对象
        initialValue: ''
    },
    // 设置 initial state
    getInitialState: function() { // 组件相关状态对象
        return {
            text: this.props.initialValue || 'placeholder'
        };
    },
    handleChange: function () {
        this.setState({
            text: event.target.value
        });
    },
    render: function() {
        return (
            <div>
                Type something:
                <input onChange={this.handleChange} value= {this.state.text} />
                <p>{this.state.text}</p>
            </div>
        );
    }
});
ReactDOM.render(<InputControl />, document.getElementById('content'));
```
该方式创建的组件会被实例化，可以访问组件的生命周期方法。
#### 3. ES6 形式的创建组件
代码如下：
```
class InputControl extends React.Component {
    constructor(props) {
        super(props);
        // 设置 intitial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };

        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>Type something:
                <input onChange={this.handleChange} value={this.state.text}/>
                <p>{this.state.text}</p>
            </div>
        );
    }
}
InputControl.propTypes = {
    initialValue: React.PropTypes.string
};
InputControl.defaultProps = {
    initialValue: ''
};

//这里使用组件的时候，不需要 new 实例化。
ReactDOM.render(<InputControl/>, document.getElementById('content'));
```
这种方式和之前 ES5 的差别比较大，也是目前 React 比较推荐的写法。delay……

### 组件的生命周期
一个组件就是一个状态机：对于特定的输入，它总会返回一致的输出。React 为组件提供了生命周期钩子函数去响应不同的时期——创建、存在期及销毁。
- Mounting: 已插入真实的 DOM
- Updating: 正在重新渲染
- Unmounting: 移除真实的 DOM

Mounting 和 Updating 时期都有两个方法：componentWillMount，componentDidMount 和 componentWillUpdate，componentDidUpdate。  
同时，Mounting 时期还分为两种情况，一种是组件第一次被 Mounting，一种是后续被 Mounting。它们都有 getInitialState 方法，但是初次 mounting 还有一个 getDefaultProps 方法。
Updating 时期 还有两个特殊方法 componentWillReceiveProps，shouldComponentUpdate。  Unmounting 只有一个方法：componentWillUnmount。
同时可以参考以下图片来理解组件的生命周期：![component 生命周期](http://o92qtbg1t.bkt.clouddn.com/component-1-1.PNG "组件生命周期里调用的方法顺序")
接下来在代码中看看这些方法的调用。
```
var LogStatus = React.createClass({
    getDefaultProps: function() {
        console.log('组件开始实例化……设置默认 props');
    },
    getInitialState: function() {
        console.log('组件开始实例化……设置默认 state');
        return {
            num: 0
        };
    },
    componentWillMount: function(){
        console.log('组件即将实例化……');
    },
    componentWillReceiveProps: function() {
        console.log('组件即将初始化……并更新 state');
    },
    componentWillUpdate: function() {
        console.log('组件即将更新……');
    },
    onTest: function(ev) {
        this.setState(function(state, props){
            var i = state.num + 1;
            return {num: i};
        })
    },
    render: function(){

        var num = this.state.num;

        return (<h1 onClick={this.onTest}>this.props.text
            <span>{num}</span></h1>);
    },
    componentDidMount: function() {
        console.log('组件实例化完成……');
    },
    componentDidUpdate: function() {
        console.log('组件更新完成……');
    }
});
ReactDOM.render(
    <LogStatus text="组件第一次实例化"></LogStatus>, document.getElementById('content')
);
ReactDOM.render(
    <LogStatus text="组件第二次实例化"></LogStatus>,
    document.getElementById('content2')
)
```
代码里基本演示了各个阶段调用的方法。但这是 ES5 是的生命周期函数，然而，现在，React 更推荐的 ES6 写法，对生命周期函数也进行了调整。
修改如下图：![ES6 组件的生命周期函数](http://o92qtbg1t.bkt.clouddn.com/component-1-2.png)

参考代码如下：
```
class LifeCycle extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            str : 's'
        };
        console.log("Initial render");
        console.log('constructor');
    }

    componentWillMount() {
        console.log("component will mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("component will receive props");
    }

    shouldComponentUpdate() {
        console.log("should component update");
        return true;
    }

    componentDidUpdate() {
         console.log("component did updates");
    }

    componentWillUnmount () {
        console.log('component will unmount');
    }

    setTheState() {
        let s = "hello";
        if(this.state.str === 's'){
            s = "HELLO";
        }
        this.setState({
            str: s
        })
    }

    forceItUpdate() {
        this.forceUpdate();
    }

    render() {
        console.log("render");
        return (
            <div>
                <span>{"Props:"}<h2>{parseInt(this.props.num)}</h2>
                </span>
                <br></br>
                <span>{"state:"}<h2>{this.state.str}</h2>
                </span>
            </div>
        );
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: Math.random() * 100
        };
    }

    propsChange() {
        this.setState({
            num: Math.random() * 100
        })
    }

    setLifeCycleState() {
        this.refs.rLifeCycle.setTheState();
    }

    forceLifeCycleUpdate() {
        this.refs.rLifeCycle.forceItUpdate();
    }

    parentForceUpdate() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.propsChange.bind(this)}>propsChange</a><br/>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.setLifeCycleState.bind(this)}>setState</a><br/>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</a><br/>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</a><br/>
                <LifeCycle ref="rLifeCycle" num={this.state.num}></LifeCycle>
            </div>
        );
    }
}

ReactDOM.render(
    <Container></Container>, document.getElementById('content')
);
```
没有找到销毁一个 React component 的方法，所以，componentWillUnmount() 没有使用。

## 数据流
在 React,数据的流向是单向的，从父节点传递到子节点。在之前的代码已反复使用了数据流里相关的两个参数 props, state。
### 1.Props
Props 就是 properties 的缩写。它可以把任意类型的数据传递给组件。
可以在挂载组件的时候设置它的 props:
```
var MyTitle = React.createClass({
    render: function(){
        return (
            <h1>{this.props.title}</h1>
        );
    }
});
ReactDOM.render(
    <MyTitle title="hello，world"></MyTitle>,
    document.getElementById('content')
)
```
上面代码中，在挂载时传入 `title="hello,world"`的参数，这里的参数都会添加到 props 中。
另外可以通过调用组件实例的 serProps 方法（很少需要这样做）来设置其 props:
```
var listSurveys = React.render(
    <ListSurveys />, document.querySlector('body')
    );
listSurveys.serProps({surveys: surveys});
```
你只能在子组件或者在组件树外调用 setProps。千万别使用 this.setProps 或者直接修改 this.props。
#### - PropTypes
通过在组件中定义一个配置对象，React提供了一中验证 props 的方式：
```
var SurveyTableRow = React.createClass({
    propTypes: {
        survey: React.PropTypes.shape({
            id: React.PropTypes.number.isRequired
            }).isRequired,
        onClick: React.PropTypes.func
    },
    ……
    });
```
组件初始化的时候，如果传递的属性和 propTypes 不匹配，则会打印一个 console.warn 日志。
如果是可选的配置，则可以去掉 .isRequired。
注意，在应用中使用的 propTypes 并不是强制的，但这提供了一种描述组件 API 的方式。
但在 ES6 的写法中，是单独将 propTypes 绑定在组件类中了，写法如下：
```
class CustomButton extends React.Component {
  // ...
}

CustomButton.propTypes = {
  name: React.PropTypes.string
};
```

#### - getDefaultProps
如果要添加属性的默认值，可以使用 getDefaultProps 函数。不过，这应该只针对那些非必要属性。
```
var SurveyTable = React.createClass({
    getDefaultProps: function() {
        return {
            surveys: []
        };
    }
    });
```
注意，getDefaultProps 并不是在组件实例化的时候被调用的，而是在 React.createClass 调用的时候调用的，返回值会被缓存起来，所以，不能在 这个函数里调用任何特定的实例数据。下面再看看 ES6 的实现：
```
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
```
### 2.State 
每个 React 组件都有自己的 state,但是 state 只存在于组件的内部。state 是用来确定和修改组件的状态的。一个组件与用户交互的过程中，会根据用户的输入不断更新状态，实际就是依靠 state 来更新的。具体实现看下面的代码：
```
var CountryDropdown = React.createClass({
    getInitialState : function(){
        return {
            showOptions: false
        };
    },

    render: function() {
        var options;
        if(this.state.showOptions){
            options = (
                <ul className='options'>
                    <li>United States of America</li>
                    <li>New Zealand</li>
                    <li>Denmark</li>
                </ul>
                );
        }
        return (
            <div className="dropdown" onClick={this.handleClick}>
            <label>Choose a country </lable>.{options}
            </div>
            );
    },
    handleClick: function()}{
        this.setState({
            showOptions: true
            });
    }
    });
```
注意，不能直接使用 this.state 来修改 state, 而是要使用 this.setState 来修改。

## 事件处理
React 事件本质上和 JavaScript 事件一样。所有事件在命名上也和原生 JavaScript 规范一致，并且会在相同的请将下被触发。但是，React 绑定事件处理器的语法和 直接在 HTML 绑定事件的语法类似。代码如下：
```
<button className="btn btn-save" onClick={this.handleSaveClicked}>Save</button>
```
用户点击按钮时，handleSaveClicked()会被调用。事实上，这种写法虽然和 HTML 内联事件写法类似，其实在底层实现上并没有使用 HTML 的 onClick 属性。React 只是用这个写法来绑定事件处理器，其内部则按需高效地维护着事件处理器。
通常当一个事件被触发以后，会有一个事件对象被传递给事件处理函数中。打印出事件对象信息如下：![](http://static.ohf2e.com/event.PNG)

