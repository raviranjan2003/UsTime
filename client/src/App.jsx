import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings";
import Setavatar from "./pages/Setavatar/Setavatar";
import "./App.css";
import AuthContext from "./auth/authContext";

function App() {
  const authContext = React.useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {authContext.isUserLoggedIn && <Route path="/" element={<Chat />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {authContext.isUserLoggedIn && (
          <Route path="/settings" element={<Settings />} />
        )}
        <Route path="/setavatar" element={<Setavatar />} />
      </Routes>
    </Router>
  );
}

export default App;
