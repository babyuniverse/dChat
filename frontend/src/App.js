import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { AuthProvider } from './contexts/AuthContext'


function App() {

  return (
    <Router>
      <div>
        <AuthProvider>
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );

}

export default App;
