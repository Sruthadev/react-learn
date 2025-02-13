import ListGroup from "./components/ListGroup";
import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

function App() {
  let items = ["Kochi", "Melbourne", "London", "New York"];
    const handleClick = (event: MouseEvent) => console.log(event)
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((items) => (
          <li
            className="list-group-item"
            key={items}
            onClick={handleClick}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
