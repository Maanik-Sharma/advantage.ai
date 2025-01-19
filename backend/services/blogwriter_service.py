import google.generativeai as genai
import os
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

# class QABotService:
class BlogWriterService:
    def __init__(self):
        api_key = os.getenv('GEMINI_API_KEY')
        if not api_key:
            raise ValueError("Gemini API key not found in environment variables")
        
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-pro')
        
        # Default system prompt
        # self.default_prompt = """You are an AI assistant helping with seo friendly blog writing. 
        # Your responses should be:
        # - Professional and courteous
        # - Accurate and informative
        # - Concise yet comprehensive
        # - Focused on solving the user's problem
        # - Blogs generally should 
        
        # # When appropriate, structure your responses with bullet points or numbered lists for clarity.
        # # If you're not sure about something, acknowledge it and suggest alternatives or ask for clarification.
        # """
        self.default_prompt ="""You are an AI assistant specializing in SEO-friendly blog writing.
        Your responses should be:
        - Professional, courteous, and clear
        - SEO-optimized with relevant keywords integrated naturally
        - Accurate, informative, and authoritative
        - Concise, yet comprehensive, with enough detail to fully address the topic
        - Reader-focused, aiming to engage and provide value

        # Guidelines:
        - Structure responses with headings (H2, H3) and bullet points or numbered lists where applicable
        - Use the primary keyword within the title, introduction, and at least one heading; integrate secondary keywords throughout
        - Provide suggestions for meta descriptions, title tags, and internal/external links if appropriate
        - Maintain readability: aim for short sentences, simple language, and sections for easy scanning
        - If clarification is needed, ask for more details or suggest SEO-friendly alternatives
        """
    
    def generate_response(self, query, custom_prompt=None, chat_history=None):
        try:
            # Combine prompts if custom prompt is provided
            full_prompt = f"{custom_prompt}\n\n{self.default_prompt}\n\nUser Query: {query}" if custom_prompt else f"{self.default_prompt}\n\nUser Query: {query}"
            
            if chat_history:
                chat = self.model.start_chat(history=chat_history)
                response = chat.send_message(full_prompt)
            else:
                response = self.model.generate_content(full_prompt)
            
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

                # }class QABotService: