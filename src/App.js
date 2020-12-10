import React from "react";
import listSvg from "./assets/icons/list.svg";

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <ul className="todo__list">
          <li>
            <i>
              <img src={listSvg} alt="list-icon" />
            </i>
            <span>Все задачи</span>
          </li>
        </ul>
      </div>
      <div className="todo__tasts"></div>
    </div>
  );
}

export default App;
