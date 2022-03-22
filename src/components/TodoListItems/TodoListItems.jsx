import "./TodoListItems.css";
import CheckBox from "../Elements/CheckBox.jsx";

export default function TodoListItems(props) {
    
    const { todos, handleOnChange, handleOnRemove, handleOnEdit } = props;

    const todoItem = todos.map((todo, index) => {
        {/*
        const [edit, setEdit] = useState(false);
        const [editedTodo, setEditedTodo] = useState("");

        const handleOnEdit = (event) => {
            setEditedTodo( event.target.value );
        };

        const handleOnSubmitEdit = () => {
            todo.title(editedTodo);
            setEdit(false);
            setEditedTodo("");
        };*/}

        return (
        <div key={todo.id} className="todoComponent d-flex w-75 mx-auto">
            <div className="todoCompLeft">
            <label>
                <CheckBox
                className="checkbox-element"
                checked={todo.isCompleted}
                checkedColor="#2e3238"
                uncheckedColor="#343a40"
                hoverColor="#343a40"
                onChange={(event) => handleOnChange(event, index)}
                />
            </label>
            </div>
            <div className="todoCompRight d-flex justify-content-between flex-grow-1 px-3">
            <div className="todoTitle">
                <span
                    style={{
                        textDecoration: todo.isCompleted ? "line-through" : "none",
                    }}
                >
                {todo.title}

                {/*{(edit === false) ? 
                    (todo.title) : 
                    (<form onSubmit={handleOnSubmitEdit}>
                        <input 
                            type="text"
                            autoComplete="off"
                            value={editedTodo}
                            onChange={handleOnEdit}
                    
                        />
                    </form>)
                }*/}

                </span>
            </div>
            <div>
                <i
                    className="fa fa-solid fa-pen mx-md-4"
                    aria-hidden="true"
                    onClick={() => handleOnEdit(index)}
                    //onClick={setEdit(true)}
                ></i>
                <i
                    onClick={() => handleOnRemove(index)}
                    className="fa fa-solid fa-trash"
                    aria-hidden="true"
                ></i>
            </div>
            </div>
        </div>
        );
    });

    return (
        <div className="todoListItems w-full">
        <hr />
            {todos.length === 0 && (
                <h3 className="noTodos">Let's get some work done!</h3>
            )}
            {todos.length > 0 && todoItem}
        </div>
    );
};

