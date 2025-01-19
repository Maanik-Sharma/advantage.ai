# backend/test_api.py
import requests

def test_summarization():
    url = "http://localhost:5000/api/summarize"
    test_text = """
    The Python programming language is a high-level, interpreted programming language. 
    It was created by Guido van Rossum and was first released in 1991. Python's design 
    philosophy emphasizes code readability with its notable use of significant whitespace. 
    Its language constructs and object-oriented approach aim to help programmers write clear, 
    logical code for small and large-scale projects.
    """

    response = requests.post(
        url,
        json={"text": test_text}
    )
    
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.json()}")

if __name__ == "__main__":
    test_summarization()