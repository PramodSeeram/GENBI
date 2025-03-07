import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/tables/";

export const fetchTables = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.tables;
    } catch (error) {
        console.error("Error fetching tables", error);
        return [];
    }
};
