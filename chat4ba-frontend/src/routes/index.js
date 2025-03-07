import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SetupPage from "../components/SetupPage";  // Import the SetupPage
import MySQLSetupPage from "../components/MySQLSetupPage";  // Import the MySQLSetupPage

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SetupPage />} />
                <Route path="/mysql-setup" element={<MySQLSetupPage />} />  {/* Add the route for MySQLSetupPage */}
            </Routes>
        </Router>
    );
}

export default AppRouter;
