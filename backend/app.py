# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from services.summarize_service import summarize_text
from services.qabot_service import QABotService
from services.blogwriter_service import BlogWriterService
import logging
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Initialize QA Bot Service
try:
    qa_bot = QABotService()
    logger.info("QA Bot Service initialized successfully")
except Exception as e:
    logger.error(f"Failed to initialize QA Bot Service: {str(e)}")
    raise

try:
    blog_bot = BlogWriterService()
    logger.info("Blog Writer Service initialized successfully")  # Fixed the log message
except Exception as e:
    logger.error(f"Failed to initialize Blog Writer Service: {str(e)}")  # Fixed the error message
    raise

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

@app.route('/api/summarize', methods=['POST'])
def summarize():
    try:
        data = request.get_json()
        if not data or 'text' not in data:
            logger.error("No text provided in request")
            return jsonify({"error": "No text provided"}), 400

        text = data['text']
        if not text or not isinstance(text, str):
            logger.error("Invalid text format")
            return jsonify({"error": "Invalid text format"}), 400

        logger.info("Processing summarization request")
        result = summarize_text(text)
        
        if result is None:
            logger.error("Failed to generate summary")
            return jsonify({"error": "Failed to generate summary"}), 500

        logger.info("Successfully generated summary")
        return jsonify({"summary": result})

    except Exception as e:
        logger.error(f"Error processing request: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

@app.route('/api/qabot', methods=['POST'])
def qa_bot_query():
    try:
        data = request.get_json()
        if not data or 'query' not in data:
            logger.error("No query provided in request")
            return jsonify({"error": "No query provided"}), 400

        chat_history = data.get('chat_history', None)
        result = qa_bot.generate_response(data['query'], chat_history)
        
        if not result['success']:
            logger.error("Failed to generate response")
            return jsonify({"error": result['response']}), 500

        logger.info("Successfully generated QA response")
        return jsonify(result)

    except Exception as e:
        logger.error(f"Error processing request: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

@app.route('/api/blogwriterbot', methods=['POST'])
def blog_bot_query():
    try:
        data = request.get_json()
        if not data or 'query' not in data:
            logger.error("No query provided in request")
            return jsonify({"error": "No query provided"}), 400

        query = data['query']
        custom_prompt = data.get('custom_prompt', None)
        chat_history = data.get('chat_history', None)
        
        result = blog_bot.generate_response(query, custom_prompt, chat_history)
        
        if not result['success']:
            logger.error("Failed to generate response")
            return jsonify({"error": result['response']}), 500

        logger.info("Successfully generated Blog Writer response")  # Fixed log message
        return jsonify(result)

    except Exception as e:
        logger.error(f"Error processing request: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == "__main__":
    logger.info("Starting Flask application...")
    app.run(port=5000, debug=True)

# backend/app.py
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from services.summarize_service import summarize_text
# from services.qabot_service import QABotService
# from services.blogwriter_service import BlogWriterService
# import logging
# from dotenv import load_dotenv
# import os

# # Load environment variables
# load_dotenv()

# # Set up logging
# logging.basicConfig(level=logging.INFO)
# logger = logging.getLogger(__name__)

# app = Flask(__name__)
# CORS(app)

# # Initialize QA Bot Service
# try:
#     qa_bot = QABotService()
#     logger.info("QA Bot Service initialized successfully")
# except Exception as e:
#     logger.error(f"Failed to initialize QA Bot Service: {str(e)}")
#     raise

# try:
#     blog_bot = BlogWriterService()
#     logger.info("QA Bot Service initialized successfully")
# except Exception as e:
#     logger.error(f"Failed to initialize QA Bot Service: {str(e)}")
#     raise

# # Existing health check endpoint
# @app.route('/health', methods=['GET'])
# def health_check():
#     return jsonify({"status": "healthy"}), 200

# # Existing summarize endpoint
# @app.route('/api/summarize', methods=['POST'])
# def summarize():
#     try:
#         data = request.get_json()
#         if not data or 'text' not in data:
#             logger.error("No text provided in request")
#             return jsonify({"error": "No text provided"}), 400

#         text = data['text']
#         if not text or not isinstance(text, str):
#             logger.error("Invalid text format")
#             return jsonify({"error": "Invalid text format"}), 400

#         logger.info("Processing summarization request")
#         result = summarize_text(text)
        
#         if result is None:
#             logger.error("Failed to generate summary")
#             return jsonify({"error": "Failed to generate summary"}), 500

#         logger.info("Successfully generated summary")
#         return jsonify({"summary": result})

#     except Exception as e:
#         logger.error(f"Error processing request: {str(e)}")
#         return jsonify({"error": "Internal server error"}), 500

# # New QA Bot endpoint
# @app.route('/api/qabot', methods=['POST'])
# def qa_bot_query():
#     try:
#         data = request.get_json()
#         if not data or 'query' not in data:
#             logger.error("No query provided in request")
#             return jsonify({"error": "No query provided"}), 400

#         chat_history = data.get('chat_history', None)
#         result = qa_bot.generate_response(data['query'], chat_history)
        
#         if not result['success']:
#             logger.error("Failed to generate response")
#             return jsonify({"error": result['response']}), 500

#         logger.info("Successfully generated QA response")
#         return jsonify(result)

#     except Exception as e:
#         logger.error(f"Error processing request: {str(e)}")
#         return jsonify({"error": "Internal server error"}), 500

# # Blog Writer endpoint
# @app.route('/api/blogwriterbot', methods=['POST'])
# def blog_bot_query():
#     try:
#         data = request.get_json()
#         if not data or 'query' not in data:
#             logger.error("No query provided in request")
#             return jsonify({"error": "No query provided"}), 400

#         query = data['query']
#         custom_prompt = data.get('custom_prompt', None)
#         chat_history = data.get('chat_history', None)
        
#         result = blog_bot.generate_response(query, custom_prompt, chat_history)
        
#         if not result['success']:
#             logger.error("Failed to generate response")
#             return jsonify({"error": result['response']}), 500

#         logger.info("Successfully generated QA response")
#         return jsonify(result)

#     except Exception as e:
#         logger.error(f"Error processing request: {str(e)}")
#         return jsonify({"error": "Internal server error"}), 500

# if __name__ == "__main__":
#     logger.info("Starting Flask application...")
#     app.run(port=5000, debug=True)

# ---------
    # from flask import Flask, request, jsonify
    # from flask_cors import CORS
    # from services.summarize_service import summarize_text
    # from services.qabot_service import QABotService
    # from services.blogwriter_service import BlogWriterService
    # import logging
    # from dotenv import load_dotenv
    # import os



    #     # Load environment variables
    #     load_dotenv()

    #     # Set up logging
    #     logging.basicConfig(level=logging.INFO)
    #     logger = logging.getLogger(__name__)

    #     app = Flask(__name__)
    #     CORS(app)

    #     # # Initialize QA Bot Service
    #     # qa_bot = QABotService()# Initialize QA Bot Service
    #     try:
    #         qa_bot = QABotService()
    #         logger.info("QA Bot Service initialized successfully")
    #     except Exception as e:
    #         logger.error(f"Failed to initialize QA Bot Service: {str(e)}")
    #         raise

    #     try:
    #         blog_bot = BlogWriterService()
    #         logger.info("QA Bot Service initialized successfully")
    #     except Exception as e:
    #         logger.error(f"Failed to initialize QA Bot Service: {str(e)}")
    #         raise


    #     # Existing health check endpoint
    #     @app.route('/health', methods=['GET'])
    #     def health_check():
    #         return jsonify({"status": "healthy"}), 200

    #     # Existing summarize endpoint
    #     @app.route('/api/summarize', methods=['POST'])
    #     def summarize():
    #         try:
    #             data = request.get_json()
    #             if not data or 'text' not in data:
    #                 logger.error("No text provided in request")
    #                 return jsonify({"error": "No text provided"}), 400

    #             text = data['text']
    #             if not text or not isinstance(text, str):
    #                 logger.error("Invalid text format")
    #                 return jsonify({"error": "Invalid text format"}), 400

    #             logger.info("Processing summarization request")
    #             result = summarize_text(text)
                
    #             if result is None:
    #                 logger.error("Failed to generate summary")
    #                 return jsonify({"error": "Failed to generate summary"}), 500

    #             logger.info("Successfully generated summary")
    #             return jsonify({"summary": result})

    #         except Exception as e:
    #             logger.error(f"Error processing request: {str(e)}")
    #             return jsonify({"error": "Internal server error"}), 500

    #     # New QA Bot endpoint
    #     @app.route('/api/qabot', methods=['POST'])
    #     def qa_bot_query():
    #         try:
    #             data = request.get_json()
    #             if not data or 'query' not in data:
    #                 logger.error("No query provided in request")
    #                 return jsonify({"error": "No query provided"}), 400

    #             chat_history = data.get('chat_history', None)
    #             result = qa_bot.generate_response(data['query'], chat_history)
                
    #             if not result['success']:
    #                 logger.error("Failed to generate response")
    #                 return jsonify({"error": result['response']}), 500

    #             logger.info("Successfully generated QA response")
    #             return jsonify(result)

    #         except Exception as e:
    #             logger.error(f"Error processing request: {str(e)}")
    #             return jsonify({"error": "Internal server error"}), 500
            
    #         #New Blog Writer
    #     # @app.route('/api/bot', methods=['POST'])
    #     @app.route('/api/blogwriterbot', methods=['POST'])
    #     # def qa_bot_query():
    #     def blog_bot_query():
    #         try:
    #             data = request.get_json()
    #             if not data or 'query' not in data:
    #                 logger.error("No query provided in request")
    #                 return jsonify({"error": "No query provided"}), 400

    #             query = data['query']
    #             custom_prompt = data.get('custom_prompt', None)
    #             chat_history = data.get('chat_history', None)
                
    #             result = blog_bot.generate_response(query, custom_prompt, chat_history)
                
    #             if not result['success']:
    #                 logger.error("Failed to generate response")
    #                 return jsonify({"error": result['response']}), 500

    #             logger.info("Successfully generated QA response")
    #             return jsonify(result)

    #         except Exception as e:
    #             logger.error(f"Error processing request: {str(e)}")
    #             return jsonify({"error": "Internal server error"}), 500

    #     if __name__ == "__main__":
    #         logger.info("Starting Flask application...")
    #         app.run(port=5000, debug=True)
    # ---------------------------------------------------------------------------------
    # ---------------------------------------------------------------
# # backend\app.py
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from services.qabot_service import QABotService
# from services.summarize_service import summarize_text
# import logging

# # Set up logging
# logging.basicConfig(level=logging.INFO)
# logger = logging.getLogger(__name__)

# app = Flask(__name__)
# CORS(app)

# # Initialize QABotService
# qa_service = QABotService()

# # Health check endpoint
# @app.route('/health', methods=['GET'])
# def health_check():
#     return jsonify({"status": "healthy"}), 200

# @app.route('/api/chat', methods=['POST'])
# def chat():
#     try:
#         data = request.get_json()
#         if not data or 'question' not in data:
#             logger.error("No question provided in request")
#             return jsonify({"error": "No question provided"}), 400

#         question = data['question']
#         if not question or not isinstance(question, str):
#             logger.error("Invalid question format")
#             return jsonify({"error": "Invalid question format"}), 400

#         logger.info("Processing chat request")
#         response = qa_service.get_response(question)
        
#         if response is None:
#             logger.error("Failed to generate response")
#             return jsonify({"error": "Failed to generate response"}), 500

#         logger.info("Successfully generated response")
#         return jsonify({
#             "response": response,
#             "history": qa_service.get_chat_history()
#         })

#     except Exception as e:
#         logger.error(f"Error processing request: {str(e)}")
#         return jsonify({"error": "Internal server error"}), 500

# @app.route('/api/summarize', methods=['POST'])
# def summarize():
#     try:
#         data = request.get_json()
#         if not data or 'text' not in data:
#             logger.error("No text provided in request")
#             return jsonify({"error": "No text provided"}), 400

#         text = data['text']
#         if not text or not isinstance(text, str):
#             logger.error("Invalid text format")
#             return jsonify({"error": "Invalid text format"}), 400

#         logger.info("Processing summarization request")
#         result = summarize_text(text)
        
#         if result is None:
#             logger.error("Failed to generate summary")
#             return jsonify({"error": "Failed to generate summary"}), 500

#         logger.info("Successfully generated summary")
#         return jsonify({"summary": result})

#     except Exception as e:
#         logger.error(f"Error processing request: {str(e)}")
#         return jsonify({"error": "Internal server error"}), 500

# if __name__ == "__main__":
#     # Add more detailed logging for startup
#     logger.info("Starting Flask application...")
#     app.run(port=5000, debug=True)



# # backend/app.py
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from services.summarize_service import summarize_text
# import logging

# # Set up logging
# logging.basicConfig(level=logging.INFO)
# logger = logging.getLogger(__name__)

# app = Flask(__name__)
# CORS(app)

# # Add a health check endpoint
# @app.route('/health', methods=['GET'])
# def health_check():
#     return jsonify({"status": "healthy"}), 200

# @app.route('/api/summarize', methods=['POST'])
# def summarize():
#     try:
#         data = request.get_json()
#         if not data or 'text' not in data:
#             logger.error("No text provided in request")
#             return jsonify({"error": "No text provided"}), 400

#         text = data['text']
#         if not text or not isinstance(text, str):
#             logger.error("Invalid text format")
#             return jsonify({"error": "Invalid text format"}), 400

#         logger.info("Processing summarization request")
#         result = summarize_text(text)
        
#         if result is None:
#             logger.error("Failed to generate summary")
#             return jsonify({"error": "Failed to generate summary"}), 500

#         logger.info("Successfully generated summary")
#         return jsonify({"summary": result})

#     except Exception as e:
#         logger.error(f"Error processing request: {str(e)}")
#         return jsonify({"error": "Internal server error"}), 500

# if __name__ == "__main__":
#     # Add more detailed logging for startup
#     logger.info("Starting Flask application...")
#     app.run(port=5000, debug=True)