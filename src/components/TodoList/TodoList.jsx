import { useState } from 'react';
import './TodoList.css';
import TodoForm from '../TodoForm/TodoForm';
import TodoListItems from '../TodoListItems/TodoListItems';

export default function TodoList() {
    const [newTodo, setNewTodo] = useState ("");
    const [todos, setTodos] = useState ([]);

    const handleChange = (event) => {
        setNewTodo( event.target.value );
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let todosLength = todos.length;
        if (newTodo === "") {
        return;
        }
        setNewTodo("");
        setTodos([
            ...todos,
            {
            id: todosLength,
            title: newTodo,
            isCompleted: false,
            }, 
        ]);
    };
      
    const handleOnChange = (event, index) => {
        const todoCompleted = todos.filter((todo) => {
          if (todo.id === index) {
            todo.isCompleted = event.target.checked;
          }
          return todo;
        });
        setTodos(todoCompleted);
    };
 
    const handleOnRemove = (index) => {
        todos.splice(index, 1);
        setTodos( todos.map((todo, i) => { todo.id = i; return todo; }) );
    };
      
    const handleOnEdit = (index) => {
        const newTodo = prompt('Let\'s make something changes');
        todos.filter(todo => {
          if (todo.id === index) {
            todo.title = newTodo;
          }
          return todo;
        });
        setTodos(todos);
    } 


    return (
        <div className="todo-list container d-flex-column w-50 mt-5 pb-3">
            <TodoForm
                todos={todos}
                newTodo={newTodo}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                /> 
            <TodoListItems
                todos={todos}
                handleOnChange={handleOnChange}
                handleOnRemove={handleOnRemove}
                handleOnEdit={handleOnEdit}
            />
        </div>
    ); 
}

