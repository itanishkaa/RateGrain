# Blog Scraper

This is a full-stack web application that scrapes blog data from a given website and allows users to download the extracted data as a CSV file. The backend is built using Flask, while the frontend is developed with React.

## Features

- Scrapes blog data including title, date, image URL, likes, and description.
- Stores the extracted data in a CSV file.
- Provides an API endpoint to trigger scraping and download the CSV file.
- React frontend with an interface to request and download data.
  
## Backend (Flask)
### Installation
Ensure you have Python installed, then install the required dependencies

`pip install flask flask-cors beautifulsoup4 requests`

### Running the Backend
`cd backend`

`python scrapper.py`

## Frontend (React)
### Installation
Ensure you have Node.js and npm installed, then install dependencies

`cd frontend`

`npm install`

### Running the Frontend
`npm start`

## API EndPoint
Trigger Scrapping and Download CSV

- **URL**: POST /scrape
- **Request Body**: { "websiteLink": "https://rategain.com/blog/" }
- **Response**: CSV file with extracted blog data.
