import React, { useContext } from "react";
import PropTypes from "prop-types"
import "./TodoItem.css"
import Context from "../context";



function Todoitem({ todo, index, onChange }) {

    const { removeTodo } = useContext(Context)

    return (

        <li style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".5rem 1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: ".5rem"
        }}>
            <span className={todo.completed ? "done" : ""}>
                <input
                    checked={todo.completed}
                    type="checkbox"
                    style={{ marginRight: "1rem",cursor:"pointer" }}
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button style={{
                borderRadius: "50%",
                border: "none",
                background: "red",
                color: "white",
                cursor: "pointer"
            }}
                onClick={() => removeTodo(todo.id)}
            >
                &times;
            </button>
        </li>

    )
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default Todoitem