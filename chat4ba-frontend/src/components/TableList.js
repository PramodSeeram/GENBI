import React, { useState, useEffect } from "react";
import { fetchTables } from "../services/api";  // Axios API call to fetch tables

const TableList = () => {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        const getTables = async () => {
            const tableList = await fetchTables();
            setTables(tableList);
        };
        getTables();
    }, []);

    return (
        <div>
            <h2>Select Tables to Model</h2>
            <ul>
                {tables.map((table, index) => (
                    <li key={index}>
                        <input type="checkbox" /> {table}
                    </li>
                ))}
            </ul>
        </div>
    );
};

<<<<<<< HEAD
export default TableList;
=======
export default TableList;
>>>>>>> 640fe20350cb6b9ac885ce044fe9324caf604ae8
