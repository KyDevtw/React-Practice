import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  const { todos, handleCompleted, handleDelete } = props

  return (
    <>
      <ul>
        {todos.map((todoItem, i) => {
          return (
            <TodoItem
              // key 要下在離 map 最近的地方
              key={todoItem.id}
              todoItem={todoItem}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
