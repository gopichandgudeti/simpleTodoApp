// Write your code here
import React, {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {todoItems, deleteItem, editTodo} = props
  const {id, title} = todoItems
  const [btnStatus, setBtnStatus] = useState(true)
  const [isChecked, setIsChecked] = useState(false)

  const deleteTodo = () => {
    deleteItem(id)
  }

  const onClickEditSaveBtn = () => {
    setBtnStatus(prevState => !prevState)
    editTodo(id, title)
  }

  const onChangeCheckBox = () => {
    setIsChecked(prevState => !prevState)
  }

  return (
    <li className="list-container">
      <div className="checkBox-title-container">
        <input
          type="checkbox"
          className="check-box"
          onChange={onChangeCheckBox}
        />
        <p className={`todoName ${isChecked ? 'completed-task' : ''}`}>
          {title}
        </p>
      </div>
      <div className="buttons-container">
        <button
          type="button"
          className={`edit-save-btn ${btnStatus ? '' : 'save-btn'}`}
          onClick={onClickEditSaveBtn}
        >
          {btnStatus ? 'Edit' : 'Save'}
        </button>
        <button type="button" className="delete-button" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
