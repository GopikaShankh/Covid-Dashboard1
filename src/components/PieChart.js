import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#007bff", "#dc3545", "#28a745"];

const PieChartComponent = ({ data }) => {
  // 👇 Total nikal rahe hain
  const totalCases = Object.values(data.cases).reduce((sum, num) => sum + num, 0);
  const totalDeaths = Object.values(data.deaths).reduce((sum, num) => sum + num, 0);
  const totalRecovered = Object.values(data.recovered).reduce((sum, num) => sum + num, 0);

  // 👇 Pie Chart ke liye data prepare kar rahe hain
  const chartData = [
    { name: "Active Cases", value: totalCases - (totalDeaths + totalRecovered) },
    { name: "Deaths", value: totalDeaths },
    { name: "Recovered", value: totalRecovered },
  ];

  return (
    <div className="pie-chart-container">
      <h2>COVID-19 Overview</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={80}        // <-- Donut hole size yahan control hota hai
            outerRadius={150}
            labelLine={false}
            fill="#8884d8"
            dataKey="value"
            label={(entry) => `${entry.name} (${entry.value.toLocaleString()})`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
