import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import TodolistPage from "./pages/Todolist";

function App() {
   return (
      <BrowserRouter>
         <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to="/" style={{ margin: "1rem" }}>
               Home
            </Link>
            <Link to="/about" style={{ margin: "1rem" }}>
               About
            </Link>
            <Link to="/todolist" style={{ margin: "1rem" }}>
               Todo List
            </Link>
         </div>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/todolist" element={<TodolistPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
