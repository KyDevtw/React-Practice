// 類別型元件
import React from 'react'

class App extends React.Component {
  // 建構
  constructor() {
    super() // super 用來執行上層父母類別的建構式之用，也可以用於指向上層父母類別，呼叫其中的方法或存取屬性
    // 狀態必定是用物件形式包起來
    this.state = {
      total: 0,
    }
  }

  // 渲染
  render() {
    return (
      <h1
        onClick={() => {
          // setState 改變狀態語法
          this.setState({ total: this.state.total + 1 })
        }}
      >
        {this.state.total}
      </h1>
    )
  }
}

export default App
