import React from 'react'
import PropTypes from 'prop-types'

function MyButton(props) {
  //console.log(props)
  // 先解出props中的屬性和對應名稱
  const { setTotal, total, value } = props

  return (
    <>
      <button
        onClick={() => {
          setTotal(total + value)
        }}
      >
        {value > 0 && '+'}
        {value}
      </button>
    </>
  )
}

// 檢查 props 類型是否正確，但只會在主控台回報錯誤，需安裝 yarn add prop-types
MyButton.propTypes = {
  value: PropTypes.number,
}

MyButton.defaultProps = {
  value: 9,
}

export default MyButton
