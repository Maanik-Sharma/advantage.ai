import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';


// Custom prompts for different scenarios
const CUSTOM_PROMPTS = {
  sales: `Focus on providing sales-related information. Highlight benefits, features, and value propositions. 
         If discussing pricing, emphasize the value and return on investment.`,
  
  support: `Focus on troubleshooting and problem-solving. Provide step-by-step solutions when applicable. 
           Include relevant technical details while keeping the explanation accessible.`,
  
  product: `Focus on product specifications, features, and comparisons. 
           Highlight unique selling points and compatibility information.`,
};

// export const qabotService = {
    export const blogwiterService = {
    async getResponse(query, promptType = 'general', chatHistory = null) {
        try {
            const customPrompt = CUSTOM_PROMPTS[promptType];
            
            // const response = await axios.post(`${API_BASE_URL}/api/qabot`, {
                const response = await axios.post(`${API_BASE_URL}/api/blogwriterbot`, {
                query,
                custom_prompt: customPrompt,
                chat_history: chatHistory
            });
            return response.data;
        } catch (error) {
            console.error('Error in QA Bot service:', error);
            throw error;
        }
    }
};