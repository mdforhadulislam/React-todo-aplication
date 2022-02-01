import React from "react";

export default function InputHeader({
  todoName,
  setTodoName,
  allTodoList,
  setAllTodoList,
  isEdit,
  setIsEdit,
  editItemId,
}) {
  const inputHendeler = (e) => {
    setTodoName(e.target.value);
  };

  const submitHendeler = (e) => {
    e.preventDefault();
    if (todoName) {
      const itemObj = {
        id: Date.now(),
        name: todoName,
      };
      setAllTodoList([itemObj, ...allTodoList]);
      setTodoName("");
    } else {
      alert("Enter Your Todo.");
    }
  };

  const updateHendeler = (e) => {
    e.preventDefault();
    if (todoName) {
      setAllTodoList([
        ...allTodoList
          .filter((item) => item.id === editItemId)
          .map((item) => ({ id: item.id, name: todoName })),
        ...allTodoList
          .filter((item) => item.id !== editItemId)
          .map((user) => user),
      ]);
      setIsEdit(false);
      setTodoName("");
    } else {
      alert("Enter Your New Update");
    }
  };

  return (
    <div className="input__header__container">
      <form action="#">
        <input
          onChange={inputHendeler}
          placeholder="Enter Your Todo"
          type="text"
          value={todoName}
        />
        <button onClick={isEdit ? updateHendeler : submitHendeler}>
          {isEdit ? "Update Todo" : "Add Todo"}
        </button>
      </form>
    </div>
  );
}
