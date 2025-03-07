import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./form.css"; // Import the CSS for styling

const MySQLSetupPage = () => {
  const navigate = useNavigate();
  const [mysqlCredentials, setMysqlCredentials] = useState({
    displayName: "",
    host: "",
    port: "3306",
    username: "",
    password: "",
    databaseName: "",
  });
  const [tables, setTables] = useState([]); // State to store list of tables
  const [error, setError] = useState(""); // State for error messages

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMysqlCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission to validate MySQL connection
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/validate-mysql-connection/", // Your Django endpoint
        mysqlCredentials
      );
      setTables(response.data.tables); // Store the fetched tables
      setError(""); // Clear any previous error message
    } catch (error) {
      setError("Failed to connect to MySQL database. Please check your credentials.");
    }
  };

  // Navigate back to the SetupPage
  const handleBack = () => {
    navigate("/"); // This will take you back to the SetupPage
  };

  return (
    <div className="mysql-setup-page">
      <h1>Connect to MySQL Server</h1>
      <form onSubmit={handleSubmit}>
        <label>
          * Display name:
          <input
            type="text"
            name="displayName"
            value={mysqlCredentials.displayName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          * Host:
          <input
            type="text"
            name="host"
            value={mysqlCredentials.host}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          * Port:
          <input
            type="text"
            name="port"
            value={mysqlCredentials.port}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          * Username:
          <input
            type="text"
            name="username"
            value={mysqlCredentials.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          * Password:
          <input
            type="password"
            name="password"
            value={mysqlCredentials.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          * Database name:
          <input
            type="text"
            name="databaseName"
            value={mysqlCredentials.databaseName}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Next</button>
      </form>

      <button onClick={handleBack}>Back</button>

      {/* Show error message if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display the list of tables if available */}
      {tables.length > 0 && (
        <div>
          <h3>Select Tables</h3>
          <ul>
            {tables.map((table, index) => (
              <li key={index}>{table}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MySQLSetupPage;
