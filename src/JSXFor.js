
const Books = ['红宝书', '犀牛书', '蝴蝶书']

function JSXFor() {
  return (
    // js对象一般只会出现在style属性中 里面不用逗号 不用px单位
    <div style={{color: 'pink', fontSize: 32}}>
      {/* 循环遍历Books数组生成li标签 */}
      <ul>
        {
          // 原来花括号的需要改成() 因为注入jsx需要通过小括号
          Books.map(item => (
            // 还有item需要花括号包裹起来
            <li>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default JSXFor