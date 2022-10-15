import logo from './logo.svg';
import './App.css';
import HomePage from "./page/HomePage";
import Navbar from "./component/Navbar";
import {Outlet} from "react-router-dom";
import React from "react";
import {Container} from "@mui/material";
import Footer from "./component/Footer";

function App() {
  return (
      <HomePage />
  );
}

export default App;
