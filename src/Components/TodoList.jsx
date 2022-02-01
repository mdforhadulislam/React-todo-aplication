import React from "react";

export default function TodoList({
  allTodoList,
  setAllTodoList,
  setIsEdit,
  setTodoName,
  setEditItemId,
}) {
  const deleteHendeler = (user) => {
    const newArray = allTodoList.filter((item) => item.id !== user.id);
    setAllTodoList([...newArray]);
  };
  const editHendeler = (item) => {
    setTodoName(item.name);
    setEditItemId(item.id);
    setIsEdit(true);
  };

  return (
    <div className="todo__list__container">
      {allTodoList.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => editHendeler(item)}>Edit</button>
          <button onClick={() => deleteHendeler(item)}>Delete</button>
        </li>
      ))}
    </div>
  );
}
