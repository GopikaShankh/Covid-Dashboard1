import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartComponent = ({ data }) => {
  // 👇 Data ko month ke hisaab se group kar rahe hain (YYYY-MM format)
  const groupedData = {};

  Object.keys(data.cases).forEach((date) => {
    // Date se year-month nikal rahe hain
    const yearMonth = date.slice(0, 7); // "2021-04" format me

    if (!groupedData[yearMonth]) {
      groupedData[yearMonth] = { month: yearMonth, Cases: 0, Deaths: 0, Recovered: 0 };
    }

    groupedData[yearMonth].Cases += data.cases[date];
    groupedData[yearMonth].Deaths += data.deaths[date];
    groupedData[yearMonth].Recovered += data.recovered[date];
  });

  // Object ke values ko array me convert kar rahe hain
  const chartData = Object.values(groupedData);

  return (
    <div className="line-chart-container">
      <h2>COVID-19 Trends Over Months</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#4b5563" }} />
          <YAxis tick={{ fontSize: 12, fill: "#4b5563" }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="Cases"
            stroke="#007bff"
            dot={false}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Deaths"
            stroke="#dc3545"
            dot={false}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Recovered"
            stroke="#28a745"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
