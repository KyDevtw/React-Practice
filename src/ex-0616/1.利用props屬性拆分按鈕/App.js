import React, { useState } from 'react'
import MyButton from './components/MyButton'

function App() {
  // 使用狀態，勾子(hooks)
  // 解構賦值語法(es6)
  console.log(useState(0))
  //  useState(0) = [0, ƒ]
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{total}</h1>
      <MyButton setTotal={setTotal} total={total} value={1} />
      <MyButton setTotal={setTotal} total={total} value={-1} />
      <MyButton setTotal={setTotal} total={total} value={2} />
      <MyButton setTotal={setTotal} total={total} value={-2} />
    </>
  )
}

export default App
