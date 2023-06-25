import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
  );
}

export default App;
