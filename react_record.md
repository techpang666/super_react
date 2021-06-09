
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












