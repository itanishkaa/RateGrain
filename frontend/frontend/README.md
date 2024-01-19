## Prerequisites

Before using this scraping model, ensure that you have the following dependencies installed:
Python 3.x
Beautiful Soup 4
Requests library
You can install the required dependencies using the following command:

pip install  beautifulsoup4  requests

## Configutations

BASE_URL: The base URL of the RateGain website.
SEARCH_QUERY: The search query or URL parameters for refining the data.
OUTPUT_FILE: The name of the output file where the scraped data will be stored.

## Backend

Install Flask  >> pip install Flask
Create Flask App: 
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

Create Templates Folder:
Create a folder named templates in your project directory. This is where Flask will look for HTML templates. Place your HTML files in this folder.

## Frontend
Create HTML Files:
Inside the templates folder, create HTML files for your frontend views. For example, create index.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Flask App</title>
</head>
<body>
    <h1>Hello, Flask!</h1>
</body>
</html>

Frontend (Extended):
1. Static Folder:
Create a folder named static in your project directory. This is where you'll store your static files like CSS, JavaScript, and images.

2. Link CSS and JS:
Link your CSS and JavaScript files in your HTML templates. Update index.html:
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... other meta tags ... -->
    <link rel="stylesheet" href="{{ url_for('static', filename='styles.css') }}">
</head>
<body>
    <h1>Hello, Flask!</h1>
    <script src="{{ url_for('static', filename='script.js') }}"></script>
</body>
</html>

Create CSS and JS Files:
Inside the static folder, create CSS and JS files, e.g., styles.css and script.js. Customize these files according to your needs.

Run the Application:
Run Flask App: python app.py
