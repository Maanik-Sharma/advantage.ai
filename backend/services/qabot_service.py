# backend/services/qabot_service.py
import google.generativeai as genai
import os
from datetime import datetime
from dotenv import load_dotenv
# /api/blogwriterbot
# Load environment variables
load_dotenv()

class QABotService:
    def __init__(self):
        # Get API key from environment variables
        api_key = os.getenv('GEMINI_API_KEY')
        if not api_key:
            raise ValueError("Gemini API key not found in environment variables")
        
        # Configure Gemini
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-pro')
        
    def generate_response(self, query, chat_history=None):
        try:
            if chat_history:
                # Create a chat session with history
                chat = self.model.start_chat(history=chat_history)
                response = chat.send_message(query)
            else:
                # Simple one-off response
                response = self.model.generate_content(query)
            
            return {
                'response': response.text,
                'timestamp': datetime.now().isoformat(),
                'success': True
            }
        except Exception as e:
            return {
                'response': f"Error generating response: {str(e)}",
                'timestamp': datetime.now().isoformat(),
                'success': False
            }