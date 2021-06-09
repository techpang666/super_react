// 导入样式
import './fontColor.css'

function JSXStyle() {
  return (
    <div>
      <div style={{color: 'pink'}}>
        这是行内样式
      </div>
      <div className="fontColor">
        这是外部样式
      </div>
    </div>
  )
}

export default JSXStyle