import './App.css';

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<Settings />} />
          </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;