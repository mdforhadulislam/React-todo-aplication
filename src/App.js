import { useState } from "react";
import "./App.css";
import InputHeader from "./Components/InputHeader";
import TodoList from "./Components/TodoList";

function App() {
  const [todoName, setTodoName] = useState("");
  const [allTodoList, setAllTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(false);

  return (
    <div className="App">
      <InputHeader
        todoName={todoName}
        setTodoName={setTodoName}
        allTodoList={allTodoList}
        setAllTodoList={setAllTodoList}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        editItemId={editItemId}
      />
      <TodoList
        allTodoList={allTodoList}
        setAllTodoList={setAllTodoList}
        setIsEdit={setIsEdit}
        todoName={todoName}
        setTodoName={setTodoName}
        setEditItemId={setEditItemId}
      />
    </div>
  );
}

export default App;
