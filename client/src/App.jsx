import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Chat from "./pages/Chat/Chat";
import Login from "./pages/Login";
=======
import Chat from "./pages/Chat";
import Login from "./pages/Login/Login";
>>>>>>> 629e16782d40222041a697f58cee70b2e79c15ca
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
