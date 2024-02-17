import "./App.css";
// import Home from "./Components/Home/Home";
// import Navbar from "./Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Chatbot from "./Chatbot/Chatbot";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Chatbot />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
