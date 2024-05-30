import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    input: '',
  }

  onDeleteTodo = id => {
    const {todosList} = this.state
    const filteredList = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredList})
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onClickAdd = () => {
    const {todosList, input} = this.state
    const {length} = todosList
    const newTodoItem = {
      id: length + 1,
      title: input,
    }
    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodoItem],
      input: '',
    }))
  }

  onEditTodo = (id, title) => {
    // const {todosList} = this.state
    // const filteredListOnEdit = todosList.filter(each => each.id !== id)
    this.setState({input: title})
  }

  render() {
    const {todosList, input} = this.state

    return (
      <div className="todo-bg-container">
        <div className="todo-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-add-btn-container">
            <input
              className="input-container"
              value={input}
              onChange={this.onChangeInput}
            />
            <button
              type="button"
              className="add-button"
              onClick={this.onClickAdd}
            >
              Add
            </button>
          </div>
          <ul className="ul-container">
            {todosList.map(eachItem => (
              <TodoItem
                todoItems={eachItem}
                key={eachItem.id}
                deleteItem={this.onDeleteTodo}
                editTodo={this.onEditTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
