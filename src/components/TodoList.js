import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoForm />
        <h3>My to do list</h3>
        <ul>
          {this.props.todos.map(todo => <TodoItem todo={todo} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.TodoReducer.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)