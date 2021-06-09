function sayHi() {
  return (
    <div>
      sayHi()
    </div>
  )
}

// 函数式组件(少用 都是类组件)
function clickHandler() {
  console.log(666);
}

function JSXDemo() {
  return (
    <div>
      {666}
      { 1 < 2 ? 'true' : 'false' }
      {sayHi()}
      <button onClick={clickHandler}>测试函数式组件</button>
    </div>
  )
}

export default JSXDemo