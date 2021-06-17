import React, { useState } from 'react'

function App() {
  const [textfield, setTextField] = useState('')
  const [textarea, setTextarea] = useState('')
  const [selectedOption, setSelectedOption] = useState('請選擇')

  return (
    <>
      <h2>文字輸入框</h2>
      <input
        type="text"
        value={textfield}
        onChange={(e) => {
          setTextField(e.target.value)
        }}
      />
      <hr />
      <hr />
      <h2>文字輸入區域</h2>
      <textarea
        type="text"
        value={textarea}
        onChange={(e) => {
          setTextarea(e.target.value)
        }}
      />
      <hr />
      <hr />
      <h2>下拉選單</h2>
      <select
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Guava">Guava</option>
      </select>
    </>
  )
}

export default App
