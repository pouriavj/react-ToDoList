import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    if (isDone) return;

    setIsDone(true);
    setTimeout(() => {
      props.onChecked(props.id);
    }, 300);
  }

  return (
    <div onClick={handleClick}>
      <li
        style={{
          cursor: "pointer",
          textDecoration: isDone ? "line-through" : "none"
        }}
      >
        {props.text}
      </li>
    </div>
  );
}


export default ToDoItem;
