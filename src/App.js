import "./css/main.css";
import React, { useState, useEffect } from "react";
import ToDos from "./components/ToDos";

export const App = () => {
  const [todo, settodo] = useState();

  let inList;
  if (localStorage.getItem("todos") === null) {
    inList = [];
  } else {
    inList = JSON.parse(localStorage.getItem("todos"));
  }
  const [list, setlist] = useState(inList);
  const inputEvent = (event) => {
    settodo(event.target.value);
  };
  const btnSave = (event) => {
    event.preventDefault();
    setlist((oldItems) => {
      return [...oldItems, todo];
    });
  };
  const deleteItem = (id) => {
    setlist((oldItems) => {
      return oldItems.filter((errElm, ind) => {
        return ind !== id;
      });
    });
    localStorage.setItem("todos", JSON.stringify(list));
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo list</h1>
          <br />
          <form onSubmit={btnSave}>
            <input
              type="text"
              name="todo"
              onChange={inputEvent}
              placeholder="Add a Item"
              autoComplete="off"
            />
            <button onClick={btnSave}>+</button>
          </form>
          {/* <li>{todo}</li> */}
          <ol>
            {list.map((itemval, ind) => {
              return (
                <ToDos
                  key={ind}
                  id={ind}
                  onSelect={deleteItem}
                  text={itemval}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
