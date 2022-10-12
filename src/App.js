// import logo from './logo.svg';
import React, { Suspense } from 'react'
import Routerq from './router/Routerq';
import './App.css';

function App() {
  return (
    <Suspense fallback={null}>
      <Routerq />
    </Suspense>
  );
}

export default App;
