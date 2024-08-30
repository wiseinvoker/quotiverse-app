import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import HomePage from "./pages/HomePage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";

const App = () => {
  return (
    <Fragment>
      <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </UserAuthContextProvider>
      </Fragment>
  );
};

export default App;
