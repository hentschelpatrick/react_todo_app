import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends Component {
    render() {
        console.log(this.props.todos)
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ))
    }
}

// PropTypes makes definitions of what is required and what isn't 
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;