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
    if (selectedTables.length === 0) {
      alert("Please select at least one table.");
      return;
    }
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
      </div>
    </div>
  );
};

export default SelectTablesPage;
