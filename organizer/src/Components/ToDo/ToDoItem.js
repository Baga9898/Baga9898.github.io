import "./ToDoBlock.css";

export default function ToDoItem({ todo, toggleTask, removeTask }) {

    return(
        <div key={todo.id} className="toDoBlock__item">
            <div 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className="toDoBlock__item_delete" onClick={() => removeTask(todo.id)}>
                X
            </div>
        </div>
    );
}
