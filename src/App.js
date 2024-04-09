import { React } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import FormData from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <FormData />
    </div>
  );
}

export default App;
