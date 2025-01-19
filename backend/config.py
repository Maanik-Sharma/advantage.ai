# backend/config.py
# HUGGING_FACE_API_KEY = "your_gemini_pro_api_key"
# GEMINI_PRO_API_KEY = "your_gemini_pro_api_key"
# backend/config.py
# backend/config.py
import os
from dotenv import load_dotenv

load_dotenv()

HUGGING_FACE_API_KEY = os.getenv('HUGGING_FACE_API_KEY')
if not HUGGING_FACE_API_KEY:
    raise ValueError("HUGGING_FACE_API_KEY not found in environment variables")