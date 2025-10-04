import json
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
# Enable CORS for all routes so your frontend can connect
CORS(app)

# Load quiz data from a JSON file
with open('data.json') as f:
    quiz_data = json.load(f)

# --- API Endpoints ---

@app.route('/quizzes', methods=['GET'])
def get_quizzes():
    """Returns a list of all quiz categories."""
    return jsonify(quiz_data['quiz_categories'])

@app.route('/quiz/<string:quiz_id>', methods=['GET'])
def get_quiz_questions(quiz_id):
    """Returns the questions for a specific quiz ID."""
    questions = quiz_data['quiz_questions'].get(quiz_id)
    if questions:
        return jsonify(questions)
    return jsonify({"error": "Quiz not found"}), 404

@app.route('/login', methods=['POST'])
def login():
    """Handles user login requests."""
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # This is a placeholder for a real authentication system.
    # In a real app, you would check a database for credentials.
    print(f"Login attempt: {email}, {password}")

    # For this example, we'll just return a success message
    return jsonify({"message": "Login successful"}), 200

@app.route('/register', methods=['POST'])
def register():
    """Handles user registration requests."""
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # This is a placeholder for a real registration system.
    # You would typically add the user to a database here.
    print(f"Registration attempt: {email}, {password}")

    # Return a success message
    return jsonify({"message": "Registration successful"}), 201

if __name__ == '__main__':
    # Run the server on port 5000 and enable debug mode for easy development
    app.run(port=5000, debug=True)