import React from "react";
import classNames from "classnames";
import "./List.scss";
import Badge from "../Badge/Badge";
import removeSvg from "../../assets/icons/remove.svg";

const List = ({ items, isRemovable, onClick, onRemove }) => {
  const removeList = (item) => {
    if (window.confirm("Вы действительно хотите удалить список ?")) {
      onRemove(item);
    }
  };

  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className={classNames(item.className, { active: item.active })}
          >
            <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
            <span>{item.name}</span>
            {isRemovable && (
              <img
                onClick={() => removeList(item)}
                className="list__remove-icon"
                src={removeSvg}
                alt="Remove icon"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
