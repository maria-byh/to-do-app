import { Component } from 'react';
import './TodoList.css';

class TodoList extends Component  {
    render () {
        return (
        <div className="TodoList">
            <h1>Todo List</h1>
            <ul>
            {this.props.items.map(item => (
                <li key={item.id}>
                <input type="checkbox" checked={item.done} onChange={() => this.props.onToggle(item.id)} />
                <span className={item.done ? 'done' : ''}>{item.text}</span>
                </li>
            ))}
            </ul>
        </div>
        );
    }
}
export default TodoList;