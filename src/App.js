import { useState, useEffect } from "react";
import axios from "axios";
import StatisticsCards from "./components/StatisticsCards";
import LineChartComponent from "./components/LineChart";
import PieChartComponent from "./components/PieChart";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
  // State management
  const [country, setCountry] = useState("usa"); // 👈 Default country is 'usa'
  const [countries, setCountries] = useState([]);
  const [covidData, setCovidData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dateRange, setDateRange] = useState("1500");

  // 👇 Fetch Country List
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryData = response.data.map((country) => ({
          name: country.name.common,
          iso: country.cca2.toLowerCase(),
        }));

        // 👇 Sort list and set in state
        setCountries(countryData.sort((a, b) => a.name.localeCompare(b.name)));
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  // 👇 Fetch COVID-19 Data
  const fetchData = () => {
    setLoading(true);
    setError(null);
    axios
      .get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=${dateRange}`)
      .then((response) => {
        console.log(response)
        setCovidData(response.data.timeline);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch data. Please try again.");
        setLoading(false);
      });
  };

  // 👇 Call the fetchData function when country or dateRange changes
  useEffect(() => {
    fetchData();
  }, [country, dateRange]);

  return (
    <div className="container">
      <h1>COVID-19 Dashboard</h1>

      {/* 👇 Dropdowns for Country and Date Range */}
      <div className="top-bar">
        <select
          className="search-bar"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="usa">United States</option>
          {countries.map((country) =>
            country.iso !== "usa" && (
              <option key={country.iso} value={country.iso}>
                {country.name}
              </option>
            )
          )}
        </select>

        <select
          className="date-range-select"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
        >
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
          <option value="180">Last 180 Days</option>
          <option value="1500">All Time</option>
        </select>
      </div>

      {/* 👇 Loader and Error Handling */}
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
        </div>
      ) : covidData ? (
        <>
          <div className="stats-container">
            <StatisticsCards data={covidData} />
          </div>

          <div className="charts-container">
            <LineChartComponent data={covidData} />
            <PieChartComponent data={covidData} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default App;
