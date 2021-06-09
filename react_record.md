
# 一些react笔记

## 创建运行项目

npx create-react-app super_react

npn start

## 创建测试组件

```js
// TestComponent.js

// 自定义组件
function TestComponent() {
  return (
    <div>
      测试组件666
    </div>
  )
}

// 导出组件
export default TestComponent
```

```js
// App.js

// 导入组件
import TestComponent from './TestComponent'
// 使用组件
<TestComponent></TestComponent>
```

入口文件是index.js

根组件是App.js

## 什么是JSX

JSX是JavaScript XML的简写 可以在JavaScript中写HTML

jsx的大括号可以表达式 甚至函数 另一个jsx 不可以语句

```js
function JSXDemo() {
  return (
    <div>
      {666}
      {1 < 2 ? 'true' : 'false'}
      {sayHi()}
    </div>
  )
}
```

js对象一般只会出现在style属性中

map方法 原来花括号的需要改成() 因为注入jsx需要通过小括号

不能使用if/for语句 分支结构可以通过三元表达式

一般用map做循环渲染 需要key属性做唯一标记 需要用小括号 而不是花括号

- style行内样式
- className外部样式

## 类组件

需要继承React.Component

然后JSX结构写在render()中再进行return 不然为null

通过on+事件名

内部定义个事件处理函数 进行this调用

```js
  constructor() {
    super()
    this.demo = 'dddd'
  }
  // 上面可以简写成下面就可以了
  demo = 'dddd'
```

事件处理函数内部的this问题 使用箭头函数就可以了 function只会undefined 因为找不到demo

也可以调用事件处理函数的时候包装一层箭头函数 去执行function函数就可以了

onClick={() => {this.clickTest()}}

函数式组件不需要this 少用 一般都是类组件

onClick={clickHandler}









