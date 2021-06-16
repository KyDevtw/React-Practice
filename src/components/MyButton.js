import React from 'react'

function MyButton(props) {
  console.log(props)
  const { setTotal, total, value } = props
  return (
    <>
      <button
        onClick={() => {
          props.setTotal(props.total + props.value)
        }}
      >
        {props.value > 0 && '+'}
        {props.value}
        {/* JSX 語法會略過佈林值 */}
        {/* Booleans */}
        {true}
        {false}
        {/* JSX 字串自己加 "" */}
      </button>
    </>
  )
}

// 預設屬性
MyButton.defaultProps = {
  value: 10,
}

export default MyButton
