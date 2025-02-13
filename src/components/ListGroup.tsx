import { useState } from "react";

function ListGroup(){
    let items = ["Kochi", "Melbourne", "London", "New York"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {setSelectedIndex(index)}}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;