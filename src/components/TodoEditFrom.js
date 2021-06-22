import React from 'react'

function TodoItemEditForm(props) {
  const { todos, handleCompleted, handleDelet, handleEdited } = props
  return (
    <>
      <li>
        <input type="text" />
        <button onClick={() => {}}>儲存</button>
      </li>
    </>
  )
}

export default TodoItemEditForm
