
import './TodoList.css';
import TodoForm from '../TodoForm/TodoForm';
import TodoListItems from '../TodoListItems/TodoListItems';

export default function TodoList() {
   
    return (
      <div className="todo-list container d-flex-column w-50 mt-5 pb-3">
          hello world
        <TodoForm/>
        <TodoListItems/>
      </div>
    );
  
}

