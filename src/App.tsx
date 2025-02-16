import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";

function App() {
  let items = ["Kochi", "Melbourne", "London", "New York"];

  const handleSelectedItem = (items: string) => {
    console.log(items);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    // <div>
    //     <Alert>
    //         Hello <span>World</span>
    //         </Alert>
    // </div>
    <div>
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My button */}
      {/* </Button> */}
      <Counter />
    </div>
  );
}

export default App;
