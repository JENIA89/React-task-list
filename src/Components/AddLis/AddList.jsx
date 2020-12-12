import React, { useState } from "react";
import Badge from "../Badge/Badge";
import List from "../List/List";
import "./AddList.scss";
import closeSvg from "../../assets/icons/close.svg";

const AddList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectColor, selectValueColor] = useState(colors[0].id);

  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: "list__add-button",
            icon: (
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="grey"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "Добавить папку",
          },
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <img
            onClick={() => setVisiblePopup(false)}
            src={closeSvg}
            alt="Close button"
            className="add-list__popup-close-btn"
          />
          <input className="field" type="text" placeholder="Название папки" />
          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Badge
                onClick={() => selectValueColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectColor === color.id && "active"}
              />
            ))}
          </div>
          <button className="button">Добавить</button>
        </div>
      )}
    </div>
  );
};

export default AddList;
