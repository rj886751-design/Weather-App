# 🌤️ Weather App

A simple and responsive weather application that lets users search for a city and view its current weather information.

## 🚀 Live Demo

👉 **[Open Weather App](https://weather-ih9cfj5z4-rj886751-design.vercel.app/)**

## ✨ Features

- 🔎 Search weather by city name
- 🌡️ Displays current temperature
- 🌤️ Shows current weather condition
- 💧 Displays humidity
- 💨 Shows wind information
- 🌍 Works with cities from different countries
- 📱 Simple and responsive user interface
- 🔐 API key is kept private using a serverless backend
- ☁️ Deployed on Vercel

## 🛠️ Technologies Used

- **HTML5** — Structure of the application
- **CSS3** — Styling and responsive layout
- **JavaScript** — Application logic and API requests
- **WeatherAPI** — Weather data
- **Node.js / Serverless Function** — Backend API endpoint
- **Vercel** — Deployment and serverless backend hosting
- **Git & GitHub** — Version control and source code hosting

## 🏗️ How It Works

The application uses a frontend and a serverless backend.

```text
User
  ↓
Weather App (Frontend)
  ↓
/api/weather?city=...
  ↓
Vercel Serverless Backend
  ↓
WeatherAPI
  ↓
Weather Data
  ↓
Frontend
```

The frontend does not directly contain the WeatherAPI key.

Instead, the request is sent to the backend endpoint:

```text
/api/weather
```

The backend reads the `WEATHER_API_KEY` environment variable configured on Vercel and uses it to request weather data from WeatherAPI.

This keeps the API key out of the public frontend code.

## 📁 Project Structure

```text
WEATHER/
├── api/
│   └── weather.js
├── index.html
├── package.json
├── .gitignore
└── .env
```

### Backend

`api/weather.js` works as a Vercel serverless function. It:

1. Receives the city name from the frontend.
2. Reads the WeatherAPI key from an environment variable.
3. Sends a request to WeatherAPI.
4. Returns the weather data to the frontend.
5. Handles missing city names and API/request errors.

### Frontend

`index.html` contains the user interface and JavaScript that sends the city search request to the backend.

## 🔐 Security

The WeatherAPI key is **not stored in the frontend code** and should never be committed to GitHub.

The local `.env` file is ignored using `.gitignore`, while the production API key is stored as a Vercel environment variable.

> Never publish your real API key in `index.html`, JavaScript files, README files, screenshots, or GitHub commits.

## ☁️ Deployment

The project is deployed using **Vercel** and connected to the GitHub repository.

Whenever changes are pushed to the `main` branch, Vercel can automatically create a new deployment.

## 🧪 Example

Enter a city such as:

```text
Bikaner
```

The application sends the request to the backend, which retrieves the current weather information and displays it in the browser.

## 📚 What I Learned

Through this project, I practiced:

- Building a web application with HTML, CSS and JavaScript
- Working with REST APIs
- Using `fetch()` for API requests
- Creating a backend/serverless API endpoint
- Using environment variables
- Keeping API credentials out of frontend code
- Using Git and GitHub
- Deploying a project with Vercel
- Connecting a frontend with a backend

## 👨‍💻 Author

**Rajesh**

Built as a learning project to practice frontend development, APIs, backend concepts, Git/GitHub and deployment.

---

⭐ If you find this project useful, feel free to explore the code and try the live demo.
