import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Kochi", "Melbourne", "London", "New York"];

  const handleSelectedItem = (items: string) =>{
    console.log(items); 
  }
  return (
    <div>
        <Alert>
            Hello <span>World</span> 
            </Alert>
    </div>
  );
}

export default App;
