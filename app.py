import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from google import genai

app = Flask(__name__, static_folder="frontend", static_url_path="")
CORS(app)

try:
    client = genai.Client()
    print("✅ Gemini client initialized")
except Exception as e:
    print(f"❌ Failed: {e}")
    client = None

chat_sessions = {}

def get_chat_session():
    if "default" not in chat_sessions:
        chat_sessions["default"] = client.chats.create(model="gemini-2.5-flash")
    return chat_sessions["default"]

@app.route("/")
def serve_frontend():
    return send_from_directory("frontend", "index.html")

@app.route("/api/chat", methods=["POST"])
def chat():
    if not client:
        return jsonify({"error": "API key not set"}), 500
    data = request.get_json()
    user_message = data.get("message", "").strip()
    if not user_message:
        return jsonify({"error": "Empty message"}), 400
    try:
        session = get_chat_session()
        response = session.send_message(user_message)
        return jsonify({"reply": response.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/reset", methods=["POST"])
def reset_chat():
    if not client:
        return jsonify({"error": "API key not set"}), 500
    try:
        chat_sessions["default"] = client.chats.create(model="gemini-2.5-flash")
        return jsonify({"status": "reset"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)