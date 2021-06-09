function sayHi() {
  return (
    <div>
      sayHi()
    </div>
  )
}

function JSXDemo() {
  return (
    <div>
      {666}
      { 1 < 2 ? 'true' : 'false' }
      {sayHi()}
    </div>
  )
}

export default JSXDemo