// frontend/src/services/qabotService.js
import axios from 'axios';

// Define API base URL directly or use environment variable if available
// const API_BASE_URL = 'http://localhost:5000';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';


export const qabotService = {
    async getResponse(query, chatHistory = null) {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/qabot`, {
                query,
                chat_history: chatHistory
            });
            return response.data;
        } catch (error) {
            console.error('Error in QA Bot service:', error);
            throw error;
        }
    }
};