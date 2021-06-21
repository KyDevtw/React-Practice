import React, { useState } from 'react'

function TodoApp() {
  const [todo, setTodo] = useState('')

  const [todos, setTodos] = useState(['努力學React', '買iPhone或安卓手機'])

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <ul>
        {todos.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
