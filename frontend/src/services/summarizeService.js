// src/services/summarizeService.js
import axios from 'axios';

// const API_URL = 'http://localhost:5000';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';


export const summarizeText = async (text) => {
    console.log("Hello");
    try {
        const response = await axios.post(`${API_URL}/api/summarize`, { text });
        return response.data.summary;
    } catch (error) {
        console.error("Error summarizing text:", error);
        throw error;
    }
};