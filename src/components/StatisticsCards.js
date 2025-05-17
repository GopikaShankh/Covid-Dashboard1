const StatisticsCards = ({ data }) => {
  const numberOfCases = Object.values(data.cases);
  const numberOfDeaths = Object.values(data.deaths);
  const numberOfRecovered = Object.values(data.recovered);

  return (
    <div className="stats-cards">
      <div className="card total-cases">
        <h2>Total Cases</h2>
        <p>{numberOfCases.reduce((sum, num) => sum + num).toLocaleString()}</p>
      </div>
      <div className="card total-deaths">
        <h2>Total Deaths</h2>
        <p>{numberOfDeaths.reduce((sum, num) => sum + num).toLocaleString()}</p>
      </div>
      <div className="card total-recovered">
        <h2>Total Recovered</h2>
        <p>{numberOfRecovered.reduce((sum, num) => sum + num).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default StatisticsCards;
