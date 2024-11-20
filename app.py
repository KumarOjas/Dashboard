from flask import Flask, request, jsonify

# Initialize the Flask application
app = Flask(__name__)

# Define a route for the root of the web application
@app.route('/')
def home():
    return "Welcome to the Healthcare Dashboard!"

# Define a route to handle form submissions
@app.route('/submit', methods=['POST'])
def submit():
    # Get form data (name, age, and file)
    name = request.form.get('name')
    age = request.form.get('age')
    
    # Check if the name or age is missing
    if not name or not age:
        return jsonify({'error': 'Name and age are required'}), 400
    
    # Get the file if it exists
    file = request.files.get('file')
    
    # Process the data (in this case, simply return it as a JSON response)
    response = {
        'name': name,
        'age': age,
        'file_uploaded': file.filename if file else None
    }
    
    # Return the response in JSON format
    return jsonify(response)

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
