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
<<<<<<< HEAD
  const [error, setError] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false); // State to handle loading
  const [success, setSuccess] = useState(false); // State for successful connection message
=======
  const [tables, setTables] = useState([]); // State to store list of tables
  const [error, setError] = useState(""); // State for error messages
>>>>>>> 640fe20350cb6b9ac885ce044fe9324caf604ae8

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
<<<<<<< HEAD
    setLoading(true); // Show the loading spinner
    setError(""); // Clear any previous error
    setSuccess(false); // Reset success message

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/validate-mysql-connection/", // Django API endpoint
        mysqlCredentials
      );
      setError(""); // Clear any previous error message
      setSuccess(true); // Show success message

      // Redirect to the Select Tables page after 5 seconds
      setTimeout(() => {
        navigate("/select-tables", { state: { tables: response.data.tables } });
      }, 1000); // Redirect after 5 seconds
    } catch (error) {
      setError("Failed to connect to MySQL database. Please check your credentials.");
    } finally {
      setLoading(false); // Hide the loading spinner
=======
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/validate-mysql-connection/", // Your Django endpoint
        mysqlCredentials
      );
      setTables(response.data.tables); // Store the fetched tables
      setError(""); // Clear any previous error message
    } catch (error) {
      setError("Failed to connect to MySQL database. Please check your credentials.");
>>>>>>> 640fe20350cb6b9ac885ce044fe9324caf604ae8
    }
  };

  // Navigate back to the SetupPage
  const handleBack = () => {
    navigate("/"); // This will take you back to the SetupPage
  };

  return (
    <div className="mysql-setup-page">
      <h1>Connect to MySQL Server</h1>
<<<<<<< HEAD

      <form onSubmit={handleSubmit}>
        <label>* Display name:</label>
        <input
          type="text"
          name="displayName"
          value={mysqlCredentials.displayName}
          onChange={handleInputChange}
          required
        />
        <label>* Host:</label>
        <input
          type="text"
          name="host"
          value={mysqlCredentials.host}
          onChange={handleInputChange}
          required
        />
        <label>* Port:</label>
        <input
          type="text"
          name="port"
          value={mysqlCredentials.port}
          onChange={handleInputChange}
          required
        />
        <label>* Username:</label>
        <input
          type="text"
          name="username"
          value={mysqlCredentials.username}
          onChange={handleInputChange}
          required
        />
        <label>* Password:</label>
        <input
          type="password"
          name="password"
          value={mysqlCredentials.password}
          onChange={handleInputChange}
          required
        />
        <label>* Database name:</label>
        <input
          type="text"
          name="databaseName"
          value={mysqlCredentials.databaseName}
          onChange={handleInputChange}
          required
        />
=======
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
>>>>>>> 640fe20350cb6b9ac885ce044fe9324caf604ae8
        <button type="submit">Next</button>
      </form>

      <button onClick={handleBack}>Back</button>

      {/* Show error message if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

<<<<<<< HEAD
      {/* Show loading spinner if loading is true */}
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Validating credentials...</p>
        </div>
      )}

      {/* Display the success message if the connection was successful */}
      {success && !loading && (
        <div className="success-message">
          <p>Successfully connected to the MySQL database!</p>
=======
      {/* Display the list of tables if available */}
      {tables.length > 0 && (
        <div>
          <h3>Select Tables</h3>
          <ul>
            {tables.map((table, index) => (
              <li key={index}>{table}</li>
            ))}
          </ul>
>>>>>>> 640fe20350cb6b9ac885ce044fe9324caf604ae8
        </div>
      )}
    </div>
  );
};

export default MySQLSetupPage;
