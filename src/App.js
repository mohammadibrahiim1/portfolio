import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/Main";
// import About from "./Components/About/About";
// import Header from "./Components/Header/Header";
// import Navbar from "./Components/Navbar/Navbar";
// import Home from "./pages";

function App() {
  return(
   <Router>
  <Home></Home>
  </Router>
  );
}

export default App;
