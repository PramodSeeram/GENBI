<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SelectTablesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTables, setSelectedTables] = useState([]);
  const [tables, setTables] = useState(location.state ? location.state.tables : []);

  useEffect(() => {
    if (!tables || tables.length === 0) {
      alert("No tables available. Please check the connection.");
      navigate("/mysql-setup");  // Redirect if no tables are available
    }
  }, [tables, navigate]);
=======
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectTablesPage = () => {
  const navigate = useNavigate();
  const [selectedTables, setSelectedTables] = useState([]); // Selected tables by the user
  const [tables, setTables] = useState([]); // List of tables fetched from backend

  useEffect(() => {
    // Simulating fetching tables from backend (this should be passed as props or fetched from an API)
    const fetchedTables = ["owners", "deals_web_analytics", "engagements_contacts", "engagements_notes_web_analytics"];
    setTables(fetchedTables);
  }, []);
>>>>>>> 640fe20350cb6b9ac885ce044fe9324caf604ae8

  const handleCheckboxChange = (tableName) => {
    setSelectedTables((prevSelected) => {
      if (prevSelected.includes(tableName)) {
        return prevSelected.filter(table => table !== tableName);
      } else {
        return [...prevSelected, tableName];
      }
    });
  };

  const handleNext = () => {
<<<<<<< HEAD
=======
    // If no table is selected, don't proceed
>>>>>>> 640fe20350cb6b9ac885ce044fe9324caf604ae8
    if (selectedTables.length === 0) {
      alert("Please select at least one table.");
      return;
    }
<<<<<<< HEAD
    navigate("/define-relationships", { state: { selectedTables } });
  };

  return (
    <div>
      <h1>Select Tables to Create Data Models</h1>
      <p>We will create data models based on selected tables to help AI better understand your data.</p>

      <input type="text" placeholder="Search tables" />

      <ul>
        {tables.map((table, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={table}
              value={table}
              onChange={() => handleCheckboxChange(table)}
            />
            <label htmlFor={table}>{table}</label>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={() => navigate("/mysql-setup")}>Back</button>
        <button onClick={handleNext} disabled={selectedTables.length === 0}>Next</button>
=======
    // You can now send the selected tables to the backend or handle it in the frontend
    console.log('Selected tables:', selectedTables);
    navigate('/define-relationships'); // Proceed to next page
  };

  return (
    <div className="select-tables-page">
      <h1>Select tables to create data models</h1>
      <p>We will create data models based on selected tables to help AI better understand your data.</p>

      <div>
        <input type="text" placeholder="Search tables" />
        <ul>
          {tables.map((table, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={table}
                value={table}
                onChange={() => handleCheckboxChange(table)}
              />
              <label htmlFor={table}>{table}</label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={() => navigate('/mysql-setup')}>Back</button>
        <button onClick={handleNext} disabled={selectedTables.length === 0}>
          Next
        </button>
>>>>>>> 640fe20350cb6b9ac885ce044fe9324caf604ae8
      </div>
    </div>
  );
};

export default SelectTablesPage;
