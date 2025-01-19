# backend/services/ytsummarizer_service.py
import os
from dotenv import load_dotenv
from youtube_transcriptapi import YouTubeTranscriptApi
import google.generativeai as genai
import re
import requests
from bs4 import BeautifulSoup

load_dotenv()

class YTSummarizerService:
    def __init__(self):
        genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
    
    def get_video_id(self, url):
        if "youtube.com" in url:
            match = re.search(r'youtube\.com/watch\?v=([a-zA-Z0-9_-]+)', url)
        elif "youtu.be" in url:
            match = re.search(r'youtu\.be/([a-zA-Z0-9_-]+)', url)
        return match.group(1) if match else None
    
    def get_video_transcript(self, video_id):
        try:
            transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
            return " ".join([t['text'] for t in transcript_list])
        except Exception as e:
            return None

    def summarize_video(self, url, prompt_type="summary"):
        video_id = self.get_video_id(url)
        if not video_id:
            return {"success": False, "message": "Invalid video URL"}

        transcript = self.get_video_transcript(video_id)
        if not transcript:
            return {"success": False, "message": "Unable to retrieve transcript"}

        prompt = self._generate_prompt(prompt_type)
        response = self._generate_summary(prompt, transcript)
        return response

    def _generate_prompt(self, prompt_type):
        if prompt_type == "timestamp":
            return ("Generate timestamps for main topics in a YouTube video transcript. Format as hh:mm:ss with clickable links.")
        return ("Summarize the video transcript into a 250-word summary, focusing on key points and essential insights.")

    def _generate_summary(self, prompt, transcript):
        try:
            model = genai.GenerativeModel("gemini-pro")
            response = model.generate_content(prompt + transcript)
            return {"success": True, "content": response.text}
        except Exception as e:
            return {"success": False, "message": "Error generating summary"}

