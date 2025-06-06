import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe/:planName" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
