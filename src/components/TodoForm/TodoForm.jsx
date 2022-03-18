
import './TodoForm.css';

export default function TodoForm (props) {
    return (
      <div>
        <form>
          <div className="input-icon">
            <i className="fa fa-list-ol icon" aria-hidden="true"></i>
            <input 
              type="text"
              placeholder="Add a Task ..."
              autoComplete="off"
              value=""
              onChange=""
            />
          </div>
        </form>
      </div>
    )
}


