import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Kochi", "Melbourne", "London", "New York"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
