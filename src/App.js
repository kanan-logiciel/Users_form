import { React } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import FormData from "./Components/Form";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <FormData />
      <Footer />
    </div>
  );
}

export default App;
