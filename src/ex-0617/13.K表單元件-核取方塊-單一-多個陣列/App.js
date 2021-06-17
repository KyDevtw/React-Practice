import React, { useState } from 'react'

function App() {
  const [textfield, setTextField] = useState('')
  const [textarea, setTextarea] = useState('')
  const [selectedOption, setSelectedOption] = useState('請選擇')
  const [gender, setGender] = useState('')
  // ?單一勾選
  const [agree, setAgree] = useState('flase')
  // ?多個核取方塊，陣列
  const [likeList, setLikeList] = useState([])

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
      <hr />
      <h3>單選按鈕</h3>
      <label htmlFor="">男</label>
      <input
        type="radio"
        value="male"
        checked={gender === 'male'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <br />
      <label htmlFor="">女</label>
      <input
        type="radio"
        value="female"
        checked={gender === 'female'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <br />
      <label htmlFor="">其他</label>
      <input
        type="radio"
        value="otherGender"
        checked={gender === 'otherGender'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <br />
      {/* !用陣列來產生選項群組按鈕 */}
      {['男', '女', '其他'].map((v, i) => {
        return (
          // 使用簡寫<></>不能加 key 屬性
          <React.Fragment key={i}>
            <input
              type="radio"
              value={v}
              checked={gender === v}
              onChange={(e) => {
                setGender(e.target.value)
              }}
            />
            <label>{v}</label>
          </React.Fragment>
        )
      })}

      <hr />
      <h3>單一核取方塊</h3>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label htmlFor="">同意</label>
      <hr />
      <h3>多個核取方塊(陣列)</h3>
      <input
        type="checkbox"
        value="雞腿"
        onChange={(e) => {
          const value = e.target.value

          // 陣列沒有包含->加入
          if (!likeList.includes(value)) setLikeList([...likeList, value])

          // 陣列有包含->移出
          if (likeList.includes(value)) {
            const newLikeList = likeList.filter((v) => v !== value)
            setLikeList(newLikeList)
          }
        }}
        checked={likeList.includes('雞腿')}
      />
      <label>雞腿</label>

      <input
        type="checkbox"
        value="排骨"
        onChange={(e) => {
          const value = e.target.value
          if (!likeList.includes(value)) setLikeList([...likeList, value])

          if (likeList.includes(value)) {
            const newLikeList = likeList.filter((v) => v !== value)
            setLikeList(newLikeList)
          }
        }}
        checked={likeList.includes('排骨')}
      />
      <label>排骨</label>
    </>
  )
}

export default App
