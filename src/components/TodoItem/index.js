// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoItems, deleteItem} = props
  const {id, title} = todoItems

  const deleteTodo = () => {
    deleteItem(id)
  }

  return (
    <li className="list-container">
      <p className="todoName">{title}</p>
      <button type="button" className="delete-button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
