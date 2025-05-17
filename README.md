""# COVID-19 Dashboard

This project is a COVID-19 Dashboard built with **React**, **Recharts**, and **Axios**. It fetches real-time COVID-19 data, displays country-specific information, and visualizes it with interactive charts.

---

## Features:
- **Country Selector** — Choose any country from the list to see COVID-19 data.
- **Historical Data Visualization** — Line charts display cases, recoveries, and deaths over time.
- **Current Status Visualization** — A pie chart represents current case statuses.
- **Date Filter** — Select a custom date range to filter historical data.
- **Live Data Fetching** — Data updates in real-time based on the selected country.
- **Error Handling** — Displays a user-friendly message if there is an issue fetching data.

---

## Technologies Used:
- React
- Axios
- Recharts
- Disease.sh API
- Restcountries API

---

## Getting Started:

### 1. Clone the repository:
```bash
git clone <repository-url>
cd covid-dashboard
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the application:
```bash
npm start
```
Visit `http://localhost:3000` to view the app.

---

## Project Structure:
```
src/
│
├── components/
│   ├── Dashboard.js      # Main Dashboard Component
│   └── StatCard.js       # Reusable card component for statistics
│
├── assets/
│   └── Dashboard.css     # Styling for the Dashboard
│
├── App.js                # Main Application File
├── index.js              # React DOM Renderer
└── README.md             # Project Documentation
```

---

## API Endpoints:
1. **Country List** — Fetches all countries for the dropdown selector:
   - URL: `https://restcountries.com/v3.1/all`
   
2. **Historical COVID Data** — Gets historical data for selected country:
   - URL: `https://disease.sh/v3/covid-19/historical/{countryCode}?lastdays=1500`

3. **Country Summary Data** — Gets current status for selected country:
   - URL: `https://disease.sh/v3/covid-19/countries/{countryCode}`

---

## Issues & Contributing:
If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

---

## License:
This project is licensed under the MIT License.
""
