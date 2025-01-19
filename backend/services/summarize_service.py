# backend/services/summarize_service.py
import requests
import logging
from config import HUGGING_FACE_API_KEY

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def summarize_text(text):
    """
    Summarize text using Hugging Face's BART-large-CNN model
    """
    API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
    headers = {"Authorization": f"Bearer {HUGGING_FACE_API_KEY}"}

    try:
        logger.info("Sending request to Hugging Face API")
        response = requests.post(
            API_URL,
            headers=headers,
            json={
                "inputs": text,
                "parameters": {
                    "max_length": 130,
                    "min_length": 30,
                    "do_sample": False
                }
            }
        )
        
        # Log the response status
        logger.info(f"API Response Status: {response.status_code}")
        
        if response.status_code != 200:
            logger.error(f"API Error: {response.text}")
            return None

        data = response.json()
        logger.info("Successfully received response from API")
        
        if isinstance(data, list) and len(data) > 0:
            return data[0]['summary_text']
        else:
            logger.error(f"Unexpected API response format: {data}")
            return None
            
    except requests.exceptions.RequestException as e:
        logger.error(f"Request error: {str(e)}")
        return None
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        return None