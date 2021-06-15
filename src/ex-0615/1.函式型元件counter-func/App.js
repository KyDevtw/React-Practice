// 導入 react 模組，模組名稱都是全小寫，一般創立的模組變數為大駝峰
// import React from 'react'; // 17版之後沒有用到 react 可以不用寫，但都還是建議要寫上
// 部分導出的東西就用部分導入，預設導入的東西就用預設導入（不用大括號）
// 每一個程式碼檔案只能有一個預設導出
import React, { useState } from 'react' // 大括號代表鉤子部分導入

// 檔案名稱，要跟函式名稱以及 export default 名稱要相同
function App() {
  // 使用狀態，鉤子（ hooks ）
  // 解構賦值常使用 const
  // 第一個值是預設的State，第二個是設定函式操作動態
  const [total, setTotal] = useState(99)
  return (
    // JSX 寫法 （ Virtual DOM ）
    // 在 JSX 中寫 JS 用大括號包起來
    // retrun 只能回傳一個根元素，最外層要包起來（推薦都直接用 <></> => React.Fragment 不會產生多餘的render）
    // 單標籤，要用自我封閉結尾 ex. <img /> <input />
    // 自己寫的元件，使用大駝峰寫法，html的標籤直接使用即可
    <div>
      {/* 元件的事件加入為開頭on加大駝峰的事件監聽名稱 */}
      {/* HTML 與 JS 保留字衝突的屬性要修改，常見的有 class 改成 className for 改成 htmlFor */}
      {/* JSX 常使用陣列搭配 map */}
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
        // style 屬性為物件值，建議少用 inline style 改為 CSS 指定類別
        style={{ color: 'red', fontSize: '3rem' }}
      >
        {total}
      </h1>
      <p>Hey Hey Hey</p>
    </div>
  )
}

// export default 預設導出
export default App
