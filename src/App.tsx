import ListGroup from "./components/ListGroup";
import { Fragment } from "react/jsx-runtime";

function App() {
  let items = ["Kochi", "Melbourne", "London", "New York"];
    
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((items) => (
            <li key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
