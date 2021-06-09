
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

jsx可以表达式 甚至函数 另一个jsx 不可以语句

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





