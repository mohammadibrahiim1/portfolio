import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
