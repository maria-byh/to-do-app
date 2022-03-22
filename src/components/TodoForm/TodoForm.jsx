
import './TodoForm.css';

export default function TodoForm (props) {
    const {newTodo, handleChange, handleSubmit} = props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-icon">
            <i className="fa fa-list-ol icon" aria-hidden="true"></i>
            <input 
              type="text"
              placeholder="Add a Task ..."
              autoComplete="off"
              value={newTodo}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    )
}


